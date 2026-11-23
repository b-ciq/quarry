import json
import sqlite3

import pytest
import sqlite_vec
from PIL import Image

from quarry.embeddings import FakeEmbedder
from quarry.indexer import IndexBuildError, build_index
from quarry.library import scan_library


def _conn(db):
    c = sqlite3.connect(db)
    c.enable_load_extension(True)
    sqlite_vec.load(c)
    c.enable_load_extension(False)
    return c


def _populate(repo):
    repo.add_asset("hero", "alpha", description="Glowing network of nodes", products=["rlc-pro"],
                   concepts=["research"])
    repo.add_asset("background", "beta", status="proposed")
    repo.add_asset("diagram", "gamma", status="retired", usage_restrictions=["internal"])


def test_scan_library(repo):
    _populate(repo)
    assets = scan_library(repo.root)
    assert [a.id for a in assets] == ["alpha", "beta", "gamma"]
    assert assets[0].path.name == "alpha.png" and assets[0].sidecar["class"] == "hero"


def test_build_creates_db_thumbs_and_tables(repo):
    _populate(repo)
    Image.new("RGB", (8, 8), "blue").save(repo.root / "library" / "background" / "beta.png")  # distinct bytes
    stats = build_index(repo.root, FakeEmbedder(dim=16))
    assert (stats.indexed, stats.thumbnailed) == (3, 3)
    db = repo.root / "index" / "library.db"
    assert db.exists()
    for id_ in ("alpha", "beta", "gamma"):
        assert (repo.root / "index" / "thumbs" / f"{id_}.webp").exists()
    c = _conn(db)
    assert c.execute("select count(*) from assets").fetchone()[0] == 3
    assert c.execute("select count(*) from assets_fts").fetchone()[0] == 3
    assert c.execute("select count(*) from vec_retrieval").fetchone()[0] == 3
    assert c.execute("select count(*) from vec_style").fetchone()[0] == 3
    assert json.loads(c.execute("select json from assets where id='beta'").fetchone()[0])["status"] == "proposed"
    # FTS searches description and tags
    for q in ('"rlc-pro"', "glowing", "research"):
        assert c.execute("select id from assets_fts where assets_fts match ?", (q,)).fetchall() == [("alpha",)]
    # vector search returns the asset's own embedding as nearest neighbour
    q = FakeEmbedder(dim=16).embed_image_retrieval(repo.root / "library" / "background" / "beta.png")
    row = c.execute("select id from vec_retrieval where v match ? and k = 1", (q.tobytes(),)).fetchone()
    assert row[0] == "beta"


def test_thumbnail_preserves_aspect_and_caps_256(repo):
    p = repo.add_asset("hero", "wide")
    Image.new("RGB", (1000, 500), "red").save(p.with_suffix(".png"))
    build_index(repo.root, FakeEmbedder())
    with Image.open(repo.root / "index" / "thumbs" / "wide.webp") as im:
        assert im.size == (256, 128)


def test_rebuild_deterministic_and_replaces_existing(repo):
    _populate(repo)
    e = FakeEmbedder()
    build_index(repo.root, e)
    db = repo.root / "index" / "library.db"
    db.unlink()
    s = build_index(repo.root, e)
    assert s.indexed == 3
    # rebuild over existing db, with an asset removed, drops stale rows and leaves no temp files
    (repo.root / "library" / "diagram" / "gamma.png").unlink()
    (repo.root / "library" / "diagram" / "gamma.json").unlink()
    s = build_index(repo.root, e)
    assert s.indexed == 2
    assert _conn(db).execute("select count(*) from assets").fetchone()[0] == 2
    assert not (repo.root / "index" / "thumbs" / "gamma.webp").exists()
    assert sorted(p.name for p in (repo.root / "index").iterdir()) == ["library.db", "thumbs"]


def test_invalid_sidecar_aborts_and_keeps_old_index(repo):
    _populate(repo)
    build_index(repo.root, FakeEmbedder())
    db = repo.root / "index" / "library.db"
    before = db.read_bytes()
    repo.add_asset("hero", "bad", status="nonsense")
    with pytest.raises(IndexBuildError) as ei:
        build_index(repo.root, FakeEmbedder())
    assert any("bad" in e and "status" in e for e in ei.value.errors)
    assert db.read_bytes() == before


def test_invalid_library_never_creates_index(repo):
    repo.add_asset("hero", "bad", status="nonsense")
    with pytest.raises(IndexBuildError):
        build_index(repo.root, FakeEmbedder())
    assert not (repo.root / "index" / "library.db").exists()


def test_malformed_json_aborts(repo):
    repo.add_asset("hero", "ok")
    (repo.root / "library" / "hero" / "ok.json").write_text("{nope")
    with pytest.raises(IndexBuildError):
        build_index(repo.root, FakeEmbedder())


def test_cli_index_fake_embedder(repo, capsys):
    from quarry.cli import main
    _populate(repo)
    assert main(["index", "--fake-embedder", "--repo", str(repo.root)]) == 0
    assert "indexed 3" in capsys.readouterr().out
    repo.add_asset("hero", "bad", status="nonsense")
    assert main(["index", "--fake-embedder", "--repo", str(repo.root)]) == 1
