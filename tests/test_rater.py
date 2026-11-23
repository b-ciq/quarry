import json
from pathlib import Path
from types import SimpleNamespace

import httpx2
import pytest
from PIL import Image

from quarry.rater import (ClaudeRater, FakeRater, RaterError, image_block, load_guide,
                          rater_status, rating_schema)
from quarry.rating import RatingResult

VOCAB = json.loads((Path(__file__).resolve().parent.parent / "taxonomy" / "vocabulary.json").read_text())
VALID = {"verdict": "yes", "strength": "strong", "reason": "on brand", "description": "A thing.",
         "tags": {"products": ["rocky"]}, "tone": "dark", "suggested_slugs": {"concepts": ["x"]}}


class StubClient:
    def __init__(self, output=None, stop_reason="end_turn", text=None, exc=None, model="claude-opus-5-5"):
        self.last = None
        self._resp = SimpleNamespace(
            stop_reason=stop_reason, model=model,
            content=[SimpleNamespace(type="text", text=text if text is not None else json.dumps(output or VALID))])
        self._exc = exc
        self.beta = SimpleNamespace(messages=SimpleNamespace(create=self._create))

    def _create(self, **kw):
        self.last = kw
        if self._exc:
            raise self._exc
        return self._resp


def _img(path, size=(1200, 800)):
    Image.new("RGB", size, "red").save(path)
    return path


def _setup(tmp_path):
    img = _img(tmp_path / "t.png")
    d = tmp_path / "library" / "heroes"
    d.mkdir(parents=True)
    _img(d / "e1.png")
    _img(d / "e2.png")
    examples = [
        {"id": "e1", "class": "hero", "file": "e1.png", "status": "confirmed", "products": ["rocky"]},
        {"id": "e2", "class": "hero", "file": "e2.png", "status": "retired", "rating": {"human": {"verdict": "no", "reason": "stocky", "by": "x", "at": "t"}}},
    ]
    sidecar = {"id": "t1", "class": "hero", "file": "t.png", "description": ""}
    return img, sidecar, examples


def test_schema_omits_empty_axes_and_tone_for_non_backgrounds():
    sch = rating_schema(VOCAB, "hero")
    assert "style" not in sch["properties"]["tags"]["properties"]
    assert sch["properties"]["tags"]["properties"]["products"]["items"]["enum"] == VOCAB["products"]
    assert "tone" not in sch["properties"]
    assert "tone" in rating_schema(VOCAB, "background")["properties"]
    assert sch["additionalProperties"] is False
    assert set(sch["required"]) == set(sch["properties"])
    for sub in (sch["properties"]["tags"], sch["properties"]["suggested_slugs"]):
        assert sub["additionalProperties"] is False
        assert set(sub["required"]) == set(sub["properties"])


def test_claude_rater_request_shape(tmp_path):
    img, sidecar, examples = _setup(tmp_path)
    stub = StubClient()
    r = ClaudeRater(client=stub, model="claude-opus-5-5").rate(img, sidecar, examples, VOCAB, "GUIDE", tmp_path)
    kw = stub.last
    assert kw["model"] == "claude-opus-5-5"
    assert kw["output_config"]["effort"] == "low" and kw["output_config"]["format"]["type"] == "json_schema"
    assert kw["betas"] == ["server-side-fallback-2026-07-01"] and kw["fallbacks"] == "default"
    assert "GUIDE" in json.dumps(kw["system"])
    assert sum(b["type"] == "image" for m in kw["messages"] for b in m["content"]) == 1 + len(examples)
    assert "thinking" not in kw
    assert kw["max_tokens"] == 16000
    texts = [b["text"] for m in kw["messages"] for b in m["content"] if b["type"] == "text"]
    assert any("Example e2" in t and "human verdict no" in t and "stocky" in t for t in texts)
    assert r.model == "claude-opus-5-5"
    assert r.verdict == "yes" and r.tone == "dark" and r.tags == {"products": ["rocky"]}


def test_tone_absent_is_none(tmp_path):
    img, sidecar, examples = _setup(tmp_path)
    out = {k: v for k, v in VALID.items() if k != "tone"}
    r = ClaudeRater(client=StubClient(output=out)).rate(img, sidecar, [], VOCAB, "", tmp_path)
    assert r.tone is None


@pytest.mark.parametrize("kw,match", [
    ({"stop_reason": "refusal"}, "refus"),
    ({"stop_reason": "max_tokens"}, "token|long|cut"),
    ({"text": "not json"}, "unparseable|JSON"),
])
def test_claude_rater_errors(tmp_path, kw, match):
    img, sidecar, _ = _setup(tmp_path)
    with pytest.raises(RaterError, match=match):
        ClaudeRater(client=StubClient(**kw)).rate(img, sidecar, [], VOCAB, "", tmp_path)


def test_missing_text_block_and_api_error(tmp_path):
    import anthropic
    img, sidecar, _ = _setup(tmp_path)
    stub = StubClient()
    stub._resp.content = []
    with pytest.raises(RaterError):
        ClaudeRater(client=stub).rate(img, sidecar, [], VOCAB, "", tmp_path)
    err = anthropic.APIConnectionError(request=httpx2.Request("POST", "http://x"))
    with pytest.raises(RaterError):
        ClaudeRater(client=StubClient(exc=err)).rate(img, sidecar, [], VOCAB, "", tmp_path)


def test_model_env_override(monkeypatch):
    monkeypatch.setenv("QUARRY_RATER_MODEL", "claude-sonnet-5-5")
    assert ClaudeRater(client=StubClient()).model == "claude-sonnet-5-5"
    monkeypatch.delenv("QUARRY_RATER_MODEL")
    assert ClaudeRater(client=StubClient()).model == "claude-opus-5-5"


def test_fake_rater_defaults_and_failures():
    canned = RatingResult("no", "strong", "r", "d", {}, None, {})
    f = FakeRater({"a": canned}, fail={"bad"})
    assert f.rate(Path("x"), {"id": "a"}, [], {}, "", Path(".")) is canned
    assert f.rate(Path("x"), {"id": "b"}, [], {}, "", Path(".")).verdict == "maybe"
    with pytest.raises(RaterError):
        f.rate(Path("x"), {"id": "bad"}, [], {}, "", Path("."))
    assert f.calls == ["a", "b", "bad"]


def test_image_block_downscales(tmp_path):
    import base64, io
    b = image_block(_img(tmp_path / "big.png", (2000, 1000)), 256)
    assert b["type"] == "image" and b["source"]["media_type"] == "image/jpeg"
    im = Image.open(io.BytesIO(base64.b64decode(b["source"]["data"])))
    assert max(im.size) == 256


def test_rater_status(monkeypatch, tmp_path):
    monkeypatch.delenv("QUARRY_RATER_MODEL", raising=False)
    monkeypatch.setenv("HOME", str(tmp_path))
    for k in ("ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN"):
        monkeypatch.delenv(k, raising=False)
    s = rater_status()
    assert s["available"] is False and "ANTHROPIC_API_KEY" in s["reason"]
    monkeypatch.setenv("ANTHROPIC_API_KEY", "k")
    s = rater_status()
    assert s == {"available": True, "model": "claude-opus-5-5", "reason": None}
    monkeypatch.delenv("ANTHROPIC_API_KEY")
    (tmp_path / ".config" / "anthropic").mkdir(parents=True)
    assert rater_status()["available"] is True


def test_rater_status_without_sdk(monkeypatch):
    import sys
    monkeypatch.setitem(sys.modules, "anthropic", None)
    s = rater_status()
    assert s["available"] is False and "pip install -e '.[rate]'" in s["reason"]


def test_load_guide(tmp_path):
    assert load_guide(tmp_path) == ""
    (tmp_path / "taxonomy").mkdir()
    (tmp_path / "taxonomy" / "rating-guide.md").write_text("hi")
    assert load_guide(tmp_path) == "hi"


def test_image_block_composites_alpha_on_grey(tmp_path):
    import base64, io
    p = tmp_path / "a.png"
    Image.new("RGBA", (64, 64), (0, 0, 0, 0)).save(p)  # fully transparent, hidden RGB is black
    im = Image.open(io.BytesIO(base64.b64decode(image_block(p, 64)["source"]["data"])))
    r, g, b = im.getpixel((10, 10))
    assert all(abs(c - 128) <= 3 for c in (r, g, b))


def test_example_blocks_are_cached_until_the_file_changes(tmp_path, monkeypatch):
    import os
    from quarry import rater as rater_mod
    rater_mod._cached_block.cache_clear()
    img, sidecar, examples = _setup(tmp_path)
    calls = []
    real = rater_mod.image_block
    monkeypatch.setattr(rater_mod, "image_block", lambda p, px: calls.append((Path(p).name, px)) or real(p, px))
    stub = StubClient()
    for _ in range(2):
        ClaudeRater(client=stub).rate(img, sidecar, examples, VOCAB, "", tmp_path)
    assert sorted(calls) == [("e1.png", 256), ("e2.png", 256), ("t.png", 768), ("t.png", 768)]
    e1 = tmp_path / "library" / "heroes" / "e1.png"
    os.utime(e1, ns=(e1.stat().st_atime_ns, e1.stat().st_mtime_ns + 10**9))
    ClaudeRater(client=stub).rate(img, sidecar, examples, VOCAB, "", tmp_path)
    assert calls.count(("e1.png", 256)) == 2 and calls.count(("e2.png", 256)) == 1
    rater_mod._cached_block.cache_clear()


def test_image_block_palette_transparency(tmp_path):
    import base64, io
    p = tmp_path / "p.png"
    im = Image.new("RGBA", (600, 300), (0, 0, 0, 0)).convert("P")
    im.save(p, transparency=0)
    out = Image.open(io.BytesIO(base64.b64decode(image_block(p, 64)["source"]["data"])))
    assert out.size == (64, 32)


def test_bad_examples_are_skipped_not_fatal(tmp_path):
    img, sidecar, examples = _setup(tmp_path)
    bad = [{"id": "gone", "class": "hero", "file": "missing.png"}, {"id": "nokeys"}, {"id": "badcls", "class": "zzz", "file": "x"}]
    stub = StubClient()
    ClaudeRater(client=stub).rate(img, sidecar, bad + examples, VOCAB, "", tmp_path)
    kinds = [b["type"] for m in stub.last["messages"] for b in m["content"]]
    assert kinds.count("image") == 1 + len(examples)


def test_unreadable_target_still_raises(tmp_path):
    _, sidecar, _ = _setup(tmp_path)
    with pytest.raises(RaterError):
        ClaudeRater(client=StubClient()).rate(tmp_path / "nope.png", sidecar, [], VOCAB, "", tmp_path)


def test_answering_model_recorded_after_fallback(tmp_path):
    img, sidecar, _ = _setup(tmp_path)
    r = ClaudeRater(client=StubClient(model="claude-sonnet-5-5")).rate(img, sidecar, [], VOCAB, "", tmp_path)
    assert r.model == "claude-sonnet-5-5"
    assert FakeRater().rate(img, sidecar, [], VOCAB, "", tmp_path).model is None


def test_rubric_does_not_reject_licensed_stock():
    text = (Path(__file__).resolve().parent.parent / "taxonomy" / "rating-guide.md").read_text()
    assert "pulled from a stock site" not in text
    assert "Licensed stock" in text and "fine" in text


def _status_error(status, cls=None):
    import anthropic
    req = httpx2.Request("POST", "https://api.anthropic.com/v1/messages")
    resp = httpx2.Response(status, request=req, json={"error": {"type": "x"}, "request_id": "req_123"})
    return (cls or anthropic.APIStatusError)(f"Error code: {status} - request_id req_123", response=resp, body=None)


@pytest.mark.parametrize("make,code", [
    (lambda: _status_error(401, __import__("anthropic").AuthenticationError), "auth"),
    (lambda: _status_error(401), "auth"),
    (lambda: _status_error(403), "permission"),
    (lambda: _status_error(404), "not_found"),
    (lambda: _status_error(400), "bad_request"),
    (lambda: _status_error(429), "rate_limit"),
    (lambda: _status_error(529), "overloaded"),
    (lambda: _status_error(500), "server"),
    (lambda: __import__("anthropic").APIConnectionError(request=httpx2.Request("POST", "http://x")), "connection"),
])
def test_claude_rater_api_error_codes(tmp_path, make, code):
    img, sidecar, _ = _setup(tmp_path)
    with pytest.raises(RaterError) as ei:
        ClaudeRater(client=StubClient(exc=make())).rate(img, sidecar, [], VOCAB, "", tmp_path)
    assert ei.value.code == code


@pytest.mark.parametrize("kw,code", [
    ({"stop_reason": "refusal"}, "refusal"),
    ({"stop_reason": "max_tokens"}, "max_tokens"),
    ({"text": "not json"}, "bad_output"),
])
def test_claude_rater_output_error_codes(tmp_path, kw, code):
    img, sidecar, _ = _setup(tmp_path)
    with pytest.raises(RaterError) as ei:
        ClaudeRater(client=StubClient(**kw)).rate(img, sidecar, [], VOCAB, "", tmp_path)
    assert ei.value.code == code


def test_claude_rater_unreadable_image_code(tmp_path):
    _, sidecar, _ = _setup(tmp_path)
    with pytest.raises(RaterError) as ei:
        ClaudeRater(client=StubClient()).rate(tmp_path / "missing.png", sidecar, [], VOCAB, "", tmp_path)
    assert ei.value.code == "image"


def test_fake_rater_failure_code():
    with pytest.raises(RaterError) as ei:
        FakeRater(fail={"bad"}).rate(Path("x"), {"id": "bad"}, [], {}, "", Path("."))
    assert ei.value.code == "fake"
