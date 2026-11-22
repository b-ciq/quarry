import argparse
import json
import sys
from pathlib import Path

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
            image = next((path.with_suffix(e) for e in IMAGE_EXTS if path.with_suffix(e).exists()), None)
            if image is None:
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
    args = parser.parse_args(argv)
    if args.command == "validate":
        return cmd_validate(args.repo)
    return 2


if __name__ == "__main__":
    sys.exit(main())
