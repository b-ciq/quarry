"""Import Instagram saves from Meta's "Download your information" export.

The export lists what was saved (link, owner, caption, hashtags, collections) but
holds no images of other people's posts. Each save becomes a metadata-only
inspiration sidecar under inspiration/instagram/ with image_status "pending".
inspiration/ is reference only: nothing that serves assets reads it.
"""
import json
import re
import zipfile
from dataclasses import dataclass, field
from datetime import UTC, date, datetime
from pathlib import Path

POSTS_FILE = "saved_posts.json"
COLLECTIONS_FILE = "saved_collections.json"
POST_URL_RE = re.compile(r"instagram\.com/(p|reels?|tv)/([A-Za-z0-9_-]+)")
KINDS = {"p": "post", "reel": "reel", "reels": "reel", "tv": "video"}
# Fields the importer may fill in later; everything else belongs to curators once written.
EXPORT_FIELDS = ("caption", "hashtags", "owner")


class ExportError(ValueError):
    pass


@dataclass
class Save:
    shortcode: str
    url: str
    kind: str
    saved_at: str | None = None
    caption: str = ""
    hashtags: list[str] = field(default_factory=list)
    owner: dict = field(default_factory=dict)
    collections: list[str] = field(default_factory=list)


@dataclass
class ImportResult:
    created: list[Path] = field(default_factory=list)
    updated: list[Path] = field(default_factory=list)
    unchanged: list[Path] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)


def _fix_text(s):
    """Undo Meta's mojibake: UTF-8 bytes written out as Latin-1 characters."""
    if not isinstance(s, str):
        return s
    try:
        return s.encode("latin-1").decode("utf-8")
    except (UnicodeEncodeError, UnicodeDecodeError):
        return s


def _iso(ts) -> str | None:
    if not isinstance(ts, (int, float)) or ts <= 0:
        return None
    return datetime.fromtimestamp(ts, UTC).strftime("%Y-%m-%dT%H:%M:%SZ")


def _read_export(path: Path) -> tuple[object, object | None]:
    """Return (saved_posts data, saved_collections data or None) from a zip or a directory."""
    path = Path(path)
    if path.is_dir():
        found = {p.name: p for p in path.rglob("*.json") if p.name in (POSTS_FILE, COLLECTIONS_FILE)}
        load = lambda name: json.loads(found[name].read_text(encoding="utf-8"))
        if POSTS_FILE not in found:
            raise ExportError(f"no {POSTS_FILE} in {path}; include 'Saved' when requesting the export")
        return load(POSTS_FILE), (load(COLLECTIONS_FILE) if COLLECTIONS_FILE in found else None)
    if not zipfile.is_zipfile(path):
        raise ExportError(f"{path} is not a zip file or directory")
    with zipfile.ZipFile(path) as z:
        found = {Path(n).name: n for n in z.namelist() if Path(n).name in (POSTS_FILE, COLLECTIONS_FILE)}
        load = lambda name: json.loads(z.read(found[name]).decode("utf-8"))
        if POSTS_FILE not in found:
            raise ExportError(f"no {POSTS_FILE} in {path}; include 'Saved' when requesting the export")
        return load(POSTS_FILE), (load(COLLECTIONS_FILE) if COLLECTIONS_FILE in found else None)


def _entries(data) -> list[dict]:
    """The list of records, whether the file is a bare list or {"saved_saved_media": [...]}."""
    if isinstance(data, list):
        return [e for e in data if isinstance(e, dict)]
    if isinstance(data, dict):
        for v in data.values():
            if isinstance(v, list):
                return [e for e in v if isinstance(e, dict)]
    return []


def _fields(entry: dict) -> dict[str, dict]:
    """Flatten one record into {label: {"value", "href", "timestamp"}} across both export formats."""
    out: dict[str, dict] = {}
    for label, v in (entry.get("string_map_data") or {}).items():
        if isinstance(v, dict):
            out[label] = v
    for lv in entry.get("label_values") or []:
        if isinstance(lv, dict) and "label" in lv:
            out[lv["label"]] = lv
    return out


def _post_link(fields: dict[str, dict]) -> tuple[str, str, str] | None:
    for f in fields.values():
        for key in ("href", "value"):
            m = POST_URL_RE.search(str(f.get(key) or ""))
            if m:
                return f"https://www.instagram.com/{m.group(1)}/{m.group(2)}/", m.group(2), KINDS[m.group(1)]
    return None


def _parse_post(entry: dict) -> Save | None:
    fields = _fields(entry)
    link = _post_link(fields)
    if not link:
        return None
    url, code, kind = link
    ts = entry.get("timestamp") or next(
        (f.get("timestamp") for f in fields.values() if f.get("timestamp")), None)
    captions: list[str] = []
    for lv in entry.get("label_values") or [fields.get("Caption") or {}]:
        text = _fix_text(lv.get("value") or "").strip() if lv.get("label", "Caption") == "Caption" else ""
        if text and text not in captions:
            captions.append(text)
    save = Save(shortcode=code, url=url, kind=kind, saved_at=_iso(ts), caption="\n\n".join(captions))
    for group in entry.get("label_values") or []:
        if group.get("title") == "Hashtags":
            save.hashtags = [_fix_text(h.get("value")) for h in group.get("dict") or [] if h.get("value")]
        if group.get("title") == "Owner":
            for person in group.get("dict") or []:
                vals = {d.get("label"): _fix_text(d.get("value") or "") for d in person.get("dict") or []}
                save.owner = {"username": vals.get("Username", ""), "name": vals.get("Name", ""),
                              "url": vals.get("URL", "")}
    if not save.owner and isinstance(entry.get("title"), str) and entry["title"]:
        save.owner = {"username": _fix_text(entry["title"]), "name": "", "url": ""}
    return save


def _parse_collections(data) -> dict[str, list[str]]:
    """{shortcode: [collection names]}. A record with a Name and no post link starts a collection."""
    members: dict[str, list[str]] = {}
    current = None
    for entry in _entries(data):
        fields = _fields(entry)
        link = _post_link(fields)
        if link is None:
            name = (fields.get("Name") or {}).get("value")
            current = _fix_text(name) if name else current
        elif current:
            names = members.setdefault(link[1], [])
            if current not in names:
                names.append(current)
    return members


def parse_export(path: Path) -> list[Save]:
    return _parse(path)[0]


def _parse(path: Path) -> tuple[list[Save], bool]:
    """(saves, whether the export included a collections file)."""
    posts_data, collections_data = _read_export(path)
    saves: dict[str, Save] = {}
    for entry in _entries(posts_data):
        save = _parse_post(entry)
        if save and save.shortcode not in saves:
            saves[save.shortcode] = save
    if collections_data is not None:
        for code, names in _parse_collections(collections_data).items():
            if code in saves:
                saves[code].collections = names
    return list(saves.values()), collections_data is not None


def _slug(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def _sidecar(save: Save, id_: str, today: str) -> dict:
    return {
        "id": id_,
        "file": None,
        "image_status": "pending",
        "status": "proposed",
        "source_url": save.url,
        "source": {"origin": "instagram", "shortcode": save.shortcode, "kind": save.kind,
                   "saved_at": save.saved_at, "ingested_at": today},
        "owner": save.owner,
        "caption": save.caption,
        "hashtags": save.hashtags,
        "collections": save.collections,
        "saved_because": "",
        "concepts": [],
        "style": [],
        "description": "",
    }


def import_instagram(export: Path, repo_root: Path) -> ImportResult:
    saves, has_collections = _parse(export)
    dest = Path(repo_root) / "inspiration" / "instagram"
    existing: dict[str, Path] = {}
    ids: set[str] = set()
    for p in sorted(dest.glob("*.json")) if dest.exists() else []:
        try:
            entry = json.loads(p.read_text())
        except json.JSONDecodeError:
            continue
        ids.add(p.stem)
        code = (entry.get("source") or {}).get("shortcode")
        if code:
            existing[code] = p

    result = ImportResult()
    if has_collections and not any(s.collections for s in saves):
        result.warnings.append(f"{COLLECTIONS_FILE} found but no collection memberships were recognized")
    today = date.today().isoformat()
    dest.mkdir(parents=True, exist_ok=True)
    for save in saves:
        if save.shortcode in existing:
            path = existing[save.shortcode]
            entry = json.loads(path.read_text())
            before = json.dumps(entry, sort_keys=True)
            fresh = _sidecar(save, entry.get("id", path.stem), today)
            for key in EXPORT_FIELDS:
                if not entry.get(key) and fresh[key]:
                    entry[key] = fresh[key]
            if not (entry.get("source") or {}).get("saved_at") and save.saved_at:
                entry.setdefault("source", {})["saved_at"] = save.saved_at
            merged = list(entry.get("collections") or [])
            merged += [c for c in save.collections if c not in merged]
            entry["collections"] = merged
            if json.dumps(entry, sort_keys=True) == before:
                result.unchanged.append(path)
            else:
                path.write_text(json.dumps(entry, indent=2, ensure_ascii=False) + "\n")
                result.updated.append(path)
            continue
        base = "ig-" + (_slug(save.shortcode) or "post")
        id_, n = base, 1
        while id_ in ids:
            n += 1
            id_ = f"{base}-{n}"
        path = dest / f"{id_}.json"
        path.write_text(json.dumps(_sidecar(save, id_, today), indent=2, ensure_ascii=False) + "\n")
        ids.add(id_)
        existing[save.shortcode] = path
        result.created.append(path)
    return result
