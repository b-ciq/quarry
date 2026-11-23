"""Asset write endpoints: whole-sidecar validation, then a scoped commit of exactly the touched file."""
import json
import threading
from pathlib import Path

from fastapi import APIRouter, Depends, FastAPI, Request
from fastapi.responses import JSONResponse

from quarry.schema import validate_sidecar
from quarry.ui import gitops
from quarry.vocabulary import load_vocabulary

EDITABLE = ("description", "products", "categories", "verticals", "concepts", "style", "tone",
            "product_version", "captured_at", "usage_restrictions")


class Conflict(Exception):
    def __init__(self, message: str, **extra):
        self.message, self.extra = message, extra


def require_clean_managed(request: Request) -> None:
    """Shared guard for every curation mutation (reuse in vocab/ingest/publish routes).

    Runs BEFORE the handler, so a mutation's own writes never trip it. 409s when library/,
    taxonomy/ or exports/ already hold uncommitted changes; unrelated dirt is ignored.
    """
    repo = request.app.state.repo_root
    if not gitops.is_git_repo(repo):
        raise Conflict("not a git repository; the workbench commits every change")
    dirty = gitops.managed_status(repo).dirty_managed
    if dirty:
        raise Conflict("Uncommitted changes exist in managed paths (" + ", ".join(dirty) +
                       "). Resolve them (commit or discard) with your agent, then retry.",
                       dirty_managed=dirty)


def _err(status: int, msg: str, **extra) -> JSONResponse:
    return JSONResponse({"error": msg, **extra}, status_code=status)


def mount(app: FastAPI) -> None:
    repo_root: Path = app.state.repo_root
    router = APIRouter()
    lock = threading.Lock()

    @app.exception_handler(Conflict)
    def _conflict(_req, exc: Conflict):
        return _err(409, exc.message, **exc.extra)

    def mutate(id: str, message: str, change, precondition=None) -> JSONResponse:
        cache = app.state.library_cache
        img = cache.image_path(id)
        if img is None:
            return _err(404, f"unknown asset {id!r}")
        sc_path = img.with_suffix(".json")
        with lock:
            original = sc_path.read_bytes()
            current = json.loads(original)
            if precondition:
                problem = precondition(current)
                if problem:
                    return _err(409, problem)
            candidate = change(dict(current))
            errors = validate_sidecar(candidate, load_vocabulary(repo_root))
            if errors:
                return _err(422, "invalid sidecar", errors=errors)
            sc_path.write_text(json.dumps(candidate, indent=2) + "\n")
            rel = sc_path.relative_to(repo_root).as_posix()
            try:
                sha = gitops.commit_paths(repo_root, [rel], f"curate: {message} {id}")
            except gitops.GitError as exc:
                sc_path.write_bytes(original)
                try:
                    gitops._git(repo_root, "reset", "-q", "--", rel, check=False)
                finally:
                    cache.invalidate()
                return _err(500, str(exc))
            cache.invalidate()
        return JSONResponse({"asset": candidate, "commit": sha})

    def transition(id: str, verb: str, new_status: str, allowed_from: set[str]):
        def pre(cur):
            if cur.get("status") not in allowed_from:
                return f"cannot {verb} {id!r}: status is {cur.get('status')!r}, expected {' or '.join(sorted(allowed_from))}"
        return mutate(id, verb, lambda s: {**s, "status": new_status}, pre)

    @router.patch("/api/assets/{id}", dependencies=[Depends(require_clean_managed)])
    async def patch_asset(id: str, request: Request):
        try:
            body = await request.json()
        except ValueError:
            body = None
        if not isinstance(body, dict):
            return _err(422, "body must be a JSON object")
        bad = sorted(k for k in body if k not in EDITABLE)
        if bad:
            return _err(422, "not editable: " + ", ".join(bad) + "; editable fields: " + ", ".join(EDITABLE),
                        errors=[f"{k}: not editable" for k in bad])
        return mutate(id, "retag", lambda s: {**s, **body})

    @router.post("/api/assets/{id}/confirm", dependencies=[Depends(require_clean_managed)])
    def confirm(id: str):
        return transition(id, "confirm", "confirmed", {"proposed"})

    @router.post("/api/assets/{id}/retire", dependencies=[Depends(require_clean_managed)])
    def retire(id: str):
        return transition(id, "retire", "retired", {"proposed", "confirmed"})

    @router.post("/api/assets/{id}/restore", dependencies=[Depends(require_clean_managed)])
    def restore(id: str):
        return transition(id, "restore", "confirmed", {"retired"})

    app.include_router(router)
