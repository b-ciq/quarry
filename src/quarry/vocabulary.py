import json
from pathlib import Path

AXES = ("products", "categories", "verticals", "concepts", "style")


def load_vocabulary(repo_root: Path) -> dict:
    data = json.loads((Path(repo_root) / "taxonomy" / "vocabulary.json").read_text())
    return {axis: list(data.get(axis, [])) for axis in AXES}
