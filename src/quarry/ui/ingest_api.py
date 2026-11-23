"""Drag-drop ingest: stage uploads in a temp dir, run ingest_dir, commit created files in ONE commit."""
import shutil
import tempfile
from pathlib import Path

from fastapi import APIRouter, Depends, FastAPI, File, Form, UploadFile
from fastapi.responses import JSONResponse
from PIL import Image

from quarry.ingest import IMAGE_EXTS, ingest_dir
from quarry.schema import CLASSES
from quarry.ui import gitops
from quarry.ui.write_api import require_clean_managed


def _err(status: int, msg: str, **extra) -> JSONResponse:
    return JSONResponse({"error": msg, **extra}, status_code=status)


def mount(app: FastAPI) -> None:
    repo_root: Path = app.state.repo_root
    router = APIRouter()

    @router.post("/api/ingest", dependencies=[Depends(require_clean_managed)])
    def ingest(files: list[UploadFile] = File(default=[]),
               asset_class: str = Form(...), origin: str = Form(...),
               license: str | None = Form(None), license_id: str | None = Form(None),
               product: str | None = Form(None)):
        asset_class, origin = asset_class.strip(), origin.strip()
        license = (license or "").strip() or None
        license_id = (license_id or "").strip() or None
        product = (product or "").strip() or None
        if asset_class not in CLASSES:
            return _err(422, f"unknown class {asset_class!r}; expected one of {', '.join(CLASSES)}")
        if not origin:
            return _err(422, "origin is required")
        if asset_class == "screenshot" and not product:
            return _err(422, "product is required for screenshots")
        if not files:
            return _err(422, "no files uploaded")
        if license is None and license_id:
            license = f"{origin}:{license_id}"

        skipped: list[dict] = []
        tmp = Path(tempfile.mkdtemp(prefix="quarry-ingest-"))
        try:
            staged = 0
            for i, up in enumerate(files):
                name = Path((up.filename or "").replace("\\", "/")).name or f"upload-{i}"
                if Path(name).suffix.lower() not in IMAGE_EXTS:
                    skipped.append({"file": name, "reason": "not a supported image type"})
                    continue
                dest = tmp / name
                if dest.exists():
                    dest = tmp / f"{dest.stem}-{i}{dest.suffix}"
                with open(dest, "wb") as out:
                    shutil.copyfileobj(up.file, out)
                try:
                    with Image.open(dest) as im:
                        im.verify()
                except Exception:
                    dest.unlink()
                    skipped.append({"file": name, "reason": "not a readable image"})
                    continue
                staged += 1

            with app.state.write_lock:
                try:
                    res = ingest_dir(tmp, repo_root, asset_class, origin, license, product)
                except ValueError as exc:
                    return _err(422, str(exc))
                skipped += [{"file": p.name, "reason": r} for p, r in res.skipped]
                created = res.created
                if created:
                    rels = []
                    for sc in created:
                        rels.append(sc.relative_to(repo_root).as_posix())
                        img = next(f for f in sc.parent.glob(sc.stem + ".*") if f.suffix.lower() in IMAGE_EXTS)
                        rels.append(img.relative_to(repo_root).as_posix())
                    try:
                        gitops.commit_paths(repo_root, rels, f"ingest: {len(created)} assets from {origin}")
                    except gitops.GitError as exc:
                        gitops._git(repo_root, "reset", "-q", "--", *rels, check=False)
                        for r in rels:
                            (repo_root / r).unlink(missing_ok=True)
                        app.state.library_cache.invalidate()
                        return _err(500, str(exc))
                    app.state.library_cache.invalidate()
            return JSONResponse({"created": [p.stem for p in created], "skipped": skipped})
        finally:
            shutil.rmtree(tmp, ignore_errors=True)

    app.include_router(router)
