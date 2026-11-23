"""Quarry workbench: local FastAPI app for curating the brand asset library."""
import os
import sqlite3
import threading
from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse, JSONResponse

from quarry.publish import check_stale
from quarry.ui import gitops, ingest_api, jobs, read_api, vocab_api, write_api

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


def create_app(repo_root: Path, fake_embedder: bool = False, skill_dir: Path | None = None) -> FastAPI:
    repo_root = Path(repo_root)
    app = FastAPI(title="quarry workbench")
    app.state.repo_root = repo_root
    app.state.fake_embedder = fake_embedder
    env_skill = os.environ.get("QUARRY_DECK_SKILL_DIR")
    app.state.skill_dir = Path(skill_dir) if skill_dir else (Path(env_skill) if env_skill else None)
    app.state.embedder = None
    embedder_lock = threading.Lock()

    def get_embedder():
        with embedder_lock:
            if app.state.embedder is None:
                if fake_embedder:
                    from quarry.embeddings import FakeEmbedder
                    app.state.embedder = FakeEmbedder()
                else:
                    from quarry.embeddings import HFEmbedder
                    app.state.embedder = HFEmbedder()
            return app.state.embedder

    app.state.get_embedder = get_embedder

    def index_stale() -> bool:
        # v1: the index records no sidecar digest, so approximate with export staleness.
        return (not (repo_root / "index" / "library.db").exists()) or check_stale(repo_root)

    def git_block():
        if not gitops.is_git_repo(repo_root):
            return None
        s = gitops.managed_status(repo_root)
        return {"ahead": s.ahead, "behind": s.behind,
                "dirty_managed": s.dirty_managed, "dirty_other": s.dirty_other}

    @app.get("/api/status")
    def status():
        exports_stale = check_stale(repo_root)
        return {
            "index_stale": index_stale(),
            "exports_stale": exports_stale,
            "embedder_mode": _embedder_mode(repo_root),
            "git": git_block(),
        }

    @app.post("/api/sync")
    def sync():
        try:
            r = gitops.sync(repo_root)
        except gitops.GitError as exc:
            return JSONResponse({"error": str(exc)}, status_code=500)
        body = {"pulled": r.pulled, "pushed": r.pushed, "conflict": r.conflict, "message": r.message}
        return JSONResponse(body, status_code=409 if r.conflict else 200)

    read_api.mount(app, index_stale)
    write_api.mount(app)
    vocab_api.mount(app)
    ingest_api.mount(app)
    jobs.mount(app)

    @app.get("/")
    def root():
        return FileResponse(STATIC_DIR / "index.html")

    return app


def serve(repo_root: Path, port: int = 8787, fake_embedder: bool = False) -> None:
    import uvicorn
    skill = Path(os.environ.get("QUARRY_DECK_SKILL_DIR", "~/.claude/skills/quantic-deck-builder")).expanduser()
    uvicorn.run(create_app(repo_root, fake_embedder, skill_dir=skill), host="127.0.0.1", port=port)
