import json

import pytest

from quarry.cli import main
from quarry.schema import validate_sidecar
from quarry.seed import seed_from_deck_builder
from quarry.vocabulary import load_vocabulary

from conftest import _png_1px


def _entry(id, file, kind, subkind=None, **kw):
    e = {
        "id": id, "file": file, "status": "confirmed", "kind": kind, "subkind": subkind,
        "role": "foreground", "products": ["fuzzball"], "categories": ["hpc"],
        "verticals": ["government"], "tone": None, "aspect": "4:3",
        "concepts": ["research"], "description": f"desc {id}",
    }
    e.update(kw)
    return e


@pytest.fixture
def skill(tmp_path):
    d = tmp_path / "skill"
    imgs = d / "brand/assets/images"
    imgs.mkdir(parents=True)
    (imgs / "a.png").write_bytes(_png_1px())
    for n in "bcd":
        (imgs / f"{n}.png").write_bytes(_png_1px())
    (imgs / "notes.txt").write_text("x")
    (imgs / "manifest.json").write_text(json.dumps({"images": [
        _entry("life-a", "a.png", "lifestyle"),
        _entry("shot-b", "b.png", "hero", "screenshot"),
        _entry("diag-c", "c.png", "hero", "diagram"),
        _entry("hero-d", "d.png", "hero", "conceptual"),
    ]}))
    bgs = d / "brand/assets/backgrounds"
    bgs.mkdir(parents=True)
    for n in ("bg-one", "bg-two"):
        (bgs / f"{n}.png").write_bytes(_png_1px())
    (bgs / "cover-pool.json").write_text("{}")
    return d


def _load(p):
    return json.loads(p.read_text())


def test_seed_manifest_and_backgrounds(repo, skill):
    created = seed_from_deck_builder(repo.root, skill)
    assert len(created) == 6
    a = _load(repo.root / "library/lifestyle/life-a.json")
    assert (repo.root / "library/lifestyle/life-a.png").exists()
    assert a["status"] == "confirmed" and a["license"] == "ciq-original"
    assert a["class"] == "lifestyle" and a["products"] == ["fuzzball"]
    assert a["source"]["origin"] == "deck-builder-seed" and a["source"]["ingested_at"]
    assert "tone" not in a and a["style"] == []
    b = _load(repo.root / "library/screenshots/shot-b.json")
    assert b["class"] == "screenshot" and b["status"] == "proposed"
    assert _load(repo.root / "library/diagrams/diag-c.json")["class"] == "diagram"
    assert _load(repo.root / "library/heroes/hero-d.json")["class"] == "hero"
    bg = _load(repo.root / "library/backgrounds/bg-one.json")
    assert bg["class"] == "background" and bg["status"] == "proposed"
    assert bg["description"] == "" and bg["aspect"] == "1:1"
    assert not list((repo.root / "library").rglob("cover-pool*"))
    assert not list((repo.root / "library").rglob("*.txt"))


def test_confirmed_sidecars_validate(repo, skill):
    vocab = load_vocabulary(repo.root)
    for p in seed_from_deck_builder(repo.root, skill):
        assert validate_sidecar(_load(p), vocab) == [], p


def test_idempotent(repo, skill):
    seed_from_deck_builder(repo.root, skill)
    assert seed_from_deck_builder(repo.root, skill) == []


def test_cli_seed_then_validate(repo, skill, capsys):
    assert main(["seed-deck-builder", "--repo", str(repo.root), "--skill-dir", str(skill)]) == 0
    assert main(["validate", "--repo", str(repo.root)]) == 0
