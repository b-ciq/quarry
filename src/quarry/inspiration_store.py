"""Storage layer for the inspiration corpus (Instagram saves) in a folder outside the repo.

Layout: <root>/instagram/<id>/save.json plus media `NN.<ext>` and `NN-poster.jpg`.
"""
from __future__ import annotations

import contextlib
import errno
import fcntl
import json
import os
import re
import shutil
import tempfile
import threading
import tomllib
from dataclasses import dataclass, field
from pathlib import Path

from quarry.schema import INSPIRATION_ID_RE, MEDIA_NAME_RE, validate_inspiration_record

DEFAULT_DAILY_CAP = 40


class NoInspirationRoot(RuntimeError):
    pass


class StoreUnreadable(OSError):
    """A save folder that could belong to a shortcode has no readable save.json (e.g. Drive mid-sync)."""


def config_dir() -> Path:
    env = os.environ.get("QUARRY_CONFIG_DIR")
    return Path(env) if env else Path.home() / ".config" / "quarry"


def cache_dir() -> Path:
    env = os.environ.get("QUARRY_CACHE_DIR")
    return Path(env) if env else Path.home() / ".cache" / "quarry"


def load_config() -> dict:
    path = config_dir() / "config.toml"
    if not path.is_file():
        return {}
    return tomllib.loads(path.read_text())


def inspiration_root(explicit: Path | None = None) -> Path:
    how = "set QUARRY_INSPIRATION_DIR or inspiration_dir in ~/.config/quarry/config.toml"
    if explicit is not None:
        root = Path(explicit)
    elif os.environ.get("QUARRY_INSPIRATION_DIR"):
        root = Path(os.environ["QUARRY_INSPIRATION_DIR"])
    elif load_config().get("inspiration_dir"):
        root = Path(load_config()["inspiration_dir"]).expanduser()
    else:
        raise NoInspirationRoot(f"No inspiration folder configured: {how}")
    if not root.is_dir():
        raise NoInspirationRoot(f"Inspiration folder does not exist: {root} ({how})")
    return root


def capture_downloads_dir() -> Path:
    value = load_config().get("capture_downloads_dir")
    return Path(value).expanduser() if value else Path.home() / "Downloads" / "quarry"


def daily_cap() -> int:
    return int(load_config().get("capture_daily_cap", DEFAULT_DAILY_CAP))


_lock_state = threading.RLock()
_lock_depth = 0
_lock_fd = -1


@contextlib.contextmanager
def store_lock():
    """Exclusive cross-process lock for every write to the root. Re-entrant within a process."""
    global _lock_depth, _lock_fd
    with _lock_state:
        if _lock_depth == 0:
            config_dir().mkdir(parents=True, exist_ok=True)
            fd = os.open(config_dir() / "inspiration.lock", os.O_RDWR | os.O_CREAT, 0o644)
            try:
                fcntl.flock(fd, fcntl.LOCK_EX)
            except BaseException:
                os.close(fd)
                raise
            _lock_fd = fd
        _lock_depth += 1
        try:
            yield
        finally:
            _lock_depth -= 1
            if _lock_depth == 0:
                fd = _lock_fd
                try:
                    fcntl.flock(fd, fcntl.LOCK_UN)
                finally:
                    os.close(fd)


def _tmp_dir() -> Path:
    d = cache_dir() / "tmp"
    d.mkdir(parents=True, exist_ok=True)
    return d


def _publish(staged: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        os.replace(staged, dest)
    except OSError as e:
        if e.errno != errno.EXDEV:
            raise
        part = dest.parent / f".{dest.name}.part"
        try:
            shutil.copyfile(staged, part)
            os.replace(part, dest)
        except BaseException:
            part.unlink(missing_ok=True)
            raise
        staged.unlink(missing_ok=True)


def atomic_write_bytes(dest: Path, data: bytes) -> None:
    fd, name = tempfile.mkstemp(dir=_tmp_dir(), prefix=f"{dest.name}.")
    staged = Path(name)
    try:
        with os.fdopen(fd, "wb") as f:
            f.write(data)
        _publish(staged, dest)
    finally:
        staged.unlink(missing_ok=True)


def atomic_move(src: Path, dest: Path) -> None:
    """Copy `src` via staging, publish at `dest`, and only then remove `src`.

    Any failure leaves `src` untouched and `dest` unchanged.
    """
    fd, name = tempfile.mkstemp(dir=_tmp_dir(), prefix=f"{dest.name}.")
    os.close(fd)
    staged = Path(name)
    try:
        shutil.copyfile(src, staged)
        _publish(staged, dest)
    finally:
        staged.unlink(missing_ok=True)
    src.unlink()


@dataclass
class Scan:
    by_shortcode: dict[str, str] = field(default_factory=dict)
    ids: set[str] = field(default_factory=set)
    warnings: list[str] = field(default_factory=list)


class Store:
    def __init__(self, root: Path):
        self.root = Path(root)
        self.dir = self.root / "instagram"
        self._cache: dict[tuple[Path, int], dict] = {}

    def _parse(self, path: Path) -> dict | None:
        key = (path, path.stat().st_mtime_ns)
        if key not in self._cache:
            self._cache[key] = json.loads(path.read_text())
        return self._cache[key]

    def scan(self) -> Scan:
        s = Scan()
        if not self.dir.is_dir():
            return s
        for entry in sorted(self.dir.iterdir()):
            if not entry.is_dir() or not INSPIRATION_ID_RE.match(entry.name):
                s.warnings.append(f"unexpected entry in instagram/: {entry.name}")
                continue
            save = entry / "save.json"
            for child in sorted(entry.iterdir()):
                if child.name.startswith(".") or child.name == "save.json":
                    continue
                if not MEDIA_NAME_RE.match(child.name):
                    s.warnings.append(f"unexpected file in {entry.name}/: {child.name}")
            s.ids.add(entry.name)
            if not save.is_file():
                s.warnings.append(f"{entry.name}/ has no save.json")
                continue
            try:
                rec = self._parse(save)
                code = rec["source"]["shortcode"]
            except (OSError, ValueError, KeyError, TypeError) as e:
                s.warnings.append(f"unreadable {entry.name}/save.json: {e}")
                continue
            s.by_shortcode[code] = entry.name
        return s

    def read(self, id: str) -> dict:
        if not INSPIRATION_ID_RE.match(id):
            raise ValueError(f"invalid id: {id!r}")
        return json.loads((self.dir / id / "save.json").read_text())

    def read_cached(self, id: str) -> dict:
        """Like `read`, but reuses the parse `scan()` cached while save.json is unchanged. Do not mutate it."""
        if not INSPIRATION_ID_RE.match(id):
            raise ValueError(f"invalid id: {id!r}")
        return self._parse(self.dir / id / "save.json")

    def write(self, record: dict) -> Path:
        errors = validate_inspiration_record(record)
        if errors:
            raise ValueError("invalid inspiration record: " + "; ".join(errors))
        path = self.dir / record["id"] / "save.json"
        data = (json.dumps(record, indent=2, ensure_ascii=False) + "\n").encode()
        with store_lock():
            atomic_write_bytes(path, data)
        return path

    def new_id(self, shortcode: str, scan: Scan) -> str:
        base = "ig-" + re.sub(r"[^a-z0-9]+", "-", shortcode.lower()).strip("-")
        candidate, n = base, 1
        while candidate in scan.ids:
            n += 1
            candidate = f"{base}-{n}"
        return candidate

    def id_for_new(self, shortcode: str, scan: Scan) -> str:
        """The id for a new record, or StoreUnreadable when an unreadable folder might already hold it.

        Use only after `shortcode` was not found in `scan.by_shortcode`. A folder in `scan.ids`
        whose record could not be read may be this shortcode's, so creating `-2` would duplicate it.
        """
        readable = set(scan.by_shortcode.values())
        base = self.new_id(shortcode, Scan())
        candidate, n = base, 1
        while candidate in scan.ids:
            if candidate not in readable:
                raise StoreUnreadable(f"{self.dir / candidate} has no readable save.json; "
                                      f"it may already be {shortcode}")
            n += 1
            candidate = f"{base}-{n}"
        return candidate

    def media_path(self, id: str, filename: str) -> Path:
        if not INSPIRATION_ID_RE.match(id):
            raise ValueError(f"invalid id: {id!r}")
        if not MEDIA_NAME_RE.match(filename):
            raise ValueError(f"invalid media file name: {filename!r}")
        base = self.dir / id
        path = base / filename
        if path.resolve().parent != base.resolve():
            raise ValueError(f"path escapes the save folder: {filename!r}")
        return path
