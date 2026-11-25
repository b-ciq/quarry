"""File finished capture folders from the downloads folder into the inspiration store.

The Chrome extension saves a post's files into `<downloads>/<shortcode>__<yyyymmddThhmmss>/` and
writes `capture.json` last. A folder is filed once every file it lists has arrived. Media that
fails a check sends the whole folder to `<downloads>/_failed/<folder>/` with `reason.txt`.
"""
from __future__ import annotations

import hashlib
import json
import shutil
import tempfile
from dataclasses import dataclass, field
from datetime import date
from pathlib import Path

from quarry.inspiration_store import Store, atomic_move, cache_dir, store_lock
from quarry.media_probe import MediaError, assemble_mp4, audio_codec, image_size, make_poster, probe_video
from quarry.schema import SHORTCODE_RE

CAPTURE_FILE = "capture.json"
FAILED_DIR = "_failed"
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp"}
MAX_SLIDE = 99  # media names carry a two-digit slide number


class CaptureError(ValueError):
    """capture.json does not follow the contract."""


class _Failed(Exception):
    def __init__(self, name: str, error: object):
        super().__init__(f"{name}: {error}")


@dataclass
class SweepResult:
    filed: list[str] = field(default_factory=list)
    failed: list[tuple[str, str]] = field(default_factory=list)


@dataclass
class _Prepared:
    capture: dict
    items: list[dict]
    files: list[tuple[Path, str]]  # (staged file, final media name)


def _load(folder: Path) -> dict | None:
    try:
        data = json.loads((folder / CAPTURE_FILE).read_text())
    except (OSError, ValueError):
        return None
    return data if isinstance(data, dict) else None


def _safe_name(name) -> bool:
    return isinstance(name, str) and name not in ("", ".", "..") and Path(name).name == name


def _listed_files(capture: dict) -> list[str]:
    names = []
    items = capture.get("items")
    for it in items if isinstance(items, list) else []:
        if not isinstance(it, dict):
            continue
        parts = it.get("parts") if isinstance(it.get("parts"), dict) else {}
        names += [it.get("file"), it.get("poster"), parts.get("video"), parts.get("audio")]
    return [n for n in names if n is not None]


def is_finished(folder: Path) -> bool:
    capture = _load(folder)
    if capture is None:
        return False
    if any(p.name.endswith(".crdownload") for p in folder.iterdir()):
        return False
    # Unsafe names are not looked up here; the sweep rejects them so the folder does not sit forever.
    return all((folder / n).is_file() for n in _listed_files(capture) if _safe_name(n))


def _check_capture(cap: dict) -> None:
    def need(ok: bool, msg: str) -> None:
        if not ok:
            raise CaptureError(msg)

    code = cap.get("shortcode")
    need(isinstance(code, str) and bool(SHORTCODE_RE.match(code)), f"shortcode: invalid value {code!r}")
    need(isinstance(cap.get("page_url"), str) and bool(cap["page_url"]), "page_url: must be a non-empty string")
    expected = cap.get("slides_expected")
    need(expected is None or (type(expected) is int and expected >= 1),
         f"slides_expected: must be an int >= 1 or null, got {expected!r}")
    items = cap.get("items")
    need(isinstance(items, list) and bool(items), "items: must be a non-empty list")
    seen: set[int] = set()
    for i, it in enumerate(items):
        need(isinstance(it, dict), f"items[{i}]: must be an object")
        slide = it.get("slide")
        need(type(slide) is int and 1 <= slide <= MAX_SLIDE, f"items[{i}].slide: invalid value {slide!r}")
        need(slide not in seen, f"items[{i}]: duplicate slide {slide}")
        seen.add(slide)
        for key in ("file", "poster"):
            if key in it:
                need(_safe_name(it[key]), f"items[{i}].{key}: invalid file name {it[key]!r}")
        if "poster" in it:
            need(Path(it["poster"]).suffix.lower() in IMAGE_EXTS, f"items[{i}].poster: not an image name")
        if it.get("type") == "image":
            need("file" in it, f"items[{i}]: an image needs 'file'")
            need(Path(it["file"]).suffix.lower() in IMAGE_EXTS, f"items[{i}].file: not an image name")
        elif it.get("type") == "video":
            need(("file" in it) != ("parts" in it), f"items[{i}]: a video needs exactly one of 'file' or 'parts'")
            if "parts" in it:
                parts = it["parts"]
                need(isinstance(parts, dict) and _safe_name(parts.get("video")),
                     f"items[{i}].parts.video: invalid file name")
                need(parts.get("audio") is None or _safe_name(parts["audio"]),
                     f"items[{i}].parts.audio: invalid file name")
        else:
            raise CaptureError(f"items[{i}].type: invalid value {it.get('type')!r}")


def _sha256(p: Path) -> str:
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def _checked(name: str, fn, *args):
    """Run a media check or conversion, blaming `name` when it fails."""
    try:
        return fn(*args)
    except MediaError as e:
        raise _Failed(name, e) from e


def _prepare(folder: Path, stage: Path) -> _Prepared:
    """Check every file and stage the final media. Reads `folder` only; never changes it."""
    cap = _load(folder)
    if cap is None:
        raise _Failed(CAPTURE_FILE, "unreadable")
    try:
        _check_capture(cap)
    except CaptureError as e:
        raise _Failed(CAPTURE_FILE, e) from e
    items, files = [], []
    for it in cap["items"]:
        nn = f"{it['slide']:02d}"
        rec = {"slide": it["slide"], "type": it["type"]}
        for key in ("media_id", "method"):
            if key in it:
                rec[key] = it[key]
        if cap.get("captured_at"):
            rec["captured_at"] = cap["captured_at"]
        if it["type"] == "image":
            src = folder / it["file"]
            rec["width"], rec["height"] = _checked(it["file"], image_size, src)
            rec["file"] = nn + src.suffix.lower()
            staged = stage / rec["file"]
            shutil.copyfile(src, staged)
        else:
            rec["file"] = nn + ".mp4"
            staged = stage / rec["file"]
            if "file" in it:
                name, src = it["file"], folder / it["file"]
                info = _checked(name, probe_video, src)
                if info.codec == "h264" and src.suffix.lower() == ".mp4":
                    shutil.copyfile(src, staged)
                else:
                    _checked(name, assemble_mp4, src, None, staged)
            else:
                parts = it["parts"]
                name, src = parts["video"], folder / parts["video"]
                _checked(name, probe_video, src)
                audio = folder / parts["audio"] if parts.get("audio") else None
                if audio is not None:
                    _checked(parts["audio"], _require_audio, audio)
                _checked(name, assemble_mp4, src, audio, staged)
            info = _checked(name, probe_video, staged)
            rec.update(width=info.width, height=info.height, duration_s=info.duration_s, has_audio=info.has_audio)
            if "poster" in it:
                rec["poster"] = f"{nn}-poster{Path(it['poster']).suffix.lower()}"
                _checked(it["poster"], image_size, folder / it["poster"])
                shutil.copyfile(folder / it["poster"], stage / rec["poster"])
            else:
                rec["poster"] = f"{nn}-poster.jpg"
                _checked(name, make_poster, staged, stage / rec["poster"])
            files.append((stage / rec["poster"], rec["poster"]))
        rec["sha256"] = _sha256(staged)
        files.append((staged, rec["file"]))
        items.append(rec)
    return _Prepared(cap, items, files)


def _require_audio(p: Path) -> None:
    if audio_codec(p) is None:
        raise MediaError("no audio stream")


def _new_record(cap: dict, id_: str) -> dict:
    return {
        "id": id_,
        "status": "proposed",
        "source_url": cap["page_url"],
        "source": {"origin": "instagram", "shortcode": cap["shortcode"], "kind": cap.get("kind") or "post",
                   "saved_at": None, "ingested_at": date.today().isoformat(), "via": "capture"},
        "owner": cap.get("owner") if isinstance(cap.get("owner"), dict) else {},
        "caption": cap.get("caption") if isinstance(cap.get("caption"), str) else "",
        "hashtags": [],
        "collections": [],
        "saved_because": "",
        "concepts": [],
        "style": [],
        "description": "",
        "capture": {"status": "pending", "slides_expected": None, "items": [], "note": ""},
    }


def _media_names(item: dict) -> set[str]:
    return {item[k] for k in ("file", "poster") if isinstance(item.get(k), str)}


def _file(prep: _Prepared, store: Store) -> str:
    """Publish staged media and write the record. Caller holds store_lock()."""
    cap = prep.capture
    scan = store.scan()
    id_ = scan.by_shortcode.get(cap["shortcode"])
    created = id_ is None
    record = _new_record(cap, store.new_id(cap["shortcode"], scan)) if created else store.read(id_)
    id_ = record["id"]
    capture = record.setdefault("capture", {})
    by_slide = {it["slide"]: it for it in capture.get("items") or [] if isinstance(it, dict) and "slide" in it}
    stale: set[str] = set()
    for it in prep.items:
        if it["slide"] in by_slide:
            stale |= _media_names(by_slide[it["slide"]]) - _media_names(it)
        by_slide[it["slide"]] = it
    published: list[Path] = []
    try:
        for staged, name in prep.files:
            dest = store.media_path(id_, name)
            atomic_move(staged, dest)
            published.append(dest)
        if cap.get("slides_expected") is not None:
            capture["slides_expected"] = cap["slides_expected"]
        expected = capture.get("slides_expected")
        complete = type(expected) is int and all(n in by_slide for n in range(1, expected + 1))
        capture["status"] = "captured" if complete else "partial"
        capture["items"] = [by_slide[n] for n in sorted(by_slide)]
        capture.setdefault("note", "")
        store.write(record)
    except BaseException:
        if created:  # leave no half-made save folder; the downloads folder still has everything
            for p in published:
                p.unlink(missing_ok=True)
            save_dir = store.dir / id_
            if save_dir.is_dir() and not any(save_dir.iterdir()):
                save_dir.rmdir()
        raise
    for name in stale:
        try:
            store.media_path(id_, name).unlink(missing_ok=True)
        except ValueError:
            pass
    return id_


def _move_to_failed(folder: Path, reason: str) -> None:
    failed = folder.parent / FAILED_DIR
    failed.mkdir(exist_ok=True)
    dest, n = failed / folder.name, 1
    while dest.exists():
        n += 1
        dest = failed / f"{folder.name}-{n}"
    shutil.move(str(folder), str(dest))
    (dest / "reason.txt").write_text(reason + "\n")


def _capture_folders(downloads: Path) -> list[Path]:
    if not downloads.is_dir():
        return []
    folders = [p for p in downloads.iterdir() if p.is_dir() and not p.name.startswith(("_", "."))]
    return sorted(folders, key=lambda p: (p.name.rpartition("__")[2], p.name))


def sweep(downloads: Path, store: Store) -> SweepResult:
    """File every finished capture folder in `downloads`, oldest first."""
    result = SweepResult()
    stage_root = cache_dir() / "tmp"
    stage_root.mkdir(parents=True, exist_ok=True)
    for folder in _capture_folders(Path(downloads)):
        if not is_finished(folder):
            continue
        with tempfile.TemporaryDirectory(dir=stage_root, prefix="capture-") as tmp:
            # Checks and transcodes run outside the lock so a long video does not block other writers.
            try:
                prep, reason = _prepare(folder, Path(tmp)), None
            except _Failed as e:
                prep, reason = None, str(e)
            except OSError as e:  # e.g. a file vanished or the cache disk is full: retry next sweep
                result.failed.append((folder.name, f"not filed, left in place: {e}"))
                continue
            with store_lock():
                if not (folder / CAPTURE_FILE).is_file():
                    continue  # another sweep filed or failed it meanwhile
                if reason is not None:
                    _move_to_failed(folder, reason)
                    result.failed.append((folder.name, reason))
                    continue
                try:
                    result.filed.append(_file(prep, store))
                except (OSError, ValueError) as e:
                    result.failed.append((folder.name, f"not filed, left in place: {e}"))
                    continue
                shutil.rmtree(folder)
    return result
