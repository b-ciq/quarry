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
import time
from collections.abc import Callable
from pathlib import Path

from quarry.describer import (ITEM_CODES, LOCAL_CODES, Describer, apply_description, is_describe_target,
                              load_vocab_doc, media_fingerprint, target_order)
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


def _records(store: Store) -> list[dict]:
    """Every readable record; unreadable ones are skipped (the Inbox reports them)."""
    out = []
    for id_ in store.scan().by_shortcode.values():
        try:
            out.append(store.read_cached(id_))
        except (OSError, ValueError):
            continue
    return out


def waiting_count(store: Store) -> int:
    return sum(1 for rec in _records(store) if is_describe_target(rec))


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

    # -- public --------------------------------------------------------------

    def tick(self) -> None:
        try:
            self._tick()
        except Exception as e:  # never let one bad tick kill the thread
            log.exception("describer tick failed")
            self._reason = f"{type(e).__name__}: {e}"
        finally:
            self._current = None

    def status(self) -> dict:
        paused = self._state == "paused"
        return {"state": self._state, "reason": self._reason, "waiting": self._waiting,
                "current": self._current, "holder": self._holder, "today": self._calls_today,
                "cap": self.cap, "retry_at": self.pause_until if paused else None}

    def resume(self) -> None:
        self.stopped = False
        self.paid_streak = 0
        if self._state == "stopped":
            self._state = "idle"
            self._reason = None

    def close(self) -> None:
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
        now = self.clock()
        targets = self._scan(now)
        if not self._hold_lock(now):
            self._state = "elsewhere"
            return
        self._calls_today = self._read_calls()
        if self.stopped:
            self._state = "stopped"
            return
        if self.pause_until is not None and now < self.pause_until:
            self._state = "paused"
            return
        if self._calls_today >= self.cap:
            self._state, self._reason = "capped", None
            return
        rec = self._pick(targets, now)
        if rec is None:
            settling = any(now - self.first_seen[(r["id"], media_fingerprint(r))] < self.settle_s
                           for r in targets)
            self._state = "running" if settling else "idle"
            return
        self._describe(rec, now)

    def _scan(self, now: float) -> list[dict]:
        recs = _records(self.store)
        current = {r["id"]: media_fingerprint(r) for r in recs}
        targets = target_order([r for r in recs if is_describe_target(r)])
        self._waiting = len(targets)
        for r in targets:
            self.first_seen.setdefault((r["id"], current[r["id"]]), now)
        # forget older fingerprints of known items, and expired backoffs, so the maps stay small
        self.first_seen = {k: v for k, v in self.first_seen.items() if current.get(k[0], k[1]) == k[1]}
        self.backoff = {k: v for k, v in self.backoff.items() if v > now}
        return targets

    def _pick(self, targets: list[dict], now: float) -> dict | None:
        for rec in targets:
            key = (rec["id"], media_fingerprint(rec))
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
            return rec
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

    def _describe(self, rec: dict, now: float) -> None:
        rid, fp = rec["id"], media_fingerprint(rec)
        key = (rid, fp)
        vocab = load_vocabulary(self.repo_root)
        vocab_doc = load_vocab_doc(self.repo_root)
        self._count_call()  # before the call, so a crash mid-call still counts
        self._state, self._current = "running", rid
        try:
            result = self.describer.describe(copy.deepcopy(rec), self.store, vocab, vocab_doc)
        except RaterError as e:
            code = e.code or "api"
            if code in ITEM_CODES:
                self._paid_failure(key, code, str(e), now)
            elif code in LOCAL_CODES:
                self._local_failure(key, str(e), now)
            else:
                self._api_failure(code, str(e), now)
            return
        except Exception as e:
            log.exception("describer: unexpected failure on %s", rid)
            self._local_failure(key, f"{type(e).__name__}: {e}", now)
            return
        self.paid_streak = 0
        self.pause_s, self.pause_until = 0.0, None
        self._reason = None
        self._save(key, now, lambda fresh: apply_description(
            fresh, result, vocab=load_vocabulary(self.repo_root), model=self.describer.model, now=_utc(now)))

    # -- outcomes ------------------------------------------------------------

    def _paid_failure(self, key: tuple[str, str], code: str, message: str, now: float) -> None:
        self.paid_streak += 1
        self._reason = message
        log.warning("describer: %s failed (%s): %s", key[0], code, message)

        def with_error(fresh: dict) -> dict:
            prev = fresh.get("describe_error") if isinstance(fresh.get("describe_error"), dict) else {}
            tries = prev.get("tries") if isinstance(prev.get("tries"), int) else 0
            tries += 1
            return {**fresh, "describe_error": {"code": code, "message": message[:500], "tries": tries,
                                                "at": _utc(now), "gave_up": tries >= self.max_tries}}

        self._save(key, now, with_error)
        if self.paid_streak >= self.stop_streak:
            self.stopped = True
            self._state = "stopped"
            log.warning("describer: stopped after %d failed answers in a row", self.paid_streak)

    def _local_failure(self, key: tuple[str, str], message: str, now: float) -> None:
        self.backoff[key] = now + self.backoff_s
        self._reason = f"{key[0]}: {message}"
        log.warning("describer: %s backed off: %s", key[0], message)

    def _api_failure(self, code: str, message: str, now: float) -> None:
        self.pause_s = min(self.pause_s * 2, self.pause_max_s) if self.pause_s else self.pause_min_s
        self.pause_until = now + self.pause_s
        self._state = "paused"
        self._reason = code.replace("_", " ")
        log.warning("describer: paused %ds (%s): %s", self.pause_s, code, message)

    def _save(self, key: tuple[str, str], now: float, change: Callable[[dict], dict]) -> None:
        """Re-read under the store lock; write only if it is still a target with the media we sent."""
        rid, fp = key
        try:
            with store_lock():
                fresh = self.store.read(rid)
                if not is_describe_target(fresh) or media_fingerprint(fresh) != fp:
                    log.info("describer: discarded the answer for %s (changed during the call)", rid)
                    self.backoff[key] = now + self.backoff_s  # a changed item has a new key
                    return
                self.store.write(change(fresh))
        except Exception as e:
            self.backoff[key] = now + self.backoff_s
            self._reason = f"{rid}: could not save: {e}"
            log.warning("describer: %s", self._reason)

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
