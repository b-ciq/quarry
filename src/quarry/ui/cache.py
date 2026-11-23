"""mtime-invalidated view of the live sidecars (never the search index)."""
import threading
from pathlib import Path

from quarry.library import scan_library


class LibraryCache:
    def __init__(self, repo_root: Path):
        self.repo_root = Path(repo_root)
        self._lock = threading.Lock()
        self._sig = None
        self._assets: list[dict] = []
        self._by_id: dict[str, dict] = {}
        self._paths: dict[str, Path] = {}

    def _signature(self):
        lib = self.repo_root / "library"
        sig = []
        for p in sorted(lib.rglob("*")):
            if p.suffix.lower() == ".json" or p.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp"):
                st = p.stat()
                sig.append((str(p), st.st_mtime_ns, st.st_size))
        return tuple(sig)

    def invalidate(self) -> None:
        with self._lock:
            self._sig = None

    def _refresh(self) -> None:
        with self._lock:
            sig = self._signature()
            if sig == self._sig:
                return
            assets = scan_library(self.repo_root)  # may raise LibraryError; cache left stale
            self._assets = [{**a.sidecar, "id": a.id} for a in assets]
            self._by_id = {a["id"]: a for a in self._assets}
            self._paths = {a.id: a.path for a in assets}
            self._sig = sig

    def assets(self) -> list[dict]:
        self._refresh()
        return list(self._assets)

    def get(self, id: str) -> dict | None:
        self._refresh()
        return self._by_id.get(id)

    def image_path(self, id: str) -> Path | None:
        """Library image path for a known id (resolved via the cache, never from user input)."""
        self._refresh()
        return self._paths.get(id)
