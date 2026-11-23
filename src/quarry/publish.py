"""Atomic publish: validate -> index -> export -> bundle into the deck-builder skill."""
import hashlib
import json
import os
import shutil
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path

from quarry.embeddings import Embedder
from quarry.export_deck import build_manifest, image_copy_plan
from quarry.indexer import IndexBuildError, build_index, sidecar_digest, validate_assets
from quarry.library import scan_library

BUNDLE_REL = Path("brand/assets/images")


@dataclass
class PublishResult:
    version: str
    digest: str
    indexed: int
    exported: int
    bundled: int


def check_stale(repo_root: Path) -> bool:
    stamp = Path(repo_root) / "exports" / "STAMP.json"
    try:
        return json.loads(stamp.read_text()).get("digest") != sidecar_digest(repo_root)
    except (FileNotFoundError, json.JSONDecodeError, AttributeError):
        return True


def _swap_dir(staged: Path, target: Path) -> None:
    """Replace target with staged (same filesystem); keep the old copy until the swap lands."""
    backup = target.with_name(target.name + ".old")
    shutil.rmtree(backup, ignore_errors=True)
    if target.exists():
        os.replace(target, backup)
    try:
        os.replace(staged, target)
    except BaseException:
        if backup.exists():
            os.replace(backup, target)
        raise
    shutil.rmtree(backup, ignore_errors=True)


def publish(repo_root: Path, embedder: Embedder, skill_dir: Path | None) -> PublishResult:
    repo_root = Path(repo_root)
    # 1. validate (nothing touched on failure)
    assets = scan_library(repo_root)
    errors = validate_assets(repo_root, assets)
    if errors:
        raise IndexBuildError(errors)
    digest = sidecar_digest(repo_root)
    version = digest[:12]
    # 2. index
    stats = build_index(repo_root, embedder)
    # 3+4. stage export and bundle; swap only after every stage succeeded
    exports = repo_root / "exports"
    exports.parent.mkdir(parents=True, exist_ok=True)
    stage_exports = exports.with_name("exports.staging")
    shutil.rmtree(stage_exports, ignore_errors=True)
    stage_exports.mkdir()
    stage_bundle = None
    try:
        manifest_text = json.dumps(build_manifest(repo_root), indent=2) + "\n"
        (stage_exports / "manifest.json").write_text(manifest_text)
        plan = image_copy_plan(repo_root)
        if skill_dir is not None:
            target = Path(skill_dir) / BUNDLE_REL
            target.parent.mkdir(parents=True, exist_ok=True)
            stage_bundle = target.with_name(target.name + ".staging")
            shutil.rmtree(stage_bundle, ignore_errors=True)
            stage_bundle.mkdir()
            (stage_bundle / "manifest.json").write_text(manifest_text)
            for src, name in plan:
                shutil.copy2(src, stage_bundle / name)
        stamp = {"version": version, "digest": digest,
                 "published_at": datetime.now(timezone.utc).isoformat(timespec="seconds")}
        (stage_exports / "STAMP.json").write_text(json.dumps(stamp, indent=2) + "\n")
        # swap
        if stage_bundle is not None:
            _swap_dir(stage_bundle, target)
            stage_bundle = None
        exports.mkdir(exist_ok=True)
        os.replace(stage_exports / "manifest.json", exports / "manifest.json")
        os.replace(stage_exports / "STAMP.json", exports / "STAMP.json")
    finally:
        shutil.rmtree(stage_exports, ignore_errors=True)
        if stage_bundle is not None:
            shutil.rmtree(stage_bundle, ignore_errors=True)
    return PublishResult(version=version, digest=digest, indexed=stats.indexed,
                         exported=len(plan), bundled=len(plan) if skill_dir is not None else 0)
