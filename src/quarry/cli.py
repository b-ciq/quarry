import argparse
import json
import os
import sys
from pathlib import Path

from quarry.seed import seed_from_deck_builder
from quarry.schema import validate_sidecar
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
    return 2


if __name__ == "__main__":
    sys.exit(main())
