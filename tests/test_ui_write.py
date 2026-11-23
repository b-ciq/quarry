import json

from fastapi.testclient import TestClient

from quarry.ui.app import create_app


def _client(repo):
    return TestClient(create_app(repo.root))


def _commit(repo, *names):
    """add the named asset(s) then commit, so the tree starts clean."""
    repo.git("add", "-A")
    repo.git("commit", "-q", "-m", "seed")


def _log(repo):
    return repo.git("log", "--format=%H %s")


def test_patch_description_writes_commits_and_refreshes_cache(git_repo):
    path = git_repo.add_asset("hero", "h1")
    _commit(git_repo)
    c = _client(git_repo)
    r = c.patch("/api/assets/h1", json={"description": "New words", "products": ["rlc-pro"]})
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["asset"]["description"] == "New words" and body["asset"]["products"] == ["rlc-pro"]
    text = path.read_text()
    assert text == json.dumps(json.loads(text), indent=2) + "\n"
    assert git_repo.git("log", "-1", "--format=%s") == "curate: retag h1\n"
    assert body["commit"] == git_repo.git("rev-parse", "HEAD").strip()
    assert c.get("/api/assets/h1").json()["description"] == "New words"
    assert git_repo.git("status", "--porcelain") == ""


def test_patch_preserves_key_order(git_repo):
    path = git_repo.add_asset("hero", "h1")
    _commit(git_repo)
    before = list(json.loads(path.read_text()))
    _client(git_repo).patch("/api/assets/h1", json={"description": "x"})
    assert list(json.loads(path.read_text())) == before


def test_invalid_patch_leaves_file_and_git_untouched(git_repo):
    path = git_repo.add_asset("hero", "h1")
    _commit(git_repo)
    before, log = path.read_bytes(), _log(git_repo)
    r = _client(git_repo).patch("/api/assets/h1", json={"products": ["no-such-product"]})
    assert r.status_code == 422
    assert "products: unknown slug 'no-such-product'" in r.json()["errors"]
    assert path.read_bytes() == before
    assert _log(git_repo) == log
    assert git_repo.git("status", "--porcelain") == ""


def test_immutable_and_unknown_fields_422(git_repo):
    path = git_repo.add_asset("hero", "h1")
    _commit(git_repo)
    before, log = path.read_bytes(), _log(git_repo)
    c = _client(git_repo)
    for field in ("id", "file", "class", "source", "status", "bogus"):
        r = c.patch("/api/assets/h1", json={field: "x"})
        assert r.status_code == 422, field
        assert field in r.json()["error"]
    assert path.read_bytes() == before and _log(git_repo) == log


def test_patch_unknown_asset_404(git_repo):
    assert _client(git_repo).patch("/api/assets/nope", json={"description": "x"}).status_code == 404


def test_confirm_toneless_background_blocked_with_validator_strings(git_repo):
    path = git_repo.add_asset("background", "bg1", status="proposed", tone="dark")
    d = json.loads(path.read_text())
    d.pop("tone")
    path.write_text(json.dumps(d, indent=2) + "\n")
    _commit(git_repo)
    before, log = path.read_bytes(), _log(git_repo)
    r = _client(git_repo).post("/api/assets/bg1/confirm")
    assert r.status_code == 422
    assert r.json()["errors"] == ["tone: required (dark|light) for background"]
    assert path.read_bytes() == before and _log(git_repo) == log
    assert json.loads(path.read_text())["status"] == "proposed"


def test_confirm_valid_proposed(git_repo):
    path = git_repo.add_asset("hero", "h1", status="proposed")
    _commit(git_repo)
    r = _client(git_repo).post("/api/assets/h1/confirm")
    assert r.status_code == 200, r.text
    assert r.json()["asset"]["status"] == "confirmed"
    assert json.loads(path.read_text())["status"] == "confirmed"
    assert git_repo.git("log", "-1", "--format=%s") == "curate: confirm h1\n"


def test_retire_then_restore(git_repo):
    path = git_repo.add_asset("hero", "h1")
    img = path.with_suffix(".png")
    _commit(git_repo)
    c = _client(git_repo)
    r = c.post("/api/assets/h1/retire")
    assert r.status_code == 200 and r.json()["asset"]["status"] == "retired"
    assert path.exists() and img.exists()
    assert git_repo.git("log", "-1", "--format=%s") == "curate: retire h1\n"
    r = c.post("/api/assets/h1/restore")
    assert r.status_code == 200 and r.json()["asset"]["status"] == "confirmed"
    assert git_repo.git("log", "-1", "--format=%s") == "curate: restore h1\n"


def test_restore_revalidates(git_repo):
    path = git_repo.add_asset("hero", "h1", status="retired", products=["gone-product"])
    _commit(git_repo)
    log = _log(git_repo)
    r = _client(git_repo).post("/api/assets/h1/restore")
    assert r.status_code == 422
    assert "products: unknown slug 'gone-product'" in r.json()["errors"]
    assert _log(git_repo) == log


def test_wrong_state_transitions_409(git_repo):
    git_repo.add_asset("hero", "conf")
    git_repo.add_asset("hero", "ret", status="retired")
    _commit(git_repo)
    c = _client(git_repo)
    assert c.post("/api/assets/conf/confirm").status_code == 409
    assert c.post("/api/assets/conf/restore").status_code == 409
    assert c.post("/api/assets/ret/retire").status_code == 409


def test_dirty_managed_blocks_all_writes_with_409(git_repo):
    git_repo.add_asset("hero", "h1")
    git_repo.add_asset("hero", "h2", status="proposed")
    _commit(git_repo)
    (git_repo.root / "library" / "hero" / "h2.json").write_text("{}\n")  # uncommitted managed edit
    c = _client(git_repo)
    log = _log(git_repo)
    for method, url, kw in [("patch", "/api/assets/h1", {"json": {"description": "x"}}),
                            ("post", "/api/assets/h1/confirm", {}),
                            ("post", "/api/assets/h1/retire", {}),
                            ("post", "/api/assets/h1/restore", {})]:
        r = getattr(c, method)(url, **kw)
        assert r.status_code == 409, url
        assert "library/hero/h2.json" in r.json()["dirty_managed"]
    assert _log(git_repo) == log


def test_unrelated_dirt_does_not_block_or_get_committed(git_repo):
    git_repo.add_asset("hero", "h1")
    _commit(git_repo)
    (git_repo.root / "notes.txt").write_text("scratch")
    r = _client(git_repo).patch("/api/assets/h1", json={"description": "x"})
    assert r.status_code == 200
    assert git_repo.git("show", "--name-only", "--format=", "HEAD").split() == ["library/hero/h1.json"]
    assert "notes.txt" in git_repo.git("status", "--porcelain")
