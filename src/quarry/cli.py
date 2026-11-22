import argparse
import json
import os
import sys
from pathlib import Path

from quarry.indexer import IndexBuildError, build_index
from quarry.ingest import ingest_dir
from quarry.seed import seed_from_deck_builder
from quarry.search import search
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
    for e in errors:
        print(e)
    if not errors:
        print("ok")
    return 1 if errors else 0


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(prog="quarry")
    sub = parser.add_subparsers(dest="command", required=True)
    v = sub.add_parser("validate", help="validate all library sidecars")
    v.add_argument("--repo", default=".", type=Path)
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
    ig.add_argument("--repo", default=".", type=Path)
    ix = sub.add_parser("index", help="build the search index (FTS5, vectors, thumbnails)")
    ix.add_argument("--repo", default=".", type=Path)
    ix.add_argument("--fake-embedder", action="store_true", help="deterministic fake embeddings (no models)")
    se = sub.add_parser("search", help="hybrid search over the indexed library")
    se.add_argument("query", nargs="?", default=None, help="omit for filter-only browsing")
    se.add_argument("--class", dest="cls", choices=sorted(CLASSES))
    se.add_argument("--product")
    se.add_argument("--tone", choices=sorted(TONES))
    se.add_argument("--all-statuses", action="store_true", help="include non-servable assets")
    se.add_argument("--limit", type=int, default=10)
    se.add_argument("-v", "--verbose", action="store_true", help="show description and file")
    se.add_argument("--repo", default=".", type=Path)
    se.add_argument("--fake-embedder", action="store_true", help="must match how the index was built")
    args = parser.parse_args(argv)
    if args.command == "validate":
        return cmd_validate(args.repo)
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
            res = ingest_dir(args.dir, args.repo, args.cls, args.source, lic, product=args.product)
        except ValueError as exc:
            print(f"error: {exc}", file=sys.stderr)
            return 2
        for p in res.created:
            print(p)
        for p, why in res.skipped:
            print(f"skipped {p}: {why}")
        print(f"created {len(res.created)}, skipped {len(res.skipped)}")
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
    if args.command == "search":
        if args.fake_embedder:
            from quarry.embeddings import FakeEmbedder
            embedder = FakeEmbedder()
        else:
            from quarry.embeddings import HFEmbedder
            embedder = HFEmbedder()
        try:
            hits = search(args.repo, embedder, args.query, cls=args.cls, product=args.product,
                          tone=args.tone, servable_only=not args.all_statuses, limit=args.limit)
        except FileNotFoundError as exc:
            print(f"error: {exc}", file=sys.stderr)
            return 1
        for h in hits:
            sc = h.sidecar
            print(f"{h.score:.4f}  {h.id}  [{sc.get('class')}/{sc.get('status')}]")
            if args.verbose:
                print(f"        {sc.get('description', '')}")
                print(f"        {sc.get('file')}")
        return 0
    return 2


if __name__ == "__main__":
    sys.exit(main())
