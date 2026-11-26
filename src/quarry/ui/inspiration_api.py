"""Inspiration gallery API: list pulled-in saves, serve their media, and approve or reject them.

Approve and reject only move `status` (proposed -> confirmed / retired, or back to proposed). Records
without any captured media are left to the Capture flow and are not listed here.

The describer thread (`start_describer`, started by `serve`) has Claude describe and tag saves. It
never starts under QUARRY_FAKE_RATER=1 or the off switch, and a bad config.toml turns it off, never
the workbench. Exactly one thread drives `DescriberLoop.tick`; request handlers only read `status()`
or call `resume()`.
"""
from __future__ import annotations

import logging
import os
import threading

from fastapi import APIRouter, Depends, FastAPI
from fastapi.responses import FileResponse, JSONResponse

from quarry.describer import ClaudeDescriber, still_images
from quarry.describer_loop import DescriberLoop, waiting_count
from quarry.inspiration_store import NoInspirationRoot, Store, config_dir, inspiration_root, load_config, store_lock
from quarry.rater import rater_status
from quarry.schema import INSPIRATION_ID_RE
from quarry.vocabulary import load_vocabulary
from quarry.ui.capture_api import CONFIG_ERRORS
from quarry.ui.write_api import json_body, utc_now

log = logging.getLogger(__name__)

STATUSES = {"proposed", "confirmed", "retired"}
DEFAULT_DESCRIBE_CAP = 150
UNAVAILABLE_RECHECK_S = 60  # how often a describer waiting for Claude re-checks rater_status()
NOT_STARTED = "Claude is not describing in this workbench"


def _err(status: int, message: str) -> JSONResponse:
    return JSONResponse({"error": message}, status_code=status)


def _row(rec: dict, vocab: dict) -> dict:
    owner = rec.get("owner") if isinstance(rec.get("owner"), dict) else {}
    media = still_images(rec)
    caption = rec.get("caption") if isinstance(rec.get("caption"), str) else ""
    return {
        "id": rec["id"],
        "status": rec.get("status"),
        "owner": owner.get("username") or "",
        "caption": caption,
        "description": rec.get("description") or "",
        "style": [t for t in rec.get("style") or [] if t in vocab["style"]],
        "concepts": [t for t in rec.get("concepts") or [] if t in vocab["concepts"]],
        "source_url": rec.get("source_url") or "",
        "saved_at": (rec.get("source") or {}).get("saved_at"),
        "media": [f"/inspiration-media/{rec['id']}/{name}" for name in media],
        "bot": _bot(rec),
        "describe_error": _describe_error(rec),
    }


def _bot(rec: dict) -> dict | None:
    bot = rec.get("bot")
    if not isinstance(bot, dict):
        return None
    return {"model": bot.get("model"), "at": bot.get("at"), "suggested_slugs": bot.get("suggested_slugs")}


def _describe_error(rec: dict) -> dict | None:
    err = rec.get("describe_error")
    if not isinstance(err, dict):
        return None
    return {"message": err.get("message"), "tries": err.get("tries"), "gave_up": bool(err.get("gave_up"))}


def describer_enabled() -> tuple[bool, str | None]:
    """(True, None), or (False, why): dev mode, the env off switch, then config.toml (errors mean off)."""
    if os.environ.get("QUARRY_FAKE_RATER") == "1":
        return False, "QUARRY_FAKE_RATER=1 (dev mode never describes the real folder)"
    if os.environ.get("QUARRY_DESCRIBE_INSPIRATION") == "0":
        return False, "turned off by QUARRY_DESCRIBE_INSPIRATION=0"
    try:
        value = load_config().get("describe_inspiration", True)
    except (OSError, *CONFIG_ERRORS) as e:
        return False, f"{config_dir() / 'config.toml'} has a problem: {e}"
    if value is False:
        return False, "turned off by describe_inspiration = false in config.toml"
    if value is not True:
        return False, f"describe_inspiration in config.toml must be true or false, not {value!r}"
    return True, None


def _daily_cap() -> int:
    """describe_daily_cap from config.toml, or the default when it is missing or unreadable."""
    try:
        cap = load_config().get("describe_daily_cap", DEFAULT_DESCRIBE_CAP)
    except (OSError, *CONFIG_ERRORS):
        return DEFAULT_DESCRIBE_CAP
    if not isinstance(cap, int) or isinstance(cap, bool) or cap < 0:
        log.warning("describe_daily_cap must be a whole number; using %d", DEFAULT_DESCRIBE_CAP)
        return DEFAULT_DESCRIBE_CAP
    return cap


def _off_status(reason: str | None, waiting: int) -> dict:
    return {"state": "off", "reason": reason, "waiting": waiting, "current": None, "holder": None,
            "today": 0, "cap": _daily_cap(), "retry_at": None}


def describer_status(app: FastAPI) -> dict:
    """The running loop's status, or `off` with the reason it isn't running here."""
    loop = getattr(app.state, "describer_loop", None)
    if loop is not None:
        return loop.status()
    store = getattr(app.state, "inspiration_store", None)
    reason = getattr(app.state, "describer_reason", None)
    if store is None:
        return _off_status(getattr(app.state, "inspiration_setup", None) or reason, 0)
    try:
        waiting = waiting_count(store)
    except Exception as e:  # e.g. Drive offline: still answer
        log.warning("describer: could not count waiting saves: %s", e)
        waiting = 0
    return _off_status(reason, waiting)


def start_describer(app: FastAPI, interval: float = 10.0, port: int | None = None, *,
                    settle_s: float = 60) -> threading.Event:
    """Run the describer on a daemon thread, one tick every `interval` seconds, until the event is set.

    With no inspiration root, or when `describer_enabled()` says no, it starts nothing and returns an
    event that is already set. Until Claude is available (or a describer was injected) the thread
    re-checks `rater_status()` every minute and the status reports `off` with the reason.
    """
    thread = getattr(app.state, "describer_thread", None)
    if thread is not None and thread.is_alive():
        # one describer thread per app (exactly one caller of tick()), even while a stopped one finishes
        return app.state.describer_stop
    stop = threading.Event()
    store = getattr(app.state, "inspiration_store", None)
    if store is None:
        stop.set()
        return stop
    ok, reason = describer_enabled()
    if not ok:
        app.state.describer_reason = reason
        stop.set()
        return stop
    cap = _daily_cap()
    app.state.describer_stop = stop

    def build() -> DescriberLoop | None:
        describer = app.state.describer
        if describer is None:
            st = rater_status()
            if not st["available"]:
                app.state.describer_reason = st["reason"]
                return None
            describer = ClaudeDescriber()
        loop = DescriberLoop(store, describer, app.state.repo_root, cap=cap, port=port)
        loop.settle_s = settle_s
        return loop

    def run() -> None:
        loop = None
        try:
            while not stop.is_set():
                if loop is None:
                    try:
                        loop = build()
                    except Exception as e:  # never let the thread die
                        log.exception("describer: could not start")
                        app.state.describer_reason = f"could not start: {e}"
                    if loop is None:
                        stop.wait(UNAVAILABLE_RECHECK_S)
                        continue
                    app.state.describer_reason = None
                    app.state.describer_loop = loop
                loop.tick()
                stop.wait(interval)
        finally:
            app.state.describer_loop = None
            app.state.describer_reason = NOT_STARTED
            if loop is not None:
                loop.close()

    thread = threading.Thread(target=run, name="quarry-describer", daemon=True)
    app.state.describer_thread = thread  # tests join it so no tick outlives its temp dirs
    thread.start()
    return stop


def mount(app: FastAPI) -> None:
    try:
        root, setup = inspiration_root(), None
    except NoInspirationRoot as e:
        root, setup = None, str(e)
    except (ValueError, TypeError) as e:  # unreadable config.toml: the rest of the workbench still starts
        root, setup = None, f"Inspiration is off: {e}"
    store = Store(root) if root is not None else None
    app.state.inspiration_store = store
    app.state.inspiration_setup = setup
    app.state.describer_loop = None
    ok, why = describer_enabled()
    app.state.describer_reason = NOT_STARTED if ok else why
    router = APIRouter()

    def rows() -> tuple[list[dict], list[str]]:
        scan = store.scan()
        vocab = load_vocabulary(app.state.repo_root)
        out, warnings = [], list(scan.warnings)
        for id_ in scan.by_shortcode.values():
            try:
                rec = store.read_cached(id_)
            except (OSError, ValueError) as e:
                warnings.append(f"unreadable {id_}/save.json: {e}")
                continue
            row = _row(rec, vocab)
            if row["media"]:
                out.append(row)
        out.sort(key=lambda r: r["saved_at"] or "", reverse=True)
        return out, warnings

    @router.get("/api/inspiration")
    def list_inspiration():
        if store is None:
            return {"enabled": False, "setup": setup, "items": [], "warnings": [],
                    "describer": describer_status(app)}
        items, warnings = rows()
        return {"enabled": True, "setup": None, "items": items, "warnings": warnings,
                "describer": describer_status(app)}

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
        vocab = load_vocabulary(app.state.repo_root)
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
                items.append(_row(rec, vocab))
        return {"applied": applied, "failed": failed, "items": items}

    @router.post("/api/inspiration/{id}/describe")
    def describe(id: str):
        """Ask Claude to (re)describe one save: sets describe_requested_at and clears a stopped describer."""
        if store is None:
            return _err(409, setup)
        if not INSPIRATION_ID_RE.match(id):
            return _err(404, f"no such save: {id}")
        with store_lock():
            try:
                rec = store.read(id)
            except FileNotFoundError:
                return _err(404, f"no such save: {id}")
            except (OSError, ValueError) as e:
                return _err(500, f"unreadable {id}/save.json: {e}")
            rec["describe_requested_at"] = utc_now()
            try:
                store.write(rec)
            except (OSError, ValueError) as e:
                return _err(500, f"could not save {id}: {e}")
        loop = getattr(app.state, "describer_loop", None)
        if loop is not None:
            loop.resume()
        return {"ok": True}

    app.include_router(router)
