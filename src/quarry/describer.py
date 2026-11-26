"""The inspiration describer's pure core: which saves need describing, and how an answer is merged.

Nothing here calls Claude or touches disk. Callers persist the record `apply_description` returns.
"""

import copy
import hashlib
import json
from dataclasses import dataclass

FACET_LIMITS = {"medium": 1, "light": 1, "color": 2, "form": 2, "comp": 1}


def still_images(rec: dict) -> list[str]:
    """Still images for a save, in slide order: an image file, else a video's poster."""
    out = []
    items = (rec.get("capture") or {}).get("items") or []
    for it in sorted((i for i in items if isinstance(i, dict)), key=lambda i: i.get("slide") or 0):
        name = it.get("poster") if it.get("type") == "video" else it.get("file")
        if isinstance(name, str):
            out.append(name)
    return out


def _items(rec: dict) -> list[dict]:
    items = (rec.get("capture") or {}).get("items") or []
    return [i for i in items if isinstance(i, dict)]


def media_fingerprint(rec: dict) -> str:
    """12 hex chars over every capture item's (slide, type, file, poster, sha256), in slide order."""
    rows = [[i.get("slide"), i.get("type"), i.get("file"), i.get("poster"), i.get("sha256")]
            for i in sorted(_items(rec), key=lambda i: i.get("slide") or 0)]
    return hashlib.sha256(json.dumps(rows).encode()).hexdigest()[:12]


def capture_time(rec: dict) -> str:
    """Newest capture.items[].captured_at, else source.ingested_at, else ''."""
    times = [i["captured_at"] for i in _items(rec) if isinstance(i.get("captured_at"), str) and i["captured_at"]]
    if times:
        return max(times)
    source = rec.get("source") if isinstance(rec.get("source"), dict) else {}
    ingested = source.get("ingested_at")
    return ingested if isinstance(ingested, str) else ""


def is_describe_target(rec: dict) -> bool:
    """Has a still image, isn't retired, and needs (re)describing, unless given up."""
    if not still_images(rec) or rec.get("status") == "retired":
        return False
    requested = rec.get("describe_requested_at")
    requested = requested if isinstance(requested, str) and requested else None
    err = rec.get("describe_error")
    if isinstance(err, dict) and err.get("gave_up"):
        at = err.get("at") if isinstance(err.get("at"), str) else ""
        if not (requested and requested > at):
            return False
    bot = rec.get("bot")
    if not isinstance(bot, dict) or bot.get("media") != media_fingerprint(rec) or requested:
        return True
    return False


def target_order(recs: list[dict]) -> list[dict]:
    """Most recently captured first, then by id."""
    by_id = sorted(recs, key=lambda r: str(r.get("id") or ""))
    return sorted(by_id, key=capture_time, reverse=True)


def trim_style(slugs: list[str]) -> list[str]:
    """Enforce the facet limits; the first slugs win. Slugs with no limited facet prefix pass through."""
    counts: dict[str, int] = {}
    out = []
    for slug in slugs:
        facet = slug.split("-", 1)[0]
        if facet in FACET_LIMITS:
            if counts.get(facet, 0) >= FACET_LIMITS[facet]:
                continue
            counts[facet] = counts.get(facet, 0) + 1
        out.append(slug)
    return out


def vocab_digest(vocab: dict) -> str:
    return hashlib.sha256(json.dumps(vocab, sort_keys=True).encode()).hexdigest()[:8]


@dataclass
class DescribeResult:
    description: str
    style: list[str]
    concepts: list[str]
    suggested_slugs: dict[str, list[dict]]
    images: int
    model: str | None = None


def _owned(cur, prev):
    """Claude owns a field when it is empty or still equals what Claude last applied."""
    if not cur:
        return True
    if isinstance(cur, list):
        return isinstance(prev, list) and set(cur) == set(prev)
    return cur == prev


def apply_description(rec: dict, result: DescribeResult, *, vocab: dict, model: str, now: str) -> dict:
    """Return a new record with Claude's answer merged in; never overwrites a curator's edits."""
    out = copy.deepcopy(rec)
    old_bot = rec.get("bot") if isinstance(rec.get("bot"), dict) else {}
    prev = old_bot.get("applied") if isinstance(old_bot.get("applied"), dict) else {}
    allowed_style, allowed_concepts = set(vocab.get("style", [])), set(vocab.get("concepts", []))
    applied = {
        "description": result.description.strip(),
        "style": trim_style([s for s in result.style if s in allowed_style]),
        "concepts": [c for c in result.concepts if c in allowed_concepts],
    }
    for field, value in applied.items():
        if _owned(rec.get(field), prev.get(field)):
            out[field] = list(value) if isinstance(value, list) else value
    existing = {"style": allowed_style, "concepts": allowed_concepts}
    suggested = {axis: [s for s in (result.suggested_slugs or {}).get(axis, [])
                        if s.get("slug") not in existing[axis]]
                 for axis in ("style", "concepts")}
    out["bot"] = {
        "model": result.model or model,
        "at": now,
        "applied": applied,
        "answer": {"description": result.description, "style": list(result.style),
                   "concepts": list(result.concepts)},
        "suggested_slugs": suggested,
        "images": result.images,
        "media": media_fingerprint(rec),
        "vocab": vocab_digest(vocab),
    }
    out.pop("describe_error", None)
    out.pop("describe_requested_at", None)
    return out
