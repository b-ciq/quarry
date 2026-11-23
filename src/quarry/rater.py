"""The rater: a Claude call behind a small protocol, plus a fake for tests.

Nothing here writes to the repo. Callers persist the returned RatingResult.
"""

import base64
import functools
import io
import json
import os
from pathlib import Path
from typing import Protocol

from PIL import Image

from quarry.rating import RatingResult, human_verdict
from quarry.schema import CLASS_DIRS, STRENGTHS, TAG_AXES, VERDICTS

DEFAULT_MODEL = "claude-opus-5-5"
BETAS = ["server-side-fallback-2026-07-01"]
TARGET_PX = 768
EXAMPLE_PX = 256


class RaterError(Exception):
    """Refusal, API error, or unparseable output. `code` is short and stable (no request ids), so callers
    can tell a run-wide problem (e.g. every call "auth") from one-off failures."""

    def __init__(self, message: str, code: str | None = None):
        super().__init__(message)
        self.code = code


_STATUS_CODES = {400: "bad_request", 401: "auth", 403: "permission", 404: "not_found", 413: "bad_request",
                 422: "bad_request", 429: "rate_limit", 529: "overloaded"}


def api_error_code(exc) -> str:
    """Stable code for an anthropic SDK exception, from its type/HTTP status."""
    import anthropic
    if isinstance(exc, anthropic.APIConnectionError):  # includes APITimeoutError
        return "connection"
    status = getattr(exc, "status_code", None)
    if isinstance(status, int):
        return _STATUS_CODES.get(status) or ("server" if status >= 500 else f"http_{status}")
    return "api"


class Rater(Protocol):
    model: str

    def rate(self, image: Path, sidecar: dict, examples: list[dict], vocab: dict, guide: str,
             repo_root: Path) -> RatingResult: ...


class FakeRater:
    model = "fake"

    def __init__(self, results: dict[str, RatingResult] | None = None, fail: set[str] = frozenset()):
        self.results = results or {}
        self.fail = set(fail)
        self.calls: list[str] = []

    def rate(self, image, sidecar, examples, vocab, guide, repo_root) -> RatingResult:
        sid = sidecar["id"]
        self.calls.append(sid)
        if sid in self.fail:
            raise RaterError(f"fake failure for {sid}", code="fake")
        return self.results.get(sid) or RatingResult("maybe", "unsure", "fake", "Fake description.", {}, None, {})


def load_guide(repo_root: Path) -> str:
    p = Path(repo_root) / "taxonomy" / "rating-guide.md"
    return p.read_text() if p.exists() else ""


def rating_schema(vocab: dict, cls: str) -> dict:
    tag_props = {axis: {"type": "array", "items": {"type": "string", "enum": list(vocab[axis])}}
                 for axis in TAG_AXES if vocab.get(axis)}
    props = {
        "verdict": {"type": "string", "enum": list(VERDICTS)},
        "strength": {"type": "string", "enum": list(STRENGTHS)},
        "reason": {"type": "string"},
        "description": {"type": "string"},
        "tags": {"type": "object", "properties": tag_props, "required": list(tag_props),
                 "additionalProperties": False},
    }
    if cls == "background":
        props["tone"] = {"type": "string", "enum": ["dark", "light"]}
    props["suggested_slugs"] = {
        "type": "object",
        "properties": {a: {"type": "array", "items": {"type": "string"}} for a in TAG_AXES},
        "required": list(TAG_AXES),
        "additionalProperties": False,
    }
    return {"type": "object", "properties": props, "required": list(props), "additionalProperties": False}


def image_block(path: Path, max_px: int) -> dict:
    with Image.open(path) as im:
        if im.mode in ("1", "P"):
            im = im.convert("RGBA")  # palette transparency survives; resizing a palette is nearest-only
        im.thumbnail((max_px, max_px))  # downscale first (JPEGs decode at reduced size): compositing is per pixel
        im = im.convert("RGBA")
        matte = Image.new("RGBA", im.size, (128, 128, 128, 255))
        im = Image.alpha_composite(matte, im).convert("RGB")
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=85)
    data = base64.standard_b64encode(buf.getvalue()).decode()
    return {"type": "image", "source": {"type": "base64", "media_type": "image/jpeg", "data": data}}


@functools.lru_cache(maxsize=256)
def _cached_block(path: str, max_px: int, mtime_ns: int, size: int) -> dict:
    return image_block(Path(path), max_px)


def example_block(path: Path, max_px: int) -> dict:
    """image_block for an example image, cached in-process: the same examples recur call after call.
    Keyed on mtime and size so an edited file is re-encoded. Treat the result as read-only."""
    st = Path(path).stat()
    return _cached_block(str(path), max_px, st.st_mtime_ns, st.st_size)


def rater_status() -> dict:
    model = os.environ.get("QUARRY_RATER_MODEL", DEFAULT_MODEL)
    try:
        import anthropic  # noqa: F401
    except ImportError:
        return {"available": False, "model": model,
                "reason": "install the rate extra: pip install -e '.[rate]'"}
    has_creds = (os.environ.get("ANTHROPIC_API_KEY") or os.environ.get("ANTHROPIC_AUTH_TOKEN")
                 or (Path.home() / ".config" / "anthropic").is_dir())
    if not has_creds:
        return {"available": False, "model": model,
                "reason": "set ANTHROPIC_API_KEY or run `ant auth login`"}
    return {"available": True, "model": model, "reason": None}


INSTRUCTIONS = """You rate one proposed image for CIQ's brand asset library.

Verdicts:
- yes: on-brand and usable as is.
- no: not usable.
- maybe: the rubric's "Maybe-yes": promising, but not ready to use.

strength: "strong" means you would bet the curators agree with your verdict; otherwise "unsure".
reason: one short line explaining the verdict.
description: one or two plain sentences describing what the image shows.
tags: choose only from the allowed slugs listed below, per axis. Leave an axis empty when nothing clearly applies.
If a concept you need is missing from the vocabulary, put it in suggested_slugs for that axis instead of inventing a tag.
Earlier human verdicts are shown as examples; learn from their reasons."""


def _example_text(s: dict) -> str:
    human = (s.get("rating") or {}).get("human") or {}
    reason = human.get("reason") or s.get("avoid_reason") or "-"
    tags = "; ".join(f"{a}: {', '.join(s[a])}" for a in TAG_AXES if s.get(a)) or "-"
    return f"Example {s.get('id')}: human verdict {human_verdict(s)}. Reason: {reason}. Tags: {tags}."


class ClaudeRater:
    def __init__(self, client=None, model: str | None = None):
        self._client = client
        self.model = model or os.environ.get("QUARRY_RATER_MODEL", DEFAULT_MODEL)

    @property
    def client(self):
        if self._client is None:
            import anthropic
            self._client = anthropic.Anthropic()
        return self._client

    def _messages(self, image, sidecar, examples, repo_root) -> list[dict]:
        content: list[dict] = []
        for s in examples:
            try:
                path = Path(repo_root) / "library" / CLASS_DIRS[s["class"]] / s["file"]
                block = example_block(path, EXAMPLE_PX)
                text = _example_text(s)
            except (KeyError, TypeError, OSError):
                continue  # a bad example must not fail the target
            content.append(block)
            content.append({"type": "text", "text": text})
        content.append(image_block(image, TARGET_PX))
        existing = "; ".join(f"{a}: {', '.join(sidecar[a])}" for a in TAG_AXES if sidecar.get(a)) or "none"
        content.append({"type": "text", "text": (
            f"Rate this image. Class: {sidecar.get('class')}. "
            f"Existing description: {sidecar.get('description') or 'none'}. Existing tags: {existing}.")})
        return [{"role": "user", "content": content}]

    def rate(self, image, sidecar, examples, vocab, guide, repo_root) -> RatingResult:
        import anthropic
        cls = sidecar.get("class", "")
        vocab_lines = "\n".join(f"- {a}: {', '.join(vocab[a])}" for a in TAG_AXES if vocab.get(a))
        system_text = f"{INSTRUCTIONS}\n\n# Rubric\n{guide}\n\n# Allowed tag slugs\n{vocab_lines}"
        if cls == "background":
            system_text += "\n\nFor backgrounds also set tone: dark or light."
        try:
            msg = self.client.beta.messages.create(
                model=self.model,
                max_tokens=16000,
                betas=BETAS,
                fallbacks="default",
                output_config={"effort": "low",
                               "format": {"type": "json_schema", "schema": rating_schema(vocab, cls)}},
                system=[{"type": "text", "text": system_text, "cache_control": {"type": "ephemeral"}}],
                messages=self._messages(image, sidecar, examples, repo_root),
            )
        except anthropic.APIError as e:
            raise RaterError(f"Claude API error: {e}", code=api_error_code(e)) from e
        except OSError as e:
            raise RaterError(f"could not read image: {e}", code="image") from e
        if msg.stop_reason == "refusal":
            raise RaterError("Claude refused to rate this image", code="refusal")
        if msg.stop_reason == "max_tokens":
            raise RaterError("Claude's answer was cut off (max tokens)", code="max_tokens")
        text = next((b.text for b in msg.content if getattr(b, "type", None) == "text"), None)
        if text is None:
            raise RaterError("Claude returned no text", code="bad_output")
        try:
            d = json.loads(text)
            return RatingResult(
                verdict=d["verdict"], strength=d["strength"], reason=d["reason"],
                description=d["description"], tags=d.get("tags") or {}, tone=d.get("tone"),
                suggested_slugs=d.get("suggested_slugs") or {},
                model=getattr(msg, "model", None))
        except (json.JSONDecodeError, KeyError, TypeError) as e:
            raise RaterError(f"unparseable JSON from Claude: {e}", code="bad_output") from e
