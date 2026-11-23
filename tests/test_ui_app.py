import json

from fastapi.testclient import TestClient

from quarry.cli import main
from quarry.embeddings import FakeEmbedder
from quarry.indexer import build_index
from quarry.publish import publish
from quarry.ui.app import create_app


def test_root_serves_index_html(repo):
    r = TestClient(create_app(repo.root)).get("/")
    assert r.status_code == 200
    assert "text/html" in r.headers["content-type"]
    assert "<html" in r.text.lower()


def test_status_reports_staleness(repo, tmp_path):
    repo.add_asset("hero", "a1")
    client = TestClient(create_app(repo.root))
    s = client.get("/api/status").json()
    assert s["exports_stale"] is True and s["index_stale"] is True
    assert s["embedder_mode"] is None and s["git"] is None
    publish(repo.root, FakeEmbedder(), tmp_path / "skill")
    s = client.get("/api/status").json()
    assert s["exports_stale"] is False and s["index_stale"] is False
    repo.add_asset("hero", "a2")
    s = client.get("/api/status").json()
    assert s["exports_stale"] is True and s["index_stale"] is True


def test_index_stale_follows_index_not_exports(repo):
    repo.add_asset("hero", "a1")
    client = TestClient(create_app(repo.root, fake_embedder=True))
    assert client.get("/api/status").json()["index_stale"] is True  # no db
    build_index(repo.root, FakeEmbedder())
    s = client.get("/api/status").json()
    assert s["index_stale"] is False and s["exports_stale"] is True  # reindex alone does not publish
    p = repo.root / "library" / "hero" / "a1.json"
    d = json.loads(p.read_text()); d["description"] = "edited"
    p.write_text(json.dumps(d, indent=2))
    assert client.get("/api/status").json()["index_stale"] is True
    assert client.get("/api/search", params={"q": "x"}).json()["stale"] is True
    build_index(repo.root, FakeEmbedder())
    assert client.get("/api/status").json()["index_stale"] is False
    assert client.get("/api/search", params={"q": "x"}).json()["stale"] is False


def test_status_reports_embedder_mode_from_index_meta(repo):
    repo.add_asset("hero", "a1")
    build_index(repo.root, FakeEmbedder())
    assert TestClient(create_app(repo.root)).get("/api/status").json()["embedder_mode"] == "fake"


def test_cli_ui_flag_parsing(monkeypatch, repo):
    calls = {}
    monkeypatch.setattr("quarry.ui.app.serve", lambda root, port, fake: calls.update(root=root, port=port, fake=fake))
    assert main(["ui", "--repo", str(repo.root), "--port", "9000", "--fake-embedder"]) == 0
    assert calls == {"root": repo.root, "port": 9000, "fake": True}
    assert main(["ui", "--repo", str(repo.root)]) == 0
    assert calls["port"] == 8787 and calls["fake"] is False


def test_built_bundle_assets_are_served(repo):
    import re

    client = TestClient(create_app(repo.root))
    html = client.get("/").text
    bundle = re.search(r'src="\./(assets/[^"]+\.js)"', html).group(1)
    r = client.get("/" + bundle)
    assert r.status_code == 200 and "javascript" in r.headers["content-type"]
    assert client.get("/assets/Inter-Regular.woff2").status_code == 200
