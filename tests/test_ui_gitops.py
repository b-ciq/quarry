"""Git layer tests. Sandbox: temp bare origin + two clones with plain files (no LFS)."""
import json
import subprocess
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from quarry.ui import gitops
from quarry.ui.app import create_app

from conftest import Repo


def git(repo, *args):
    return subprocess.run(["git", "-C", str(repo), *args], check=True, capture_output=True, text=True).stdout


@pytest.fixture
def sandbox(tmp_path, repo):
    origin = tmp_path / "origin.git"
    subprocess.run(["git", "init", "--bare", "-b", "main", str(origin)], check=True, capture_output=True)
    a = tmp_path / "A"
    subprocess.run(["git", "clone", str(origin), str(a)], check=True, capture_output=True)
    git(a, "config", "user.name", "Brett")
    git(a, "config", "user.email", "brett@example.com")
    git(a, "checkout", "-B", "main")
    # seed A with the conftest tree (vocabulary + assets), then push
    import shutil
    (a / "taxonomy").mkdir()
    shutil.copy(repo.root / "taxonomy" / "vocabulary.json", a / "taxonomy" / "vocabulary.json")
    ra = Repo(a)
    ra.add_asset("hero", "a1")
    ra.add_asset("hero", "a2")
    git(a, "add", "taxonomy", "library")
    git(a, "commit", "-m", "seed")
    git(a, "push", "-u", "origin", "main")
    b = tmp_path / "B"
    subprocess.run(["git", "clone", str(origin), str(b)], check=True, capture_output=True)
    git(b, "config", "user.name", "Isabelle")
    git(b, "config", "user.email", "isabelle@example.com")
    return a, b


def _edit(root, id, desc):
    p = root / "library" / "hero" / f"{id}.json"
    d = json.loads(p.read_text())
    d["description"] = desc
    p.write_text(json.dumps(d, indent=2))
    return f"library/hero/{id}.json"


def test_ahead_behind_counts(sandbox):
    a, b = sandbox
    s = gitops.managed_status(a)
    assert (s.ahead, s.behind) == (0, 0)
    rel = _edit(b, "a1", "from B")
    git(b, "add", rel)
    git(b, "commit", "-m", "b1")
    git(b, "push")
    git(a, "fetch")
    assert (gitops.managed_status(a).ahead, gitops.managed_status(a).behind) == (0, 1)
    rel2 = _edit(a, "a2", "from A")
    gitops.commit_paths(a, [rel2], "curate: retag a2")
    s = gitops.managed_status(a)
    assert (s.ahead, s.behind) == (1, 1)


def test_dirty_partition(sandbox):
    a, _ = sandbox
    _edit(a, "a1", "dirty")
    (a / "notes.txt").write_text("x")
    s = gitops.managed_status(a)
    assert s.dirty_managed == ["library/hero/a1.json"]
    assert s.dirty_other == ["notes.txt"]


def test_commit_paths_scoped_with_unrelated_dirt(sandbox):
    a, _ = sandbox
    rel = _edit(a, "a1", "scoped")
    _edit(a, "a2", "also dirty managed, not listed")
    (a / "notes.txt").write_text("unrelated")
    git(a, "add", "notes.txt")  # even a staged unrelated file must not be swept in
    sha = gitops.commit_paths(a, [rel], "curate: retag a1")
    stat = git(a, "show", "--stat", "--format=", sha).strip().splitlines()
    assert len(stat) == 2 and "library/hero/a1.json" in stat[0]
    assert git(a, "log", "-1", "--format=%s") .strip() == "curate: retag a1"
    st = git(a, "status", "--porcelain")
    assert "notes.txt" in st and "library/hero/a2.json" in st
    assert "a1.json" not in st


def test_sync_pulls_and_pushes(sandbox):
    a, b = sandbox
    rel = _edit(b, "a1", "from B")
    git(b, "add", rel)
    git(b, "commit", "-m", "b1")
    git(b, "push")
    rel2 = _edit(a, "a2", "from A")
    gitops.commit_paths(a, [rel2], "curate: retag a2")
    r = gitops.sync(a)
    assert (r.pulled, r.pushed, r.conflict) == (1, 1, False)
    assert json.loads((a / rel).read_text())["description"] == "from B"
    s = gitops.managed_status(a)
    assert (s.ahead, s.behind) == (0, 0)
    git(b, "pull", "--rebase")
    assert json.loads((b / rel2).read_text())["description"] == "from A"


def test_sync_conflict_aborts_cleanly(sandbox):
    a, b = sandbox
    rel = _edit(b, "a1", "B version")
    git(b, "add", rel)
    git(b, "commit", "-m", "b1")
    git(b, "push")
    _edit(a, "a1", "A version")
    gitops.commit_paths(a, [rel], "curate: retag a1")
    r = gitops.sync(a)
    assert r.conflict is True
    assert "agent" in r.message.lower()
    assert not (a / ".git" / "rebase-merge").exists()
    assert not (a / ".git" / "rebase-apply").exists()
    assert git(a, "status", "--porcelain").strip() == ""
    assert json.loads((a / rel).read_text())["description"] == "A version"


def test_api_sync_and_status(sandbox):
    a, b = sandbox
    client = TestClient(create_app(a))
    g = client.get("/api/status").json()["git"]
    assert g == {"ahead": 0, "behind": 0, "dirty_managed": [], "dirty_other": []}
    _edit(a, "a1", "x")
    gitops.commit_paths(a, ["library/hero/a1.json"], "curate: retag a1")
    r = client.post("/api/sync")
    assert r.status_code == 200 and r.json()["pushed"] == 1 and r.json()["conflict"] is False


def test_api_sync_conflict_is_409(sandbox):
    a, b = sandbox
    rel = _edit(b, "a1", "B")
    git(b, "add", rel); git(b, "commit", "-m", "b"); git(b, "push")
    _edit(a, "a1", "A")
    gitops.commit_paths(a, [rel], "curate: retag a1")
    r = TestClient(create_app(a)).post("/api/sync")
    assert r.status_code == 409 and r.json()["conflict"] is True


def _push_b_edit(b, id, desc):
    rel = _edit(b, id, desc)
    git(b, "add", rel); git(b, "commit", "-m", "b"); git(b, "push")
    return rel


def test_sync_preserves_non_overlapping_dirt(sandbox):
    a, b = sandbox
    _push_b_edit(b, "a1", "from B")
    rel = _edit(a, "a2", "dirty local")
    r = gitops.sync(a)
    assert r.conflict is False
    assert json.loads((a / rel).read_text())["description"] == "dirty local"
    assert gitops.managed_status(a).dirty_managed == [rel]


def test_sync_autostash_overlap_conflicts_without_push(sandbox):
    a, b = sandbox
    rel = _push_b_edit(b, "a1", "from B")
    origin_head = git(b, "rev-parse", "origin/main").strip()
    _edit(a, "a1", "dirty local")
    local_commit = _edit(a, "a2", "ahead")
    gitops.commit_paths(a, [local_commit], "curate: retag a2")
    r = gitops.sync(a)
    assert r.conflict is True and "agent" in r.message.lower()
    assert git(a, "ls-remote", "origin", "main").split()[0] == origin_head
    assert git(a, "diff", "--name-only", "--diff-filter=U").strip() == ""
    assert "<<<<<<<" not in (a / rel).read_text()


def test_status_fetches_when_stale(sandbox):
    a, b = sandbox
    rel = _edit(b, "a1", "from B")
    git(b, "add", rel)
    git(b, "commit", "-m", "b1")
    git(b, "push")
    gitops._last_attempt.clear()
    client = TestClient(create_app(a))
    # Fresh FETCH_HEAD: within the threshold, no fetch happens, so behind stays stale.
    (a / ".git" / "FETCH_HEAD").write_text("")
    assert client.get("/api/status").json()["git"]["behind"] == 0
    # Old FETCH_HEAD: status fetches and reports behind.
    import os
    os.utime(a / ".git" / "FETCH_HEAD", (0, 0))
    assert client.get("/api/status").json()["git"]["behind"] == 1


def test_fetch_if_stale_tolerates_offline_and_no_upstream(sandbox, tmp_path, repo):
    a, _ = sandbox
    gitops._last_attempt.clear()
    git(a, "remote", "set-url", "origin", str(tmp_path / "gone.git"))
    assert gitops.fetch_if_stale(a, max_age=0) is False  # failed fetch swallowed
    assert gitops.managed_status(a).has_upstream
    assert TestClient(create_app(a)).get("/api/status").status_code == 200
    # no upstream: never fetches
    subprocess.run(["git", "init", "-q", str(tmp_path / "solo")], check=True)
    assert gitops.fetch_if_stale(tmp_path / "solo", max_age=0) is False


def test_commit_paths_never_starts_auto_gc(sandbox, monkeypatch):
    a, _ = sandbox
    rel = _edit(a, "a1", "no gc")
    calls = []
    real = gitops.subprocess.run
    monkeypatch.setattr(gitops.subprocess, "run", lambda args, **kw: calls.append(args) or real(args, **kw))
    gitops.commit_paths(a, [rel], "curate: retag a1")
    commit = next(c for c in calls if "commit" in c)
    i = commit.index("commit")
    assert "gc.auto=0" in commit[:i] and "maintenance.auto=false" in commit[:i]


def test_git_calls_skip_optional_locks(git_repo, monkeypatch):
    """status must not take index.lock (it races the workbench's own add+commit)."""
    seen = []
    real = subprocess.run

    def spy(cmd, *a, **kw):
        seen.append((cmd, (kw.get("env") or {}).get("GIT_OPTIONAL_LOCKS")))
        return real(cmd, *a, **kw)

    monkeypatch.setattr(gitops.subprocess, "run", spy)
    gitops.managed_status(git_repo.root)
    assert any("status" in cmd for cmd, _ in seen)
    assert all(flag == "0" for _, flag in seen)


def test_api_sync_waits_for_the_write_lock_then_409s(sandbox, monkeypatch):
    import threading
    import time
    from quarry.ui import app as app_mod
    a, _ = sandbox
    monkeypatch.setattr(app_mod, "SYNC_LOCK_WAIT", 0.3)
    app = create_app(a)
    client = TestClient(app)
    called = []
    monkeypatch.setattr(gitops, "sync", lambda repo: called.append(repo) or gitops.SyncResult(message="synced"))
    app.state.write_lock.acquire()
    try:
        t0 = time.monotonic()
        r = client.post("/api/sync")
        assert time.monotonic() - t0 >= 0.3
        assert r.status_code == 409 and "try again" in r.json()["error"]
        assert called == []
        # Released while waiting: the sync runs.
        threading.Timer(0.1, app.state.write_lock.release).start()
        r = client.post("/api/sync")
        assert r.status_code == 200 and called == [a]
    finally:
        if app.state.write_lock.locked():
            app.state.write_lock.release()
    assert not app.state.write_lock.locked()  # released after the sync
