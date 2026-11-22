import json
import shutil
import struct
from datetime import date
from math import gcd
from pathlib import Path

from quarry.schema import CLASS_DIRS

HERO_SUBKIND_CLASS = {"screenshot": "screenshot", "diagram": "diagram", "conceptual": "hero"}
IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp"}
MANIFEST = Path("brand/assets/images/manifest.json")
BACKGROUNDS = Path("brand/assets/backgrounds")


def class_for(entry: dict) -> str:
    kind = entry.get("kind")
    if kind == "lifestyle":
        return "lifestyle"
    if kind == "background":
        return "background"
    if kind == "hero":
        return HERO_SUBKIND_CLASS[entry.get("subkind")]
    raise ValueError(f"cannot map manifest entry {entry.get('id')!r} (kind={kind!r})")


def _png_aspect(path: Path) -> str:
    head = path.read_bytes()[:24]
    if head[:8] != b"\x89PNG\r\n\x1a\n":
        return "1:1"
    w, h = struct.unpack(">II", head[16:24])
    g = gcd(w, h) or 1
    return f"{w // g}:{h // g}"


def _write(repo_root: Path, src: Path, sidecar: dict, created: list[Path]) -> None:
    dest_dir = repo_root / "library" / CLASS_DIRS[sidecar["class"]]
    dest = dest_dir / sidecar["file"]
    sidecar_path = dest.with_suffix(".json")
    if sidecar_path.exists():
        return
    dest_dir.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(src, dest)
    sidecar_path.write_text(json.dumps(sidecar, indent=2) + "\n")
    created.append(sidecar_path)


def seed_from_deck_builder(repo_root: Path, skill_dir: Path) -> list[Path]:
    repo_root, skill_dir = Path(repo_root), Path(skill_dir)
    now = date.today().isoformat() + "T00:00:00Z"
    source = {"origin": "deck-builder-seed", "ingested_at": now}
    created: list[Path] = []

    manifest_path = skill_dir / MANIFEST
    if manifest_path.exists():
        manifest = json.loads(manifest_path.read_text())
        for entry in manifest.get("images", []):
            src = skill_dir / MANIFEST.parent / entry["file"]
            if src.suffix.lower() not in IMAGE_EXTS:
                continue
            cls = class_for(entry)
            sidecar = {
                "id": entry["id"],
                "file": entry["id"] + src.suffix.lower(),
                "status": "confirmed",
                "class": cls,
                "products": list(entry.get("products", [])),
                "categories": list(entry.get("categories", [])),
                "verticals": list(entry.get("verticals", [])),
                "concepts": list(entry.get("concepts", [])),
                "style": [],
                "aspect": entry["aspect"],
                "license": "ciq-original",
                "source": dict(source),
                "usage_restrictions": [],
                "description": entry.get("description", ""),
            }
            if cls == "background":
                sidecar["tone"] = entry["tone"]
            if cls == "screenshot":
                for key in ("product_version", "captured_at"):
                    if entry.get(key):
                        sidecar[key] = entry[key]
                if not (sidecar.get("product_version") and sidecar.get("captured_at")):
                    sidecar["status"] = "proposed"  # curator must supply version/date
            _write(repo_root, src, sidecar, created)

    bg_dir = skill_dir / BACKGROUNDS
    if bg_dir.is_dir():
        for src in sorted(bg_dir.glob("bg-*")):
            if src.suffix.lower() not in IMAGE_EXTS:
                continue
            sidecar = {
                "id": src.stem,
                "file": src.stem + src.suffix.lower(),
                "status": "proposed",
                "class": "background",
                "products": [],
                "categories": [],
                "verticals": [],
                "concepts": [],
                "style": [],
                "aspect": _png_aspect(src),
                "license": "ciq-original",
                "source": dict(source),
                "usage_restrictions": [],
                "description": "",
            }
            _write(repo_root, src, sidecar, created)
    return created
