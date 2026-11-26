"""Inspiration gallery API: list pulled-in saves, serve their media, and approve or reject them.

Approve and reject only move `status` (proposed -> confirmed / retired, or back to proposed). Records
without any captured media are left to the Capture flow and are not listed here.
"""
from __future__ import annotations

from fastapi import APIRouter, Depends, FastAPI
from fastapi.responses import FileResponse, JSONResponse

from quarry.describer import still_images
from quarry.inspiration_store import NoInspirationRoot, Store, inspiration_root, store_lock
from quarry.schema import INSPIRATION_ID_RE
from quarry.ui.write_api import json_body

STATUSES = {"proposed", "confirmed", "retired"}


def _err(status: int, message: str) -> JSONResponse:
    return JSONResponse({"error": message}, status_code=status)


def _row(rec: dict) -> dict:
    owner = rec.get("owner") if isinstance(rec.get("owner"), dict) else {}
    media = still_images(rec)
    caption = rec.get("caption") if isinstance(rec.get("caption"), str) else ""
    return {
        "id": rec["id"],
        "status": rec.get("status"),
        "owner": owner.get("username") or "",
        "caption": caption,
        "description": rec.get("description") or "",
        "style": list(rec.get("style") or []),
        "concepts": list(rec.get("concepts") or []),
        "source_url": rec.get("source_url") or "",
        "saved_at": (rec.get("source") or {}).get("saved_at"),
        "media": [f"/inspiration-media/{rec['id']}/{name}" for name in media],
    }


def mount(app: FastAPI) -> None:
    try:
        root, setup = inspiration_root(), None
    except NoInspirationRoot as e:
        root, setup = None, str(e)
    except (ValueError, TypeError) as e:  # unreadable config.toml: the rest of the workbench still starts
        root, setup = None, f"Inspiration is off: {e}"
    store = Store(root) if root is not None else None
    router = APIRouter()

    def rows() -> tuple[list[dict], list[str]]:
        scan = store.scan()
        out, warnings = [], list(scan.warnings)
        for id_ in scan.by_shortcode.values():
            try:
                rec = store.read_cached(id_)
            except (OSError, ValueError) as e:
                warnings.append(f"unreadable {id_}/save.json: {e}")
                continue
            row = _row(rec)
            if row["media"]:
                out.append(row)
        out.sort(key=lambda r: r["saved_at"] or "", reverse=True)
        return out, warnings

    @router.get("/api/inspiration")
    def list_inspiration():
        if store is None:
            return {"enabled": False, "setup": setup, "items": [], "warnings": []}
        items, warnings = rows()
        return {"enabled": True, "setup": None, "items": items, "warnings": warnings}

    @router.get("/inspiration-media/{id}/{name}")
    def media(id: str, name: str):
        if store is None:
            return _err(404, setup or "no inspiration folder")
        try:
            path = store.media_path(id, name)
        except ValueError as e:
            return _err(404, str(e))
        if not path.is_file():
            return _err(404, f"no such file: {id}/{name}")
        return FileResponse(path)

    @router.post("/api/inspiration/status")
    def set_status(body=Depends(json_body)):
        """Body: {status: proposed|confirmed|retired, ids: [id]}. Applies to each id; reports per-id failures."""
        if store is None:
            return _err(409, setup)
        ids = body.get("ids") if isinstance(body, dict) else None
        status = body.get("status") if isinstance(body, dict) else None
        if status not in STATUSES or not isinstance(ids, list) or not all(isinstance(i, str) for i in ids):
            return _err(422, "body must be {status: proposed|confirmed|retired, ids: [string]}")
        applied, failed, items = [], {}, []
        with store_lock():
            for id_ in dict.fromkeys(ids):
                if not INSPIRATION_ID_RE.match(id_):
                    failed[id_] = "invalid id"
                    continue
                try:
                    rec = store.read(id_)
                except (OSError, ValueError) as e:
                    failed[id_] = f"unreadable: {e}"
                    continue
                prev = rec.get("status")
                rec["status"] = status
                try:
                    store.write(rec)
                except (OSError, ValueError) as e:
                    failed[id_] = str(e)
                    continue
                applied.append({"id": id_, "from": prev})
                items.append(_row(rec))
        return {"applied": applied, "failed": failed, "items": items}

    app.include_router(router)
