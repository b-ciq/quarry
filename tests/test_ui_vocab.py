import json

import pytest
from fastapi.testclient import TestClient

from quarry.ui import vocab_api
from quarry.ui.app import create_app
from test_ui_gitops import sandbox, git, _push_b_edit  # noqa: F401  (two-clone fixture)


def _client(root):
    return TestClient(create_app(root))


def _seed(repo, *assets):
    for cls, id, kw in assets:
        repo.add_asset(cls, id, **kw)
    repo.git("add", "-A")
    repo.git("commit", "-q", "-m", "seed")


def _n_commits(repo):
    return int(repo.git("rev-list", "--count", "HEAD"))


def _side(repo, cls, id):
    return json.loads((repo.root / "library" / cls / f"{id}.json").read_text())


def test_add_slug_then_patch_asset_with_it(git_repo):
    _seed(git_repo, ("hero", "h1", {}))
    c = _client(git_repo.root)
    r = c.post("/api/vocabulary/concepts", json={"slug": "brand-new"})
    assert r.status_code == 200, r.text
    assert git_repo.git("log", "-1", "--format=%s") == "vocab: add brand-new\n"
    assert git_repo.git("show", "--stat", "--format=", "HEAD").count("|") == 1
    assert c.patch("/api/assets/h1", json={"concepts": ["brand-new"]}).status_code == 200
    assert c.post("/api/vocabulary/concepts", json={"slug": "brand-new"}).status_code == 409
    assert c.post("/api/vocabulary/concepts", json={"slug": "Bad Slug"}).status_code == 422
    assert c.post("/api/vocabulary/nope", json={"slug": "x"}).status_code == 404


def test_merge_atomic_single_commit_all_carriers(git_repo):
    _seed(git_repo,
          ("hero", "c1", {"concepts": ["research"], "status": "confirmed"}),
          ("hero", "c2", {"concepts": ["science"], "status": "retired"}),
          ("hero", "c3", {"concepts": ["research", "compute"], "status": "proposed"}),
          ("hero", "c4", {"concepts": ["research", "science"]}),
          ("hero", "other", {"concepts": ["compute"]}))
    before = _n_commits(git_repo)
    r = _client(git_repo.root).post("/api/vocabulary/concepts/research/merge", json={"into": "science"})
    assert r.status_code == 200, r.text
    assert sorted(r.json()["rewritten"]) == ["c1", "c3", "c4"]
    assert _n_commits(git_repo) == before + 1
    stat = git_repo.git("show", "--name-only", "--format=", "HEAD").split()
    assert sorted(stat) == sorted(["taxonomy/vocabulary.json", "library/hero/c1.json",
                                   "library/hero/c3.json", "library/hero/c4.json"])
    assert git_repo.git("log", "-1", "--format=%s") == "vocab: merge research into science\n"
    assert _side(git_repo, "hero", "c4")["concepts"] == ["science"]
    assert _side(git_repo, "hero", "c3")["concepts"] == ["science", "compute"]
    assert _side(git_repo, "hero", "c3")["status"] == "proposed"
    vocab = json.loads((git_repo.root / "taxonomy/vocabulary.json").read_text())
    assert "research" not in vocab["concepts"] and "science" in vocab["concepts"]
    assert git_repo.git("status", "--porcelain") == ""


def test_merge_retired_carrier_included(git_repo):
    _seed(git_repo, ("hero", "r1", {"concepts": ["research"], "status": "retired"}))
    r = _client(git_repo.root).post("/api/vocabulary/concepts/research/merge", json={"into": "science"})
    assert r.json()["rewritten"] == ["r1"]


def test_merge_mid_failure_leaves_tree_clean(git_repo, monkeypatch):
    _seed(git_repo,
          ("hero", "c1", {"concepts": ["research"]}),
          ("hero", "c2", {"concepts": ["research"]}),
          ("hero", "c3", {"concepts": ["research"]}))
    before, head = _n_commits(git_repo), git_repo.git("rev-parse", "HEAD")
    real, calls = vocab_api._write_text, []

    def flaky(path, text):
        calls.append(path)
        if len(calls) == 2:
            raise OSError("disk full")
        real(path, text)

    monkeypatch.setattr(vocab_api, "_write_text", flaky)
    r = _client(git_repo.root).post("/api/vocabulary/concepts/research/merge", json={"into": "science"})
    assert r.status_code == 500 and len(calls) == 2
    assert git_repo.git("status", "--porcelain") == ""
    assert _n_commits(git_repo) == before and git_repo.git("rev-parse", "HEAD") == head


def test_rename_rewrites_carriers_one_commit(git_repo):
    _seed(git_repo, ("hero", "c1", {"concepts": ["research", "compute"]}))
    before = _n_commits(git_repo)
    r = _client(git_repo.root).post("/api/vocabulary/concepts/research/rename", json={"new": "inquiry"})
    assert r.status_code == 200 and r.json()["rewritten"] == ["c1"]
    assert _n_commits(git_repo) == before + 1
    assert _side(git_repo, "hero", "c1")["concepts"] == ["inquiry", "compute"]
    assert git_repo.git("log", "-1", "--format=%s") == "vocab: rename research to inquiry\n"


def test_rename_to_existing_409(git_repo):
    r = _client(git_repo.root).post("/api/vocabulary/concepts/research/rename", json={"new": "science"})
    assert r.status_code == 409 and "merge" in r.json()["error"]


def test_delete_in_use_409_unused_ok(git_repo):
    _seed(git_repo, ("hero", "c1", {"concepts": ["research"]}))
    c = _client(git_repo.root)
    head = git_repo.git("rev-parse", "HEAD")
    assert c.delete("/api/vocabulary/concepts/research").status_code == 409
    assert git_repo.git("rev-parse", "HEAD") == head
    r = c.delete("/api/vocabulary/concepts/science")
    assert r.status_code == 200
    assert "science" not in json.loads((git_repo.root / "taxonomy/vocabulary.json").read_text())["concepts"]


def test_dirty_managed_blocks_vocab_mutation(git_repo):
    _seed(git_repo, ("hero", "c1", {}))
    p = git_repo.root / "library/hero/c1.json"
    p.write_text(p.read_text() + " ")
    r = _client(git_repo.root).post("/api/vocabulary/concepts", json={"slug": "zzz"})
    assert r.status_code == 409


def test_sync_first_sees_remote_vocab_edit(sandbox):
    a, b = sandbox
    vb = b / "taxonomy/vocabulary.json"
    d = json.loads(vb.read_text())
    d["concepts"].append("from-b")
    vb.write_text(json.dumps(d, indent=2) + "\n")
    git(b, "add", "taxonomy"); git(b, "commit", "-m", "b vocab"); git(b, "push")
    r = _client(a).post("/api/vocabulary/concepts", json={"slug": "from-a"})
    assert r.status_code == 200, r.text
    got = json.loads((a / "taxonomy/vocabulary.json").read_text())["concepts"]
    assert "from-b" in got and "from-a" in got


def test_sync_conflict_409(sandbox):
    a, b = sandbox
    for root, slug in ((b, "x-b"), (a, "x-a")):
        v = root / "taxonomy/vocabulary.json"
        d = json.loads(v.read_text()); d["style"].append(slug)
        v.write_text(json.dumps(d, indent=2) + "\n")
        git(root, "add", "taxonomy"); git(root, "commit", "-m", slug)
    git(b, "push")
    r = _client(a).post("/api/vocabulary/concepts", json={"slug": "other"})
    assert r.status_code == 409 and "agent" in r.json()["error"]
    assert git(a, "status", "--porcelain") == ""


# --- Inspiration tags follow vocabulary changes ---

def _insp(git_repo, tmp_path, monkeypatch, *, style=("form-wave-flow",), on=True):
    from inspiration_helpers import make_record
    from quarry.inspiration_store import Store
    if not on:
        return None, None
    r = tmp_path / "insp_root"
    r.mkdir()
    monkeypatch.setenv("QUARRY_INSPIRATION_DIR", str(r))
    store = Store(r)
    rec = make_record("AAA")
    rec["style"] = list(style)
    rec["bot"] = {"applied": {"description": "", "style": list(style), "concepts": []}}
    store.write(rec)
    return store, rec["id"]


def test_rename_rewrites_inspiration_and_bot_applied(git_repo, tmp_path, monkeypatch):
    store, id_ = _insp(git_repo, tmp_path, monkeypatch)
    r = _client(git_repo.root).post("/api/vocabulary/style/form-wave-flow/rename", json={"new": "form-ripple"})
    assert r.status_code == 200, r.text
    assert r.json()["inspiration_rewritten"] == [id_]
    assert r.json()["inspiration_failed"] == []
    rec = store.read(id_)
    assert rec["style"] == ["form-ripple"]
    assert rec["bot"]["applied"]["style"] == ["form-ripple"]


def test_merge_rewrites_inspiration(git_repo, tmp_path, monkeypatch):
    store, id_ = _insp(git_repo, tmp_path, monkeypatch, style=("form-wave-flow", "form-light-trails"))
    r = _client(git_repo.root).post("/api/vocabulary/style/form-wave-flow/merge", json={"into": "form-light-trails"})
    assert r.status_code == 200, r.text
    rec = store.read(id_)
    assert rec["style"] == ["form-light-trails"]
    assert rec["bot"]["applied"]["style"] == ["form-light-trails"]


def test_delete_blocked_by_inspiration_usage(git_repo, tmp_path, monkeypatch):
    store, id_ = _insp(git_repo, tmp_path, monkeypatch)
    r = _client(git_repo.root).delete("/api/vocabulary/style/form-wave-flow")
    assert r.status_code == 409
    assert id_ in r.json()["usage"]
    assert "form-wave-flow" in (git_repo.root / "taxonomy" / "vocabulary.json").read_text()


def test_inspiration_off_vocab_ops_still_work(git_repo):
    r = _client(git_repo.root).post("/api/vocabulary/style/form-wave-flow/rename", json={"new": "form-ripple"})
    assert r.status_code == 200, r.text
    assert r.json()["inspiration_rewritten"] == []
    assert r.json()["inspiration_failed"] == []


def test_list_hides_unknown_slugs(git_repo, tmp_path, monkeypatch):
    from inspiration_helpers import item
    store, id_ = _insp(git_repo, tmp_path, monkeypatch, style=("form-wave-flow", "form-gone"))
    rec = store.read(id_)
    rec["capture"]["items"] = [item(1)]
    rec["capture"]["status"] = "captured"
    store.write(rec)
    (store.dir / id_ / "01.jpg").write_bytes(b"img")
    items = _client(git_repo.root).get("/api/inspiration").json()["items"]
    assert items[0]["style"] == ["form-wave-flow"]


def test_post_commit_inspiration_crash_still_succeeds(git_repo, tmp_path, monkeypatch):
    store, id_ = _insp(git_repo, tmp_path, monkeypatch)
    c = _client(git_repo.root)
    real = vocab_api._carriers_in
    calls = []

    def flaky(*a):
        calls.append(1)
        if len(calls) > 1:  # first call is the pre-commit check
            raise RuntimeError("drive vanished")
        return real(*a)
    monkeypatch.setattr(vocab_api, "_carriers_in", flaky)
    r = c.post("/api/vocabulary/style/form-wave-flow/rename", json={"new": "form-ripple"})
    assert r.status_code == 200, r.text
    assert r.json()["commit"]
    assert r.json()["inspiration_failed"]
    assert git_repo.git("log", "-1", "--format=%s") == "vocab: rename form-wave-flow to form-ripple\n"


def test_unavailable_store_scan_does_not_block_vocab_ops(git_repo, tmp_path, monkeypatch):
    store, _ = _insp(git_repo, tmp_path, monkeypatch)
    c = _client(git_repo.root)
    monkeypatch.setattr(type(store), "scan", lambda self: (_ for _ in ()).throw(OSError("offline")))
    r = c.post("/api/vocabulary/style/form-wave-flow/rename", json={"new": "form-ripple"})
    assert r.status_code == 200, r.text
    assert r.json()["inspiration_rewritten"] == []
    assert r.json()["inspiration_failed"]  # the post-commit rewrite could not scan


def test_failed_record_write_is_reported_not_rolled_back(git_repo, tmp_path, monkeypatch):
    store, id_ = _insp(git_repo, tmp_path, monkeypatch)
    c = _client(git_repo.root)

    def boom(self, rec):
        raise OSError("disk full")
    monkeypatch.setattr(type(store), "write", boom)
    r = c.post("/api/vocabulary/style/form-wave-flow/rename", json={"new": "form-ripple"})
    assert r.status_code == 200, r.text
    assert r.json()["inspiration_failed"] == [f"{id_}: disk full"]
    assert r.json()["inspiration_rewritten"] == []
    assert "form-ripple" in (git_repo.root / "taxonomy" / "vocabulary.json").read_text()


def test_rename_concepts_axis_rewrites_inspiration(git_repo, tmp_path, monkeypatch):
    store, id_ = _insp(git_repo, tmp_path, monkeypatch, style=())
    rec = store.read(id_)
    rec["concepts"] = ["research"]
    rec["bot"]["applied"]["concepts"] = ["research"]
    store.write(rec)
    r = _client(git_repo.root).post("/api/vocabulary/concepts/research/rename", json={"new": "inquiry"})
    assert r.status_code == 200, r.text
    assert r.json()["inspiration_rewritten"] == [id_]
    rec = store.read(id_)
    assert rec["concepts"] == ["inquiry"] and rec["bot"]["applied"]["concepts"] == ["inquiry"]
