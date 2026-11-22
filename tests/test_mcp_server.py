import importlib.util
import json
from pathlib import Path

import pytest
from PIL import Image as PILImage

from quarry.embeddings import FakeEmbedder
from quarry.indexer import build_index

mcp_image = pytest.importorskip("mcp.server.fastmcp").Image

SERVER = Path(__file__).resolve().parent.parent / "server" / "quarry_mcp.py"


@pytest.fixture
def srv(repo, monkeypatch):
    for cls, id, extra in [
        ("hero", "ok-hero", {"description": "Fuzzball launch banner"}),
        ("hero", "restricted-hero", {"description": "Fuzzball banner", "usage_restrictions": ["partner-only"]}),
        ("hero", "proposed-hero", {"description": "Fuzzball banner", "status": "proposed"}),
        ("hero", "retired-hero", {"description": "Fuzzball banner", "status": "retired"}),
    ]:
        repo.add_asset(cls, id, **extra)
        PILImage.new("RGB", (600, 400), "blue").save(repo.root / "library" / cls / f"{id}.png")
    build_index(repo.root, FakeEmbedder())
    monkeypatch.setenv("QUARRY_REPO", str(repo.root))
    monkeypatch.setenv("QUARRY_FAKE_EMBEDDER", "1")
    spec = importlib.util.spec_from_file_location("quarry_mcp", SERVER)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def test_search_assets_only_servable(srv):
    rows = json.loads(srv.search_assets("fuzzball banner"))
    assert [r["id"] for r in rows] == ["ok-hero"]
    assert set(rows[0]) == {"id", "class", "description", "tags", "aspect", "score"}
    assert rows[0]["class"] == "hero"


def test_more_like_excludes_non_servable(srv, repo):
    repo.add_asset("hero", "second-hero")
    PILImage.new("RGB", (8, 8), "red").save(repo.root / "library" / "hero" / "second-hero.png")
    build_index(repo.root, FakeEmbedder())
    rows = json.loads(srv.more_like("ok-hero"))
    assert [r["id"] for r in rows] == ["second-hero"]


def test_more_like_non_servable_or_unknown_is_error_string(srv):
    assert srv.more_like("restricted-hero").startswith("Error")
    assert srv.more_like("nope").startswith("Error")


def test_get_asset_returns_thumbnail_and_metadata(srv, repo):
    out = srv.get_asset("ok-hero")
    img, meta = out
    assert isinstance(img, mcp_image)
    assert img._format == "webp"
    assert max(PILImage.open(__import__("io").BytesIO(img.data)).size) <= 256
    meta = json.loads(meta)
    full = Path(meta["full_res_path"])
    assert full.is_absolute() and full.exists()
    assert full == repo.root / "library" / "hero" / "ok-hero.png"
    assert meta["id"] == "ok-hero"


@pytest.mark.parametrize("id", ["restricted-hero", "proposed-hero", "retired-hero", "nope"])
def test_get_asset_non_servable_is_error_string(srv, id):
    out = srv.get_asset(id)
    assert isinstance(out, str) and out.startswith("Error")


def test_get_asset_missing_thumb_returns_metadata_only(srv, repo):
    (repo.root / "index" / "thumbs" / "ok-hero.webp").unlink()
    out = srv.get_asset("ok-hero")
    assert len(out) == 1 and json.loads(out[0])["id"] == "ok-hero"


def test_list_vocabulary_has_all_axes(srv):
    vocab = json.loads(srv.list_vocabulary())
    assert set(vocab) == {"products", "categories", "verticals", "concepts", "style"}
    assert "fuzzball" in vocab["products"]


def _call(srv, name, args):
    import asyncio
    return asyncio.run(srv.mcp.call_tool(name, args))


def test_get_asset_through_call_tool_success(srv):
    content = _call(srv, "get_asset", {"asset_id": "ok-hero"})
    content = content[0] if isinstance(content, tuple) else content
    types = [c.type for c in content]
    assert types == ["image", "text"]
    assert content[0].mimeType == "image/webp"
    assert json.loads(content[1].text)["id"] == "ok-hero"


def test_get_asset_through_call_tool_non_servable(srv):
    content = _call(srv, "get_asset", {"asset_id": "restricted-hero"})
    content = content[0] if isinstance(content, tuple) else content
    assert content[0].text.startswith("Error")
