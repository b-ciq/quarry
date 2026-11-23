"""Asset write endpoints: whole-sidecar validation, then a scoped commit of exactly the touched file."""
import json
import threading
from datetime import datetime, timezone
from pathlib import Path

from fastapi import APIRouter, Depends, FastAPI, Request
from fastapi.responses import JSONResponse

from quarry import rating
from quarry.schema import validate_sidecar
from quarry.ui import gitops
from quarry.vocabulary import load_vocabulary

EDITABLE = ("description", "products", "categories", "verticals", "concepts", "style", "tone",
            "product_version", "captured_at", "usage_restrictions", "anti_example", "avoid_reason",
            "license", "generation")
GENERATION_KEYS = ("prompt", "model", "seed")


def _shape_errors(body: dict) -> list[str]:
    """Type checks for fields validate_sidecar does not type-check itself."""
    errors = []
    if "license" in body and not isinstance(body["license"], str):
        errors.append("license: must be a string")
    if "generation" in body:
        gen = body["generation"]
        if not isinstance(gen, dict) or set(gen) - set(GENERATION_KEYS):
            errors.append("generation: must be an object with prompt, model and seed")
    return errors


def _apply_patch(sidecar: dict, body: dict) -> dict:
    """Merge a PATCH body; turning anti_example off drops both anti-example keys."""
    out = {**sidecar, **body}
    if out.get("anti_example") is False:
        out.pop("anti_example")
        out.pop("avoid_reason", None)
    return out


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
    lock = request.app.state.write_lock
    # Wait briefly so a chunk being written+committed under the lock doesn't read as dirt;
    # never block for a whole long job (on timeout, check without the lock).
    held = lock.acquire(timeout=5)
    try:
        dirty = gitops.managed_status(repo).dirty_managed
    finally:
        if held:
            lock.release()
    if dirty:
        raise Conflict("Uncommitted changes exist in managed paths (" + ", ".join(dirty) +
                       "). Resolve them (commit or discard) with your agent, then retry.",
                       dirty_managed=dirty)


async def json_body(request: Request):
    """Parsed JSON body, or None when missing/invalid (handlers turn that into their own 422)."""
    try:
        return await request.json()
    except ValueError:
        return None


def _err(status: int, msg: str, **extra) -> JSONResponse:
    return JSONResponse({"error": msg, **extra}, status_code=status)


def utc_now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def write_sidecars(app: FastAPI, changes: dict[Path, "dict | bytes"], message: str) -> str:
    """Write every sidecar (dict -> indented JSON, bytes -> verbatim), make ONE commit of exactly
    those files, return its sha. Caller holds app.state.write_lock and has already validated.
    On GitError every file is restored, unstaged, the cache invalidated, and the error re-raised.
    """
    repo_root: Path = app.state.repo_root
    originals = {p: p.read_bytes() for p in changes}
    rels = [p.relative_to(repo_root).as_posix() for p in changes]
    try:
        for p, new in changes.items():
            p.write_bytes(new if isinstance(new, bytes) else (json.dumps(new, indent=2) + "\n").encode())
        return gitops.commit_paths(repo_root, rels, message)
    except Exception:
        for p, old in originals.items():
            p.write_bytes(old)
        gitops._git(repo_root, "reset", "-q", "--", *rels, check=False)
        raise
    finally:
        app.state.library_cache.invalidate()


def mount(app: FastAPI) -> None:
    repo_root: Path = app.state.repo_root
    router = APIRouter()
    lock = app.state.write_lock = threading.Lock()  # shared with vocab_api

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
            try:
                sha = write_sidecars(app, {sc_path: candidate}, f"curate: {message} {id}")
            except gitops.GitError as exc:
                return _err(500, str(exc))
        return JSONResponse({"asset": candidate, "commit": sha})

    def transition(id: str, verb: str, new_status: str, allowed_from: set[str], verdict: str | None = None):
        def pre(cur):
            if cur.get("status") not in allowed_from:
                return f"cannot {verb} {id!r}: status is {cur.get('status')!r}, expected {' or '.join(sorted(allowed_from))}"

        def change(s):
            if verdict:
                v, reason = verdict, None
                if new_status == "confirmed" and s.get("anti_example"):
                    v, reason = "no", s.get("avoid_reason")  # confirmed anti-example = No
                s = rating.apply_human_verdict(s, v, by=gitops.identity(repo_root), now=utc_now(),
                                               reason=reason)
            return {**s, "status": new_status}
        return mutate(id, verb, change, pre)

    @router.patch("/api/assets/{id}", dependencies=[Depends(require_clean_managed)])
    def patch_asset(id: str, body=Depends(json_body)):  # sync: lock + git run in the threadpool
        if not isinstance(body, dict):
            return _err(422, "body must be a JSON object")
        bad = sorted(k for k in body if k not in EDITABLE)
        if bad:
            return _err(422, "not editable: " + ", ".join(bad) + "; editable fields: " + ", ".join(EDITABLE),
                        errors=[f"{k}: not editable" for k in bad])
        shape = _shape_errors(body)
        if shape:
            return _err(422, "invalid sidecar", errors=shape)
        return mutate(id, "retag", lambda s: _apply_patch(s, body))

    @router.post("/api/assets/{id}/confirm", dependencies=[Depends(require_clean_managed)])
    def confirm(id: str):
        return transition(id, "confirm", "confirmed", {"proposed"}, verdict="yes")

    @router.post("/api/assets/{id}/retire", dependencies=[Depends(require_clean_managed)])
    def retire(id: str):
        return transition(id, "retire", "retired", {"proposed", "confirmed"}, verdict="no")

    @router.post("/api/assets/{id}/restore", dependencies=[Depends(require_clean_managed)])
    def restore(id: str):
        return transition(id, "restore", "confirmed", {"retired"}, verdict="yes")

    app.include_router(router)
