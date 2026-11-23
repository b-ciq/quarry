"""Quarry local MCP server (stdio). Thin wrappers over quarry.search / library / vocabulary.

Env: QUARRY_REPO (repo root, required); QUARRY_FAKE_EMBEDDER=1 for the deterministic fake embedder.
Config is read lazily per call so tests can monkeypatch env; the embedder is cached per mode.
"""

import json
import os
from functools import lru_cache
from pathlib import Path

from mcp.server.fastmcp import FastMCP, Image

from quarry.library import LibraryError, scan_library
from quarry.schema import is_anti_example, is_servable
from quarry.search import (EmbedderMismatch, EmbedderUnavailable, Hit, more_like as _more_like,
                           nearest_anti_examples as _nearest_anti, search as _search)
from quarry.vocabulary import load_vocabulary

mcp = FastMCP("quarry")

NO_INDEX = "Error: index not built — run quarry index"


class _Friendly(Exception):
    """Carries a ready-to-return error string."""


def _guard(fn):
    """Turn expected failures into the 'Error: ...' string convention."""
    import functools

    @functools.wraps(fn)
    def wrapper(*a, **kw):
        try:
            return fn(*a, **kw)
        except _Friendly as exc:
            return str(exc)
        except FileNotFoundError:
            return NO_INDEX
        except (EmbedderMismatch, EmbedderUnavailable) as exc:
            return f"Error: {exc}"
        except LibraryError:
            return "Error: library invalid — run quarry validate"
    return wrapper


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


def _anti_row(h: Hit) -> dict:
    return {**_row(h), "avoid_reason": h.sidecar.get("avoid_reason", "")}


def _find_asset(root: Path, asset_id: str, allowed):
    try:
        assets = scan_library(root)
    except LibraryError as exc:
        raise _Friendly("Error: library invalid — run quarry validate") from exc
    asset = next((a for a in assets if a.id == asset_id), None)
    return asset if asset is not None and allowed(asset.sidecar) else None


def _servable_asset(root: Path, asset_id: str):
    return _find_asset(root, asset_id, is_servable)


def _with_thumb(root: Path, asset) -> list:
    meta = dict(asset.sidecar, full_res_path=str(asset.path.resolve()))
    out: list = []
    thumb = root / "index" / "thumbs" / f"{asset.id}.webp"
    if thumb.exists():
        out.append(Image(data=thumb.read_bytes(), format="webp"))
    out.append(json.dumps(meta))
    return out


@mcp.tool()
@_guard
def search_assets(query: str, asset_class: str | None = None, product: str | None = None,
                  tone: str | None = None, limit: int = 8) -> str:
    """Search servable brand assets. Returns a JSON list of {id, class, description, tags, aspect, score}."""
    hits = _search(_repo_root(), _embedder(), query, cls=asset_class, product=product, tone=tone,
                   limit=limit)
    return json.dumps([_row(h) for h in hits])


@mcp.tool()
@_guard
def get_asset(asset_id: str):
    """Get one servable asset: a <=256px thumbnail plus JSON metadata with `full_res_path`."""
    root = _repo_root()
    asset = _servable_asset(root, asset_id)
    if asset is None:
        return f"Error: asset {asset_id!r} not found or not servable"
    return _with_thumb(root, asset)


@mcp.tool()
@_guard
def more_like(asset_id: str, limit: int = 8) -> str:
    """Visually similar servable assets (style space). Returns a JSON list like search_assets."""
    root = _repo_root()
    if _servable_asset(root, asset_id) is None:
        return f"Error: asset {asset_id!r} not found or not servable"
    hits = _more_like(root, asset_id, limit=limit)
    return json.dumps([_row(h) for h in hits])


@mcp.tool()
@_guard
def search_anti_examples(query: str = "", asset_class: str | None = None, limit: int = 8) -> str:
    """Anti-examples: images showing styles and treatments CIQ avoids. Never use them in a deliverable.

    Check these before choosing or generating imagery. Empty query lists them all. Returns a JSON
    list of {id, class, description, tags, aspect, score, avoid_reason}.
    """
    hits = _search(_repo_root(), _embedder(), query or None, cls=asset_class, anti=True, limit=limit)
    return json.dumps([_anti_row(h) for h in hits])


@mcp.tool()
@_guard
def get_anti_example(asset_id: str):
    """One anti-example: a <=256px thumbnail plus JSON metadata including `avoid_reason`."""
    root = _repo_root()
    asset = _find_asset(root, asset_id, is_anti_example)
    if asset is None:
        return f"Error: anti-example {asset_id!r} not found"
    return _with_thumb(root, asset)


@mcp.tool()
@_guard
def check_against_anti_examples(image_path: str, limit: int = 3) -> str:
    """Compare a local image (a stock pick, a generation) to the anti-examples by visual style.

    Returns the closest anti-examples as JSON {id, class, description, tags, aspect, score,
    avoid_reason}; score is cosine similarity (1.0 = identical style). Treat a high score as a
    prompt to read `avoid_reason` and look, not as an automatic rejection.
    """
    p = Path(image_path).expanduser()
    if not p.is_file():
        return f"Error: no such image {image_path!r}"
    hits = _nearest_anti(_repo_root(), _embedder(), p, limit=limit)
    return json.dumps([_anti_row(h) for h in hits])


@mcp.tool()
def list_vocabulary() -> str:
    """The taxonomy axes (products, categories, verticals, concepts, style) as JSON."""
    return json.dumps(load_vocabulary(_repo_root()))


if __name__ == "__main__":
    mcp.run()
