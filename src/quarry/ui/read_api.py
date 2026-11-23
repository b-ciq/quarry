"""Read endpoints: grid/facets from live sidecars; search/similar from the index."""
from pathlib import Path

from fastapi import APIRouter, FastAPI, Query
from fastapi.responses import FileResponse, JSONResponse

from quarry.library import LibraryError
from quarry.search import EmbedderMismatch, EmbedderUnavailable, more_like, search
from quarry.ui.cache import LibraryCache
from quarry.vocabulary import AXES, load_vocabulary


def _err(status: int, msg: str, **extra) -> JSONResponse:
    return JSONResponse({"error": msg, **extra}, status_code=status)


def _decorate(s: dict) -> dict:
    return {**s, "thumb_url": f"/thumbs/{s['id']}.webp", "full_url": f"/files/{s['id']}"}


def _tags(s: dict) -> list[str]:
    return [t for axis in AXES for t in s.get(axis, []) or []]


def _embedder(app: FastAPI):
    if app.state.fake_embedder:
        from quarry.embeddings import FakeEmbedder
        return FakeEmbedder()
    from quarry.embeddings import HFEmbedder
    return HFEmbedder()


def mount(app: FastAPI, index_stale) -> LibraryCache:
    repo_root: Path = app.state.repo_root
    cache = LibraryCache(repo_root)
    app.state.library_cache = cache
    router = APIRouter()

    def index_missing():
        return not (repo_root / "index" / "library.db").exists()

    def no_index():
        return _err(409, "no search index; run `quarry index` (or reindex from the workbench)")

    @app.exception_handler(LibraryError)
    def _library_error(_req, exc: LibraryError):
        return _err(500, "library unreadable", errors=exc.errors)

    @router.get("/api/assets")
    def list_assets(cls: str | None = Query(None, alias="class"), product: str | None = None,
                    status: str | None = None, tone: str | None = None, tag: str | None = None,
                    q: str | None = None):
        needle = q.strip().lower() if q else ""
        out = []
        for s in cache.assets():
            if cls and s.get("class") != cls:
                continue
            if product and product not in (s.get("products") or []):
                continue
            if status and s.get("status") != status:
                continue
            if tone and s.get("tone") != tone:
                continue
            if tag and tag not in _tags(s):
                continue
            if needle:
                hay = " ".join([s["id"], str(s.get("description", "")), *_tags(s)]).lower()
                if needle not in hay:
                    continue
            out.append(_decorate(s))
        return out

    @router.get("/api/assets/{id}")
    def get_asset(id: str):
        s = cache.get(id)
        return _decorate(s) if s else _err(404, f"unknown asset {id!r}")

    @router.get("/api/assets/{id}/similar")
    def similar(id: str, limit: int = Query(10, ge=1, le=100), space: str = "style"):
        if cache.get(id) is None:
            return _err(404, f"unknown asset {id!r}")
        if index_missing():
            return no_index()
        try:
            hits = more_like(repo_root, id, space=space, servable_only=False, limit=limit)
        except KeyError:
            return _err(409, f"asset {id!r} is not in the index; reindex")
        except ValueError as exc:
            return _err(422, str(exc))
        return [{**_decorate({**h.sidecar, "id": h.id}), "score": h.score} for h in hits]

    @router.get("/api/search")
    def do_search(q: str = "", limit: int = Query(20, ge=1, le=100)):
        if index_missing():
            return no_index()
        try:
            hits = search(repo_root, _embedder(app), q, servable_only=False, limit=limit)
        except (EmbedderMismatch, EmbedderUnavailable) as exc:
            return _err(409, str(exc))
        return {"stale": index_stale(),
                "hits": [{**_decorate({**h.sidecar, "id": h.id}), "score": h.score} for h in hits]}

    @router.get("/api/vocabulary")
    def vocabulary():
        return load_vocabulary(repo_root)

    @router.get("/thumbs/{name}")
    def thumb(name: str):
        id = name[:-5] if name.endswith(".webp") else None
        p = repo_root / "index" / "thumbs" / f"{id}.webp" if id and cache.get(id) else None
        if p is None or not p.is_file():
            return _err(404, f"no thumbnail for {name!r}")
        return FileResponse(p, media_type="image/webp")

    @router.get("/files/{id}")
    def full(id: str):
        p = cache.image_path(id)
        if p is None or not p.is_file():
            return _err(404, f"unknown asset {id!r}")
        return FileResponse(p)

    app.include_router(router)
    return cache
