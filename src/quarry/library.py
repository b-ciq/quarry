import json
from dataclasses import dataclass
from pathlib import Path

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp"}


@dataclass
class Asset:
    id: str
    path: Path  # the image file
    sidecar: dict


class LibraryError(ValueError):
    def __init__(self, errors: list[str]):
        super().__init__("; ".join(errors))
        self.errors = errors


def scan_library(repo_root: Path) -> list[Asset]:
    """Return every asset under library/ (sidecar + its image), sorted by id.

    Raises LibraryError listing all unreadable sidecars (bad JSON, non-object, no image).
    """
    repo_root = Path(repo_root)
    assets: list[Asset] = []
    errors: list[str] = []
    for sc in sorted((repo_root / "library").rglob("*.json")):
        rel = sc.relative_to(repo_root)
        try:
            entry = json.loads(sc.read_text())
        except json.JSONDecodeError as exc:
            errors.append(f"{rel}: invalid JSON ({exc})")
            continue
        if not isinstance(entry, dict):
            errors.append(f"{rel}: sidecar must be a JSON object")
            continue
        img = next((f for f in sorted(sc.parent.glob(sc.stem + ".*"))
                    if f.suffix.lower() in IMAGE_EXTS), None)
        if img is None:
            errors.append(f"{rel}: orphan sidecar (no image)")
            continue
        assets.append(Asset(id=str(entry.get("id", sc.stem)), path=img, sidecar=entry))
    if errors:
        raise LibraryError(errors)
    return sorted(assets, key=lambda a: a.id)
