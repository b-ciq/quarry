import copy
import json
from pathlib import Path

from quarry.describer import (DescribeResult, apply_description, capture_time, is_describe_target,
                              media_fingerprint, target_order, trim_style, vocab_digest)
from tests.inspiration_helpers import item, make_record

VOCAB = {"style": ["medium-photo", "medium-3d-render", "light-backlit", "a", "b"],
         "concepts": ["infrastructure", "science"]}


def rec_with(code="AbC123", n=1, **extra):
    rec = make_record(code)
    rec["capture"]["items"] = [{**item(i + 1), "sha256": f"s{i + 1}"} for i in range(n)]
    rec.update(extra)
    return rec


def result(**kw):
    base = dict(description="A thing.", style=["medium-photo"], concepts=["science"],
                suggested_slugs={"style": [], "concepts": []}, images=1)
    base.update(kw)
    return DescribeResult(**base)


def apply(rec, res=None, **kw):
    return apply_description(rec, res or result(), vocab=VOCAB, model="m", now="2026-11-25T00:00:00Z", **kw)


def test_fingerprint_changes_with_media_only():
    rec = rec_with(n=2)
    fp = media_fingerprint(rec)
    assert len(fp) == 12
    other = copy.deepcopy(rec)
    other.update(description="x", status="confirmed", bot={"media": "zzz"})
    assert media_fingerprint(other) == fp
    other["capture"]["items"][0]["sha256"] = "changed"
    assert media_fingerprint(other) != fp
    assert media_fingerprint(rec_with(n=3)) != fp


def test_target_rules():
    assert not is_describe_target(make_record("AbC123"))
    assert not is_describe_target(rec_with(status="retired"))
    for status in ("proposed", "parked", "confirmed"):
        assert is_describe_target(rec_with(status=status))
    rec = rec_with()
    rec["bot"] = {"media": media_fingerprint(rec)}
    assert not is_describe_target(rec)
    rec["bot"] = {"media": "stale"}
    assert is_describe_target(rec)
    gave_up = rec_with(describe_error={"gave_up": True, "tries": 3, "at": "2026-11-25T01:00:00Z"})
    assert not is_describe_target(gave_up)
    gave_up["describe_requested_at"] = "2026-11-25T02:00:00Z"
    assert is_describe_target(gave_up)
    gave_up["describe_requested_at"] = "2026-11-25T00:30:00Z"
    assert not is_describe_target(gave_up)
    done = rec_with()
    done["bot"] = {"media": media_fingerprint(done)}
    done["describe_requested_at"] = "2026-11-25T02:00:00Z"
    assert is_describe_target(done)


def test_target_order_newest_capture_first():
    old_save = rec_with("Old", source={**make_record("Old")["source"], "saved_at": "2020-01-01T00:00:00Z"})
    old_save["capture"]["items"][0]["captured_at"] = "2026-11-25T09:00:00Z"
    yesterday = rec_with("Yes", source={**make_record("Yes")["source"], "saved_at": "2026-11-24T00:00:00Z"})
    yesterday["capture"]["items"][0]["captured_at"] = "2026-11-24T09:00:00Z"
    assert [r["id"] for r in target_order([yesterday, old_save])] == ["ig-old", "ig-yes"]
    none_saved = make_record("Non")
    assert capture_time(none_saved) == "2026-11-24"
    target_order([none_saved, yesterday])
    assert capture_time({}) == ""


def test_trim_style_enforces_facets():
    slugs = ["medium-photo", "medium-3d-render", "light-backlit", "light-high-key", "color-duotone",
             "color-monochrome", "color-blue-teal", "form-wave-flow", "comp-negative-space", "comp-macro-detail"]
    assert trim_style(slugs) == ["medium-photo", "light-backlit", "color-duotone", "color-monochrome",
                                 "form-wave-flow", "comp-negative-space"]


def test_vocab_digest():
    assert len(vocab_digest(VOCAB)) == 8


def test_apply_fills_empty_fields():
    rec = rec_with(describe_error={"tries": 1}, describe_requested_at="2026-11-25T00:00:00Z")
    out = apply(rec)
    assert (out["description"], out["style"], out["concepts"]) == ("A thing.", ["medium-photo"], ["science"])
    bot = out["bot"]
    assert bot["model"] == "m" and bot["at"] == "2026-11-25T00:00:00Z" and bot["images"] == 1
    assert bot["applied"] == {"description": "A thing.", "style": ["medium-photo"], "concepts": ["science"]}
    assert bot["answer"]["style"] == ["medium-photo"] and "suggested_slugs" in bot
    assert bot["media"] == media_fingerprint(rec) and bot["vocab"] == vocab_digest(VOCAB)
    assert "describe_error" not in out and "describe_requested_at" not in out
    assert "bot" not in rec


def test_apply_keeps_curator_values():
    rec = rec_with(style=["medium-photo"], bot={"applied": {"style": ["medium-3d-render"]}})
    out = apply(rec, result(style=["light-backlit"]))
    assert out["style"] == ["medium-photo"]
    assert out["bot"]["answer"]["style"] == ["light-backlit"]
    assert out["bot"]["applied"]["style"] == ["light-backlit"]


def test_apply_replaces_claude_owned_values_as_sets():
    rec = rec_with(style=["b", "a"], bot={"applied": {"style": ["a", "b"]}})
    assert apply(rec, result(style=["medium-photo"]))["style"] == ["medium-photo"]


def test_apply_filters_to_vocab_and_drops_existing_suggestions():
    sugg = {"style": [{"slug": "form-ribbon", "definition": "d"}, {"slug": "a", "definition": "d"}],
            "concepts": []}
    out = apply(rec_with(), result(style=["medium-photo", "nope"], suggested_slugs=sugg))
    assert out["style"] == ["medium-photo"] and out["bot"]["applied"]["style"] == ["medium-photo"]
    assert out["bot"]["answer"]["style"] == ["medium-photo", "nope"]
    assert out["bot"]["suggested_slugs"]["style"] == [{"slug": "form-ribbon", "definition": "d"}]


def test_applied_is_ownership_reference_after_trim():
    vocab = {"style": ["medium-photo", "medium-3d-render"], "concepts": []}
    res = result(style=["medium-photo", "medium-3d-render"], concepts=[])
    kw = dict(vocab=vocab, model="m", now="t")
    first = apply_description(rec_with(), res, **kw)
    assert first["style"] == ["medium-photo"]
    second = apply_description(first, result(style=["medium-3d-render", "medium-photo"], concepts=[]), **kw)
    assert second["style"] == ["medium-3d-render"]
    third = apply_description(second, res, **kw)
    assert third["style"] == ["medium-photo"]
