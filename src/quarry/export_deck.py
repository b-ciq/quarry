"""Export the servable library as a deck-builder `manifest.json` (no binaries)."""
import json
from pathlib import Path

from quarry.library import scan_library
from quarry.schema import is_servable
from quarry.vocabulary import load_vocabulary

# class -> (kind, subkind, role)
CLASS_TO_KIND: dict[str, tuple[str, str | None, str]] = {
    "background": ("background", None, "background"),
    "hero": ("hero", "conceptual", "foreground"),
    "screenshot": ("hero", "screenshot", "foreground"),
    "diagram": ("hero", "diagram", "foreground"),
    "lifestyle": ("lifestyle", None, "foreground"),
    "spot-illustration": ("spot", None, "foreground"),
}

ENTRY_KEYS = ["id", "file", "status", "kind", "subkind", "role", "products",
              "categories", "verticals", "tone", "aspect", "concepts", "description"]
VOCAB_AXES = ("products", "categories", "verticals")


def _servable(repo_root: Path):
    return [a for a in scan_library(repo_root) if is_servable(a.sidecar)]


def build_manifest(repo_root: Path) -> dict:
    repo_root = Path(repo_root)
    vocab = load_vocabulary(repo_root)
    images = []
    for a in _servable(repo_root):
        sc = a.sidecar
        kind, subkind, role = CLASS_TO_KIND[sc["class"]]
        values = {
            "id": a.id,
            "file": f"{a.id}{a.path.suffix}",
            "status": "confirmed",
            "kind": kind,
            "subkind": subkind,
            "role": role,
            "products": list(sc.get("products", [])),
            "categories": list(sc.get("categories", [])),
            "verticals": list(sc.get("verticals", [])),
            "tone": sc.get("tone") if role == "background" else None,
            "aspect": sc.get("aspect"),
            "concepts": list(sc.get("concepts", [])),
            "description": sc.get("description", ""),
        }
        images.append({k: values[k] for k in ENTRY_KEYS})
    return {"vocab": {axis: vocab[axis] for axis in VOCAB_AXES}, "images": images}


def image_copy_plan(repo_root: Path) -> list[tuple[Path, str]]:
    """(source path, flattened bundle filename) for every exported image."""
    return [(a.path, f"{a.id}{a.path.suffix}") for a in _servable(Path(repo_root))]


def write_export(repo_root: Path, out_dir: Path) -> Path:
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    path = out_dir / "manifest.json"
    path.write_text(json.dumps(build_manifest(repo_root), indent=2) + "\n")
    return path
