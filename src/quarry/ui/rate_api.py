"""Human verdict endpoints: single, batch and undo. All writes go through write_api.write_sidecars."""
import json
import re
from pathlib import Path

from fastapi import APIRouter, Depends, FastAPI
from fastapi.responses import JSONResponse

from quarry import rating
from quarry.schema import validate_sidecar
from quarry.ui import gitops
from quarry.ui.write_api import _err, json_body, require_clean_managed, utc_now, write_sidecars
from quarry.vocabulary import load_vocabulary

VERDICT_STATUS = {"yes": "confirmed", "no": "retired", "maybe": "parked"}
ALLOWED_FROM = {
    "yes": {"proposed", "parked"},
    "maybe": {"proposed", "parked"},
    "no": {"proposed", "parked", "confirmed"},
}
# Fields a curator can fix from the rating card itself.
CARD_FIXABLE = {"description", "products", "categories", "verticals", "concepts", "style", "tone"}
SHA_RE = re.compile(r"^[0-9a-fA-F]{4,40}$")


def _field(error: str) -> str:
    return error.split(":", 1)[0].strip()


def plan_verdict(sidecar: dict, verdict: str, vocab: dict, *, by: str, now: str,
                 reason: str | None = None) -> tuple[str, dict | None, list[str]]:
    """Decide what a verdict does to one sidecar. Returns (outcome, candidate, errors):
    "status" (wrong current status), "fixable" (card-fixable errors only; nothing to write),
    "invalid" (cannot be written at all), "needs_details" (verdict recorded, status kept),
    "ok" (verdict recorded and status moved)."""
    cur = sidecar.get("status")
    if cur not in ALLOWED_FROM[verdict]:
        return "status", None, [f"status is {cur!r}, expected {' or '.join(sorted(ALLOWED_FROM[verdict]))}"]
    recorded = verdict
    if verdict == "yes" and sidecar.get("anti_example"):
        recorded = "no"  # confirming an anti-example is a No (spec ruling 1)
        reason = reason or sidecar.get("avoid_reason")
    rated = rating.apply_human_verdict(sidecar, recorded, by=by, now=now, reason=reason)
    candidate = {**rated, "status": VERDICT_STATUS[verdict]}
    errors = validate_sidecar(candidate, vocab)
    if not errors:
        return "ok", candidate, []
    if verdict == "yes":
        if all(_field(e) in CARD_FIXABLE for e in errors):
            return "fixable", None, errors
        kept = {**rated, "status": "proposed"}  # a parked Yes that can't confirm goes to Needs details
        if not validate_sidecar(kept, vocab):
            return "needs_details", kept, errors
    return "invalid", None, errors


def mount(app: FastAPI) -> None:
    repo_root: Path = app.state.repo_root
    lock = app.state.write_lock
    router = APIRouter()
    dep = [Depends(require_clean_managed)]

    def sidecar_path(id: str) -> Path | None:
        img = app.state.library_cache.image_path(id)
        return img.with_suffix(".json") if img else None

    @router.post("/api/assets/{id}/verdict", dependencies=dep)
    def verdict_one(id: str, body=Depends(json_body)):
        if not isinstance(body, dict) or body.get("verdict") not in VERDICT_STATUS:
            return _err(422, "body must be {verdict: yes|no|maybe, reason?: string}")
        reason = body.get("reason")
        if reason is not None and not isinstance(reason, str):
            return _err(422, "reason must be a string")
        verdict = body["verdict"]
        path = sidecar_path(id)
        if path is None:
            return _err(404, f"unknown asset {id!r}")
        with lock:
            current = json.loads(path.read_text())
            outcome, candidate, errors = plan_verdict(
                current, verdict, load_vocabulary(repo_root),
                by=gitops.identity(repo_root), now=utc_now(), reason=reason)
            if outcome == "status":
                return _err(409, f"cannot rate {id!r}: {errors[0]}")
            if outcome in ("fixable", "invalid"):
                return _err(422, "invalid sidecar", errors=errors)
            try:
                sha = write_sidecars(app, {path: candidate}, f"rate: {verdict} {id}")
            except gitops.GitError as exc:
                return _err(500, str(exc))
        return JSONResponse({"asset": candidate, "commit": sha,
                             "needs_details": errors if outcome == "needs_details" else None})

    @router.post("/api/verdicts", dependencies=dep)
    def verdict_batch(body=Depends(json_body)):
        ids = body.get("ids") if isinstance(body, dict) else None
        if (not isinstance(body, dict) or body.get("verdict") not in VERDICT_STATUS or not isinstance(ids, list)
                or not all(isinstance(i, str) for i in ids)):
            return _err(422, "body must be {verdict: yes|no|maybe, ids: [string]}")
        verdict = body["verdict"]
        applied: list[str] = []
        needs: dict[str, list[str]] = {}
        failed: dict[str, list[str]] = {}
        changes: dict[Path, dict] = {}
        with lock:
            vocab, by, now = load_vocabulary(repo_root), gitops.identity(repo_root), utc_now()
            for id in dict.fromkeys(ids):
                path = sidecar_path(id)
                if path is None:
                    failed[id] = ["unknown asset"]
                    continue
                outcome, candidate, errors = plan_verdict(json.loads(path.read_text()), verdict, vocab,
                                                          by=by, now=now)
                if outcome in ("ok", "needs_details"):
                    changes[path] = candidate
                    if outcome == "ok":
                        applied.append(id)
                    else:
                        needs[id] = errors
                else:
                    failed[id] = errors
            sha = None
            if changes:
                try:
                    sha = write_sidecars(app, changes, f"rate: accept {len(changes)} strong {verdict}")
                except gitops.GitError as exc:
                    return _err(500, str(exc))
        return JSONResponse({"commit": sha, "applied": applied, "needs_details": needs, "failed": failed})

    @router.post("/api/undo", dependencies=dep)
    def undo(body=Depends(json_body)):
        sha = body.get("commit") if isinstance(body, dict) else None
        if not isinstance(sha, str):
            return _err(422, "body must be {commit: sha}")
        if not SHA_RE.match(sha) or gitops._git(
                repo_root, "cat-file", "-e", f"{sha}^{{commit}}", check=False).returncode != 0:
            return _err(404, f"unknown commit {sha!r}")
        subject = gitops._git(repo_root, "log", "-1", "--format=%s", sha).stdout.strip()
        if not subject.startswith("rate: "):
            return _err(409, f"commit {sha[:8]} is not a rating commit ({subject!r}); only 'rate: ' commits can be undone")
        names = [n for n in gitops._git(repo_root, "diff-tree", "--no-commit-id", "--name-only", "-r", "-z", "--relative",
                                        sha).stdout.split("\0") if n]
        if any(Path(n).parts[0] != "library" or not n.endswith(".json") for n in names):
            return _err(409, "undo only covers sidecar changes; that commit touched other files")
        with lock:
            vocab = load_vocabulary(repo_root)
            restore: dict[Path, bytes] = {}
            for rel in names:
                after = gitops.show_bytes(repo_root, sha, rel)
                before = gitops.show_bytes(repo_root, f"{sha}^", rel)
                path = repo_root / rel
                if before is None or after is None or not path.is_file() or path.read_bytes() != after:
                    return _err(409, f"{rel} changed since that commit (or cannot be restored); not undoing")
                try:
                    old = json.loads(before)
                except ValueError:
                    old = None
                problems = validate_sidecar(old, vocab) if isinstance(old, dict) else ["not a JSON object"]
                if problems:
                    return _err(422, f"cannot restore {rel}: previous content is invalid", errors=problems)
                restore[path] = before
            if not restore:
                return _err(409, "that commit touched no files")
            try:
                new = write_sidecars(app, restore, "rate: undo " + subject[len("rate: "):])
            except gitops.GitError as exc:
                return _err(500, str(exc))
        return JSONResponse({"commit": new, "ids": list(dict.fromkeys(Path(n).stem for n in names))})

    app.include_router(router)
