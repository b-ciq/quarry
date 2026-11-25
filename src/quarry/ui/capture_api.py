"""Capture page API: the saves list, the daily cap on opened posts, fix-ups, and the background sweeper.

The inspiration root is resolved once at mount. Without one the page is disabled and every mutation
answers 409 with the setup message; the rest of the workbench is unaffected.
"""
from __future__ import annotations

import hashlib
import json
import logging
import tempfile
import threading
from datetime import UTC, date, datetime
from pathlib import Path

from fastapi import APIRouter, FastAPI, File, Form, UploadFile
from fastapi.responses import JSONResponse

from quarry.capture_sweep import FAILED_DIR, IMAGE_EXTS, MAX_SLIDE, capture_status, sweep
from quarry.inspiration_store import (DEFAULT_DAILY_CAP, NoInspirationRoot, Store, atomic_write_bytes, cache_dir,
                                      capture_downloads_dir, config_dir, daily_cap, inspiration_root,
                                      store_lock)
from quarry.media_probe import FfmpegMissing, MediaError, assemble_mp4, image_size, make_poster, probe_video
from quarry.schema import CAPTURE_STATUSES

log = logging.getLogger(__name__)

CAP_MESSAGE = "That's enough for today. Pick up tomorrow."
OPENS_FILE = "capture-opens.json"
VIDEO_EXTS = {".mp4", ".mov", ".webm"}
MAX_UPLOAD_BYTES = 500 * 1024 * 1024
MAX_UPLOAD_LABEL = "500 MB"


class _Refused(Exception):
    def __init__(self, status: int, message: str):
        super().__init__(message)
        self.status, self.message = status, message


def _err(status: int, message: str) -> JSONResponse:
    return JSONResponse({"error": message}, status_code=status)


def _row(rec: dict) -> dict:
    source = rec.get("source") or {}
    capture = rec.get("capture") or {}
    items = [it for it in capture.get("items") or [] if isinstance(it, dict)]
    stamps = [it["captured_at"] for it in items if isinstance(it.get("captured_at"), str)]
    owner = rec.get("owner")
    username = owner.get("username") if isinstance(owner, dict) else None
    return {"id": rec.get("id"), "shortcode": source.get("shortcode"), "source_url": rec.get("source_url"),
            "kind": source.get("kind"), "owner": username if isinstance(username, str) else "",
            "saved_at": source.get("saved_at"), "captured_at": max(stamps, default=None),
            "status": capture.get("status"), "slides_expected": capture.get("slides_expected"),
            "slides": [{"slide": it.get("slide"), "type": it.get("type")} for it in items]}


def _sort_key(row: dict) -> str:
    stamp = row["saved_at"] or row["captured_at"]
    return stamp if isinstance(stamp, str) else ""


# --- today's opened posts (local date) ---------------------------------------------------------

def _opens_path() -> Path:
    return cache_dir() / OPENS_FILE


def _load_opens(today: str) -> list[str]:
    try:
        data = json.loads(_opens_path().read_text())
    except (OSError, ValueError):
        return []
    if not isinstance(data, dict) or data.get("date") != today or not isinstance(data.get("opened"), list):
        return []
    return [code for code in data["opened"] if isinstance(code, str)]


CONFIG_ERRORS = (ValueError, TypeError)  # tomllib.TOMLDecodeError is a ValueError; wrong value types


def _config_problem(e: Exception) -> str:
    return f"Capture is off: {config_dir() / 'config.toml'} has a problem: {e}"


def _cap() -> tuple[int, str | None]:
    """The daily cap, or the default plus a warning when config.toml can't give one."""
    try:
        return daily_cap(), None
    except CONFIG_ERRORS as e:
        return DEFAULT_DAILY_CAP, f"capture_daily_cap unreadable, using {DEFAULT_DAILY_CAP}: {e}"


def _today() -> dict:
    return {"opened": len(_load_opens(date.today().isoformat())), "cap": _cap()[0]}


def _failed_folders() -> list[dict]:
    failed = capture_downloads_dir() / FAILED_DIR  # caller handles config errors
    if not failed.is_dir():
        return []
    out = []
    for folder in sorted(p for p in failed.iterdir() if p.is_dir()):
        try:
            reason = (folder / "reason.txt").read_text().strip()
        except OSError:
            reason = ""
        out.append({"folder": folder.name, "reason": reason})
    return out


# --- Add file ----------------------------------------------------------------------------------

def _receive(upload: UploadFile, dest: Path) -> None:
    total = 0
    with open(dest, "wb") as out:
        while chunk := upload.file.read(1 << 20):
            total += len(chunk)
            if total > MAX_UPLOAD_BYTES:
                raise _Refused(413, f"File is larger than the {MAX_UPLOAD_LABEL} limit")
            out.write(chunk)


def _prepare_upload(src: Path, ext: str, stage: Path) -> tuple[dict, Path, str, Path | None]:
    """Check (and for video, convert) an upload like the sweep does.

    Returns (item fields, staged media, its extension, staged poster or None).
    """
    if ext in IMAGE_EXTS:
        width, height = image_size(src)
        return {"type": "image", "width": width, "height": height}, src, ext, None
    info = probe_video(src)
    media = src
    if not (info.codec == "h264" and ext == ".mp4"):
        media = stage / "converted.mp4"
        assemble_mp4(src, None, media)
        info = probe_video(media)
    poster = stage / "poster.jpg"
    make_poster(media, poster)
    fields = {"type": "video", "width": info.width, "height": info.height,
              "duration_s": info.duration_s, "has_audio": info.has_audio}
    return fields, media, ".mp4", poster


def _sha256(p: Path) -> str:
    with open(p, "rb") as f:
        return hashlib.file_digest(f, "sha256").hexdigest()


def _media_names(item: dict) -> set[str]:
    return {item[k] for k in ("file", "poster") if isinstance(item.get(k), str)}


def _parse_slide(value: str | None) -> int | None:
    if value is None or value.strip() == "":
        return None
    try:
        slide = int(value)
    except ValueError:
        slide = 0
    if not 1 <= slide <= MAX_SLIDE:
        raise _Refused(422, f"slide must be a number from 1 to {MAX_SLIDE}")
    return slide


# --- routes ------------------------------------------------------------------------------------

def mount(app: FastAPI) -> None:
    try:
        root, setup = inspiration_root(), None
    except NoInspirationRoot as e:
        root, setup = None, str(e)
    except CONFIG_ERRORS as e:  # the workbench always starts; only the Capture page is off
        root, setup = None, _config_problem(e)
    app.state.capture_root = root
    app.state.capture_setup = setup
    store = Store(root) if root is not None else None
    router = APIRouter()

    def mutate(shortcode: str, change) -> JSONResponse | dict:
        """Apply `change(record, id) -> (stale media names, staged files)` under the store lock.

        The record and staged files are committed all or nothing; stale media goes only after that.
        """
        if store is None:
            return _err(409, setup)
        with store_lock():
            id_ = store.scan().by_shortcode.get(shortcode)
            if id_ is None:
                return _err(404, f"No save with shortcode {shortcode}")
            record = store.read(id_)
            try:
                stale, files = change(record, id_)
            except _Refused as e:
                return _err(e.status, e.message)
            try:
                store.commit(record, files)
            except (OSError, ValueError) as e:
                log.exception("could not save %s", id_)
                return _err(500, f"Could not save {shortcode}: {e}")
            for name in stale:
                try:
                    store.media_path(id_, name).unlink(missing_ok=True)
                except (OSError, ValueError) as e:
                    log.warning("could not remove %s/%s: %s", id_, name, e)
        return {"item": _row(record)}

    @router.get("/api/capture")
    def list_captures():
        counts = {s: 0 for s in CAPTURE_STATUSES}
        if store is None:
            return {"enabled": False, "setup": setup, "counts": counts, "today": _today(),
                    "items": [], "failed": [], "warnings": []}
        scan = store.scan()
        warnings, rows = list(scan.warnings), []
        for id_ in scan.by_shortcode.values():
            try:
                rows.append(_row(store.read_cached(id_)))
            except (OSError, ValueError) as e:  # changed or vanished since the scan
                warnings.append(f"unreadable {id_}/save.json: {e}")
        for r in rows:
            if r["status"] in counts:
                counts[r["status"]] += 1
        rows.sort(key=_sort_key, reverse=True)
        cap, cap_warning = _cap()
        if cap_warning:
            warnings.append(cap_warning)
        try:
            failed = _failed_folders()
        except CONFIG_ERRORS as e:
            failed = []
            warnings.append(f"capture_downloads_dir unreadable: {e}")
        today = {"opened": len(_load_opens(date.today().isoformat())), "cap": cap}
        return {"enabled": True, "setup": None, "counts": counts, "today": today,
                "items": rows, "failed": failed, "warnings": warnings}

    @router.post("/api/capture/{shortcode}/opened")
    def opened(shortcode: str):
        if store is None:
            return _err(409, setup)
        with store_lock():
            id_ = store.scan().by_shortcode.get(shortcode)
            if id_ is None:
                return _err(404, f"No save with shortcode {shortcode}")
            today, cap = date.today().isoformat(), _cap()[0]
            codes = _load_opens(today)
            if shortcode not in codes:
                if len(codes) >= cap:
                    return _err(429, CAP_MESSAGE)
                codes.append(shortcode)
                atomic_write_bytes(_opens_path(), json.dumps({"date": today, "opened": codes}).encode())
            record = store.read(id_)
        return {"item": _row(record), "today": {"opened": len(codes), "cap": cap}}

    @router.post("/api/capture/{shortcode}/unavailable")
    def unavailable(shortcode: str):
        def change(record, _id):
            record["capture"]["status"] = "unavailable"
            return set(), []
        return mutate(shortcode, change)

    def remove(shortcode: str, slide: int | None):
        def change(record, _id):
            capture = record["capture"]
            items = capture.get("items") or []
            gone = [it for it in items if slide is None or it.get("slide") == slide]
            if slide is not None and not gone:
                raise _Refused(404, f"No slide {slide} in {shortcode}")
            capture["items"] = [it for it in items if it not in gone]
            capture["status"] = capture_status(capture)
            kept = set().union(*map(_media_names, capture["items"]))
            return set().union(*map(_media_names, gone)) - kept, []
        return mutate(shortcode, change)

    @router.delete("/api/capture/{shortcode}/items/{slide}")
    def remove_slide(shortcode: str, slide: int):
        return remove(shortcode, slide)

    @router.delete("/api/capture/{shortcode}/items")
    def remove_all(shortcode: str):
        return remove(shortcode, None)

    @router.post("/api/capture/{shortcode}/files")
    def add_file(shortcode: str, file: UploadFile = File(...), slide: str | None = Form(None)):
        if store is None:
            return _err(409, setup)
        if shortcode not in store.scan().by_shortcode:
            return _err(404, f"No save with shortcode {shortcode}")
        name = Path((file.filename or "").replace("\\", "/")).name
        ext = Path(name).suffix.lower()
        if ext not in IMAGE_EXTS | VIDEO_EXTS:
            return _err(422, f"{name or 'file'}: use a jpg, jpeg, png, webp, mp4, mov or webm file")
        stage_root = cache_dir() / "tmp"
        stage_root.mkdir(parents=True, exist_ok=True)
        try:
            wanted = _parse_slide(slide)
            with tempfile.TemporaryDirectory(dir=stage_root, prefix="capture-upload-") as tmp:
                upload = Path(tmp) / f"upload{ext}"
                _receive(file, upload)
                # Checks and transcodes run outside the lock, as in the sweep.
                try:
                    fields, media, media_ext, poster = _prepare_upload(upload, ext, Path(tmp))
                except MediaError as e:
                    raise _Refused(422, f"{name}: {e}") from e
                except FfmpegMissing as e:
                    raise _Refused(500, str(e)) from e
                sha = _sha256(media)

                def change(record, id_):
                    capture = record["capture"]
                    by_slide = {it["slide"]: it for it in capture.get("items") or []}
                    n = wanted or next((k for k in range(1, MAX_SLIDE + 1) if k not in by_slide), None)
                    if n is None:
                        raise _Refused(409, f"{shortcode} has no free slide")
                    nn = f"{n:02d}"
                    new = {"slide": n, "type": fields["type"], "method": "manual",
                           "captured_at": datetime.now(UTC).strftime("%Y-%m-%dT%H:%M:%SZ"),
                           "file": nn + media_ext, **{k: v for k, v in fields.items() if k != "type"}}
                    files = [(media, new["file"])]
                    if poster is not None:
                        new["poster"] = f"{nn}-poster.jpg"
                        files.append((poster, new["poster"]))
                    new["sha256"] = sha
                    stale = _media_names(by_slide[n]) - _media_names(new) if n in by_slide else set()
                    by_slide[n] = new
                    capture["items"] = [by_slide[k] for k in sorted(by_slide)]
                    capture["status"] = capture_status(capture)
                    return stale, files

                return mutate(shortcode, change)
        except _Refused as e:
            return _err(e.status, e.message)

    app.include_router(router)


def start_sweeper(app: FastAPI, interval: float = 5.0) -> threading.Event:
    """Sweep the downloads folder every `interval` seconds on a daemon thread until the event is set.

    With no inspiration root it starts nothing and returns an event that is already set.
    """
    stop = threading.Event()
    root = getattr(app.state, "capture_root", None)
    if root is None:
        stop.set()
        return stop
    store = Store(root)

    def loop() -> None:
        last_error = None
        while not stop.is_set():
            try:
                result = sweep(capture_downloads_dir(), store)
                if result.filed:
                    log.info("capture sweep filed %s", ", ".join(result.filed))
                last_error = None
            except Exception as e:  # never let the thread die; log each new error once
                if repr(e) != last_error:
                    log.exception("capture sweep failed")
                    last_error = repr(e)
            stop.wait(interval)

    threading.Thread(target=loop, name="quarry-capture-sweep", daemon=True).start()
    return stop
