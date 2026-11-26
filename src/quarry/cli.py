import argparse
import json
import os
import sys
from pathlib import Path

from quarry.capture_sweep import sweep
from quarry.export_deck import write_export
from quarry.indexer import IndexBuildError, build_index, validate_assets
from quarry.ingest import ingest_dir
from quarry.inspiration_store import NoInspirationRoot, Store, capture_downloads_dir, config_dir, inspiration_root
from quarry.instagram import ExportError, import_instagram
from quarry.library import LibraryError, scan_library
from quarry.media_probe import FfmpegMissing
from quarry.pinterest import import_pinterest
from quarry.publish import check_stale, publish
from quarry.seed import seed_from_deck_builder
from quarry.search import EmbedderMismatch, EmbedderUnavailable, nearest_anti_examples, search
from quarry.schema import CLASSES, TONES, validate_sidecar
from quarry.vocabulary import load_vocabulary

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp"}


def cmd_validate(repo: Path) -> int:
    vocab = load_vocabulary(repo)
    library = repo / "library"
    errors: list[str] = []
    files = sorted(p for p in library.rglob("*") if p.is_file())
    for path in files:
        rel = path.relative_to(repo)
        if path.suffix == ".json":
            images = [f for f in files if f.stem == path.stem and f.parent == path.parent
                      and f.suffix.lower() in IMAGE_EXTS]
            if not images:
                errors.append(f"{rel}: orphan sidecar (no image)")
            try:
                entry = json.loads(path.read_text())
            except json.JSONDecodeError as exc:
                errors.append(f"{rel}: invalid JSON ({exc})")
                continue
            if not isinstance(entry, dict):
                errors.append(f"{rel}: sidecar must be a JSON object")
                continue
            errors.extend(f"{rel}: {e}" for e in validate_sidecar(entry, vocab))
            if entry.get("id") != path.stem:
                errors.append(f"{rel}: id {entry.get('id')!r} does not match filename stem {path.stem!r}")
            if images and entry.get("file") not in {i.name for i in images}:
                errors.append(f"{rel}: file {entry.get('file')!r} does not match image on disk")
        elif path.suffix.lower() in IMAGE_EXTS and not path.with_suffix(".json").exists():
            errors.append(f"{rel}: orphan image (no sidecar)")
    if not errors:
        try:
            errors.extend(e for e in validate_assets(repo, scan_library(repo)) if "duplicate id" in e)
        except LibraryError as exc:
            errors.extend(exc.errors)
    for e in errors:
        print(e)
    if not errors:
        print("ok")
    return 1 if errors else 0


class ConfigProblem(ValueError):
    """config.toml could not be read or holds a value of the wrong type."""


def _config_value(read):
    """Call `read()`, turning a malformed config.toml (bad TOML or a wrong value type) into ConfigProblem."""
    try:
        return read()
    except (ValueError, TypeError) as e:
        raise ConfigProblem(f"{config_dir() / 'config.toml'} has a problem: {e}") from e


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(prog="quarry")
    sub = parser.add_subparsers(dest="command", required=True)
    v = sub.add_parser("validate", help="validate all library sidecars")
    v.add_argument("--repo", default=".", type=Path)
    v.add_argument("--check-stale", action="store_true", help="exit 1 if exports/STAMP.json is missing or stale")
    pb = sub.add_parser("publish", help="validate, index, export, and bundle into the deck-builder skill")
    pb.add_argument("--repo", default=".", type=Path)
    pb.add_argument("--skill-dir", type=Path, default=None)
    pb.add_argument("--fake-embedder", action="store_true", help="deterministic fake embeddings (no models)")
    sd = sub.add_parser("seed-deck-builder", help="seed library from the deck-builder bundle")
    sd.add_argument("--repo", default=".", type=Path)
    sd.add_argument("--skill-dir", type=Path, default=None)
    ig = sub.add_parser("ingest", help="ingest a drop directory as proposed assets")
    ig.add_argument("dir", type=Path)
    ig.add_argument("--class", dest="cls", required=True, choices=sorted(CLASSES))
    ig.add_argument("--source", required=True, help="origin, e.g. designer, midjourney, adobe-stock")
    ig.add_argument("--license", default=None)
    ig.add_argument("--license-id", default=None, help="adobe-stock asset id")
    ig.add_argument("--product", default=None, help="nest screenshots under screenshots/<product>/")
    ig.add_argument("--anti-example", action="store_true",
                    help="mark every file as an anti-example (what not to do)")
    ig.add_argument("--repo", default=".", type=Path)
    im = sub.add_parser("import-instagram",
                        help="import Instagram saves from a 'Download your information' export as inspiration")
    im.add_argument("export", type=Path, help="the export .zip, or the unzipped folder")
    im.add_argument("--inspiration-dir", default=None, type=Path,
                    help="inspiration folder (default: QUARRY_INSPIRATION_DIR or config.toml)")
    ip = sub.add_parser("import-pinterest",
                        help="file a folder of pinterest-dl output (images, pin JSON, fetched MP4s) as inspiration")
    ip.add_argument("folder", type=Path, help="the folder pinterest-dl wrote into")
    ip.add_argument("--board", required=True, help="the board or section URL the folder came from")
    ip.add_argument("--inspiration-dir", default=None, type=Path,
                    help="inspiration folder (default: QUARRY_INSPIRATION_DIR or config.toml)")
    ic = sub.add_parser("import-captures",
                        help="file finished browser captures from the downloads folder into the inspiration store")
    ic.add_argument("--inspiration-dir", default=None, type=Path,
                    help="inspiration folder (default: QUARRY_INSPIRATION_DIR or config.toml)")
    ic.add_argument("--downloads", default=None, type=Path,
                    help="capture downloads folder (default: capture_downloads_dir or ~/Downloads/quarry)")
    ix = sub.add_parser("index", help="build the search index (FTS5, vectors, thumbnails)")
    ix.add_argument("--repo", default=".", type=Path)
    ix.add_argument("--fake-embedder", action="store_true", help="deterministic fake embeddings (no models)")
    se = sub.add_parser("search", help="hybrid search over the indexed library")
    se.add_argument("query", nargs="?", default=None, help="omit for filter-only browsing")
    se.add_argument("--class", dest="cls", choices=sorted(CLASSES))
    se.add_argument("--product")
    se.add_argument("--tone", choices=sorted(TONES))
    se.add_argument("--all-statuses", action="store_true", help="include non-servable assets")
    se.add_argument("--anti", action="store_true", help="search confirmed anti-examples only")
    se.add_argument("--limit", type=int, default=10)
    se.add_argument("-v", "--verbose", action="store_true", help="show description and file")
    se.add_argument("--repo", default=".", type=Path)
    se.add_argument("--fake-embedder", action="store_true", help="must match how the index was built")
    ck = sub.add_parser("check-image", help="list the anti-examples an image most resembles in style")
    ck.add_argument("image", type=Path)
    ck.add_argument("--limit", type=int, default=5)
    ck.add_argument("--repo", default=".", type=Path)
    ck.add_argument("--fake-embedder", action="store_true", help="must match how the index was built")
    ex = sub.add_parser("export", help="write the deck-builder manifest (servable assets only)")
    ex.add_argument("--out", type=Path, default=Path("exports"))
    ex.add_argument("--repo", default=".", type=Path)
    ui = sub.add_parser("ui", help="run the local curation workbench (127.0.0.1 only)")
    ui.add_argument("--repo", default=".", type=Path)
    ui.add_argument("--port", type=int, default=8787)
    ui.add_argument("--fake-embedder", action="store_true", help="deterministic fake embeddings (no models)")
    args = parser.parse_args(argv)
    if args.command == "validate":
        if args.check_stale:
            if check_stale(args.repo):
                print("stale: exports/STAMP.json missing or out of date; run `quarry publish`")
                return 1
            print("fresh")
            return 0
        return cmd_validate(args.repo)
    if args.command == "publish":
        skill = args.skill_dir or Path(
            os.environ.get("QUARRY_DECK_SKILL_DIR", "~/.claude/skills/quantic-deck-builder")
        ).expanduser()
        if args.fake_embedder:
            from quarry.embeddings import FakeEmbedder
            embedder = FakeEmbedder()
        else:
            from quarry.embeddings import HFEmbedder
            embedder = HFEmbedder()
        try:
            res = publish(args.repo, embedder, skill)
        except (IndexBuildError, LibraryError) as exc:
            for e in exc.errors:
                print(e)
            print("error: library is invalid; nothing published", file=sys.stderr)
            return 1
        print(f"published {res.version}: indexed {res.indexed}, exported {res.exported}, bundled {res.bundled}")
        return 0
    if args.command == "seed-deck-builder":
        skill = args.skill_dir or Path(
            os.environ.get("QUARRY_DECK_SKILL_DIR", "~/.claude/skills/quantic-deck-builder")
        ).expanduser()
        created = seed_from_deck_builder(args.repo, skill)
        for p in created:
            print(p)
        print(f"seeded {len(created)} assets")
        return 0
    if args.command == "ingest":
        lic = args.license
        if lic is None and args.license_id:
            lic = f"{args.source}:{args.license_id}"
        try:
            res = ingest_dir(args.dir, args.repo, args.cls, args.source, lic, product=args.product,
                             anti_example=args.anti_example)
        except ValueError as exc:
            print(f"error: {exc}", file=sys.stderr)
            return 2
        for p in res.created:
            print(p)
        for p, why in res.skipped:
            print(f"skipped {p}: {why}")
        print(f"created {len(res.created)}, skipped {len(res.skipped)}")
        return 0
    if args.command == "import-instagram":
        try:
            root = _config_value(lambda: inspiration_root(args.inspiration_dir))
            res = import_instagram(args.export, root)
        except (ExportError, ValueError, NoInspirationRoot) as exc:
            print(f"error: {exc}", file=sys.stderr)
            return 2
        for w in res.warnings:
            print(f"warning: {w}", file=sys.stderr)
        print(f"created {len(res.created)}, updated {len(res.updated)}, unchanged {len(res.unchanged)}")
        print(f"images pending: the export has links only; files are in {root}/instagram/")
        return 0
    if args.command == "import-pinterest":
        try:
            root = _config_value(lambda: inspiration_root(args.inspiration_dir))
            res = import_pinterest(args.folder, args.board, root)
        except (ValueError, NoInspirationRoot, FfmpegMissing) as exc:
            print(f"error: {exc}", file=sys.stderr)
            return 2
        for pin, why in res.skipped:
            print(f"skipped {pin}: {why}", file=sys.stderr)
        for w in res.warnings:
            print(f"warning: {w}", file=sys.stderr)
        print(f"created {len(res.created)}, updated {len(res.updated)}, unchanged {len(res.unchanged)}, "
              f"skipped {len(res.skipped)}")
        return 0
    if args.command == "import-captures":
        try:
            store = Store(_config_value(lambda: inspiration_root(args.inspiration_dir)))
            res = sweep(args.downloads or _config_value(capture_downloads_dir), store)
        except (NoInspirationRoot, ConfigProblem, FfmpegMissing) as exc:
            print(f"error: {exc}", file=sys.stderr)
            return 2
        for name, reason in res.failed:
            print(f"failed {name}: {reason}", file=sys.stderr)
        print(f"filed {len(res.filed)}, failed {len(res.failed)}")
        return 0
    if args.command == "index":
        if args.fake_embedder:
            from quarry.embeddings import FakeEmbedder
            embedder = FakeEmbedder()
        else:
            from quarry.embeddings import HFEmbedder
            embedder = HFEmbedder()
        try:
            stats = build_index(args.repo, embedder)
        except IndexBuildError as exc:
            for e in exc.errors:
                print(e)
            print("error: library is invalid; index not built", file=sys.stderr)
            return 1
        print(f"indexed {stats.indexed}, thumbnailed {stats.thumbnailed}")
        return 0
    if args.command == "export":
        out = args.out if args.out.is_absolute() else args.repo / args.out
        try:
            path = write_export(args.repo, out)
        except (LibraryError, FileNotFoundError) as exc:
            print(f"error: {exc}", file=sys.stderr)
            return 1
        print(path)
        return 0
    if args.command == "search":
        if args.fake_embedder:
            from quarry.embeddings import FakeEmbedder
            embedder = FakeEmbedder()
        else:
            from quarry.embeddings import HFEmbedder
            embedder = HFEmbedder()
        try:
            hits = search(args.repo, embedder, args.query, cls=args.cls, product=args.product,
                          tone=args.tone, servable_only=not args.all_statuses, anti=args.anti,
                          limit=args.limit)
        except (FileNotFoundError, EmbedderMismatch, EmbedderUnavailable) as exc:
            print(f"error: {exc}", file=sys.stderr)
            return 1
        for h in hits:
            sc = h.sidecar
            print(f"{h.score:.4f}  {h.id}  [{sc.get('class')}/{sc.get('status')}]")
            if args.verbose:
                print(f"        {sc.get('description', '')}")
                print(f"        {sc.get('file')}")
        return 0
    if args.command == "check-image":
        if not args.image.is_file():
            print(f"error: no such file {args.image}", file=sys.stderr)
            return 1
        if args.fake_embedder:
            from quarry.embeddings import FakeEmbedder
            embedder = FakeEmbedder()
        else:
            from quarry.embeddings import HFEmbedder
            embedder = HFEmbedder()
        try:
            hits = nearest_anti_examples(args.repo, embedder, args.image, limit=args.limit)
        except (FileNotFoundError, EmbedderMismatch, EmbedderUnavailable) as exc:
            print(f"error: {exc}", file=sys.stderr)
            return 1
        if not hits:
            print("no confirmed anti-examples in the index")
        for h in hits:
            print(f"{h.score:.4f}  {h.id}  [{h.sidecar.get('class')}]")
            print(f"        avoid: {h.sidecar.get('avoid_reason', '')}")
        return 0
    if args.command == "ui":
        try:
            from quarry.ui.app import serve
        except ImportError:
            print("error: the ui extra is not installed; run `pip install -e \".[ui]\"`", file=sys.stderr)
            return 1
        serve(args.repo, args.port, args.fake_embedder)
        return 0
    return 2


if __name__ == "__main__":
    sys.exit(main())
