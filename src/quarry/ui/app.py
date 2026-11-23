"""Quarry workbench: local FastAPI app for curating the brand asset library."""
import os
import sqlite3
import threading
from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

from quarry.publish import check_stale, sidecar_digest
from quarry.rater import Rater
from quarry.ui import gitops, ingest_api, jobs, rate_api, read_api, vocab_api, write_api

STATIC_DIR = Path(__file__).parent / "static"


def _index_meta(repo_root: Path, key: str) -> str | None:
    db = repo_root / "index" / "library.db"
    if not db.exists():
        return None
    try:
        conn = sqlite3.connect(f"file:{db}?mode=ro", uri=True)
        try:
            row = conn.execute("SELECT value FROM meta WHERE key = ?", (key,)).fetchone()
        finally:
            conn.close()
    except sqlite3.Error:
        return None
    return row[0] if row else None


def _embedder_mode(repo_root: Path) -> str | None:
    return _index_meta(repo_root, "embedder_mode")


def create_app(repo_root: Path, fake_embedder: bool = False, skill_dir: Path | None = None,
               rater: Rater | None = None) -> FastAPI:
    repo_root = Path(repo_root)
    app = FastAPI(title="quarry workbench")
    app.state.repo_root = repo_root
    app.state.rater = rater  # injected (tests); rate_api builds a ClaudeRater lazily otherwise
    app.state.embedder_mode = lambda: _embedder_mode(repo_root)
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
        # The index records the sidecar digest it was built from (meta table).
        return _index_meta(repo_root, "sidecar_digest") != sidecar_digest(repo_root)

    def git_block():
        if not gitops.is_git_repo(repo_root):
            return None
        gitops.fetch_if_stale(repo_root)
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
    rate_api.mount(app)
    vocab_api.mount(app)
    ingest_api.mount(app)
    jobs.mount(app)

    @app.get("/")
    def root():
        return FileResponse(STATIC_DIR / "index.html")

    # Built frontend bundle + Quantic fonts (both land in static/assets/).
    if (STATIC_DIR / "assets").is_dir():
        app.mount("/assets", StaticFiles(directory=STATIC_DIR / "assets"), name="assets")

    return app


def dev_rater() -> Rater | None:
    """Dev-only: QUARRY_FAKE_RATER=1 swaps in FakeRater (every asset rated maybe/unsure, no API key,
    no cost) so the Rate view can be exercised locally. It still commits bot ratings: never point it
    at a real library."""
    if os.environ.get("QUARRY_FAKE_RATER") == "1":
        from quarry.rater import FakeRater
        return FakeRater()
    return None


def serve(repo_root: Path, port: int = 8787, fake_embedder: bool = False) -> None:
    import uvicorn
    skill = Path(os.environ.get("QUARRY_DECK_SKILL_DIR", "~/.claude/skills/quantic-deck-builder")).expanduser()
    app = create_app(repo_root, fake_embedder, skill_dir=skill, rater=dev_rater())
    uvicorn.run(app, host="127.0.0.1", port=port)
