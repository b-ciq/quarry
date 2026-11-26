"""The workbench's describer thread: guards (fake rater, off switch, bad config), wiring, and status."""
import threading
import time

import pytest
from fastapi.testclient import TestClient

from inspiration_helpers import item, make_record
from quarry.describer import FakeDescriber
from quarry.inspiration_store import Store, config_dir
from quarry.ui import app as app_module
from quarry.ui import inspiration_api
from quarry.ui.app import create_app


@pytest.fixture
def root(tmp_path, monkeypatch):
    r = tmp_path / "root"
    r.mkdir()
    monkeypatch.setenv("QUARRY_INSPIRATION_DIR", str(r))
    monkeypatch.delenv("QUARRY_FAKE_RATER", raising=False)
    monkeypatch.delenv("QUARRY_DESCRIBE_INSPIRATION", raising=False)
    return r


@pytest.fixture
def store(root):
    return Store(root)


def stop_and_join(app, stop):
    """Stop the describer thread and wait for it, so no tick can run after the temp dirs are restored."""
    stop.set()
    thread = getattr(app.state, "describer_thread", None)
    if thread is not None:
        thread.join(timeout=2)
        assert not thread.is_alive(), "describer thread did not exit"


@pytest.fixture
def stops():
    """(app, event) pairs from start_describer; stopped and joined at teardown."""
    started = []
    yield started
    for _, e in started:
        e.set()
    for app, e in started:
        stop_and_join(app, e)


def seed(store, code):
    rec = make_record(code)
    rec["capture"]["items"] = [item(1)]
    rec["capture"]["status"] = "captured"
    store.write(rec)
    (store.dir / rec["id"] / "01.jpg").write_bytes(b"img")
    return rec


def write_config(text):
    config_dir().mkdir(parents=True, exist_ok=True)
    (config_dir() / "config.toml").write_text(text)


def wait_for(pred, timeout=2.0):
    end = time.monotonic() + timeout
    while time.monotonic() < end:
        if pred():
            return True
        time.sleep(0.01)
    return pred()


def describer_status(app):
    return TestClient(app).get("/api/inspiration").json()["describer"]


def test_fake_rater_env_never_starts_describer(repo, store, stops, monkeypatch):
    monkeypatch.setenv("QUARRY_FAKE_RATER", "1")
    seed(store, "AAA")
    fake = FakeDescriber()
    app = create_app(repo.root, describer=fake)
    stop = inspiration_api.start_describer(app, interval=0.01, settle_s=0)
    stops.append((app, stop))
    assert stop.is_set()
    time.sleep(0.05)
    assert app.state.describer_loop is None
    assert fake.calls == []
    d = describer_status(app)
    assert d["state"] == "off" and "QUARRY_FAKE_RATER" in d["reason"]


@pytest.mark.parametrize("how", ["env", "config"])
def test_env_off_switch(repo, store, stops, monkeypatch, how):
    if how == "env":
        monkeypatch.setenv("QUARRY_DESCRIBE_INSPIRATION", "0")
    else:
        write_config("describe_inspiration = false\n")
    seed(store, "AAA")
    fake = FakeDescriber()
    app = create_app(repo.root, describer=fake)
    stop = inspiration_api.start_describer(app, interval=0.01, settle_s=0)
    stops.append((app, stop))
    assert stop.is_set()
    time.sleep(0.05)
    assert app.state.describer_loop is None and fake.calls == []
    d = describer_status(app)
    assert d["state"] == "off" and d["reason"] and d["waiting"] == 1


def test_describer_enabled(root, monkeypatch):
    assert inspiration_api.describer_enabled() == (True, None)
    write_config("describe_inspiration = true\n")
    assert inspiration_api.describer_enabled() == (True, None)
    write_config('describe_inspiration = "no"\n')
    ok, reason = inspiration_api.describer_enabled()
    assert ok is False and "describe_inspiration" in reason


def test_bad_config_reports_off_not_crash(repo, store, stops, tmp_path):
    write_config(f'inspiration_dir = "{tmp_path / "root"}"\ndescribe_inspiration = [\n')
    seed(store, "AAA")
    fake = FakeDescriber()
    app = create_app(repo.root, describer=fake)  # must not raise
    stop = inspiration_api.start_describer(app, interval=0.01, settle_s=0)
    stops.append((app, stop))
    assert stop.is_set() and app.state.describer_loop is None and fake.calls == []
    d = describer_status(app)
    assert d["state"] == "off" and "config.toml" in d["reason"]


def test_bad_config_without_env_root_still_starts(repo, tmp_path, monkeypatch, stops):
    monkeypatch.delenv("QUARRY_INSPIRATION_DIR", raising=False)
    monkeypatch.delenv("QUARRY_FAKE_RATER", raising=False)
    (tmp_path / "root").mkdir()
    write_config(f'inspiration_dir = "{tmp_path / "root"}"\ndescribe_inspiration = [\n')
    app = create_app(repo.root, describer=FakeDescriber())
    stop = inspiration_api.start_describer(app, interval=0.01)
    stops.append((app, stop))
    assert stop.is_set()
    r = TestClient(app).get("/api/inspiration")
    assert r.status_code == 200 and r.json()["describer"]["state"] == "off"


def test_bad_daily_cap_falls_back(repo, store):
    write_config('describe_daily_cap = "lots"\n')
    app = create_app(repo.root)
    assert describer_status(app)["cap"] == 150


def test_injected_describer_runs_one_tick(repo, store, stops):
    write_config("describe_daily_cap = 7\n")
    seed(store, "AAA")
    fake = FakeDescriber()
    app = create_app(repo.root, describer=fake)
    stop = inspiration_api.start_describer(app, interval=0.01, settle_s=0)
    stops.append((app, stop))
    assert not stop.is_set()
    assert wait_for(lambda: isinstance(store.read("ig-aaa").get("bot"), dict))
    assert fake.calls == ["ig-aaa"]
    d = describer_status(app)
    assert d["state"] in {"running", "idle"} and d["cap"] == 7 and d["today"] == 1
    stop.set()
    assert wait_for(lambda: app.state.describer_loop is None)  # the thread closed the loop
    assert (config_dir() / "describer.lock").read_text() == ""  # lock released


def test_unavailable_claude_waits_and_reports_off(repo, store, stops, monkeypatch):
    checks = []

    def unavailable():
        checks.append(1)
        return {"available": False, "model": "m", "reason": "set ANTHROPIC_API_KEY or run `ant auth login`"}

    monkeypatch.setattr(inspiration_api, "rater_status", unavailable)
    seed(store, "AAA")
    app = create_app(repo.root)
    stop = inspiration_api.start_describer(app, interval=0.01, settle_s=0)
    stops.append((app, stop))
    assert wait_for(lambda: checks)
    time.sleep(0.05)
    assert len(checks) == 1  # re-checks once a minute, not every tick
    assert app.state.describer_loop is None
    d = describer_status(app)
    assert d["state"] == "off" and d["reason"] == "set ANTHROPIC_API_KEY or run `ant auth login`"
    assert d["waiting"] == 1


def test_start_describer_without_root_does_nothing(repo, monkeypatch, stops):
    monkeypatch.delenv("QUARRY_FAKE_RATER", raising=False)
    app = create_app(repo.root, describer=FakeDescriber())
    stop = inspiration_api.start_describer(app, interval=0.01)
    stops.append((app, stop))
    assert stop.is_set() and app.state.describer_loop is None


def test_second_start_does_not_add_a_thread(repo, store, stops):
    entered, release = threading.Event(), threading.Event()

    class Blocking(FakeDescriber):
        def describe(self, rec, store, vocab, vocab_doc):
            entered.set()
            release.wait(2)
            return super().describe(rec, store, vocab, vocab_doc)

    seed(store, "AAA")
    app = create_app(repo.root, describer=Blocking())
    first = inspiration_api.start_describer(app, interval=0.01, settle_s=0)
    stops.append((app, first))
    thread = app.state.describer_thread
    assert inspiration_api.start_describer(app, interval=0.01) is first
    assert entered.wait(2)
    first.set()  # stopped, but the thread is still mid-tick
    assert inspiration_api.start_describer(app, interval=0.01) is first
    assert app.state.describer_thread is thread
    release.set()
    stop_and_join(app, first)
    # once the old thread has exited, a new start may run (and is joined by the fixture)
    second = inspiration_api.start_describer(app, interval=0.01)
    stops.append((app, second))
    assert second is not first and app.state.describer_thread is not thread


def test_describe_endpoint_resumes_the_loop(repo, store):
    seed(store, "AAA")
    app = create_app(repo.root)

    class Loop:
        resumed = 0

        def resume(self):
            self.resumed += 1

        def status(self):
            return {"state": "stopped", "reason": "x", "waiting": 1, "current": None, "holder": None,
                    "today": 0, "cap": 150, "retry_at": None}

    app.state.describer_loop = loop = Loop()
    client = TestClient(app)
    assert client.post("/api/inspiration/ig-aaa/describe").json() == {"ok": True}
    assert loop.resumed == 1
    assert client.get("/api/inspiration").json()["describer"]["state"] == "stopped"


def test_serve_starts_the_describer(repo, monkeypatch):
    calls = []
    monkeypatch.setattr(app_module.capture_api, "start_sweeper", lambda app: calls.append("sweeper"))
    monkeypatch.setattr(app_module.inspiration_api, "start_describer",
                        lambda app, port=None: calls.append(("describer", port)))
    import uvicorn
    monkeypatch.setattr(uvicorn, "run", lambda app, host, port: calls.append("run"))
    app_module.serve(repo.root, port=8790)
    assert calls == ["sweeper", ("describer", 8790), "run"]


def test_resume_endpoint_resumes_without_touching_saves(repo, store):
    rec = seed(store, "AAA")
    rec["describe_error"] = {"code": "refusal", "message": "no", "tries": 3, "at": "2026-11-25T10:00:00Z",
                             "gave_up": True}
    store.write(rec)
    before = (store.dir / "ig-aaa" / "save.json").read_bytes()
    app = create_app(repo.root)

    class Loop:
        resumed = 0

        def resume(self):
            self.resumed += 1

    app.state.describer_loop = loop = Loop()
    client = TestClient(app)
    r = client.post("/api/inspiration/describer/resume")
    assert r.status_code == 200 and r.json() == {"ok": True}
    assert loop.resumed == 1
    assert (store.dir / "ig-aaa" / "save.json").read_bytes() == before  # no paid retry is queued


def test_resume_endpoint_ok_without_a_loop(repo, store):
    app = create_app(repo.root)
    assert app.state.describer_loop is None
    assert TestClient(app).post("/api/inspiration/describer/resume").json() == {"ok": True}
