"""Single-worker background job runner plus reindex/publish endpoints."""
import threading
import uuid
from pathlib import Path
from typing import Any, Callable

from fastapi import APIRouter, Depends, FastAPI
from fastapi.responses import JSONResponse

from quarry.indexer import build_index
from quarry.publish import publish
from quarry.ui import gitops
from quarry.ui.write_api import require_clean_managed

Log = Callable[[str], None]


class JobRunner:
    """One job at a time; start() returns None while busy."""

    def __init__(self):
        self._lock = threading.Lock()
        self._jobs: dict[str, dict] = {}
        self._busy = False

    def start(self, name: str, fn: Callable[[Log], Any]) -> str | None:
        with self._lock:
            if self._busy:
                return None
            self._busy = True
            job_id = uuid.uuid4().hex[:12]
            self._jobs[job_id] = {"name": name, "state": "running", "log": [], "result": None, "error": None}
        threading.Thread(target=self._run, args=(job_id, fn), daemon=True).start()
        return job_id

    def _log(self, job_id: str) -> Log:
        def log(line: str) -> None:
            with self._lock:
                self._jobs[job_id]["log"].append(str(line))
        return log

    def _run(self, job_id: str, fn) -> None:
        try:
            result = fn(self._log(job_id))
            update = {"state": "done", "result": result}
        except BaseException as exc:  # noqa: BLE001 - any failure must surface as job state
            update = {"state": "failed", "error": str(exc) or type(exc).__name__}
        with self._lock:
            self._jobs[job_id].update(update)
            self._busy = False

    def status(self, job_id: str) -> dict | None:
        with self._lock:
            j = self._jobs.get(job_id)
            return None if j is None else {**j, "log": list(j["log"])}


def mount(app: FastAPI) -> None:
    repo_root: Path = app.state.repo_root
    runner = app.state.jobs = JobRunner()
    router = APIRouter()

    def launch(name: str, fn):
        job_id = runner.start(name, fn)
        if job_id is None:
            return JSONResponse({"error": "another job is already running"}, status_code=409)
        return {"job_id": job_id}

    def reindex_job(log: Log):
        log("building index...")
        stats = build_index(repo_root, app.state.get_embedder())
        log(f"indexed {stats.indexed} assets")
        return {"indexed": stats.indexed}

    def publish_job(log: Log):
        # One lock span for sync + publish + commit: a write landing between them could be stashed by the
        # sync's autostash or swept into the published exports. (threading.Lock is not re-entrant: take it once.)
        with app.state.write_lock:
            log("syncing...")
            r = gitops.sync(repo_root)
            if r.conflict:
                raise RuntimeError(r.message)
            log(r.message)
            log("publishing...")
            res = publish(repo_root, app.state.get_embedder(), app.state.skill_dir)
            log(f"published {res.version}: {res.indexed} indexed, {res.exported} exported, {res.bundled} bundled")
            changed = [p for p in gitops.managed_status(repo_root).dirty_managed if p.startswith("exports/")]
            if changed:
                sha = gitops.commit_paths(repo_root, changed, f"publish: {res.version}")
                log(f"committed {sha[:8]}")
            else:
                log("exports unchanged; nothing to commit")
        if gitops.managed_status(repo_root).has_upstream:
            gitops.push(repo_root)
            log("pushed")
        app.state.library_cache.invalidate()
        return {"version": res.version, "indexed": res.indexed, "exported": res.exported,
                "bundled": res.bundled}

    @router.post("/api/reindex")
    def reindex():
        return launch("reindex", reindex_job)

    @router.post("/api/publish", dependencies=[Depends(require_clean_managed)])
    def publish_ep():
        return launch("publish", publish_job)

    @router.get("/api/jobs/{job_id}")
    def job(job_id: str):
        s = runner.status(job_id)
        return s if s else JSONResponse({"error": f"unknown job {job_id!r}"}, status_code=404)

    app.include_router(router)
