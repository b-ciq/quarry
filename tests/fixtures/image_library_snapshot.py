# Vendored snapshot of the deck builder's src/image_library.py (includes "spot" in KINDS).
# Origin: ~/.claude/skills/quantic-deck-builder/src/image_library.py, copied 2026-11-22.
# Purpose: lets CI check the export<->validator contract without the skill installed. Refresh when the deck builder's validator changes.
"""Single owner of brand/assets/images/manifest.json semantics.

The manifest is the registry for the curated image library: `vocab` holds the
canonical applicability slugs (admin-edited), `images` the per-image entries.
Resolution (`image_entry`/`image_path`) sees CONFIRMED entries only — a
`proposed` entry is committable but invisible to the builder by design.
"""
import json
import re
from functools import lru_cache
from pathlib import Path

IMAGES_DIR = Path(__file__).parent.parent / "brand" / "assets" / "images"

KINDS = {"background", "hero", "lifestyle", "spot"}
SUBKINDS = {"screenshot", "diagram", "conceptual"}
ROLES = {"background", "foreground"}
TONES = {"dark", "light"}
STATUSES = {"proposed", "confirmed"}
IMG_EXTS = {".png", ".jpg", ".jpeg"}
_SLUG = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")

ENTRY_KEYS = ["id", "file", "status", "kind", "subkind", "role", "products",
              "categories", "verticals", "tone", "aspect", "concepts",
              "description"]


@lru_cache(maxsize=None)
def _read(dir_str):
    return json.loads((Path(dir_str) / "manifest.json").read_text())


def load_manifest(images_dir=None):
    return _read(str(images_dir or IMAGES_DIR))


def validate_manifest(manifest, images_dir=None):
    root = Path(images_dir or IMAGES_DIR)
    errs = []
    vocab = manifest.get("vocab") or {}
    for axis in ("products", "categories", "verticals"):
        if not isinstance(vocab.get(axis), list):
            errs.append(f"vocab.{axis} must be a list")
    seen = set()
    listed_files = set()
    for e in manifest.get("images", []):
        eid = e.get("id")
        tag = f"image '{eid}'"
        if not isinstance(eid, str) or not _SLUG.match(eid):
            errs.append(f"{tag}: id must be kebab-case")
        if eid in seen:
            errs.append(f"{tag}: duplicate id")
        seen.add(eid)
        missing = [k for k in ENTRY_KEYS if k not in e]
        if missing:
            errs.append(f"{tag}: missing keys {missing}")
        f = e.get("file")
        listed_files.add(f)
        if not f or not (root / f).exists():
            errs.append(f"{tag}: file '{f}' not found in {root}")
        if e.get("status") not in STATUSES:
            errs.append(f"{tag}: status must be proposed|confirmed")
        if e.get("status") != "confirmed":
            continue  # proposed entries: structural checks only
        if e.get("kind") not in KINDS:
            errs.append(f"{tag}: kind must be one of {sorted(KINDS)}")
        if e.get("kind") == "hero":
            if e.get("subkind") not in SUBKINDS:
                errs.append(f"{tag}: hero needs subkind {sorted(SUBKINDS)}")
        elif e.get("subkind") is not None:
            errs.append(f"{tag}: subkind is for kind 'hero' only")
        expected_role = "background" if e.get("kind") == "background" else "foreground"
        if e.get("role") != expected_role:
            errs.append(f"{tag}: kind '{e.get('kind')}' requires role "
                        f"'{expected_role}'")
        if e.get("role") == "background":
            if e.get("tone") not in TONES:
                errs.append(f"{tag}: background image needs tone dark|light")
        elif e.get("tone") is not None:
            errs.append(f"{tag}: tone is for background images only")
        for axis in ("products", "categories", "verticals"):
            bad = [s for s in (e.get(axis) or []) if s not in (vocab.get(axis) or [])]
            if bad:
                errs.append(f"{tag}: unknown {axis} slug(s) {bad} (not in vocab)")
        if not isinstance(e.get("concepts"), list):
            errs.append(f"{tag}: concepts must be a list of tags")
        if not (isinstance(e.get("description"), str) and e["description"].strip()):
            errs.append(f"{tag}: confirmed image needs a description")
    if root.exists():
        for p in sorted(root.iterdir()):
            if p.suffix.lower() in IMG_EXTS and p.name not in listed_files:
                errs.append(f"file '{p.name}' has no manifest entry "
                            f"(run scripts/ingest_images.py)")
    return errs


def image_entry(image_id, images_dir=None):
    try:
        manifest = load_manifest(images_dir)
    except FileNotFoundError:
        return None
    for e in manifest.get("images", []):
        if e.get("id") == image_id and e.get("status") == "confirmed":
            return e
    return None


def image_path(image_id, images_dir=None):
    e = image_entry(image_id, images_dir)
    if not e:
        return None
    p = Path(images_dir or IMAGES_DIR) / e["file"]
    return str(p) if p.exists() else None
