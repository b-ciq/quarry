from fastapi.testclient import TestClient

from quarry.ui.app import create_app


def test_unknown_host_refused(repo):
    c = TestClient(create_app(repo.root))
    assert c.get("/api/status", headers={"host": "evil.example"}).status_code == 400
    assert c.get("/api/status", headers={"host": "127.0.0.1:8787"}).status_code == 200


def test_cross_site_post_refused(git_repo):
    c = TestClient(create_app(git_repo.root))
    r = c.post("/api/ingest", headers={"origin": "https://evil.example"}, data={"asset_class": "hero", "origin": "x"})
    assert r.status_code == 403 and r.json()["error"] == "cross-site request refused"
    assert r.headers["referrer-policy"] == "no-referrer"


def test_same_origin_dev_origin_and_no_origin_allowed(git_repo):
    c = TestClient(create_app(git_repo.root))
    for h in ({}, {"origin": "http://testserver"}, {"origin": "http://localhost:5173"},
              {"origin": "http://127.0.0.1:5173"}):
        assert c.post("/api/ingest", headers=h, data={"asset_class": "hero", "origin": "x"}).status_code == 422


def test_same_origin_includes_port(repo):
    c = TestClient(create_app(repo.root))
    ok = c.patch("/api/nothing", headers={"host": "localhost:9000", "origin": "http://localhost:9000"})
    assert ok.status_code != 403
    bad = c.patch("/api/nothing", headers={"host": "localhost:9000", "origin": "http://localhost:9001"})
    assert bad.status_code == 403


def test_reads_with_foreign_origin_not_blocked(repo):
    c = TestClient(create_app(repo.root))
    assert c.get("/api/status", headers={"origin": "https://evil.example"}).status_code == 200


def test_referrer_policy_header(repo):
    assert TestClient(create_app(repo.root)).get("/").headers["referrer-policy"] == "no-referrer"


def test_referrer_policy_on_static_and_errors(repo):
    c = TestClient(create_app(repo.root))
    assert c.get("/api/does-not-exist").headers["referrer-policy"] == "no-referrer"
    assert c.get("/api/status", headers={"host": "evil.example"}).headers["referrer-policy"] == "no-referrer"
    from quarry.ui.app import STATIC_DIR
    assets = STATIC_DIR / "assets"
    if assets.is_dir():
        f = next((p for p in assets.iterdir() if p.is_file()), None)
        if f:
            r = c.get(f"/assets/{f.name}")
            assert r.status_code == 200 and r.headers["referrer-policy"] == "no-referrer"
