import json
import sqlite3
import threading
import time

from fastapi.testclient import TestClient

from quarry.rater import ClaudeRater, FakeRater, RaterError
from quarry.rating import RatingResult
from quarry.schema import validate_sidecar
from quarry.ui import gitops
from quarry.ui import rate_api
from quarry.ui.app import create_app
from quarry.vocabulary import load_vocabulary

from test_ui_jobs import _wait

BOT_UNSURE = {"verdict": "maybe", "strength": "unsure", "reason": "old", "model": "m",
              "at": "2026-01-01T00:00:00Z", "examples": [], "suggested_slugs": {}}
BOT_STRONG = {**BOT_UNSURE, "verdict": "yes", "strength": "strong"}
HUMAN_YES = {"verdict": "yes", "by": "T", "at": "2026-01-02T00:00:00Z"}


def commit(repo):
    repo.git("add", "-A")
    repo.git("commit", "-q", "-m", "seed")


def _sidecar(repo, id, cls="hero"):
    return json.loads((repo.root / "library" / cls / f"{id}.json").read_text())


def _subjects(repo, n):
    return repo.git("log", "--format=%s", f"-{n}").splitlines()


def test_auto_rate_writes_bot_ratings_in_chunks(git_repo):
    for i in range(25):
        git_repo.add_asset("hero", f"h{i:02}", status="proposed", description="")
    commit(git_repo)
    c = TestClient(create_app(git_repo.root, rater=FakeRater()))
    r = c.post("/api/rate")
    assert r.status_code == 200, r.text
    s = _wait(c, r.json()["job_id"])
    assert s["state"] == "done", s
    assert s["result"] == {"rated": 25, "failed": {}, "skipped": 0}
    assert _subjects(git_repo, 2) == ["rate: bot rated 5 assets", "rate: bot rated 20 assets"]
    h = _sidecar(git_repo, "h00")
    assert h["rating"]["bot"]["verdict"] == "maybe"
    assert h["rating"]["bot"]["model"] == "fake"
    assert h["rating"]["bot"]["at"].endswith("Z") and len(h["rating"]["bot"]["at"]) == 20
    assert h["description"] == "Fake description."
    assert "h00: maybe (unsure) — fake" in s["log"]
    assert s["log"][-1] == "done: 25 rated, 0 failed, 0 skipped"
    assert not gitops.managed_status(git_repo.root).dirty_managed


def test_auto_rate_records_answering_model(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    commit(git_repo)
    res = RatingResult("yes", "strong", "ok", "", {}, None, {}, model="claude-fallback")
    c = TestClient(create_app(git_repo.root, rater=FakeRater(results={"h1": res})))
    _wait(c, c.post("/api/rate").json()["job_id"])
    assert _sidecar(git_repo, "h1")["rating"]["bot"]["model"] == "claude-fallback"


def test_auto_rate_skips_assets_with_human_verdict_or_bot_rating(git_repo):
    git_repo.add_asset("hero", "fresh", status="proposed")
    git_repo.add_asset("hero", "botted", status="proposed", rating={"bot": BOT_UNSURE})
    git_repo.add_asset("hero", "humaned", status="proposed", rating={"human": HUMAN_YES})
    git_repo.add_asset("hero", "done", status="confirmed")
    git_repo.add_asset("hero", "parked1", status="parked")
    commit(git_repo)
    rater = FakeRater()
    c = TestClient(create_app(git_repo.root, rater=rater))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["result"] == {"rated": 1, "failed": {}, "skipped": 0}
    assert rater.calls == ["fresh"]
    assert _sidecar(git_repo, "botted")["rating"]["bot"] == BOT_UNSURE
    assert "bot" not in _sidecar(git_repo, "humaned")["rating"]
    assert _subjects(git_repo, 1) == ["rate: bot rated 1 assets"]


def test_auto_rate_failure_is_reported_and_others_continue(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    git_repo.add_asset("hero", "h2", status="proposed")
    commit(git_repo)
    c = TestClient(create_app(git_repo.root, rater=FakeRater(fail={"h1"})))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["state"] == "done"
    assert s["result"]["rated"] == 1 and "h1" in s["result"]["failed"]
    assert "fake failure" in s["result"]["failed"]["h1"]
    assert "h1: FAILED fake failure for h1" in s["log"]
    assert "rating" not in _sidecar(git_repo, "h1")
    assert _sidecar(git_repo, "h2")["rating"]["bot"]["verdict"] == "maybe"


def test_auto_rate_invalid_result_is_failed_not_written(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    git_repo.add_asset("hero", "h2", status="proposed")
    commit(git_repo)
    bad = RatingResult("wat", "strong", "?", "", {}, None, {})
    c = TestClient(create_app(git_repo.root, rater=FakeRater(results={"h1": bad})))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["result"]["rated"] == 1
    assert "rating.bot.verdict" in s["result"]["failed"]["h1"]
    assert any(line.startswith("h1: FAILED ") for line in s["log"])
    assert "rating" not in _sidecar(git_repo, "h1")
    assert _subjects(git_repo, 1) == ["rate: bot rated 1 assets"]


def test_auto_rate_chunk_commit_failure_continues(git_repo, monkeypatch):
    for i in range(4):
        git_repo.add_asset("hero", f"h{i}", status="proposed")
    commit(git_repo)
    monkeypatch.setattr(rate_api, "CHUNK", 2)
    real = rate_api.write_sidecars
    calls = []

    def flaky(app, changes, message):
        calls.append(message)
        if len(calls) <= 2:  # the first chunk fails its commit and its one retry
            raise gitops.GitError("boom")
        return real(app, changes, message)

    monkeypatch.setattr(rate_api, "write_sidecars", flaky)
    monkeypatch.setattr(rate_api, "COMMIT_RETRY_DELAY", 0)
    c = TestClient(create_app(git_repo.root, rater=FakeRater()))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["state"] == "done", s
    assert s["result"]["rated"] == 2
    assert set(s["result"]["failed"]) == {"h0", "h1"}
    assert "boom" in s["result"]["failed"]["h0"]
    assert "rating" not in _sidecar(git_repo, "h0")
    assert "bot" in _sidecar(git_repo, "h3")["rating"]
    assert not gitops.managed_status(git_repo.root).dirty_managed


def test_auto_rate_chunk_commit_retried_once(git_repo, monkeypatch):
    for i in range(2):
        git_repo.add_asset("hero", f"h{i}", status="proposed")
    commit(git_repo)
    real = rate_api.write_sidecars
    calls = []

    def flaky(app, changes, message):
        calls.append(message)
        if len(calls) == 1:
            raise gitops.GitError("index.lock exists")
        return real(app, changes, message)

    monkeypatch.setattr(rate_api, "write_sidecars", flaky)
    monkeypatch.setattr(rate_api, "COMMIT_RETRY_DELAY", 0)
    c = TestClient(create_app(git_repo.root, rater=FakeRater()))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["result"] == {"rated": 2, "failed": {}, "skipped": 0}, s
    assert len(calls) == 2
    assert any("retrying once" in line for line in s["log"])
    assert _subjects(git_repo, 1) == ["rate: bot rated 2 assets"]
    assert "bot" in _sidecar(git_repo, "h0")["rating"]
    assert not gitops.managed_status(git_repo.root).dirty_managed


def test_chunk_uses_vocabulary_current_at_write_time(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    commit(git_repo)
    entered, release = threading.Event(), threading.Event()
    res = RatingResult("yes", "unsure", "ok", "", {"products": ["fuzzball", "rocky"]}, None, {})

    class Blocking(FakeRater):
        def rate(self, image, sidecar, *a):
            entered.set()
            release.wait(20)
            return super().rate(image, sidecar, *a)

    c = TestClient(create_app(git_repo.root, rater=Blocking(results={"h1": res})))
    job = c.post("/api/rate").json()["job_id"]
    assert entered.wait(10)
    r = c.post("/api/vocabulary/products/fuzzball/rename", json={"new": "fuzzball-x"})
    assert r.status_code == 200, r.text
    release.set()
    s = _wait(c, job)
    assert s["result"] == {"rated": 1, "failed": {}, "skipped": 0}, s
    h = _sidecar(git_repo, "h1")
    assert h["products"] == ["rocky"]  # the renamed-away slug is not written
    assert validate_sidecar(h, load_vocabulary(git_repo.root)) == []


def test_human_verdict_during_run_wins(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    commit(git_repo)
    entered, release = threading.Event(), threading.Event()

    class Blocking(FakeRater):
        def rate(self, image, sidecar, *a):
            if sidecar["id"] == "h1":
                entered.set()
                release.wait(20)
            return super().rate(image, sidecar, *a)

    c = TestClient(create_app(git_repo.root, rater=Blocking()))
    job = c.post("/api/rate").json()["job_id"]
    assert entered.wait(10)
    r = c.post("/api/assets/h1/verdict", json={"verdict": "yes"})
    assert r.status_code == 200, r.text
    release.set()
    s = _wait(c, job)
    assert s["result"] == {"rated": 0, "failed": {}, "skipped": 1}
    h = _sidecar(git_repo, "h1")
    assert h["status"] == "confirmed" and "bot" not in h["rating"]
    assert _subjects(git_repo, 1) == ["rate: yes h1"]


def test_redo_unsure_updates_only_rating_bot(git_repo):
    git_repo.add_asset("hero", "unsure", status="proposed", description="", rating={"bot": BOT_UNSURE})
    git_repo.add_asset("hero", "strong", status="proposed", rating={"bot": BOT_STRONG})
    git_repo.add_asset("hero", "judged", status="proposed",
                       rating={"bot": BOT_UNSURE, "human": HUMAN_YES})
    git_repo.add_asset("hero", "fresh", status="proposed")
    commit(git_repo)
    new = RatingResult("yes", "strong", "better", "New description.", {"style": ["flat"]}, None, {})
    rater = FakeRater(results={"unsure": new})
    c = TestClient(create_app(git_repo.root, rater=rater))
    s = _wait(c, c.post("/api/rate?redo=unsure").json()["job_id"])
    assert s["result"] == {"rated": 1, "failed": {}, "skipped": 0}
    assert rater.calls == ["unsure"]
    u = _sidecar(git_repo, "unsure")
    assert u["rating"]["bot"]["verdict"] == "yes" and u["rating"]["bot"]["reason"] == "better"
    assert u["description"] == "" and u["style"] == []
    assert _sidecar(git_repo, "strong")["rating"]["bot"] == BOT_STRONG
    assert _sidecar(git_repo, "judged")["rating"]["bot"] == BOT_UNSURE
    assert "rating" not in _sidecar(git_repo, "fresh")


def test_rate_bad_redo_422_busy_409_dirty_409(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    commit(git_repo)
    gate = threading.Event()

    class Slow(FakeRater):
        def rate(self, *a):
            gate.wait(20)
            return super().rate(*a)

    c = TestClient(create_app(git_repo.root, rater=Slow()))
    assert c.post("/api/rate?redo=all").status_code == 422
    job = c.post("/api/rate").json()["job_id"]
    assert c.post("/api/rate").status_code == 409
    gate.set()
    _wait(c, job)
    (git_repo.root / "library" / "hero" / "h1.json").write_text("{}")
    assert c.post("/api/rate").status_code == 409


def test_rate_unavailable_returns_503(git_repo, monkeypatch):
    monkeypatch.setattr("quarry.ui.rate_api.rater_status",
                        lambda: {"available": False, "model": "m", "reason": "set ANTHROPIC_API_KEY"})
    r = TestClient(create_app(git_repo.root)).post("/api/rate")
    assert r.status_code == 503
    assert r.json() == {"error": "set ANTHROPIC_API_KEY"}


def test_rater_construction_failure_fails_job(git_repo, monkeypatch):
    git_repo.add_asset("hero", "h1", status="proposed")
    commit(git_repo)
    monkeypatch.setattr("quarry.ui.rate_api.rater_status",
                        lambda: {"available": True, "model": "m", "reason": None})

    def broken(*a, **k):
        raise RuntimeError("no client")

    monkeypatch.setattr("quarry.ui.rate_api.ClaudeRater", broken)
    c = TestClient(create_app(git_repo.root))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["state"] == "failed"
    assert "no client" in s["error"] and "rater" in s["error"]


def test_get_rater_and_status(git_repo, monkeypatch):
    fake = FakeRater()
    app = create_app(git_repo.root, rater=fake)
    assert app.state.get_rater() is fake
    assert app.state.rater_status() == {"available": True, "model": "fake", "reason": None}
    monkeypatch.setattr("quarry.ui.rate_api.rater_status",
                        lambda: {"available": False, "model": "m", "reason": "r"})
    monkeypatch.setenv("ANTHROPIC_API_KEY", "test-key")
    app2 = create_app(git_repo.root)
    assert app2.state.rater_status()["reason"] == "r"
    built = app2.state.get_rater()
    assert type(built).__name__ == "ClaudeRater" and app2.state.get_rater() is built


def test_summary_counts(git_repo):
    git_repo.add_asset("hero", "waiting", status="proposed")
    git_repo.add_asset("hero", "review", status="proposed", rating={"bot": BOT_UNSURE})
    git_repo.add_asset("hero", "details", status="proposed",
                       rating={"bot": BOT_STRONG, "human": HUMAN_YES})
    git_repo.add_asset("hero", "human-only", status="proposed", rating={"human": HUMAN_YES})
    git_repo.add_asset("hero", "parked1", status="parked")
    git_repo.add_asset("hero", "done", status="confirmed")
    commit(git_repo)
    c = TestClient(create_app(git_repo.root, rater=FakeRater()))
    r = c.get("/api/rate/summary")
    assert r.status_code == 200
    body = r.json()
    assert body["waiting_for_bot"] == 1
    assert body["to_review"] == 1
    assert body["needs_details"] == 2
    assert body["parked"] == 1
    assert body["agreement"]["recent"] == {"agreed": 1, "total": 1}
    assert body["rater"] == {"available": True, "model": "fake", "reason": None}
    assert body["learning"] == "recent"


def test_summary_learning_look_alike_only_with_hf_index(git_repo):
    c = TestClient(create_app(git_repo.root, rater=FakeRater()))
    assert c.get("/api/rate/summary").json()["learning"] == "recent"  # no index
    (git_repo.root / "index").mkdir()
    conn = sqlite3.connect(git_repo.root / "index" / "library.db")
    conn.execute("CREATE TABLE meta (key TEXT PRIMARY KEY, value TEXT)")
    conn.commit()
    assert c.get("/api/rate/summary").json()["learning"] == "recent"  # no embedder_mode
    for mode, want in (("fake", "recent"), ("unknown", "recent"), ("hf", "look-alike")):
        conn.execute("INSERT OR REPLACE INTO meta VALUES ('embedder_mode', ?)", (mode,))
        conn.commit()
        assert c.get("/api/rate/summary").json()["learning"] == want, mode
    conn.close()


def test_in_flight_calls_are_bounded(git_repo):
    for i in range(30):
        git_repo.add_asset("hero", f"h{i:02}", status="proposed")
    commit(git_repo)
    release = threading.Event()
    started: list[str] = []

    class FirstBlocks(FakeRater):
        def rate(self, image, sidecar, *a):
            started.append(sidecar["id"])
            if sidecar["id"] == "h00":
                release.wait(20)
            return super().rate(image, sidecar, *a)

    c = TestClient(create_app(git_repo.root, rater=FirstBlocks()))
    job = c.post("/api/rate").json()["job_id"]
    time.sleep(1.0)  # the free workers would drain an unbounded queue in this time
    assert len(started) <= 2 * rate_api.WORKERS, started
    release.set()
    s = _wait(c, job)
    assert s["result"]["rated"] == 30 and len(started) == 30


def test_client_construction_error_fails_job_once(git_repo, monkeypatch):
    git_repo.add_asset("hero", "h1", status="proposed")
    commit(git_repo)
    monkeypatch.setattr("quarry.ui.rate_api.rater_status",
                        lambda: {"available": True, "model": "m", "reason": None})

    class NoClient(ClaudeRater):
        @property
        def client(self):
            raise RuntimeError("bad credentials")

    monkeypatch.setattr("quarry.ui.rate_api.ClaudeRater", NoClient)
    c = TestClient(create_app(git_repo.root))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["state"] == "failed"
    assert s["error"] == "could not start the rater: bad credentials"
    assert not any("FAILED" in line for line in s["log"])


def test_repeated_same_failure_aborts_run(git_repo):
    ids = [f"a{i:02}" for i in range(12)]
    for id in ids:
        git_repo.add_asset("hero", id, status="proposed")
    commit(git_repo)
    rater = FakeRater(fail=set(ids[2:9]))
    c = TestClient(create_app(git_repo.root, rater=rater))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["state"] == "failed", s
    assert "5 assets in a row" in s["error"] and "fake failure for" in s["error"]
    assert _sidecar(git_repo, "a00")["rating"]["bot"]  # rated before the streak: committed
    assert _sidecar(git_repo, "a01")["rating"]["bot"]
    assert _subjects(git_repo, 1) == ["rate: bot rated 2 assets"]
    for id in ids[2:]:
        assert "rating" not in _sidecar(git_repo, id)
    assert not gitops.managed_status(git_repo.root).dirty_managed


def test_unexpected_apply_error_fails_only_that_asset(git_repo, monkeypatch):
    git_repo.add_asset("hero", "h1", status="proposed")
    git_repo.add_asset("hero", "h2", status="proposed")
    commit(git_repo)
    real = rate_api.rating.apply_bot_rating

    def picky(sidecar, result, **kw):
        if sidecar["id"] == "h1":
            raise TypeError("weird result")
        return real(sidecar, result, **kw)

    monkeypatch.setattr(rate_api.rating, "apply_bot_rating", picky)
    c = TestClient(create_app(git_repo.root, rater=FakeRater()))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["state"] == "done", s
    assert s["result"]["rated"] == 1 and "weird result" in s["result"]["failed"]["h1"]
    assert "h1: FAILED weird result" in s["log"]
    assert "rating" not in _sidecar(git_repo, "h1")


def test_same_error_code_with_varying_messages_aborts_run(git_repo):
    ids = [f"a{i:02}" for i in range(10)]
    for id in ids:
        git_repo.add_asset("hero", id, status="proposed")
    commit(git_repo)
    n = iter(range(1000))

    class BadKey(FakeRater):
        def rate(self, image, sidecar, *a):
            self.calls.append(sidecar["id"])
            raise RaterError(f"Claude API error: Error code: 401 - request_id req_{next(n)}", code="auth")

    c = TestClient(create_app(git_repo.root, rater=BadKey()))
    s = _wait(c, c.post("/api/rate").json()["job_id"])
    assert s["state"] == "failed", s
    assert "5 assets in a row" in s["error"] and "auth" in s["error"]
    assert sum(line.startswith("a") and "FAILED" in line for line in s["log"]) == 5
