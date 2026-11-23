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
