import sqlite3
import subprocess
import threading
import time

import pytest
from fastapi.testclient import TestClient

from quarry.ui import jobs as jobs_mod
from quarry.ui.app import create_app
from quarry.ui.jobs import JobRunner

from test_ui_gitops import git, sandbox  # noqa: F401  (fixture reuse)


def _wait(c, job_id, timeout=30):
    end = time.time() + timeout
    while time.time() < end:
        s = c.get(f"/api/jobs/{job_id}").json()
        if s["state"] != "running":
            return s
        time.sleep(0.05)
    raise AssertionError("job did not finish")


def test_runner_unit():
    r = JobRunner()
    gate = threading.Event()
    jid = r.start("x", lambda log: (log("hi"), gate.wait(5), "ok")[2])
    assert jid and r.status(jid)["state"] == "running"
    assert r.start("y", lambda log: None) is None
    gate.set()
    for _ in range(100):
        if r.status(jid)["state"] != "running":
            break
        time.sleep(0.02)
    s = r.status(jid)
    assert s["state"] == "done" and s["result"] == "ok" and "hi" in s["log"]
    assert r.status("nope") is None
    assert r.start("z", lambda log: 1 / 0)
    time.sleep(0.2)


def test_reindex_job(git_repo):
    git_repo.add_asset("hero", "h1")
    git_repo.git("add", "-A")
    git_repo.git("commit", "-qm", "seed")
    c = TestClient(create_app(git_repo.root, fake_embedder=True))
    r = c.post("/api/reindex")
    assert r.status_code == 200
    s = _wait(c, r.json()["job_id"])
    assert s["state"] == "done", s
    assert s["log"]
    conn = sqlite3.connect(git_repo.root / "index" / "library.db")
    assert conn.execute("SELECT value FROM meta WHERE key='embedder_mode'").fetchone()
    assert c.get("/api/jobs/unknown").status_code == 404


def test_second_job_409(git_repo, monkeypatch):
    gate = threading.Event()
    monkeypatch.setattr(jobs_mod, "build_index", lambda *a, **k: gate.wait(10))
    c = TestClient(create_app(git_repo.root, fake_embedder=True))
    r1 = c.post("/api/reindex")
    assert r1.status_code == 200
    assert c.post("/api/reindex").status_code == 409
    assert c.post("/api/publish").status_code == 409
    gate.set()
    _wait(c, r1.json()["job_id"])


def _setup(sandbox, tmp_path):
    a, b = sandbox
    skill = tmp_path / "skill"
    (skill / "brand" / "assets" / "images").mkdir(parents=True)
    git(a, "config", "user.name", "T")
    c = TestClient(create_app(a, fake_embedder=True, skill_dir=skill))
    return a, b, skill, c


def test_publish_commits_and_pushes(sandbox, tmp_path):
    a, b, skill, c = _setup(sandbox, tmp_path)
    r = c.post("/api/publish")
    assert r.status_code == 200, r.text
    s = _wait(c, r.json()["job_id"])
    assert s["state"] == "done", s
    ver = s["result"]["version"]
    assert git(a, "log", "-1", "--format=%s").strip() == f"publish: {ver}"
    files = set(git(a, "show", "--name-only", "--format=", "HEAD").split())
    assert files and all(f.startswith("exports/") for f in files)
    git(b, "pull")
    assert (b / "exports" / "STAMP.json").exists()
    assert (skill / "brand" / "assets" / "images" / "manifest.json").exists()


def test_publish_failure_no_commit(sandbox, tmp_path, monkeypatch):
    a, b, skill, c = _setup(sandbox, tmp_path)
    before = git(a, "rev-parse", "HEAD")

    def boom(*a, **k):
        raise RuntimeError("kaboom")
    monkeypatch.setattr(jobs_mod, "publish", boom)
    s = _wait(c, c.post("/api/publish").json()["job_id"])
    assert s["state"] == "failed" and "kaboom" in s["error"]
    assert git(a, "rev-parse", "HEAD") == before


def test_publish_sync_conflict_fails(sandbox, tmp_path):
    a, b, skill, c = _setup(sandbox, tmp_path)
    import json
    for root, desc in ((b, "from B"),):
        p = root / "library" / "hero" / "a1.json"
        d = json.loads(p.read_text()); d["description"] = desc
        p.write_text(json.dumps(d, indent=2))
        git(root, "commit", "-qam", "b edit")
        git(root, "push")
    p = a / "library" / "hero" / "a1.json"
    d = json.loads(p.read_text()); d["description"] = "from A"
    p.write_text(json.dumps(d, indent=2))
    git(a, "commit", "-qam", "a edit")
    s = _wait(c, c.post("/api/publish").json()["job_id"])
    assert s["state"] == "failed" and "resolve" in s["error"]
    assert not (a / "exports").exists()


def test_publish_requires_clean_managed(git_repo):
    git_repo.add_asset("hero", "h1")  # untracked managed file
    c = TestClient(create_app(git_repo.root, fake_embedder=True))
    assert c.post("/api/publish").status_code == 409
    assert c.post("/api/reindex").status_code == 409


def test_embedder_cached(git_repo):
    app = create_app(git_repo.root, fake_embedder=True)
    assert app.state.get_embedder() is app.state.get_embedder()
