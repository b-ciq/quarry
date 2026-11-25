import json
import shutil
import struct
import zlib
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parent.parent


def _png_1px() -> bytes:
    def chunk(t, d):
        c = struct.pack(">I", len(d)) + t + d
        return c + struct.pack(">I", zlib.crc32(t + d) & 0xFFFFFFFF)

    raw = b"\x00\xff\xff\xff"
    return (
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", struct.pack(">IIBBBBB", 1, 1, 8, 2, 0, 0, 0))
        + chunk(b"IDAT", zlib.compress(raw))
        + chunk(b"IEND", b"")
    )


class Repo:
    def __init__(self, root: Path):
        self.root = root

    def add_asset(self, cls, id, **overrides):
        d = self.root / "library" / cls
        d.mkdir(parents=True, exist_ok=True)
        (d / f"{id}.png").write_bytes(_png_1px())
        sidecar = {
            "id": id,
            "file": f"{id}.png",
            "status": "confirmed",
            "class": cls,
            "products": [],
            "categories": [],
            "verticals": [],
            "concepts": [],
            "style": [],
            "aspect": "1:1",
            "license": "owned",
            "source": {"origin": "designer", "ingested_at": "2026-01-01T00:00:00Z"},
            "usage_restrictions": [],
            "description": "A test asset.",
        }
        if cls == "background":
            sidecar["tone"] = "dark"
        if cls == "screenshot":
            sidecar["product_version"] = "1.0"
            sidecar["captured_at"] = "2026-01-01"
        sidecar.update(overrides)
        sidecar = {k: v for k, v in sidecar.items() if v is not _DROP}
        path = d / f"{id}.json"
        path.write_text(json.dumps(sidecar, indent=2))
        return path


_DROP = object()


@pytest.fixture
def drop():
    return _DROP


@pytest.fixture
def repo(tmp_path):
    (tmp_path / "taxonomy").mkdir()
    shutil.copy(ROOT / "taxonomy" / "vocabulary.json", tmp_path / "taxonomy" / "vocabulary.json")
    (tmp_path / "library").mkdir()
    return Repo(tmp_path)


def _git(root, *args):
    import subprocess
    return subprocess.run(["git", "-C", str(root), *args], check=True, capture_output=True, text=True).stdout


@pytest.fixture
def git_repo(repo):
    """`repo` plus git init, local identity and an initial commit (no remote)."""
    _git(repo.root, "init", "-q", "-b", "main")
    _git(repo.root, "config", "user.name", "Test")
    _git(repo.root, "config", "user.email", "test@example.com")
    _git(repo.root, "add", "-A")
    _git(repo.root, "commit", "-q", "--allow-empty", "-m", "init")
    repo.git = lambda *a: _git(repo.root, *a)
    return repo


@pytest.fixture(autouse=True)
def _isolated_quarry_dirs(tmp_path, monkeypatch):
    """No test may touch the real ~/.config/quarry, ~/.cache/quarry or a Drive folder."""
    monkeypatch.setenv("QUARRY_CONFIG_DIR", str(tmp_path / "_config"))
    monkeypatch.setenv("QUARRY_CACHE_DIR", str(tmp_path / "_cache"))
    monkeypatch.delenv("QUARRY_INSPIRATION_DIR", raising=False)
