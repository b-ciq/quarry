"""Quarry workbench: local FastAPI app for curating the brand asset library."""
import sqlite3
from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse

from quarry.publish import check_stale

STATIC_DIR = Path(__file__).parent / "static"


def _embedder_mode(repo_root: Path) -> str | None:
    db = repo_root / "index" / "library.db"
    if not db.exists():
        return None
    try:
        conn = sqlite3.connect(f"file:{db}?mode=ro", uri=True)
        try:
            row = conn.execute("SELECT value FROM meta WHERE key = 'embedder_mode'").fetchone()
        finally:
            conn.close()
    except sqlite3.Error:
        return None
    return row[0] if row else None


def create_app(repo_root: Path, fake_embedder: bool = False) -> FastAPI:
    repo_root = Path(repo_root)
    app = FastAPI(title="quarry workbench")
    app.state.repo_root = repo_root
    app.state.fake_embedder = fake_embedder

    @app.get("/api/status")
    def status():
        exports_stale = check_stale(repo_root)
        index_exists = (repo_root / "index" / "library.db").exists()
        # v1: the index records no sidecar digest, so approximate with export staleness.
        return {
            "index_stale": (not index_exists) or exports_stale,
            "exports_stale": exports_stale,
            "embedder_mode": _embedder_mode(repo_root),
            "git": None,
        }

    @app.get("/")
    def root():
        return FileResponse(STATIC_DIR / "index.html")

    return app


def serve(repo_root: Path, port: int = 8787, fake_embedder: bool = False) -> None:
    import uvicorn
    uvicorn.run(create_app(repo_root, fake_embedder), host="127.0.0.1", port=port)
