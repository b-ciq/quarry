import re
from pathlib import Path

CLASSES = {"hero", "spot-illustration", "background", "screenshot", "diagram", "lifestyle"}
STATUSES = {"proposed", "confirmed", "retired"}
TONES = {"dark", "light"}

REQUIRED_KEYS = (
    "id", "file", "status", "class", "products", "categories", "verticals",
    "concepts", "style", "aspect", "license", "source", "usage_restrictions",
    "description",
)
OPTIONAL_KEYS = ("tone", "license_expiry", "product_version", "captured_at", "generation")
KEBAB_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
TAG_AXES = ("products", "categories", "verticals", "concepts", "style")


def is_servable(entry: dict) -> bool:
    return entry.get("status") == "confirmed" and not entry.get("usage_restrictions")


def validate_sidecar(entry: dict, vocab: dict) -> list[str]:
    errors: list[str] = []
    for key in REQUIRED_KEYS:
        if key not in entry:
            errors.append(f"missing required key: {key}")
    if errors:
        return errors

    if not isinstance(entry["id"], str) or not KEBAB_RE.match(entry["id"]):
        errors.append(f"id: must be kebab-case, got {entry['id']!r}")
    elif not isinstance(entry["file"], str) or Path(entry["file"]).stem != entry["id"]:
        errors.append(f"file: must be '<id><ext>', got {entry['file']!r} for id {entry['id']!r}")
    if entry["status"] not in STATUSES:
        errors.append(f"status: invalid value {entry['status']!r}")
    if entry["class"] not in CLASSES:
        errors.append(f"class: invalid value {entry['class']!r}")
    for axis in TAG_AXES:
        if not isinstance(entry[axis], list):
            errors.append(f"{axis}: must be a list")
    if not isinstance(entry["usage_restrictions"], list):
        errors.append("usage_restrictions: must be a list")
    if not isinstance(entry["source"], dict):
        errors.append("source: must be an object")
    if errors or entry["status"] != "confirmed":
        return errors

    if not entry["license"]:
        errors.append("license: required for confirmed assets")
    if not str(entry["description"]).strip():
        errors.append("description: required for confirmed assets")

    if entry["class"] == "background":
        if entry.get("tone") not in TONES:
            errors.append("tone: required (dark|light) for background")
    elif "tone" in entry:
        errors.append("tone: only allowed on background")

    if entry["class"] == "screenshot":
        for key in ("product_version", "captured_at"):
            if not entry.get(key):
                errors.append(f"{key}: required for screenshot")

    for axis in TAG_AXES:
        allowed = set(vocab.get(axis, []))
        for slug in entry[axis]:
            if slug not in allowed:
                errors.append(f"{axis}: unknown slug {slug!r}")

    for key in ("origin", "ingested_at"):
        if not entry["source"].get(key):
            errors.append(f"source.{key}: required")
    if entry["source"].get("origin") == "midjourney":
        gen = entry.get("generation")
        if not isinstance(gen, dict) or not all(gen.get(k) not in (None, "") for k in ("prompt", "model", "seed")):
            errors.append("generation: prompt, model and seed required for midjourney source")
    return errors
