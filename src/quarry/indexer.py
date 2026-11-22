"""Build the rebuildable search index: SQLite + FTS5 + sqlite-vec + thumbnails.

Vec tables key on the asset's TEXT id directly (vec0 supports text primary keys in
the pinned sqlite-vec), so no rowid mapping is needed. All statuses are indexed;
serving-time filtering belongs to the search layer.
"""

import json
import os
import sqlite3
from dataclasses import dataclass
from pathlib import Path

import sqlite_vec
from PIL import Image

from quarry.embeddings import Embedder
from quarry.library import LibraryError, scan_library
from quarry.schema import TAG_AXES, validate_sidecar
from quarry.vocabulary import load_vocabulary

THUMB_MAX = 256


class IndexBuildError(ValueError):
    def __init__(self, errors: list[str]):
        super().__init__("; ".join(errors))
        self.errors = errors


@dataclass
class IndexStats:
    indexed: int = 0
    thumbnailed: int = 0


def connect(db_path: Path) -> sqlite3.Connection:
    conn = sqlite3.connect(db_path)
    conn.enable_load_extension(True)
    sqlite_vec.load(conn)
    conn.enable_load_extension(False)
    return conn


def _tags(sidecar: dict) -> str:
    return " ".join(t for axis in TAG_AXES for t in sidecar.get(axis, []))


def _thumbnail(src: Path, dest: Path) -> None:
    with Image.open(src) as im:
        im = im.convert("RGBA" if "A" in im.getbands() or im.mode == "P" else "RGB")
        im.thumbnail((THUMB_MAX, THUMB_MAX))
        im.save(dest, "WEBP")


def validate_assets(repo_root: Path, assets: list) -> list[str]:
    """Schema/id/duplicate errors for scanned assets (empty when valid)."""
    vocab = load_vocabulary(repo_root)
    errors: list[str] = []
    seen: dict[str, Path] = {}
    for a in assets:
        rel = a.path.relative_to(repo_root)
        errors.extend(f"{rel}: {e}" for e in validate_sidecar(a.sidecar, vocab))
        if a.id != a.path.stem:
            errors.append(f"{rel}: id {a.id!r} does not match filename stem {a.path.stem!r}")
        if a.id in seen:
            errors.append(f"{rel}: duplicate id {a.id!r} (also {seen[a.id].relative_to(repo_root)})")
        seen[a.id] = a.path
    return errors


def build_index(repo_root: Path, embedder: Embedder, db_path: Path | None = None) -> IndexStats:
    repo_root = Path(repo_root)
    index_dir = repo_root / "index"
    db_path = Path(db_path) if db_path else index_dir / "library.db"
    thumbs_dir = index_dir / "thumbs"

    try:
        assets = scan_library(repo_root)
    except LibraryError as exc:
        raise IndexBuildError(exc.errors) from exc
    errors = validate_assets(repo_root, assets)
    if errors:
        raise IndexBuildError(errors)

    rdim, sdim = embedder.dims
    db_path.parent.mkdir(parents=True, exist_ok=True)
    thumbs_dir.mkdir(parents=True, exist_ok=True)
    tmp = db_path.with_name(db_path.name + ".tmp")
    tmp.unlink(missing_ok=True)
    stats = IndexStats()
    try:
        conn = connect(tmp)
        try:
            conn.execute("CREATE TABLE assets (id TEXT PRIMARY KEY, json TEXT NOT NULL)")
            conn.execute("CREATE VIRTUAL TABLE assets_fts USING fts5(id, description, tags)")
            conn.execute(f"CREATE VIRTUAL TABLE vec_retrieval USING vec0(id TEXT PRIMARY KEY, v float[{rdim}])")
            conn.execute(f"CREATE VIRTUAL TABLE vec_style USING vec0(id TEXT PRIMARY KEY, v float[{sdim}])")
            for a in assets:
                conn.execute("INSERT INTO assets VALUES (?, ?)", (a.id, json.dumps(a.sidecar, sort_keys=True)))
                conn.execute("INSERT INTO assets_fts VALUES (?, ?, ?)",
                             (a.id, a.sidecar.get("description", ""), _tags(a.sidecar)))
                conn.execute("INSERT INTO vec_retrieval VALUES (?, ?)",
                             (a.id, embedder.embed_image_retrieval(a.path).tobytes()))
                conn.execute("INSERT INTO vec_style VALUES (?, ?)",
                             (a.id, embedder.embed_image_style(a.path).tobytes()))
                stats.indexed += 1
                _thumbnail(a.path, thumbs_dir / f"{a.id}.webp")
                stats.thumbnailed += 1
            conn.commit()
        finally:
            conn.close()
        os.replace(tmp, db_path)
    except BaseException:
        tmp.unlink(missing_ok=True)
        raise
    keep = {f"{a.id}.webp" for a in assets}
    for stale in thumbs_dir.glob("*.webp"):
        if stale.name not in keep:
            stale.unlink()
    return stats
