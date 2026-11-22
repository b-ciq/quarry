import json

from PIL import Image

from quarry.cli import main
from quarry.ingest import ingest_dir, sha256_file
from quarry.schema import validate_sidecar
from quarry.vocabulary import load_vocabulary


def _img(path, size=(1600, 900), color=(10, 20, 30), fmt="PNG"):
    path.parent.mkdir(parents=True, exist_ok=True)
    Image.new("RGB", size, color).save(path, fmt)
    return path


def test_png_becomes_proposed_asset(repo, tmp_path):
    drop = tmp_path / "drop"
    src = _img(drop / "Cool Hero_Shot.png")
    res = ingest_dir(drop, repo.root, "hero", "designer")
    dest = repo.root / "library/heroes/cool-hero-shot.png"
    assert dest.exists()
    assert res.created == [dest.with_suffix(".json")]
    sc = json.loads(dest.with_suffix(".json").read_text())
    assert sc["id"] == "cool-hero-shot" and sc["file"] == "cool-hero-shot.png"
    assert sc["status"] == "proposed" and sc["class"] == "hero"
    assert sc["aspect"] == "16:9"
    assert sc["source"]["sha256"] == sha256_file(src)
    assert sc["source"]["origin"] == "designer"
    assert len(sc["source"]["ingested_at"]) == 10 and sc["source"]["ingested_at"][4] == "-"
    for k in ("products", "categories", "verticals", "concepts", "style", "usage_restrictions"):
        assert sc[k] == []
    assert "tone" not in sc and sc["description"] == ""
    assert validate_sidecar(sc, load_vocabulary(repo.root)) == []


def test_class_dirs(repo, tmp_path):
    expected = {"hero": "heroes", "spot-illustration": "spots", "background": "backgrounds",
                "screenshot": "screenshots", "diagram": "diagrams", "lifestyle": "lifestyle"}
    for i, (cls, d) in enumerate(expected.items()):
        drop = tmp_path / f"drop{i}"
        _img(drop / f"x{i}.png", color=(i, i, i))
        ingest_dir(drop, repo.root, cls, "designer")
        assert (repo.root / "library" / d / f"x{i}.png").exists()


def test_duplicate_bytes_skipped_with_existing_id(repo, tmp_path):
    drop = tmp_path / "drop"
    _img(drop / "first.png")
    ingest_dir(drop, repo.root, "hero", "designer")
    drop2 = tmp_path / "drop2"
    _img(drop2 / "renamed.png")
    before = sorted(p.name for p in (repo.root / "library").rglob("*"))
    res = ingest_dir(drop2, repo.root, "hero", "designer")
    assert res.created == []
    assert len(res.skipped) == 1 and "first" in res.skipped[0][1]
    assert sorted(p.name for p in (repo.root / "library").rglob("*")) == before


def test_duplicate_within_same_batch(repo, tmp_path):
    drop = tmp_path / "drop"
    _img(drop / "a.png")
    _img(drop / "b.png")
    res = ingest_dir(drop, repo.root, "hero", "designer")
    assert len(res.created) == 1 and len(res.skipped) == 1


def test_id_collision_different_content_gets_suffix(repo, tmp_path):
    d1 = tmp_path / "d1"
    d2 = tmp_path / "d2"
    d3 = tmp_path / "d3"
    _img(d1 / "same.png", color=(1, 1, 1))
    _img(d2 / "same.png", color=(2, 2, 2))
    _img(d3 / "same.png", color=(3, 3, 3))
    ingest_dir(d1, repo.root, "hero", "designer")
    ingest_dir(d2, repo.root, "hero", "designer")
    ingest_dir(d3, repo.root, "hero", "designer")
    assert (repo.root / "library/heroes/same.png").exists()
    assert (repo.root / "library/heroes/same-2.png").exists()
    assert (repo.root / "library/heroes/same-3.png").exists()
    sc = json.loads((repo.root / "library/heroes/same-2.json").read_text())
    assert sc["id"] == "same-2" and sc["file"] == "same-2.png"


def test_adobe_stock_license(repo, tmp_path):
    drop = tmp_path / "drop"
    _img(drop / "AdobeStock_123456789.jpg", fmt="JPEG")
    ingest_dir(drop, repo.root, "lifestyle", "adobe-stock")
    sc = json.loads(next((repo.root / "library/lifestyle").glob("*.json")).read_text())
    assert sc["license"] == "adobe-stock:123456789"
    assert sc["file"].endswith(".jpg")


def test_explicit_license_wins(repo, tmp_path):
    drop = tmp_path / "drop"
    _img(drop / "a.png")
    ingest_dir(drop, repo.root, "hero", "designer", license="owned")
    sc = json.loads((repo.root / "library/heroes/a.json").read_text())
    assert sc["license"] == "owned"


def test_non_images_ignored(repo, tmp_path):
    drop = tmp_path / "drop"
    drop.mkdir()
    (drop / "notes.txt").write_text("hi")
    (drop / "thing.json").write_text("{}")
    res = ingest_dir(drop, repo.root, "hero", "designer")
    assert res.created == [] and res.skipped == []
    assert not list((repo.root / "library").rglob("*"))


def test_screenshot_product_nesting(repo, tmp_path):
    drop = tmp_path / "drop"
    _img(drop / "ui.png")
    ingest_dir(drop, repo.root, "screenshot", "designer", product="fuzzball")
    assert (repo.root / "library/screenshots/fuzzball/ui.png").exists()
    assert (repo.root / "library/screenshots/fuzzball/ui.json").exists()


def test_cli_ingest(repo, tmp_path, capsys):
    drop = tmp_path / "drop"
    _img(drop / "AdobeStock_42.jpg", fmt="JPEG")
    rc = main(["ingest", str(drop), "--class", "lifestyle", "--source", "adobe-stock",
               "--license-id", "42", "--repo", str(repo.root)])
    assert rc == 0
    sc = json.loads(next((repo.root / "library/lifestyle").glob("*.json")).read_text())
    assert sc["license"] == "adobe-stock:42"
    assert "created 1" in capsys.readouterr().out
