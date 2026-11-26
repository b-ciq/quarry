import json
import os
import shutil
import threading
from pathlib import Path
from types import SimpleNamespace

import pytest

from quarry.describer import FakeDescriber, media_fingerprint
from quarry.describer_loop import DescriberLoop, waiting_count
from quarry.inspiration_store import Store, cache_dir, config_dir
from quarry.rater import RaterError
from tests.inspiration_helpers import item, make_record

ROOT = Path(__file__).resolve().parent.parent


@pytest.fixture
def env(tmp_path):
    t = [0.0]
    day = ["2026-11-25"]
    loops = []
    env = SimpleNamespace(store=Store(tmp_path / "store"), t=t, day=day, loops=loops)

    def make(describer, **kw):
        loop = DescriberLoop(env.store, describer, ROOT, clock=lambda: t[0], today=lambda: day[0], **kw)
        loops.append(loop)
        return loop

    env.make = make
    yield env
    for loop in loops:
        loop.close()


def seed(store, code, captured="2026-11-24T00:00:00Z", n=1):
    rec = make_record(code)
    rec["capture"]["items"] = [{**item(i + 1), "sha256": f"{code}{i}", "captured_at": captured} for i in range(n)]
    store.write(rec)
    return rec["id"]


def add_slide(store, rid):
    rec = store.read(rid)
    n = len(rec["capture"]["items"]) + 1
    rec["capture"]["items"].append({**item(n), "sha256": f"new{n}"})
    store.write(rec)


def test_settles_before_describing(env):
    rid = seed(env.store, "A")
    fake = FakeDescriber()
    loop = env.make(fake)
    loop.tick()
    assert fake.calls == []
    assert loop.status()["state"] == "running"
    assert loop.status()["waiting"] == 1
    env.t[0] = 61
    loop.tick()
    assert fake.calls == [rid]
    rec = env.store.read(rid)
    assert rec["bot"]["media"] == media_fingerprint(rec)
    assert rec["bot"]["at"] == "1970-01-01T00:01:01Z"
    assert rec["description"] == "Fake description."
    loop.tick()
    assert fake.calls == [rid]
    assert loop.status()["state"] == "idle"
    assert loop.status()["waiting"] == 0


def test_newest_capture_first_one_per_tick(env):
    a = seed(env.store, "A", captured="2026-11-20T00:00:00Z")
    b = seed(env.store, "B", captured="2026-11-24T00:00:00Z")
    c = seed(env.store, "C", captured="2026-11-22T00:00:00Z")
    fake = FakeDescriber()
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    for expected in ([b], [b, c], [b, c, a], [b, c, a]):
        loop.tick()
        assert fake.calls == expected


def test_second_loop_reports_elsewhere(env):
    seed(env.store, "A")
    fa, fb = FakeDescriber(), FakeDescriber()
    a = env.make(fa, port=8790)
    a.tick()
    lock = config_dir() / "describer.lock"
    assert lock.name != "inspiration.lock"
    assert json.loads(lock.read_text()) == {"pid": os.getpid(), "port": 8790}
    b = env.make(fb, port=8791)
    b.tick()
    s = b.status()
    assert s["state"] == "elsewhere"
    assert s["holder"] == {"pid": os.getpid(), "port": 8790}
    assert s["waiting"] == 1
    a.close()
    env.t[0] = 30
    b.tick()
    assert b.status()["state"] == "elsewhere"  # retries the lock at most every 60 s
    env.t[0] = 61
    b.tick()
    assert b.status()["state"] != "elsewhere"
    assert b.status()["holder"] is None
    assert json.loads(lock.read_text()) == {"pid": os.getpid(), "port": 8791}
    assert fa.calls == []
    assert len(fb.calls) == 1


def test_answer_discarded_when_item_rejected_mid_call(env):
    rid = seed(env.store, "A")

    class Rejecting(FakeDescriber):
        def describe(self, rec, store, vocab, vocab_doc):
            fresh = store.read(rec["id"])
            fresh["status"] = "retired"
            store.write(fresh)
            return super().describe(rec, store, vocab, vocab_doc)

    fake = Rejecting()
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    loop.tick()
    rec = env.store.read(rid)
    assert fake.calls == [rid]
    assert "bot" not in rec
    assert rec["status"] == "retired"
    env.t[0] = 10_000
    loop.tick()
    assert fake.calls == [rid]


def test_media_change_mid_call_discards(env):
    rid = seed(env.store, "A")

    class Changing(FakeDescriber):
        def describe(self, rec, store, vocab, vocab_doc):
            if not self.calls:
                add_slide(store, rec["id"])
            return super().describe(rec, store, vocab, vocab_doc)

    fake = Changing()
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    loop.tick()
    assert fake.calls == [rid]
    assert "bot" not in env.store.read(rid)
    loop.tick()
    assert fake.calls == [rid]  # the new media has to settle first
    env.t[0] = 61 + 61
    loop.tick()
    assert fake.calls == [rid, rid]
    rec = env.store.read(rid)
    assert rec["bot"]["media"] == media_fingerprint(rec)
    assert len(rec["capture"]["items"]) == 2


def test_paid_failure_counts_tries_then_gives_up(env):
    rid = seed(env.store, "X")
    assert rid == "ig-x"
    fake = FakeDescriber(fail={rid: "bad_output"})
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    for tries in (1, 2, 3):
        loop.tick()
        assert len(fake.calls) == tries
        err = env.store.read(rid)["describe_error"]
        assert err["tries"] == tries
        assert err["code"] == "bad_output"
        assert err["message"] == "fake failure for ig-x"
        assert err["gave_up"] is (tries == 3)
        loop.tick()  # no retry before an hour has passed
        assert len(fake.calls) == tries
        env.t[0] += 3601
    loop.tick()
    assert len(fake.calls) == 3
    assert "bot" not in env.store.read(rid)
    assert waiting_count(env.store) == 0


def test_api_failure_pauses_without_touching_record(env):
    rid = seed(env.store, "A")
    before = env.store.read(rid)
    fake = FakeDescriber(fail={rid: "rate_limit"})
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    waits = []
    for _ in range(7):
        loop.tick()
        s = loop.status()
        assert s["state"] == "paused"
        assert s["reason"] == "rate limit"
        waits.append(s["retry_at"] - env.t[0])
        n = len(fake.calls)
        env.t[0] = s["retry_at"] - 1
        loop.tick()
        assert len(fake.calls) == n
        env.t[0] = s["retry_at"]
    assert waits == [60, 120, 240, 480, 960, 1800, 1800]
    assert env.store.read(rid) == before


def test_api_pause_resets_after_success(env):
    rid = seed(env.store, "A")
    fake = FakeDescriber(fail={rid: "overloaded"})
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    loop.tick()
    loop.tick()
    assert loop.status()["retry_at"] - env.t[0] == 60
    env.t[0] += 60
    loop.tick()
    assert loop.status()["retry_at"] - env.t[0] == 120
    del fake.fail[rid]
    env.t[0] += 120
    loop.tick()
    assert "bot" in env.store.read(rid)
    assert loop.status()["retry_at"] is None
    assert loop.status()["state"] == "running"
    seed(env.store, "B")
    fake.fail["ig-b"] = "overloaded"
    loop.tick()
    env.t[0] += 61
    loop.tick()
    assert loop.status()["retry_at"] - env.t[0] == 60


def test_local_failure_backs_off_without_try(env):
    rid = seed(env.store, "A")
    before = env.store.read(rid)
    fake = FakeDescriber(fail={rid: "image"})
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    loop.tick()
    assert fake.calls == [rid]
    assert env.store.read(rid) == before
    assert loop.status()["state"] != "paused"
    env.t[0] = 61 + 3599
    loop.tick()
    assert fake.calls == [rid]
    env.t[0] = 61 + 3600
    loop.tick()
    assert fake.calls == [rid, rid]


def test_unexpected_exception_is_a_local_failure(env):
    rid = seed(env.store, "A")
    before = env.store.read(rid)

    class Broken(FakeDescriber):
        def describe(self, rec, store, vocab, vocab_doc):
            self.calls.append(rec["id"])
            raise IndexError("boom")

    fake = Broken()
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    loop.tick()
    loop.tick()
    assert fake.calls == [rid]
    assert env.store.read(rid) == before
    assert "boom" in loop.status()["reason"]
    env.t[0] = 61 + 3600
    loop.tick()
    assert fake.calls == [rid, rid]


def test_unexpected_exceptions_count_toward_the_streak(env):
    # the call was counted (maybe paid), so a systematic bug after it must stop the describer too
    ids = [seed(env.store, code) for code in ("A", "B", "C", "D", "E", "F")]

    class Broken(FakeDescriber):
        def describe(self, rec, store, vocab, vocab_doc):
            self.calls.append(rec["id"])
            raise OSError("frame cleanup failed")

    fake = Broken()
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    for _ in range(4):
        loop.tick()
    assert len(fake.calls) == 4 and loop.status()["state"] != "stopped"
    loop.tick()
    assert len(fake.calls) == 5
    assert loop.status()["state"] == "stopped"
    assert "frame cleanup failed" in loop.status()["reason"]
    env.t[0] += 3601
    loop.tick()
    assert len(fake.calls) == 5
    assert all(env.store.read(rid).get("describe_error") is None for rid in ids)


def test_paid_streak_stops_until_resume(env):
    ids = [seed(env.store, code) for code in ("A", "B", "C", "D", "E", "F")]
    fake = FakeDescriber(fail={rid: "bad_output" for rid in ids})
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    for _ in range(5):
        loop.tick()
    assert len(fake.calls) == 5
    assert loop.status()["state"] == "stopped"
    assert loop.status()["reason"] == "fake failure for " + fake.calls[-1]
    for _ in range(3):
        env.t[0] += 3601
        loop.tick()
    assert len(fake.calls) == 5
    assert loop.status()["state"] == "stopped"
    loop.resume()
    loop.tick()
    assert len(fake.calls) == 6


def test_success_resets_paid_streak(env):
    ids = [seed(env.store, code, captured=f"2026-11-2{i}T00:00:00Z")
           for i, code in enumerate(("A", "B", "C", "D", "E", "F"))]
    fail = {rid: "bad_output" for rid in ids}
    del fail[ids[3]]  # the third-newest one succeeds
    fake = FakeDescriber(fail=fail)
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    for _ in range(6):
        loop.tick()
    assert len(fake.calls) == 6
    assert loop.status()["state"] != "stopped"


@pytest.mark.parametrize("fail", [None, "bad_output"])
def test_unwritable_record_backs_off_without_calling_again(env, monkeypatch, fail):
    rid = seed(env.store, "A")
    fake = FakeDescriber(fail={rid: fail} if fail else None)

    def broken(self, record):
        raise OSError("Drive is offline")

    monkeypatch.setattr(Store, "write", broken)
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    loop.tick()
    assert fake.calls == [rid]
    assert "Drive is offline" in loop.status()["reason"]
    env.t[0] = 61 + 3599
    loop.tick()
    assert fake.calls == [rid]
    env.t[0] = 61 + 3600
    loop.tick()
    assert fake.calls == [rid, rid]


def test_invalid_record_is_not_sent(env):
    rid = seed(env.store, "A")
    path = env.store.dir / rid / "save.json"
    rec = json.loads(path.read_text())
    rec["description"] = 5  # Store.write would reject any answer for this record
    path.write_text(json.dumps(rec))
    fake = FakeDescriber()
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    loop.tick()
    assert fake.calls == []
    assert "invalid" in loop.status()["reason"]


def test_daily_cap_survives_restart(env):
    for code in ("A", "B", "C"):
        seed(env.store, code)
    fake = FakeDescriber()
    a = env.make(fake, cap=2)
    a.tick()
    env.t[0] = 61
    for _ in range(3):
        a.tick()
    assert len(fake.calls) == 2
    assert a.status()["state"] == "capped"
    assert a.status()["today"] == 2
    assert a.status()["cap"] == 2
    assert json.loads((cache_dir() / "describer-2026-11-25.json").read_text()) == {"calls": 2}
    a.close()
    b = env.make(fake, cap=2)
    b.tick()
    env.t[0] += 61
    b.tick()
    assert b.status()["state"] == "capped"
    assert len(fake.calls) == 2
    env.day[0] = "2026-11-26"
    b.tick()
    assert len(fake.calls) == 3
    assert b.status()["today"] == 1


def test_counter_is_incremented_before_the_call(env):
    seed(env.store, "A")
    seen = []

    class Peeking(FakeDescriber):
        def describe(self, rec, store, vocab, vocab_doc):
            seen.append(json.loads((cache_dir() / "describer-2026-11-25.json").read_text()))
            return super().describe(rec, store, vocab, vocab_doc)

    loop = env.make(Peeking())
    loop.tick()
    env.t[0] = 61
    loop.tick()
    assert seen == [{"calls": 1}]


def test_requested_redo_describes_again(env):
    rid = seed(env.store, "A")
    fake = FakeDescriber()
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    loop.tick()
    rec = env.store.read(rid)
    rec["describe_requested_at"] = "2026-11-25T12:00:00Z"
    env.store.write(rec)
    assert waiting_count(env.store) == 1
    loop.tick()
    assert fake.calls == [rid, rid]
    rec = env.store.read(rid)
    assert "describe_requested_at" not in rec
    assert "bot" in rec
    loop.tick()
    assert fake.calls == [rid, rid]


def test_auth_failures_pause_not_stop(env):
    ids = [seed(env.store, code) for code in ("A", "B", "C", "D", "E")]

    class AuthFailing(FakeDescriber):
        def describe(self, rec, store, vocab, vocab_doc):
            self.calls.append(rec["id"])
            raise RaterError("bad key", code="auth")

    fake = AuthFailing()
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    for _ in range(5):
        loop.tick()
        env.t[0] = loop.status()["retry_at"]
    assert len(fake.calls) == 5
    assert loop.status()["state"] == "paused"
    for rid in ids:
        assert "describe_error" not in env.store.read(rid)


def test_tick_never_raises(env, monkeypatch):
    seed(env.store, "A")

    def broken(self):
        raise RuntimeError("scan exploded")

    monkeypatch.setattr(Store, "scan", broken)
    loop = env.make(FakeDescriber())
    loop.tick()
    assert "scan exploded" in loop.status()["reason"]


def test_status_shape(env):
    loop = env.make(FakeDescriber(), cap=7)
    loop.tick()
    assert loop.status() == {"state": "idle", "reason": None, "waiting": 0, "current": None, "holder": None,
                             "today": 0, "cap": 7, "retry_at": None}
    assert (loop.settle_s, loop.backoff_s, loop.max_tries, loop.stop_streak) == (60, 3600, 3, 5)


# -- robustness fixes --------------------------------------------------------

def test_unsaveable_answers_count_toward_the_streak(env, monkeypatch):
    ids = [seed(env.store, code) for code in ("A", "B", "C", "D", "E", "F")]
    fake = FakeDescriber()

    def broken(self, record):
        raise OSError("Drive is offline")

    monkeypatch.setattr(Store, "write", broken)
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    for _ in range(6):
        loop.tick()
    assert len(fake.calls) == 5
    assert loop.status()["state"] == "stopped"
    assert set(fake.calls) < set(ids)


def test_any_answer_from_the_api_resets_the_pause(env):
    seed(env.store, "A", captured="2026-11-24T00:00:00Z")
    seed(env.store, "B", captured="2026-11-23T00:00:00Z")
    seed(env.store, "C", captured="2026-11-22T00:00:00Z")
    codes = ["overloaded", "overloaded", "bad_output", "overloaded"]

    class Sequenced(FakeDescriber):
        def describe(self, rec, store, vocab, vocab_doc):
            self.calls.append(rec["id"])
            raise RaterError("x", code=codes[len(self.calls) - 1])

    loop = env.make(Sequenced())
    loop.tick()
    env.t[0] = 61
    loop.tick()
    assert loop.status()["retry_at"] - env.t[0] == 60
    env.t[0] = loop.status()["retry_at"]
    loop.tick()
    assert loop.status()["retry_at"] - env.t[0] == 120
    env.t[0] = loop.status()["retry_at"]
    loop.tick()  # bad_output: Claude answered, so the API is fine
    assert loop.status()["state"] == "running"
    assert loop.status()["retry_at"] is None
    loop.tick()
    assert loop.status()["retry_at"] - env.t[0] == 60


def test_duplicate_shortcodes_and_malformed_records(env):
    a = seed(env.store, "A", captured="2026-11-20T00:00:00Z")
    dup = make_record("A")
    dup["id"] = "ig-a-2"
    dup["capture"]["items"] = [{**item(1), "sha256": "dup", "captured_at": "2026-11-21T00:00:00Z"}]
    env.store.write(dup)
    for rid, capture in (("ig-bad", ["not", "a", "dict"]),
                         ("ig-mixed", {"items": [{"slide": 1, "type": "image", "file": "01.jpg"},
                                                 {"slide": "2", "type": "image", "file": "02.jpg"}]})):
        (env.store.dir / rid).mkdir()
        (env.store.dir / rid / "save.json").write_text(json.dumps(
            {**make_record(rid[3:].upper()), "id": rid, "capture": capture}))
    assert waiting_count(env.store) == 2
    fake = FakeDescriber()
    loop = env.make(fake)
    loop.tick()
    env.t[0] = 61
    loop.tick()
    loop.tick()
    assert fake.calls == ["ig-a-2", a]
    assert loop.status()["reason"] is None


def test_tick_exception_reports_idle(env, monkeypatch):
    seed(env.store, "A")
    loop = env.make(FakeDescriber())
    loop.tick()
    assert loop.status()["state"] == "running"  # settling

    def broken(self):
        raise RuntimeError("scan exploded")

    monkeypatch.setattr(Store, "scan", broken)
    loop.tick()
    assert loop.status()["state"] == "idle"
    assert "scan exploded" in loop.status()["reason"]


def test_first_seen_forgets_removed_items(env):
    rid = seed(env.store, "A")
    seed(env.store, "B")
    loop = env.make(FakeDescriber())
    loop.tick()
    assert {k[0] for k in loop.first_seen} == {rid, "ig-b"}
    shutil.rmtree(env.store.dir / rid)
    loop.tick()
    assert {k[0] for k in loop.first_seen} == {"ig-b"}


def test_status_and_resume_work_from_another_thread_during_a_call(env):
    rid = seed(env.store, "A")
    seen = []

    class Watching(FakeDescriber):
        def describe(self, rec, store, vocab, vocab_doc):
            def other():
                seen.append(loop.status())
                loop.resume()
                seen.append(loop.status())
            th = threading.Thread(target=other)
            th.start()
            th.join(timeout=2)
            assert not th.is_alive(), "status()/resume() blocked during the Claude call"
            return super().describe(rec, store, vocab, vocab_doc)

    loop = env.make(Watching())
    loop.tick()
    env.t[0] = 61
    loop.tick()
    assert [s["current"] for s in seen] == [rid, rid]
    assert [s["state"] for s in seen] == ["running", "running"]
    assert "bot" in env.store.read(rid)
    assert loop.status()["current"] is None
