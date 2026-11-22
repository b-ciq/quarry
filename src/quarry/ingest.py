import hashlib
import json
import re
import shutil
from dataclasses import dataclass, field
from datetime import date
from math import gcd
from pathlib import Path

from PIL import Image

from quarry.schema import CLASS_DIRS, CLASSES, KEBAB_RE

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp"}
ADOBE_RE = re.compile(r"AdobeStock_(\d+)", re.IGNORECASE)


@dataclass
class IngestResult:
    created: list[Path] = field(default_factory=list)
    skipped: list[tuple[Path, str]] = field(default_factory=list)


def sha256_file(p: Path) -> str:
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for block in iter(lambda: f.read(1 << 20), b""):
            h.update(block)
    return h.hexdigest()


def _slug(stem: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", stem.lower()).strip("-") or "asset"


def _aspect(p: Path) -> str:
    with Image.open(p) as im:
        w, h = im.size
    g = gcd(w, h) or 1
    return f"{w // g}:{h // g}"


def _scan_library(repo_root: Path) -> tuple[dict[str, str], set[str]]:
    """Return ({sha256: id}, {all ids}) from existing sidecars."""
    hashes: dict[str, str] = {}
    ids: set[str] = set()
    for sc in (repo_root / "library").rglob("*.json"):
        try:
            entry = json.loads(sc.read_text())
        except json.JSONDecodeError:
            continue
        if not isinstance(entry, dict):
            continue
        ids.add(sc.stem)
        if entry.get("id"):
            ids.add(entry["id"])
        digest = (entry.get("source") or {}).get("sha256")
        if digest:
            hashes[digest] = entry.get("id", sc.stem)
    return hashes, ids


def ingest_dir(src_dir: Path, repo_root: Path, cls: str, origin: str,
               license: str | None = None, product: str | None = None) -> IngestResult:
    src_dir, repo_root = Path(src_dir), Path(repo_root)
    if cls not in CLASSES:
        raise ValueError(f"unknown class {cls!r}")
    if product is not None:
        if cls != "screenshot":
            raise ValueError("product nesting is only supported for screenshots")
        if not KEBAB_RE.match(product):
            raise ValueError(f"product must be kebab-case, got {product!r}")
    dest_dir = repo_root / "library" / CLASS_DIRS[cls]
    if product:
        dest_dir = dest_dir / product
    hashes, ids = _scan_library(repo_root)
    today = date.today().isoformat()
    result = IngestResult()

    for src in sorted(p for p in src_dir.iterdir() if p.is_file()):
        ext = src.suffix.lower()
        if ext not in IMAGE_EXTS:
            continue
        digest = sha256_file(src)
        if digest in hashes:
            result.skipped.append((src, f"duplicate of existing asset {hashes[digest]!r}"))
            continue

        base = _slug(src.stem)
        id_, n = base, 1
        while id_ in ids:
            n += 1
            id_ = f"{base}-{n}"

        lic = license
        if lic is None and origin == "adobe-stock":
            m = ADOBE_RE.search(src.stem)
            lic = f"adobe-stock:{m.group(1)}" if m else ""
        sidecar = {
            "id": id_,
            "file": id_ + ext,
            "status": "proposed",
            "class": cls,
            "products": [],
            "categories": [],
            "verticals": [],
            "concepts": [],
            "style": [],
            "aspect": _aspect(src),
            "license": lic or "",
            "source": {"origin": origin, "ingested_at": today, "sha256": digest},
            "usage_restrictions": [],
            "description": "",
        }
        dest_dir.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(src, dest_dir / sidecar["file"])
        sc_path = dest_dir / (id_ + ".json")
        sc_path.write_text(json.dumps(sidecar, indent=2) + "\n")
        result.created.append(sc_path)
        hashes[digest] = id_
        ids.add(id_)
    return result
