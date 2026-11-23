import importlib.util
import json
import os
import shutil
from pathlib import Path

import pytest

from quarry.export_deck import (
    CLASS_TO_KIND, build_manifest, image_copy_plan, write_export,
)

ENTRY_KEYS = ["id", "file", "status", "kind", "subkind", "role", "products",
              "categories", "verticals", "tone", "aspect", "concepts", "description"]

ALL_CLASSES = ["hero", "spot-illustration", "background", "screenshot", "diagram", "lifestyle"]


def _add(repo, cls, id, **kw):
    """add_asset writes library/<cls>/; relocate into the real class dir."""
    from quarry.schema import CLASS_DIRS
    repo.add_asset(cls, id, **kw)
    dst = repo.root / "library" / CLASS_DIRS[cls]
    dst.mkdir(exist_ok=True)
    for f in (repo.root / "library" / cls).glob(f"{id}.*"):
        shutil.move(str(f), dst / f.name)


def _add_all(repo):
    for cls in ALL_CLASSES:
        _add(repo, cls, f"a-{cls}")
    src = repo.root / "library" / "screenshots"
    dst = src / "fuzzball"
    dst.mkdir()
    for f in list(src.glob("a-screenshot.*")):
        shutil.move(str(f), dst / f.name)


def test_mapping_table():
    assert CLASS_TO_KIND == {
        "background": ("background", None, "background"),
        "hero": ("hero", "conceptual", "foreground"),
        "screenshot": ("hero", "screenshot", "foreground"),
        "diagram": ("hero", "diagram", "foreground"),
        "lifestyle": ("lifestyle", None, "foreground"),
        "spot-illustration": ("spot", None, "foreground"),
    }


def test_entries_have_exact_keys_and_tone_only_on_background(repo):
    _add_all(repo)
    m = build_manifest(repo.root)
    assert len(m["images"]) == 6
    for e in m["images"]:
        assert list(e) == ENTRY_KEYS
        assert e["status"] == "confirmed"
        if e["id"] == "a-background":
            assert e["tone"] == "dark"
        else:
            assert e["tone"] is None
    by = {e["id"]: e for e in m["images"]}
    assert by["a-spot-illustration"]["kind"] == "spot"
    assert by["a-screenshot"]["subkind"] == "screenshot"


def test_vocab_block_only_three_axes(repo):
    m = build_manifest(repo.root)
    assert set(m["vocab"]) == {"products", "categories", "verticals"}


def test_non_servable_excluded(repo):
    _add(repo, "hero", "ok-one")
    _add(repo, "hero", "restricted-one", usage_restrictions=["no-web"])
    _add(repo, "hero", "retired-one", status="retired")
    _add(repo, "hero", "proposed-one", status="proposed")
    m = build_manifest(repo.root)
    assert [e["id"] for e in m["images"]] == ["ok-one"]
    assert [n for _, n in image_copy_plan(repo.root)] == ["ok-one.png"]


def test_parked_not_exported(repo):
    _add(repo, "hero", "ok-one")
    _add(repo, "hero", "parked-one", status="parked", description="")
    m = build_manifest(repo.root)
    assert [e["id"] for e in m["images"]] == ["ok-one"]


def test_screenshot_flattened_in_copy_plan(repo):
    _add_all(repo)
    plan = image_copy_plan(repo.root)
    names = {n for _, n in plan}
    assert "a-screenshot.png" in names
    assert all("/" not in n for n in names)
    src = next(s for s, n in plan if n == "a-screenshot.png")
    assert src.parent.name == "fuzzball" and src.exists()


def test_write_export_manifest_only(repo, tmp_path):
    _add_all(repo)
    out = tmp_path / "exports"
    p = write_export(repo.root, out)
    assert p == out / "manifest.json"
    assert [f.name for f in out.iterdir()] == ["manifest.json"]
    assert json.loads(p.read_text()) == build_manifest(repo.root)


SNAPSHOT = Path(__file__).parent / "fixtures" / "image_library_snapshot.py"


def _load_module(path):
    spec = importlib.util.spec_from_file_location("deck_image_library", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def _load_real_validator():
    skill = Path(os.environ.get("QUARRY_DECK_SKILL_DIR",
                                "~/.claude/skills/quantic-deck-builder")).expanduser()
    path = skill / "src" / "image_library.py"
    if not path.exists():
        pytest.skip(f"deck-builder skill not found at {skill}")
    return _load_module(path)


def _check_validator_accepts_export(mod, repo, tmp_path):
    _add_all(repo)
    manifest = build_manifest(repo.root)
    images = tmp_path / "bundle"
    images.mkdir()
    for src, name in image_copy_plan(repo.root):
        shutil.copy(src, images / name)
    (images / "manifest.json").write_text(json.dumps(manifest))
    assert mod.validate_manifest(manifest, images_dir=images) == []


def test_vendored_validator_snapshot_accepts_export(repo, tmp_path):
    """Always runs (CI-safe): checks the export against the vendored validator snapshot."""
    _check_validator_accepts_export(_load_module(SNAPSHOT), repo, tmp_path)


def test_real_deck_builder_validator_accepts_export(repo, tmp_path):
    _check_validator_accepts_export(_load_real_validator(), repo, tmp_path)


def test_cli_export(repo, capsys):
    from quarry.cli import main
    _add(repo, "hero", "cli-one")
    assert main(["export", "--repo", str(repo.root)]) == 0
    assert (repo.root / "exports" / "manifest.json").exists()
