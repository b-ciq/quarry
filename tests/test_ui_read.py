import os
import time

from fastapi.testclient import TestClient

from quarry.embeddings import FakeEmbedder
from quarry.indexer import build_index
from quarry.ui.app import create_app


def _client(repo, **kw):
    return TestClient(create_app(repo.root, **kw))


def _seed(repo):
    repo.add_asset("hero", "h-rlc", products=["rlc-pro"], description="Fuzzball launch hero", concepts=["research"])
    repo.add_asset("hero", "h-prop", status="proposed", products=["fuzzball"])
    repo.add_asset("lifestyle", "l-ret", status="retired", products=["rlc-pro"])
    repo.add_asset("background", "bg-dark", tone="dark")
    repo.add_asset("background", "bg-light", tone="light")


def test_assets_list_includes_all_statuses(repo):
    _seed(repo)
    body = _client(repo).get("/api/assets").json()
    assert [a["id"] for a in body] == ["bg-dark", "bg-light", "h-prop", "h-rlc", "l-ret"]
    a = body[3]
    assert a["thumb_url"] == "/thumbs/h-rlc.webp" and a["full_url"] == "/files/h-rlc"
    assert a["description"] == "Fuzzball launch hero"


def test_filters_narrow(repo):
    _seed(repo)
    c = _client(repo)
    ids = lambda **p: [a["id"] for a in c.get("/api/assets", params=p).json()]
    assert ids(**{"class": "hero"}) == ["h-prop", "h-rlc"]
    assert ids(**{"class": "hero", "status": "proposed"}) == ["h-prop"]
    assert ids(product="rlc-pro") == ["h-rlc", "l-ret"]
    assert ids(product="rlc-pro", status="retired") == ["l-ret"]
    assert ids(tone="light") == ["bg-light"]
    assert ids(tag="research") == ["h-rlc"]
    assert ids(product="nope") == []


def test_q_substring(repo):
    _seed(repo)
    c = _client(repo)
    assert [a["id"] for a in c.get("/api/assets", params={"q": "FUZZBALL launch"}).json()] == ["h-rlc"]
    assert [a["id"] for a in c.get("/api/assets", params={"q": "bg-li"}).json()] == ["bg-light"]
    assert [a["id"] for a in c.get("/api/assets", params={"q": "rlc-pro"}).json()] == ["h-rlc", "l-ret"]


def test_cache_invalidates_on_external_edit(repo):
    _seed(repo)
    c = _client(repo)
    assert c.get("/api/assets/h-rlc").json()["description"] == "Fuzzball launch hero"
    p = repo.add_asset("hero", "h-rlc", description="edited")
    st = p.stat()
    os.utime(p, (st.st_atime, st.st_mtime + 5))
    assert c.get("/api/assets/h-rlc").json()["description"] == "edited"
    repo.add_asset("hero", "brand-new")
    assert "brand-new" in [a["id"] for a in c.get("/api/assets").json()]
    p.with_suffix(".json").unlink()
    p.with_suffix(".png").unlink()
    assert c.get("/api/assets/h-rlc").status_code == 404


def test_unknown_id_404_json(repo):
    _seed(repo)
    c = _client(repo)
    for url in ("/api/assets/nope", "/api/assets/nope/similar", "/files/nope", "/thumbs/nope.webp"):
        r = c.get(url)
        assert r.status_code == 404, url
        assert "error" in r.json() or "detail" in r.json()


def test_traversal_not_served(repo):
    _seed(repo)
    c = _client(repo)
    assert c.get("/files/..%2F..%2Fetc%2Fpasswd").status_code == 404
    assert c.get("/thumbs/..%2Fx.webp").status_code == 404


def test_files_serves_nonservable(repo):
    _seed(repo)
    c = _client(repo)
    for i in ("h-rlc", "h-prop", "l-ret"):
        r = c.get(f"/files/{i}")
        assert r.status_code == 200 and r.content.startswith(b"\x89PNG")


def test_vocabulary(repo):
    v = _client(repo).get("/api/vocabulary").json()
    assert set(v) == {"products", "categories", "verticals", "concepts", "style"}


def test_index_missing_errors(repo):
    _seed(repo)
    c = _client(repo, fake_embedder=True)
    r = c.get("/api/assets/h-rlc/similar")
    assert r.status_code == 409 and "error" in r.json()
    r = c.get("/api/search", params={"q": "fuzzball"})
    assert r.status_code == 409 and "error" in r.json()
    assert c.get("/thumbs/h-rlc.webp").status_code == 404


def test_index_backed(repo):
    _seed(repo)
    build_index(repo.root, FakeEmbedder())
    c = _client(repo, fake_embedder=True)
    assert c.get("/thumbs/h-rlc.webp").status_code == 200
    r = c.get("/api/assets/h-rlc/similar", params={"limit": 3}).json()
    ids = [h["id"] for h in r]
    assert "h-rlc" not in ids and len(ids) == 3
    assert "h-prop" in [h["id"] for h in c.get("/api/assets/h-rlc/similar").json()]  # non-servable visible
    s = c.get("/api/search", params={"q": "fuzzball launch"}).json()
    assert s["stale"] in (True, False)
    assert s["hits"][0]["id"] == "h-rlc"
    assert s["hits"][0]["thumb_url"] == "/thumbs/h-rlc.webp"
    assert c.get("/api/search", params={"q": "x"}).status_code == 200
    assert c.get("/api/search").status_code in (200, 422)
