"""The inspiration describer loop: one per Mac, driven tick by tick.

Each tick scans the store and makes at most one Claude call. Spend is bounded by, in order: the
per-Mac lock, settling (60 s per media fingerprint), the per-item retry wait and paid-try limit
(saved on the record), the in-memory backoff for local and unwritable failures, the API-wide
pause, the paid-failure streak stop, and the daily cap (counted on disk before each call).
"""

import calendar
import copy
import datetime
import errno
import fcntl
import json
import logging
import os
import threading
import time
from collections.abc import Callable
from pathlib import Path

from quarry.describer import (ITEM_CODES, LOCAL_CODES, Describer, apply_description, is_describe_target,
                              capture_time, load_vocab_doc, media_fingerprint, target_order)
from quarry.inspiration_store import Store, atomic_write_bytes, cache_dir, config_dir, store_lock
from quarry.rater import RaterError
from quarry.schema import validate_inspiration_record
from quarry.vocabulary import load_vocabulary

log = logging.getLogger(__name__)

_TIME_FMT = "%Y-%m-%dT%H:%M:%SZ"


def _local_today() -> str:
    return datetime.date.today().isoformat()


def _utc(epoch: float) -> str:
    return time.strftime(_TIME_FMT, time.gmtime(epoch))


def _epoch(stamp) -> float | None:
    try:
        return float(calendar.timegm(time.strptime(stamp, _TIME_FMT)))
    except (TypeError, ValueError):
        return None


def _scan_store(store: Store) -> tuple[dict[str, str], list[tuple[dict, str]]]:
    """({id: fingerprint} for every usable record, [(record, fingerprint)] targets in describe order).

    Enumerates folder ids (not shortcodes, which can repeat). Unreadable or malformed records are
    skipped one by one so a single bad save.json can't stall the describer.
    """
    current: dict[str, str] = {}
    targets: list[tuple[dict, str]] = []
    for id_ in sorted(store.scan().ids):
        try:
            rec = store.read_cached(id_)
            if not isinstance(rec, dict) or rec.get("id") != id_:
                continue
            fp = media_fingerprint(rec)
            is_target = is_describe_target(rec)
            capture_time(rec)
        except Exception:
            continue
        current[id_] = fp
        if is_target:
            targets.append((rec, fp))
    return current, [(r, current[r["id"]]) for r in target_order([r for r, _ in targets])]


def waiting_count(store: Store) -> int:
    return len(_scan_store(store)[1])


class DescriberLoop:
    settle_s = 60
    backoff_s = 3600
    max_tries = 3
    stop_streak = 5
    lock_retry_s = 60
    pause_min_s = 60
    pause_max_s = 1800

    def __init__(self, store: Store, describer: Describer, repo_root: Path, *,
                 clock: Callable[[], float] = time.time, today: Callable[[], str] = _local_today,
                 cap: int = 150, port: int | None = None):
        self.store = store
        self.describer = describer
        self.repo_root = Path(repo_root)
        self.clock = clock
        self.today = today
        self.cap = cap
        self.port = port
        self.first_seen: dict[tuple[str, str], float] = {}
        self.backoff: dict[tuple[str, str], float] = {}
        self.pause_until: float | None = None
        self.pause_s = 0.0
        self.paid_streak = 0
        self.stopped = False
        self._fd: int | None = None
        self._lock_tried_at: float | None = None
        self._state = "idle"
        self._reason: str | None = None
        self._waiting = 0
        self._current: str | None = None
        self._holder: dict | None = None
        self._calls_today = 0
        self._mu = threading.Lock()  # guards the state above; never held across a Claude call

    # -- public --------------------------------------------------------------

    def tick(self) -> None:
        try:
            self._tick()
        except Exception as e:  # never let one bad tick kill the thread
            log.exception("describer tick failed")
            with self._mu:
                self._state = "idle"
                self._reason = f"{type(e).__name__}: {e}"
        finally:
            with self._mu:
                self._current = None

    def status(self) -> dict:
        with self._mu:
            paused = self._state == "paused"
            return {"state": self._state, "reason": self._reason, "waiting": self._waiting,
                    "current": self._current, "holder": self._holder, "today": self._calls_today,
                    "cap": self.cap, "retry_at": self.pause_until if paused else None}

    def resume(self) -> None:
        with self._mu:
            self.stopped = False
            self.paid_streak = 0
            if self._state == "stopped":
                self._state = "idle"
                self._reason = None

    def close(self) -> None:
        with self._mu:
            fd, self._fd = self._fd, None
        if fd is None:
            return
        try:
            os.ftruncate(fd, 0)
            fcntl.flock(fd, fcntl.LOCK_UN)
        finally:
            os.close(fd)

    # -- one tick ------------------------------------------------------------

    def _tick(self) -> None:
        """Store I/O and the Claude call run outside `_mu`; decisions and state changes run inside it."""
        now = self.clock()
        current, targets = _scan_store(self.store)
        with self._mu:
            job = self._plan(current, targets, now)
        if job is None:
            return
        rec, fp, vocab, vocab_doc = job
        try:
            result = self.describer.describe(copy.deepcopy(rec), self.store, vocab, vocab_doc)
        except RaterError as e:
            code = e.code or "api"
            if code in ITEM_CODES:
                self._paid_failure((rec["id"], fp), code, str(e), now)
            elif code in LOCAL_CODES:
                self._local_failure((rec["id"], fp), str(e), now)
            else:
                self._api_failure(code, str(e), now)
            return
        except Exception as e:
            # the call was counted and may have been paid for, so a bug here must not bill every item forever
            log.exception("describer: unexpected failure on %s", rec["id"])
            self._local_failure((rec["id"], fp), f"{type(e).__name__}: {e}", now)
            with self._mu:
                self.paid_streak += 1
                self._check_stop()
            return
        self._answered((rec["id"], fp), result, now)

    def _plan(self, current: dict[str, str], targets: list[tuple[dict, str]], now: float):
        """Under `_mu`: update the maps and state; return (rec, fp, vocab, vocab_doc) to describe, or None."""
        self._waiting = len(targets)
        for rec, fp in targets:
            self.first_seen.setdefault((rec["id"], fp), now)
        # forget removed items, older fingerprints, and expired backoffs, so the maps stay small
        self.first_seen = {k: v for k, v in self.first_seen.items() if current.get(k[0]) == k[1]}
        self.backoff = {k: v for k, v in self.backoff.items() if v > now}
        if not self._hold_lock(now):
            self._state = "elsewhere"
            return None
        self._calls_today = self._read_calls()
        if self.stopped:
            self._state = "stopped"
            return None
        if self.pause_until is not None and now < self.pause_until:
            self._state = "paused"
            return None
        if self._calls_today >= self.cap:
            self._state, self._reason = "capped", None
            return None
        pick = self._pick(targets, now)
        if pick is None:
            settling = any(now - self.first_seen[(r["id"], fp)] < self.settle_s for r, fp in targets)
            self._state = "running" if settling else "idle"
            return None
        rec, fp = pick
        vocab = load_vocabulary(self.repo_root)
        vocab_doc = load_vocab_doc(self.repo_root)
        self._count_call()  # before the call, so a crash mid-call still counts
        self._state, self._current = "running", rec["id"]
        return rec, fp, vocab, vocab_doc

    def _pick(self, targets: list[tuple[dict, str]], now: float) -> tuple[dict, str] | None:
        for rec, fp in targets:
            key = (rec["id"], fp)
            if now - self.first_seen[key] < self.settle_s:
                continue
            if self.backoff.get(key, now) > now:
                continue
            if self._waiting_to_retry(rec, now):
                continue
            errors = validate_inspiration_record(rec)
            if errors:  # nothing could be saved for it, so don't pay for an answer
                self.backoff[key] = now + self.backoff_s
                self._reason = f"{rec['id']}: invalid record: " + "; ".join(errors)
                log.warning("describer: skipping %s", self._reason)
                continue
            return rec, fp
        return None

    def _waiting_to_retry(self, rec: dict, now: float) -> bool:
        """A paid failure saved on the record waits backoff_s, unless Try again was pressed since."""
        err = rec.get("describe_error")
        if not isinstance(err, dict):
            return False
        at = err.get("at") if isinstance(err.get("at"), str) else ""
        requested = rec.get("describe_requested_at")
        if isinstance(requested, str) and requested > at:
            return False
        failed_at = _epoch(at)
        return failed_at is not None and now < failed_at + self.backoff_s

    # -- outcomes ------------------------------------------------------------

    def _answered(self, key: tuple[str, str], result, now: float) -> None:
        outcome = self._save(key, lambda fresh: apply_description(
            fresh, result, vocab=load_vocabulary(self.repo_root), model=self.describer.model, now=_utc(now)))
        with self._mu:
            self.pause_s, self.pause_until = 0.0, None  # the API answered
            self._state = "running"
            if outcome == "saved":
                self.paid_streak, self._reason = 0, None
                return
            self.backoff[key] = now + self.backoff_s  # a changed item has a new key, so it isn't blocked
            if outcome != "discarded":  # a paid answer we could not save: a merge or write bug must stop us
                self.paid_streak += 1
                self._reason = outcome
                self._check_stop()

    def _paid_failure(self, key: tuple[str, str], code: str, message: str, now: float) -> None:
        log.warning("describer: %s failed (%s): %s", key[0], code, message)

        def with_error(fresh: dict) -> dict:
            prev = fresh.get("describe_error") if isinstance(fresh.get("describe_error"), dict) else {}
            tries = prev.get("tries") if isinstance(prev.get("tries"), int) else 0
            tries += 1
            return {**fresh, "describe_error": {"code": code, "message": message[:500], "tries": tries,
                                                "at": _utc(now), "gave_up": tries >= self.max_tries}}

        outcome = self._save(key, with_error)
        with self._mu:
            self.pause_s, self.pause_until = 0.0, None  # the API answered
            self._state = "running"
            self.paid_streak += 1
            self._reason = message
            if outcome != "saved":
                self.backoff[key] = now + self.backoff_s
                if outcome != "discarded":
                    self._reason = outcome
            self._check_stop()

    def _check_stop(self) -> None:
        if self.paid_streak >= self.stop_streak:
            self.stopped = True
            self._state = "stopped"
            log.warning("describer: stopped after %d failed answers in a row", self.paid_streak)

    def _local_failure(self, key: tuple[str, str], message: str, now: float) -> None:
        log.warning("describer: %s backed off: %s", key[0], message)
        with self._mu:
            self.backoff[key] = now + self.backoff_s
            self._reason = f"{key[0]}: {message}"

    def _api_failure(self, code: str, message: str, now: float) -> None:
        with self._mu:
            self.pause_s = min(self.pause_s * 2, self.pause_max_s) if self.pause_s else self.pause_min_s
            self.pause_until = now + self.pause_s
            self._state = "paused"
            self._reason = code.replace("_", " ")
        log.warning("describer: paused %ds (%s): %s", self.pause_s, code, message)

    def _save(self, key: tuple[str, str], change: Callable[[dict], dict]) -> str:
        """Re-read under the store lock; write only if it is still a target with the media we sent.

        Returns "saved", "discarded" (changed during the call), or the error text when it could not save.
        """
        rid, fp = key
        try:
            with store_lock():
                fresh = self.store.read(rid)
                if not is_describe_target(fresh) or media_fingerprint(fresh) != fp:
                    log.info("describer: discarded the answer for %s (changed during the call)", rid)
                    return "discarded"
                self.store.write(change(fresh))
            return "saved"
        except Exception as e:
            log.warning("describer: %s could not save: %s", rid, e)
            return f"{rid}: could not save: {e}"

    # -- lock and counter ----------------------------------------------------

    def _hold_lock(self, now: float) -> bool:
        if self._fd is not None:
            return True
        if self._lock_tried_at is not None and now - self._lock_tried_at < self.lock_retry_s:
            return False
        self._lock_tried_at = now
        path = config_dir() / "describer.lock"
        path.parent.mkdir(parents=True, exist_ok=True)
        fd = os.open(path, os.O_RDWR | os.O_CREAT, 0o644)
        try:
            fcntl.flock(fd, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except OSError as e:
            os.close(fd)
            if e.errno not in (errno.EWOULDBLOCK, errno.EAGAIN, errno.EACCES):
                raise
            self._holder = self._read_holder(path)
            return False
        try:
            os.ftruncate(fd, 0)
            os.write(fd, json.dumps({"pid": os.getpid(), "port": self.port}).encode())
        except BaseException:
            os.close(fd)
            raise
        self._fd = fd
        self._holder = None
        return True

    @staticmethod
    def _read_holder(path: Path) -> dict | None:
        try:
            data = json.loads(path.read_text())
        except (OSError, ValueError):
            return None
        if not isinstance(data, dict):
            return None
        return {"pid": data.get("pid"), "port": data.get("port")}

    def _counter_path(self) -> Path:
        return cache_dir() / f"describer-{self.today()}.json"

    def _read_calls(self) -> int:
        """Calls made today. A corrupt counter raises, so the tick fails safe (no call)."""
        path = self._counter_path()
        if not path.exists():
            return 0
        calls = json.loads(path.read_text()).get("calls")
        if not isinstance(calls, int) or isinstance(calls, bool):
            raise ValueError(f"bad describer counter in {path}")
        return calls

    def _count_call(self) -> None:
        path = self._counter_path()
        calls = self._read_calls() + 1
        path.parent.mkdir(parents=True, exist_ok=True)
        atomic_write_bytes(path, json.dumps({"calls": calls}).encode())
        self._calls_today = calls
