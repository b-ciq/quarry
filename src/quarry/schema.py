import re
from pathlib import Path
from typing import NamedTuple

CLASSES = {"hero", "spot-illustration", "background", "screenshot", "diagram", "lifestyle"}
CLASS_DIRS = {
    "hero": "heroes",
    "spot-illustration": "spots",
    "background": "backgrounds",
    "screenshot": "screenshots",
    "diagram": "diagrams",
    "lifestyle": "lifestyle",
}
STATUSES = {"proposed", "confirmed", "retired", "parked"}
VERDICTS = ("yes", "no", "maybe")
STRENGTHS = ("strong", "unsure")
TONES = {"dark", "light"}

REQUIRED_KEYS = (
    "id", "file", "status", "class", "products", "categories", "verticals",
    "concepts", "style", "aspect", "license", "source", "usage_restrictions",
    "description",
)
OPTIONAL_KEYS = ("tone", "license_expiry", "product_version", "captured_at", "generation",
                 "anti_example", "avoid_reason", "rating")
KEBAB_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
TAG_AXES = ("products", "categories", "verticals", "concepts", "style")


def is_servable(entry: dict) -> bool:
    """Usable in deliverables. Anti-examples are never servable."""
    return (entry.get("status") == "confirmed" and not entry.get("usage_restrictions")
            and not entry.get("anti_example"))


def is_anti_example(entry: dict) -> bool:
    """A confirmed "don't do this" reference, served only through the anti-example paths."""
    return entry.get("status") == "confirmed" and entry.get("anti_example") is True


def _validate_rating(rating) -> list[str]:
    if not isinstance(rating, dict):
        return ["rating: must be an object"]
    errors: list[str] = []
    for who in ("bot", "human"):
        if who not in rating:
            continue
        block = rating[who]
        if not isinstance(block, dict):
            errors.append(f"rating.{who}: must be an object")
            continue
        if "verdict" in block and block["verdict"] not in VERDICTS:
            errors.append(f"rating.{who}.verdict: invalid value {block['verdict']!r}")
        if who == "bot" and "strength" in block and block["strength"] not in STRENGTHS:
            errors.append(f"rating.bot.strength: invalid value {block['strength']!r}")
    return errors


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
    anti = entry.get("anti_example", False)
    if not isinstance(anti, bool):
        errors.append("anti_example: must be true or false")
    if "avoid_reason" in entry:
        if not anti:
            errors.append("avoid_reason: only allowed when anti_example is true")
        elif not isinstance(entry["avoid_reason"], str):
            errors.append("avoid_reason: must be a string")
    if "rating" in entry:
        errors.extend(_validate_rating(entry["rating"]))
    if errors or entry["status"] != "confirmed":
        return errors

    if anti:
        # Reference-only (never served for use), so a license is optional; the reason is not.
        if not str(entry.get("avoid_reason", "")).strip():
            errors.append("avoid_reason: required for confirmed anti-examples (what to avoid and why)")
    elif not entry["license"]:
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


CAPTURE_STATUSES = ("pending", "partial", "captured", "unavailable")
INSPIRATION_ID_RE = re.compile(r"^(ig|pin)-[a-z0-9]+(-[a-z0-9]+)*$")
SHORTCODE_RE = re.compile(r"^[A-Za-z0-9_-]+$")
PIN_ID_RE = re.compile(r"^\d+$")


class Source(NamedTuple):
    """Where an inspiration source lives: its id prefix, its folder under the root, and its lookup key."""
    prefix: str
    folder: str
    key: str  # the `source` field that identifies a record within this source


SOURCES: dict[str, Source] = {
    "instagram": Source("ig-", "instagram", "shortcode"),
    "pinterest": Source("pin-", "pinterest", "pin_id"),
}


def source_for_id(id: str) -> Source:
    for src in SOURCES.values():
        if id.startswith(src.prefix):
            return src
    raise ValueError(f"no inspiration source for id {id!r}")
MEDIA_NAME_RE = re.compile(r"^\d{2}(-poster)?\.(jpg|jpeg|png|webp|mp4|mov|webm)$")


def _str_list(v) -> bool:
    return isinstance(v, list) and all(isinstance(x, str) for x in v)


def validate_inspiration_record(rec: dict) -> list[str]:
    errors: list[str] = []
    if not isinstance(rec.get("id"), str) or not INSPIRATION_ID_RE.match(rec["id"]):
        errors.append(f"id: invalid value {rec.get('id')!r}")
    if rec.get("status") not in STATUSES:
        errors.append(f"status: invalid value {rec.get('status')!r}")
    source = rec.get("source")
    if not isinstance(source, dict):
        errors.append("source: must be an object")
    else:
        origin = source.get("origin")
        if origin == "instagram":
            code = source.get("shortcode")
            if not isinstance(code, str) or not SHORTCODE_RE.match(code):
                errors.append(f"source.shortcode: invalid value {code!r}")
        elif origin == "pinterest":
            pin_id = source.get("pin_id")
            if not isinstance(pin_id, str) or not PIN_ID_RE.match(pin_id):
                errors.append(f"source.pin_id: invalid value {pin_id!r}")
            elif rec.get("id") != f"pin-{pin_id}":
                errors.append(f"id: must be 'pin-{pin_id}' for this pin, got {rec.get('id')!r}")
        else:
            errors.append(f"source.origin: must be one of {sorted(SOURCES)}, got {origin!r}")
    if not isinstance(rec.get("source_url"), str) or not rec["source_url"]:
        errors.append("source_url: must be a non-empty string")
    if "license" in rec:
        errors.append("license: not allowed on inspiration records")
    if "description" in rec and not isinstance(rec["description"], str):
        errors.append("description: must be a string")
    for key in ("style", "concepts"):
        if key in rec and not _str_list(rec[key]):
            errors.append(f"{key}: must be a list of strings")
    bot = rec.get("bot")
    if "bot" in rec:
        if not isinstance(bot, dict):
            errors.append("bot: must be an object")
        else:
            for key in ("model", "at", "media", "vocab"):
                if key in bot and not isinstance(bot[key], str):
                    errors.append(f"bot.{key}: must be a string")
            if "images" in bot and (not isinstance(bot["images"], int) or isinstance(bot["images"], bool)):
                errors.append("bot.images: must be an int")
            for part in ("applied", "answer"):
                if part not in bot:
                    continue
                block = bot[part]
                if not isinstance(block, dict):
                    errors.append(f"bot.{part}: must be an object")
                    continue
                if "description" in block and not isinstance(block["description"], str):
                    errors.append(f"bot.{part}.description: must be a string")
                for key in ("style", "concepts"):
                    if key in block and not _str_list(block[key]):
                        errors.append(f"bot.{part}.{key}: must be a list of strings")
            sug = bot.get("suggested_slugs")
            if "suggested_slugs" in bot and not (
                    isinstance(sug, dict) and all(
                        isinstance(v, list) and all(isinstance(x, dict) for x in v) for v in sug.values())):
                errors.append("bot.suggested_slugs: must map axes to lists of objects")
    err = rec.get("describe_error")
    if "describe_error" in rec:
        if not isinstance(err, dict):
            errors.append("describe_error: must be an object")
        elif not isinstance(err.get("tries"), int) or isinstance(err.get("tries"), bool):
            errors.append("describe_error.tries: must be an int")
    if "describe_requested_at" in rec and not isinstance(rec["describe_requested_at"], str):
        errors.append("describe_requested_at: must be a string")
    capture = rec.get("capture")
    if not isinstance(capture, dict):
        errors.append("capture: must be an object")
        return errors
    if capture.get("status") not in CAPTURE_STATUSES:
        errors.append(f"capture.status: invalid value {capture.get('status')!r}")
    expected = capture.get("slides_expected")
    if expected is not None and (not isinstance(expected, int) or isinstance(expected, bool) or expected < 1):
        errors.append(f"capture.slides_expected: must be an int >= 1 or null, got {expected!r}")
    items = capture.get("items", [])
    if not isinstance(items, list):
        errors.append("capture.items: must be a list")
        return errors
    seen: set[int] = set()
    for i, it in enumerate(items):
        if not isinstance(it, dict):
            errors.append(f"capture.items[{i}]: must be an object")
            continue
        slide = it.get("slide")
        if not isinstance(slide, int) or isinstance(slide, bool) or slide < 1:
            errors.append(f"capture.items[{i}].slide: must be an int >= 1, got {slide!r}")
        elif slide in seen:
            errors.append(f"capture.items[{i}]: duplicate slide {slide}")
        else:
            seen.add(slide)
        if it.get("type") not in ("image", "video"):
            errors.append(f"capture.items[{i}].type: invalid value {it.get('type')!r}")
        for key in ("file", "poster"):
            if key in it and (not isinstance(it[key], str) or not MEDIA_NAME_RE.match(it[key])):
                errors.append(f"capture.items[{i}].{key}: invalid file name {it[key]!r}")
    return errors
