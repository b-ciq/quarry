"""Quarry local MCP server (stdio). Thin wrappers over quarry.search / library / vocabulary.

Env: QUARRY_REPO (repo root, required); QUARRY_FAKE_EMBEDDER=1 for the deterministic fake embedder.
Config is read lazily per call so tests can monkeypatch env; the embedder is cached per mode.
"""

import json
import os
from functools import lru_cache
from pathlib import Path

from mcp.server.fastmcp import FastMCP, Image

from quarry.library import scan_library
from quarry.schema import is_servable
from quarry.search import Hit, more_like as _more_like, search as _search
from quarry.vocabulary import load_vocabulary

mcp = FastMCP("quarry")


def _repo_root() -> Path:
    root = os.environ.get("QUARRY_REPO")
    if not root:
        raise RuntimeError("QUARRY_REPO is not set")
    return Path(root).resolve()


@lru_cache(maxsize=2)
def _embedder_for(fake: bool):
    if fake:
        from quarry.embeddings import FakeEmbedder
        return FakeEmbedder()
    from quarry.embeddings import HFEmbedder
    return HFEmbedder()


def _embedder():
    return _embedder_for(os.environ.get("QUARRY_FAKE_EMBEDDER") == "1")


def _row(h: Hit) -> dict:
    s = h.sidecar
    tags = [t for axis in ("products", "categories", "verticals", "concepts", "style") for t in s.get(axis, [])]
    return {"id": h.id, "class": s.get("class"), "description": s.get("description", ""),
            "tags": tags, "aspect": s.get("aspect"), "score": round(h.score, 4)}


def _servable_asset(root: Path, asset_id: str):
    asset = next((a for a in scan_library(root) if a.id == asset_id), None)
    return asset if asset is not None and is_servable(asset.sidecar) else None


@mcp.tool()
def search_assets(query: str, asset_class: str | None = None, product: str | None = None,
                  tone: str | None = None, limit: int = 8) -> str:
    """Search servable brand assets. Returns a JSON list of {id, class, description, tags, aspect, score}."""
    hits = _search(_repo_root(), _embedder(), query, cls=asset_class, product=product, tone=tone,
                   limit=limit)
    return json.dumps([_row(h) for h in hits])


@mcp.tool()
def get_asset(asset_id: str) -> list | str:
    """Get one servable asset: a <=256px thumbnail plus JSON metadata with `full_res_path`."""
    root = _repo_root()
    asset = _servable_asset(root, asset_id)
    if asset is None:
        return f"Error: asset {asset_id!r} not found or not servable"
    meta = dict(asset.sidecar, full_res_path=str(asset.path.resolve()))
    out: list = []
    thumb = root / "index" / "thumbs" / f"{asset_id}.webp"
    if thumb.exists():
        out.append(Image(data=thumb.read_bytes(), format="webp"))
    out.append(json.dumps(meta))
    return out


@mcp.tool()
def more_like(asset_id: str, limit: int = 8) -> str:
    """Visually similar servable assets (style space). Returns a JSON list like search_assets."""
    root = _repo_root()
    if _servable_asset(root, asset_id) is None:
        return f"Error: asset {asset_id!r} not found or not servable"
    hits = _more_like(root, asset_id, limit=limit)
    return json.dumps([_row(h) for h in hits])


@mcp.tool()
def list_vocabulary() -> str:
    """The taxonomy axes (products, categories, verticals, concepts, style) as JSON."""
    return json.dumps(load_vocabulary(_repo_root()))


if __name__ == "__main__":
    mcp.run()
