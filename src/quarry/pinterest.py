"""Import a folder of `pinterest-dl` output into the inspiration store, one record per pin.

The folder holds, per pin, `<pin id>.json` (pinterest-dl `--caption json`: id, src, alt, origin,
resolution, optional media_stream.video), the pin's image `<pin id>.<jpg|jpeg|png|webp|gif>`, and for a
video pin, optionally `<pin id>.mp4` fetched separately (pinterest-dl's own video download mangles
Pinterest's byte-range streams). Nothing here talks to Pinterest.

Records land in `<root>/pinterest/pin-<pin id>/`. A pin already in the store only gains the board in
`collections`; its media is never re-copied.
"""
from __future__ import annotations

import hashlib
import json
import tempfile
from dataclasses import dataclass, field
from datetime import date, datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

from PIL import Image

from quarry.inspiration_store import Store, _tmp_dir, store_lock
from quarry.media_probe import MediaError, assemble_mp4, image_size, make_poster, probe_video
from quarry.schema import PIN_ID_RE

IMAGE_EXTS = (".jpg", ".jpeg", ".png", ".webp", ".gif")
METHOD = "pinterest-dl"


@dataclass
class PinterestResult:
    created: list[str] = field(default_factory=list)
    updated: list[str] = field(default_factory=list)
    unchanged: list[str] = field(default_factory=list)
    skipped: list[tuple[str, str]] = field(default_factory=list)  # (pin id or file name, reason)
    warnings: list[str] = field(default_factory=list)


def board_slug(board_url: str) -> str:
    """The board (or section) name from its URL: the last path segment, lowercased."""
    u = urlparse(board_url)
    if u.scheme != "https" or u.netloc not in ("www.pinterest.com", "pinterest.com"):
        raise ValueError(f"not a Pinterest board URL: {board_url!r}")
    parts = [p for p in u.path.split("/") if p]
    if not parts:
        raise ValueError(f"no board in URL: {board_url!r}")
    return parts[-1].lower()


def _sha256(p: Path) -> str:
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def _image_for(folder: Path, pin_id: str) -> Path | None:
    for ext in IMAGE_EXTS:
        p = folder / f"{pin_id}{ext}"
        if p.is_file():
            return p
    return None


def _frames(p: Path) -> int:
    with Image.open(p) as im:
        return getattr(im, "n_frames", 1)


def _to_jpeg(src: Path, dest: Path) -> None:
    with Image.open(src) as im:
        im.convert("RGB").save(dest, "JPEG", quality=92)


def _stage_video(video: Path, poster_src: Path | None, tmp: Path) -> tuple[dict, list[tuple[Path, str]]]:
    """Stage `01.mp4` (H.264) and `01-poster.jpg`; the poster is `poster_src`, or the video's first frame."""
    mp4, poster = tmp / "01.mp4", tmp / "01-poster.jpg"
    assemble_mp4(video, None, mp4)
    if poster_src is not None:
        _to_jpeg(poster_src, poster)
    else:
        make_poster(mp4, poster)
    info = probe_video(mp4)
    item = {"type": "video", "file": "01.mp4", "poster": "01-poster.jpg", "width": info.width,
            "height": info.height, "duration_s": info.duration_s, "has_audio": info.has_audio,
            "sha256": _sha256(mp4)}
    return item, [(mp4, "01.mp4"), (poster, "01-poster.jpg")]


def _stage_image(image: Path, tmp: Path) -> tuple[dict, list[tuple[Path, str]]]:
    ext = image.suffix.lower()
    name = "01.png" if ext == ".gif" else f"01{ext}"
    staged = tmp / name
    if ext == ".gif":
        with Image.open(image) as im:
            im.convert("RGBA").save(staged, "PNG")
    else:
        staged.write_bytes(image.read_bytes())
    w, h = image_size(staged)
    return {"type": "image", "file": name, "width": w, "height": h, "sha256": _sha256(staged)}, [(staged, name)]


def _record(data: dict, pin_id: str, board_url: str, kind: str, item: dict) -> dict:
    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    origin = data.get("origin")
    return {
        "id": f"pin-{pin_id}", "status": "proposed",
        "source_url": origin if isinstance(origin, str) and origin else f"https://www.pinterest.com/pin/{pin_id}/",
        "source": {"origin": "pinterest", "pin_id": pin_id, "kind": kind, "board": board_url,
                   "saved_at": None, "ingested_at": date.today().isoformat()},
        "owner": {}, "caption": data.get("alt") if isinstance(data.get("alt"), str) else "",
        "hashtags": [], "collections": [board_slug(board_url)], "saved_because": "",
        "concepts": [], "style": [], "description": "",
        "capture": {"status": "captured", "slides_expected": 1,
                    "items": [{"slide": 1, **item, "method": METHOD, "captured_at": now}], "note": ""},
    }


def _import_one(store: Store, folder: Path, data: dict, board_url: str, result: PinterestResult) -> None:
    pin_id = data["id"]
    image = _image_for(folder, pin_id)
    video = folder / f"{pin_id}.mp4"
    if image is None and not video.is_file():
        result.skipped.append((pin_id, "no media file"))
        return
    wants_video = isinstance((data.get("media_stream") or {}).get("video"), dict)
    with tempfile.TemporaryDirectory(dir=_tmp_dir(), prefix="pin-") as t:
        tmp = Path(t)
        try:
            if video.is_file():
                item, files = _stage_video(video, image, tmp)
            elif image.suffix.lower() == ".gif" and _frames(image) > 1:
                item, files = _stage_video(image, None, tmp)
            else:
                if wants_video:
                    result.warnings.append(f"{pin_id}: video pin has no {pin_id}.mp4; imported its image")
                item, files = _stage_image(image, tmp)
        except (MediaError, OSError) as e:
            result.skipped.append((pin_id, f"unreadable media: {e}"))
            return
        record = _record(data, pin_id, board_url, item["type"], item)
        store.commit(record, files)
    result.created.append(record["id"])


def import_pinterest(folder: Path, board_url: str, root: Path) -> PinterestResult:
    folder = Path(folder)
    slug = board_slug(board_url)
    if not folder.is_dir():
        raise ValueError(f"not a folder: {folder}")
    store = Store(root)
    result = PinterestResult()
    with store_lock():
        scan = store.scan()
        result.warnings.extend(scan.warnings)
        known = scan.by_source["pinterest"]
        for json_path in sorted(folder.glob("*.json")):
            try:
                data = json.loads(json_path.read_text())
            except (OSError, ValueError) as e:
                result.skipped.append((json_path.name, f"unreadable JSON: {e}"))
                continue
            pin_id = str(data.get("id", "")) if isinstance(data, dict) else ""
            if not PIN_ID_RE.match(pin_id) or json_path.stem != pin_id:
                result.skipped.append((json_path.name, "not a pin JSON"))
                continue
            data["id"] = pin_id
            id_ = f"pin-{pin_id}"
            if pin_id in known:
                rec = store.read(id_)
                collections = list(rec.get("collections") or [])
                if slug in collections:
                    result.unchanged.append(id_)
                else:
                    rec["collections"] = collections + [slug]
                    store.write(rec)
                    result.updated.append(id_)
                continue
            if id_ in scan.ids:
                result.skipped.append((pin_id, f"{store.folder(id_)} exists but has no readable save.json"))
                continue
            _import_one(store, folder, data, board_url, result)
            if result.created and result.created[-1] == id_:
                known[pin_id] = id_
                scan.ids.add(id_)
    return result
