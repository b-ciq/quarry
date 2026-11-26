"""Vocabulary write endpoints: sync first, then an atomic all-or-nothing rewrite in ONE scoped commit."""
import json
from pathlib import Path

from fastapi import APIRouter, Depends, FastAPI, Request
from fastapi.responses import JSONResponse

from quarry.inspiration_store import store_lock
from quarry.schema import KEBAB_RE, validate_sidecar
from quarry.ui import gitops
from quarry.ui.write_api import require_clean_managed
from quarry.vocabulary import AXES

VOCAB_REL = "taxonomy/vocabulary.json"


def _err(status: int, msg: str, **extra) -> JSONResponse:
    return JSONResponse({"error": msg, **extra}, status_code=status)


def _write_text(path: Path, text: str) -> None:
    path.write_text(text)


def _vocab_text(data: dict) -> str:
    # Match the hand-formatted file: one line per axis list, key order preserved.
    lines = [f"  {json.dumps(k)}: {json.dumps(v)}" if isinstance(v, list)
             else f"  {json.dumps(k)}: {json.dumps(v, indent=2)}" for k, v in data.items()]
    return "{\n" + ",\n".join(lines) + "\n}\n"


def _swap(values: list, old: str, new: str | None) -> list:
    out: list = []
    for v in values:
        v = new if (v == old and new is not None) else v
        if v == old or v in out:
            continue  # dropped (merge/delete) or deduped
        out.append(v)
    return out


INSPIRATION_AXES = ("style", "concepts")


def _has_slug(rec: dict, axis: str, slug: str) -> bool:
    applied = (rec.get("bot") or {}).get("applied")
    applied_list = applied.get(axis) if isinstance(applied, dict) else None
    return slug in (rec.get(axis) or []) or (isinstance(applied_list, list) and slug in applied_list)


def inspiration_carriers(store, axis: str, slug: str) -> list[str]:
    """Ids of Inspiration saves tagged with `slug` (in the tag list or Claude's applied reference)."""
    if store is None or axis not in INSPIRATION_AXES:
        return []
    found = []
    for id_ in store.scan().ids:
        try:
            if _has_slug(store.read(id_), axis, slug):
                found.append(id_)
        except (OSError, ValueError):
            continue  # unreadable saves are reported by the gallery, not here
    return found


def rewrite_inspiration(store, axis: str, slug: str, target: str | None) -> list[str]:
    """Swap `slug` for `target` (None drops it) in each carrier. Returns failures as "id: error"."""
    failures: list[str] = []
    if store is None or axis not in INSPIRATION_AXES:
        return failures
    with store_lock():
        for id_ in inspiration_carriers(store, axis, slug):
            try:
                rec = store.read(id_)
                if isinstance(rec.get(axis), list):
                    rec[axis] = _swap(rec[axis], slug, target)
                applied = (rec.get("bot") or {}).get("applied")
                if isinstance(applied, dict) and isinstance(applied.get(axis), list):
                    applied[axis] = _swap(applied[axis], slug, target)
                store.write(rec)
            except (OSError, ValueError) as exc:
                failures.append(f"{id_}: {exc}")
    return failures


def mount(app: FastAPI) -> None:
    repo_root: Path = app.state.repo_root
    router = APIRouter()
    lock = app.state.write_lock

    def carriers(axis: str, slug: str) -> list[tuple[str, Path, dict]]:
        cache = app.state.library_cache
        cache.invalidate()
        found = []
        for a in cache.assets():
            path = cache.image_path(a["id"]).with_suffix(".json")
            raw = json.loads(path.read_text())
            if slug in raw.get(axis, []):
                found.append((a["id"], path, raw))
        return found

    def run(axis: str, action: str, slug: str, body_key: str | None, body: dict):
        """Common flow. Returns a JSONResponse."""
        if axis not in AXES:
            return _err(404, f"unknown axis {axis!r}; axes: {', '.join(AXES)}")
        if body_key and (not isinstance(body, dict) or not isinstance(body.get(body_key), str)):
            return _err(422, f"body must be a JSON object with a string {body_key!r}")
        target = body[body_key] if body_key else None
        if target is not None or action == "add":
            t = target if action != "add" else slug
            if not KEBAB_RE.match(t):
                return _err(422, f"{t!r} is not a kebab-case slug")
        with lock:
            try:
                r = gitops.sync(repo_root)
            except gitops.GitError as exc:
                return _err(500, str(exc))
            if r.conflict:
                return _err(409, r.message)
            app.state.library_cache.invalidate()
            vpath = repo_root / VOCAB_REL
            vorig = vpath.read_bytes()
            vdata = json.loads(vorig)
            members = vdata.get(axis, [])

            if action == "add":
                if slug in members:
                    return _err(409, f"{slug!r} already exists in {axis}")
                vdata[axis] = members + [slug]
                carrier_list = []
                insp_ids = []
            else:
                if slug not in members:
                    return _err(404, f"unknown {axis} slug {slug!r}")
                carrier_list = carriers(axis, slug)
                insp_ids = inspiration_carriers(getattr(app.state, "inspiration_store", None), axis, slug)
                if action == "delete":
                    if carrier_list or insp_ids:
                        return _err(409, f"{slug!r} is used by {len(carrier_list) + len(insp_ids)} asset(s); "
                                         "merge it into another slug instead",
                                    usage=[c[0] for c in carrier_list] + insp_ids)
                    vdata[axis] = _swap(members, slug, None)
                elif action == "rename":
                    if target in members:
                        return _err(409, f"{target!r} already exists in {axis}; merge {slug!r} into it instead")
                    vdata[axis] = [target if m == slug else m for m in members]
                else:  # merge
                    if target == slug:
                        return _err(422, "cannot merge a slug into itself")
                    if target not in members:
                        return _err(404, f"unknown {axis} slug {target!r}")
                    vdata[axis] = _swap(members, slug, None)

            # Stage everything in memory and validate before touching disk.
            new_vocab = {a: list(vdata.get(a, [])) for a in AXES}
            staged: list[tuple[Path, bytes, str]] = []
            for id_, path, raw in carrier_list:
                new = {**raw, axis: _swap(raw[axis], slug, target)}
                errors = validate_sidecar(new, new_vocab)
                if errors:
                    return _err(422, f"rewrite would invalidate {id_}", errors=errors)
                staged.append((path, path.read_bytes(), json.dumps(new, indent=2) + "\n"))
            staged.append((vpath, vorig, _vocab_text(vdata)))

            msg = {"merge": f"vocab: merge {slug} into {target}",
                   "rename": f"vocab: rename {slug} to {target}"}.get(action, f"vocab: {action} {slug}")
            rels = [p.relative_to(repo_root).as_posix() for p, _, _ in staged]
            try:
                for path, _, text in staged:
                    _write_text(path, text)
                sha = gitops.commit_paths(repo_root, rels, msg)
            except Exception as exc:
                gitops._git(repo_root, "reset", "-q", "--", *rels, check=False)
                for path, orig, _ in staged:
                    path.write_bytes(orig)
                gitops._git(repo_root, "checkout", "--", *rels, check=False)
                app.state.library_cache.invalidate()
                return _err(500, f"vocabulary {action} failed and was rolled back: {exc}")
            app.state.library_cache.invalidate()
            insp_failed: list[str] = []
            if insp_ids:  # after the commit: failures are reported, never rolled back
                insp_failed = rewrite_inspiration(app.state.inspiration_store, axis, slug, target)
        return JSONResponse({"commit": sha, "rewritten": [c[0] for c in carrier_list],
                             "inspiration_rewritten": [i for i in insp_ids
                                                       if not any(f.startswith(f"{i}:") for f in insp_failed)],
                             "inspiration_failed": insp_failed})

    async def _body(request: Request):
        try:
            return await request.json()
        except ValueError:
            return None

    dep = [Depends(require_clean_managed)]

    @router.post("/api/vocabulary/{axis}", dependencies=dep)
    async def add(axis: str, request: Request):
        body = await _body(request)
        if not isinstance(body, dict) or not isinstance(body.get("slug"), str):
            return _err(422, "body must be a JSON object with a string 'slug'")
        return run(axis, "add", body["slug"], None, body)

    @router.post("/api/vocabulary/{axis}/{slug}/rename", dependencies=dep)
    async def rename(axis: str, slug: str, request: Request):
        return run(axis, "rename", slug, "new", await _body(request))

    @router.post("/api/vocabulary/{axis}/{slug}/merge", dependencies=dep)
    async def merge(axis: str, slug: str, request: Request):
        return run(axis, "merge", slug, "into", await _body(request))

    @router.delete("/api/vocabulary/{axis}/{slug}", dependencies=dep)
    def delete(axis: str, slug: str):
        return run(axis, "delete", slug, None, {})

    app.include_router(router)
