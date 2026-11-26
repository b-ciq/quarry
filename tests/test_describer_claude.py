import json
from types import SimpleNamespace

import anthropic
import httpx2
import pytest
from PIL import Image

from quarry import describer
from quarry.describer import (ClaudeDescriber, DescribeResult, FakeDescriber, apply_description, describe_schema,
                              load_vocab_doc, media_fingerprint, media_inputs)
from quarry.inspiration_store import Store
from quarry.media_probe import FfmpegMissing
from quarry.rater import BETAS, RaterError
from tests.inspiration_helpers import item, make_record

VOCAB = {"style": ["medium-photo", "medium-3d-render", "light-dark-field", "color-blue", "color-red",
                   "color-green", "form-ribbon"],
         "concepts": ["infrastructure"]}
VALID = {"description": "A thing.", "tags": {"style": ["medium-photo"], "concepts": ["infrastructure"]},
         "suggested_slugs": {"style": [{"slug": "form-x", "definition": "d"}], "concepts": []}}


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


def seed(tmp_path, monkeypatch, n=2, videos=(), caption="Hello"):
    monkeypatch.setenv("QUARRY_CACHE_DIR", str(tmp_path / "cache"))
    store = Store(tmp_path / "store")
    rec = make_record("ABC")
    rec["caption"] = caption
    rec["hashtags"] = ["#a"]
    rec["owner"] = {"username": "owner"}
    items = []
    for i in range(1, n + 1):
        it = item(i)
        if i in videos:
            it = {**item(i, "video"), "file": f"{i:02d}.mp4", "poster": f"{i:02d}-poster.jpg"}
        items.append(it)
    rec["capture"]["items"] = items
    d = store.dir / rec["id"]
    d.mkdir(parents=True)
    for it in items:
        name = it["poster"] if it["type"] == "video" else it["file"]
        Image.new("RGB", (900, 600), "red").save(d / name)
        if it["type"] == "video":
            (d / it["file"]).write_bytes(b"not a video")
    store.write(rec)
    return store, rec


def walk(o):
    if isinstance(o, dict):
        yield o
        for v in o.values():
            yield from walk(v)
    elif isinstance(o, list):
        for v in o:
            yield from walk(v)


def test_schema_shape():
    sch = describe_schema(VOCAB)
    assert sch["properties"]["tags"]["properties"]["style"]["items"]["enum"] == VOCAB["style"]
    sug = sch["properties"]["suggested_slugs"]["properties"]["style"]["items"]
    assert set(sug["properties"]) == {"slug", "definition"}
    for o in walk(sch):
        assert "maxItems" not in o
        if o.get("type") == "object":
            assert o["additionalProperties"] is False
            assert set(o["required"]) == set(o["properties"])


def test_request_shape(tmp_path, monkeypatch):
    store, rec = seed(tmp_path, monkeypatch)
    client = StubClient()
    ClaudeDescriber(client).describe(rec, store, VOCAB, "FACET DOC")
    kw = client.last
    assert kw["model"] == "claude-opus-5-5" and kw["betas"] == BETAS and kw["fallbacks"] == "default"
    assert kw["output_config"]["effort"] == "low"
    sysb = kw["system"][0]
    assert "FACET DOC" in sysb["text"] and sysb["cache_control"] == {"type": "ephemeral"}
    content = kw["messages"][0]["content"]
    assert sum(b["type"] == "image" for b in content) == 2
    text = content[-1]["text"]
    assert "Hello" in text and "@owner" in text and "the poster's own words" in text


def test_large_carousel_caps_images_and_keeps_fingerprint(tmp_path, monkeypatch):
    store, rec = seed(tmp_path, monkeypatch, n=13, videos=(2, 5, 8))

    def boom(*a, **k):
        raise FfmpegMissing("no")
    monkeypatch.setattr(describer.media_probe, "video_frames", boom)
    before = media_fingerprint(rec)
    client = StubClient()
    res = ClaudeDescriber(client).describe(rec, store, VOCAB, "")
    content = client.last["messages"][0]["content"]
    assert sum(b["type"] == "image" for b in content) == 10 and res.images == 10
    assert "first 10 of 13 slides" in content[-1]["text"]
    assert media_fingerprint(rec) == before


def test_video_frames_follow_poster_and_are_cleaned(tmp_path, monkeypatch):
    store, rec = seed(tmp_path, monkeypatch, n=2, videos=(1,))

    def fake_frames(video, fractions, dest):
        out = []
        for i, _ in enumerate(fractions):
            p = dest / f"x-{i}.jpg"
            Image.new("RGB", (50, 50)).save(p)
            out.append(p)
        return out
    monkeypatch.setattr(describer.media_probe, "video_frames", fake_frames)
    frames_dir = tmp_path / "cache" / "describe-frames"
    inputs, sent, total = media_inputs(rec, store, frames_dir)
    assert sent == total == 2 and len(inputs) == 5
    assert [l for _, l in inputs[:4]] == ["frames from a video"] * 4 and inputs[4][1] == ""
    assert inputs[1][0].name == "ig-abc-01-0.jpg"
    ClaudeDescriber(StubClient()).describe(rec, store, VOCAB, "")
    assert list(frames_dir.glob("*.jpg")) == []


def real_frames(video, fractions, dest):
    """Stands in for ffmpeg: one real JPEG per fraction."""
    out = []
    for i, _ in enumerate(fractions):
        p = dest / f"tmp-{video.stem}-{i}.jpg"
        Image.new("RGB", (60, 40), "blue").save(p)
        out.append(p)
    return out


def sent_images(client):
    content = client.last["messages"][0]["content"]
    return content, sum(b["type"] == "image" for b in content)


def test_videos_with_frames_keep_every_slide_of_a_short_post(tmp_path, monkeypatch):
    # four video slides: posters come first, frames only fill what is left of the 10
    store, rec = seed(tmp_path, monkeypatch, n=4, videos=(1, 2, 3, 4))
    monkeypatch.setattr(describer.media_probe, "video_frames", real_frames)
    inputs, sent, total = media_inputs(rec, store, tmp_path / "cache" / "describe-frames")
    assert (sent, total, len(inputs)) == (4, 4, 10)
    posters = [p.name for p, _ in inputs if p.name.endswith("-poster.jpg")]
    assert posters == ["01-poster.jpg", "02-poster.jpg", "03-poster.jpg", "04-poster.jpg"]
    client = StubClient()
    res = ClaudeDescriber(client).describe(rec, store, VOCAB, "")
    content, n_images = sent_images(client)
    assert n_images == 10 and res.images == 10
    assert "first" not in content[-1]["text"]


def test_videos_with_frames_mixed_post_fills_ten(tmp_path, monkeypatch):
    store, rec = seed(tmp_path, monkeypatch, n=6, videos=(1, 2))
    monkeypatch.setattr(describer.media_probe, "video_frames", real_frames)
    inputs, sent, total = media_inputs(rec, store, tmp_path / "cache" / "describe-frames")
    assert (sent, total, len(inputs)) == (6, 6, 10)
    names = [p.name for p, _ in inputs]
    # slide order: video 1 poster + 3 frames, video 2 poster + the 1 frame left, then the 4 stills
    assert names[0] == "01-poster.jpg" and names[4] == "02-poster.jpg" and names[6:] == [
        "03.jpg", "04.jpg", "05.jpg", "06.jpg"]
    assert [l for _, l in inputs[:6]] == ["frames from a video"] * 6


def test_videos_with_frames_long_post_counts_slides_not_images(tmp_path, monkeypatch):
    store, rec = seed(tmp_path, monkeypatch, n=13, videos=(2, 5, 8))
    monkeypatch.setattr(describer.media_probe, "video_frames", real_frames)
    client = StubClient()
    ClaudeDescriber(client).describe(rec, store, VOCAB, "")
    content, n_images = sent_images(client)
    assert n_images == 10
    assert "These are the first 10 of 13 slides." in content[-1]["text"]
    inputs, sent, total = media_inputs(rec, store, tmp_path / "cache" / "describe-frames")
    assert (sent, total) == (10, 13)
    assert [p.name.split("-")[0].split(".")[0] for p, _ in inputs] == [f"{i:02d}" for i in range(1, 11)]


def test_slide_without_a_still_is_reported(tmp_path, monkeypatch):
    store, rec = seed(tmp_path, monkeypatch, n=3, videos=(3,))
    del rec["capture"]["items"][2]["poster"]
    monkeypatch.setattr(describer.media_probe, "video_frames", real_frames)
    client = StubClient()
    ClaudeDescriber(client).describe(rec, store, VOCAB, "")
    content, n_images = sent_images(client)
    assert n_images == 2
    assert "These are the first 2 of 3 slides." in content[-1]["text"]


@pytest.mark.parametrize("n,px", [(5, 512), (4, 768)])
def test_image_size_drops_to_512_above_four(tmp_path, monkeypatch, n, px):
    store, rec = seed(tmp_path, monkeypatch, n=n)
    seen = []
    real = describer.image_block
    monkeypatch.setattr(describer, "image_block", lambda p, m: (seen.append(m), real(p, m))[1])
    ClaudeDescriber(StubClient()).describe(rec, store, VOCAB, "")
    assert seen == [px] * n


def test_empty_description_is_bad_output(tmp_path, monkeypatch):
    store, rec = seed(tmp_path, monkeypatch)
    with pytest.raises(RaterError) as e:
        ClaudeDescriber(StubClient({**VALID, "description": "  "})).describe(rec, store, VOCAB, "")
    assert e.value.code == "bad_output"


def test_output_parsed_raw_then_applied_filtered_and_trimmed(tmp_path, monkeypatch):
    store, rec = seed(tmp_path, monkeypatch)
    raw = ["medium-photo", "medium-3d-render", "color-blue", "color-red", "color-green"]
    out = {**VALID, "description": "  A thing.  ", "tags": {"style": raw, "concepts": []}}
    res = ClaudeDescriber(StubClient(out, model="claude-x")).describe(rec, store, VOCAB, "")
    assert res.style == raw and res.description == "  A thing.  "  # Claude's raw answer
    assert res.images == 2 and res.model == "claude-x"
    assert res.suggested_slugs["style"] == [{"slug": "form-x", "definition": "d"}]
    saved = apply_description(rec, res, vocab=VOCAB, model="m", now="2026-11-25T00:00:00Z")
    assert saved["bot"]["answer"] == {"description": "  A thing.  ", "style": raw, "concepts": []}
    assert saved["bot"]["applied"]["style"] == saved["style"] == ["medium-photo", "color-blue", "color-red"]
    assert saved["bot"]["applied"]["description"] == saved["description"] == "A thing."


def test_filter_runs_before_trim(tmp_path, monkeypatch):
    # the vocabulary lost medium-3d-render during the call: the next medium- slug still applies
    store, rec = seed(tmp_path, monkeypatch)
    out = {**VALID, "tags": {"style": ["medium-3d-render", "medium-photo"], "concepts": []}}
    res = ClaudeDescriber(StubClient(out)).describe(rec, store, VOCAB, "")
    vocab = {**VOCAB, "style": [s for s in VOCAB["style"] if s != "medium-3d-render"]}
    saved = apply_description(rec, res, vocab=vocab, model="m", now="2026-11-25T00:00:00Z")
    assert saved["style"] == ["medium-photo"]
    assert saved["bot"]["answer"]["style"] == ["medium-3d-render", "medium-photo"]


@pytest.mark.parametrize("bad", [
    {**VALID, "suggested_slugs": {"style": ["form-x"], "concepts": []}},
    {**VALID, "suggested_slugs": {"style": [{"slug": 1, "definition": "d"}], "concepts": []}},
    {**VALID, "suggested_slugs": {"style": [{"slug": "a"}], "concepts": []}},
])
def test_malformed_suggestions_are_bad_output(tmp_path, monkeypatch, bad):
    store, rec = seed(tmp_path, monkeypatch)
    with pytest.raises(RaterError) as e:
        ClaudeDescriber(StubClient(bad)).describe(rec, store, VOCAB, "")
    assert e.value.code == "bad_output"


def test_error_codes(tmp_path, monkeypatch):
    store, rec = seed(tmp_path, monkeypatch)

    def code(client):
        with pytest.raises(RaterError) as e:
            ClaudeDescriber(client).describe(rec, store, VOCAB, "")
        return e.value.code
    assert code(StubClient(stop_reason="refusal")) == "refusal"
    assert code(StubClient(stop_reason="max_tokens")) == "max_tokens"
    assert code(StubClient(text="not json")) == "bad_output"
    req = httpx2.Request("POST", "https://api.anthropic.com/v1/messages")
    exc = anthropic.RateLimitError("slow", response=httpx2.Response(429, request=req), body=None)
    assert code(StubClient(exc=exc)) == "rate_limit"
    (store.dir / rec["id"] / "01.jpg").write_bytes(b"garbage")
    assert code(StubClient()) == "image"
    (store.dir / rec["id"] / "01.jpg").unlink()
    assert code(StubClient()) == "image"


def test_load_vocab_doc_and_fake(tmp_path):
    assert load_vocab_doc(tmp_path) == ""
    (tmp_path / "taxonomy").mkdir()
    (tmp_path / "taxonomy" / "visual-vocabulary.md").write_text("doc")
    assert load_vocab_doc(tmp_path) == "doc"
    f = FakeDescriber(fail={"a": "refusal"})
    with pytest.raises(RaterError) as e:
        f.describe({"id": "a"}, None, {}, "")
    assert e.value.code == "refusal"
    assert f.describe({"id": "b"}, None, {}, "") == DescribeResult(
        "Fake description.", ["medium-photo"], [], {"style": [], "concepts": []}, 1)
    assert f.calls == ["a", "b"]
