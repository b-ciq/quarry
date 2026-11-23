"""Anti-examples: confirmed assets that show what NOT to do. Never servable; findable on their own."""
import json

import pytest
from PIL import Image

from quarry import schema
from quarry.cli import main
from quarry.embeddings import FakeEmbedder
from quarry.export_deck import build_manifest
from quarry.indexer import build_index
from quarry.ingest import ingest_dir
from quarry.search import nearest_anti_examples, search
from quarry.vocabulary import load_vocabulary

ANTI = {"anti_example": True, "avoid_reason": "Glossy 3D clip-art with lens flare; reads as generic stock."}


def check(repo, path):
    return schema.validate_sidecar(json.loads(path.read_text()), load_vocabulary(repo.root))


def _img(repo, cls, id, color):
    Image.new("RGB", (8, 8), color).save(repo.root / "library" / cls / f"{id}.png")


# --- schema -----------------------------------------------------------------

def test_confirmed_anti_example_is_valid(repo):
    assert check(repo, repo.add_asset("hero", "bad-hero", **ANTI)) == []


def test_confirmed_anti_example_needs_a_reason(repo, drop):
    p = repo.add_asset("hero", "bad-hero", anti_example=True, avoid_reason=drop)
    assert any("avoid_reason" in e for e in check(repo, p))
    p = repo.add_asset("hero", "bad-hero-2", anti_example=True, avoid_reason="  ")
    assert any("avoid_reason" in e for e in check(repo, p))


def test_anti_example_does_not_need_a_license(repo):
    # Reference-only: never placed in a deck, so a missing stock license id must not block it.
    assert check(repo, repo.add_asset("hero", "bad-hero", license="", **ANTI)) == []


def test_anti_example_must_be_boolean(repo):
    p = repo.add_asset("hero", "bad-hero", anti_example="yes", avoid_reason="x")
    assert any("anti_example" in e for e in check(repo, p))


def test_avoid_reason_only_on_anti_examples(repo):
    p = repo.add_asset("hero", "ok-hero", avoid_reason="stray")
    assert any("avoid_reason" in e for e in check(repo, p))


def test_proposed_anti_example_may_lack_reason(repo):
    p = repo.add_asset("hero", "bad-hero", status="proposed", anti_example=True)
    assert check(repo, p) == []


def test_servability_and_anti_example_helpers(repo):
    assert not schema.is_servable({"status": "confirmed", "usage_restrictions": [], **ANTI})
    assert schema.is_anti_example({"status": "confirmed", **ANTI})
    assert not schema.is_anti_example({"status": "proposed", **ANTI})
    assert not schema.is_anti_example({"status": "retired", **ANTI})
    assert not schema.is_anti_example({"status": "confirmed"})


# --- search / export ---------------------------------------------------------

@pytest.fixture
def lib(repo):
    repo.add_asset("hero", "good-hero", description="Fuzzball launch banner, flat duotone")
    repo.add_asset("hero", "bad-hero", description="Fuzzball banner, glossy 3D render", **ANTI)
    repo.add_asset("hero", "draft-bad", status="proposed", description="Fuzzball banner draft",
                   anti_example=True)
    _img(repo, "hero", "good-hero", "blue")
    _img(repo, "hero", "bad-hero", "red")
    _img(repo, "hero", "draft-bad", "green")
    build_index(repo.root, FakeEmbedder())
    return repo


def test_default_search_never_returns_anti_examples(lib):
    hits = search(lib.root, FakeEmbedder(), "fuzzball banner")
    assert [h.id for h in hits] == ["good-hero"]


def test_anti_search_returns_only_confirmed_anti_examples(lib):
    hits = search(lib.root, FakeEmbedder(), "fuzzball banner", anti=True)
    assert [h.id for h in hits] == ["bad-hero"]
    assert [h.id for h in search(lib.root, FakeEmbedder(), None, anti=True)] == ["bad-hero"]


def test_nearest_anti_examples_flags_a_lookalike(lib, tmp_path):
    # The fake embedder hashes file bytes, so an identical file is a perfect style match.
    probe = tmp_path / "probe.png"
    probe.write_bytes((lib.root / "library" / "hero" / "bad-hero.png").read_bytes())
    hits = nearest_anti_examples(lib.root, FakeEmbedder(), probe)
    assert [h.id for h in hits] == ["bad-hero"]
    assert hits[0].score == pytest.approx(1.0, abs=1e-5)


def test_nearest_anti_examples_empty_without_anti_examples(repo, tmp_path):
    repo.add_asset("hero", "good-hero")
    build_index(repo.root, FakeEmbedder())
    probe = tmp_path / "probe.png"
    Image.new("RGB", (8, 8), "red").save(probe)
    assert nearest_anti_examples(repo.root, FakeEmbedder(), probe) == []


def test_deck_export_excludes_anti_examples(lib):
    assert [i["id"] for i in build_manifest(lib.root)["images"]] == ["good-hero"]


# --- ingest / CLI ------------------------------------------------------------

def test_ingest_can_mark_anti_examples(repo, tmp_path):
    drop = tmp_path / "drop"
    drop.mkdir()
    Image.new("RGB", (4, 2), "red").save(drop / "glossy.png")
    res = ingest_dir(drop, repo.root, "hero", "midjourney", anti_example=True)
    sc = json.loads(res.created[0].read_text())
    assert sc["anti_example"] is True and sc["status"] == "proposed"
    assert "avoid_reason" not in sc


def test_cli_search_anti_and_check_image(lib, tmp_path, capsys):
    assert main(["search", "fuzzball", "--anti", "--fake-embedder", "--repo", str(lib.root)]) == 0
    out = capsys.readouterr().out
    assert "bad-hero" in out and "good-hero" not in out

    probe = tmp_path / "probe.png"
    probe.write_bytes((lib.root / "library" / "hero" / "bad-hero.png").read_bytes())
    assert main(["check-image", str(probe), "--fake-embedder", "--repo", str(lib.root)]) == 0
    out = capsys.readouterr().out
    assert "bad-hero" in out and "Glossy 3D clip-art" in out


# --- MCP ---------------------------------------------------------------------

@pytest.fixture
def srv(lib, monkeypatch):
    pytest.importorskip("mcp.server.fastmcp")
    import importlib.util
    from pathlib import Path
    server = Path(__file__).resolve().parent.parent / "server" / "quarry_mcp.py"
    monkeypatch.setenv("QUARRY_REPO", str(lib.root))
    monkeypatch.setenv("QUARRY_FAKE_EMBEDDER", "1")
    spec = importlib.util.spec_from_file_location("quarry_mcp", server)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def test_mcp_servable_tools_hide_anti_examples(srv):
    assert [r["id"] for r in json.loads(srv.search_assets("fuzzball banner"))] == ["good-hero"]
    assert srv.get_asset("bad-hero").startswith("Error:")


def test_mcp_search_and_get_anti_examples(srv):
    rows = json.loads(srv.search_anti_examples())
    assert [r["id"] for r in rows] == ["bad-hero"]
    assert rows[0]["avoid_reason"].startswith("Glossy 3D")
    out = srv.get_anti_example("bad-hero")
    assert json.loads(out[-1])["avoid_reason"].startswith("Glossy 3D")
    assert srv.get_anti_example("good-hero").startswith("Error:")
    assert srv.get_anti_example("draft-bad").startswith("Error:")


def test_mcp_check_against_anti_examples(srv, lib):
    probe = lib.root / "library" / "hero" / "bad-hero.png"
    rows = json.loads(srv.check_against_anti_examples(str(probe)))
    assert rows[0]["id"] == "bad-hero" and rows[0]["score"] == pytest.approx(1.0, abs=1e-4)
    assert srv.check_against_anti_examples("/nope.png").startswith("Error:")


# --- workbench API -----------------------------------------------------------

def _ui(git_repo):
    pytest.importorskip("fastapi")
    from fastapi.testclient import TestClient
    from quarry.ui.app import create_app
    git_repo.git("add", "-A")
    git_repo.git("commit", "-q", "--allow-empty", "-m", "seed")
    return TestClient(create_app(git_repo.root))


def test_ui_marks_and_unmarks_anti_example(git_repo):
    path = git_repo.add_asset("hero", "h1")
    c = _ui(git_repo)
    r = c.patch("/api/assets/h1", json={"anti_example": True})
    assert r.status_code == 422 and any("avoid_reason" in e for e in r.json()["errors"])
    r = c.patch("/api/assets/h1", json={"anti_example": True, "avoid_reason": "Too busy"})
    assert r.status_code == 200, r.text
    assert json.loads(path.read_text())["avoid_reason"] == "Too busy"
    r = c.patch("/api/assets/h1", json={"anti_example": False})
    assert r.status_code == 200, r.text
    sc = json.loads(path.read_text())
    assert "anti_example" not in sc and "avoid_reason" not in sc


def test_ui_ingest_anti_examples(git_repo):
    import io
    c = _ui(git_repo)
    buf = io.BytesIO()
    Image.new("RGB", (4, 2), "red").save(buf, "PNG")
    r = c.post("/api/ingest", data={"asset_class": "hero", "origin": "midjourney", "anti_example": "true"},
               files=[("files", ("glossy.png", io.BytesIO(buf.getvalue()), "image/png"))])
    assert r.status_code == 200, r.text
    assert c.get("/api/assets/glossy").json()["anti_example"] is True
    assert "anti-examples" in git_repo.git("log", "-1", "--format=%s")
