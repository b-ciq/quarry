import json
from pathlib import Path

import quarry.rating as rating_mod
from quarry.rating import (RatingResult, agreement, apply_bot_rating, apply_human_verdict,
                           human_verdict, select_examples)

VOCAB = json.loads((Path(__file__).resolve().parent.parent / "taxonomy" / "vocabulary.json").read_text())
EMPTY = {"description": "", "products": [], "categories": [], "verticals": [], "concepts": [], "style": []}
RESULT = RatingResult("yes", "strong", "why", "Bot words", {"products": ["rocky"]}, "dark", {})


def _h(id, verdict, at=None, ingested="2024-01-01", bot=None):
    s = {"id": id, "status": "confirmed", "source": {"ingested_at": ingested}}
    r = {}
    if at:
        r["human"] = {"verdict": verdict, "by": "x", "at": at}
    else:
        s["status"] = {"yes": "confirmed", "no": "retired", "maybe": "parked"}[verdict]
    if bot:
        r["bot"] = bot
    if r:
        s["rating"] = r
    return s


def test_human_verdict_inference():
    assert human_verdict({"status": "confirmed"}) == "yes"
    assert human_verdict({"status": "confirmed", "anti_example": True}) == "no"
    assert human_verdict({"status": "retired"}) == "no"
    assert human_verdict({"status": "parked"}) == "maybe"
    assert human_verdict({"status": "proposed"}) is None
    assert human_verdict({"status": "confirmed", "rating": {"human": {"verdict": "maybe"}}}) == "maybe"


def test_bot_fills_only_empty_fields_and_drops_unknown_slugs():
    s = {"class": "background", "description": "Human words", "products": [], "concepts": ["people"],
         "categories": [], "verticals": [], "style": []}
    r = RatingResult("yes", "strong", "why", "Bot words",
                     {"products": ["rocky", "nope", "rocky"], "concepts": ["compute"]}, "dark", {})
    out = apply_bot_rating(s, r, model="m", examples=["e1"], vocab=VOCAB, now="T")
    assert out["description"] == "Human words"
    assert out["products"] == ["rocky"]
    assert out["concepts"] == ["people"]
    assert out["tone"] == "dark"
    assert out["rating"]["bot"] == {"verdict": "yes", "strength": "strong", "reason": "why", "model": "m",
                                    "at": "T", "examples": ["e1"], "suggested_slugs": {}}
    assert s["products"] == [] and "rating" not in s  # input not mutated


def test_bot_fills_empty_description_and_keeps_human():
    s = {"class": "hero", **EMPTY, "rating": {"human": {"verdict": "no", "by": "a", "at": "H"}}}
    out = apply_bot_rating(s, RESULT, model="m", examples=[], vocab=VOCAB, now="T")
    assert out["description"] == "Bot words"
    assert out["rating"]["human"]["verdict"] == "no"
    assert out["rating"]["bot"]["verdict"] == "yes"


def test_tone_only_for_backgrounds():
    out = apply_bot_rating({"class": "hero", **EMPTY}, RESULT, model="m", examples=[], vocab=VOCAB, now="T")
    assert "tone" not in out


def test_existing_tone_kept():
    out = apply_bot_rating({"class": "background", "tone": "light", **EMPTY}, RESULT, model="m",
                           examples=[], vocab=VOCAB, now="T")
    assert out["tone"] == "light"


def test_redo_touches_only_rating_bot():
    out = apply_bot_rating({"class": "hero", **EMPTY}, RESULT, model="m", examples=[], vocab=VOCAB, now="T", redo=True)
    assert out["description"] == "" and out["products"] == [] and out["rating"]["bot"]["verdict"] == RESULT.verdict


def test_apply_human_verdict():
    s = {"id": "a", "rating": {"bot": {"verdict": "yes"}}}
    out = apply_human_verdict(s, "no", by="me", now="T", reason="")
    assert out["rating"]["human"] == {"verdict": "no", "by": "me", "at": "T"}
    assert out["rating"]["bot"] == {"verdict": "yes"}
    assert "human" not in s["rating"]
    out2 = apply_human_verdict({"id": "a"}, "maybe", by="me", now="T", reason="meh")
    assert out2["rating"]["human"]["reason"] == "meh"


def test_select_examples_recent_fallback_balances_yes_and_no():
    sidecars = [_h(f"y{i}", "yes", at=f"2024-02-0{9 - i}") for i in range(8)]
    sidecars.append(_h("old-no", "no", at="2023-01-01"))
    sidecars.append(_h("target", "yes", at="2024-03-01"))
    sidecars.append({"id": "unrated", "status": "proposed"})
    ids = [e["id"] for e in select_examples(Path("."), "target", sidecars, look_alike=False)]
    assert len(ids) == 6 and "old-no" in ids and "target" not in ids
    assert ids[:5] == [f"y{i}" for i in range(5)]


def test_recent_orders_legacy_after_human():
    sidecars = [_h("legacy-new", "yes", ingested="2025-01-01"), _h("legacy-old", "yes", ingested="2020-01-01"),
                _h("h", "yes", at="2024-01-01")]
    ids = [e["id"] for e in select_examples(Path("."), "t", sidecars, look_alike=False)]
    assert ids == ["h", "legacy-new", "legacy-old"]


class _Hit:
    def __init__(self, id):
        self.id = id


def test_select_examples_look_alike_uses_style_neighbours(monkeypatch):
    sidecars = [_h(i, "yes", at="2024-01-01") for i in ("p1", "p2", "p3")] + [{"id": "unrated", "status": "proposed"}]
    monkeypatch.setattr(rating_mod, "more_like",
                        lambda root, id, **kw: [_Hit(i) for i in ("p3", "unrated", "p1", "p2")])
    assert [e["id"] for e in select_examples(Path("."), "t", sidecars, look_alike=True, k=2)] == ["p3", "p1"]


def test_select_examples_falls_back_when_asset_not_in_index(monkeypatch):
    def boom(*a, **k):
        raise KeyError("x")
    monkeypatch.setattr(rating_mod, "more_like", boom)
    sidecars = [_h("p1", "yes", at="2024-01-01")]
    assert [e["id"] for e in select_examples(Path("."), "t", sidecars, look_alike=True)] == ["p1"]


def _pair(id, bot_v, strength, human_v, at):
    return _h(id, human_v, at=at, bot={"verdict": bot_v, "strength": strength})


def test_agreement_counts_by_strength():
    sidecars = [_pair("a", "yes", "strong", "yes", "3"), _pair("b", "yes", "strong", "no", "2"),
                _pair("c", "no", "unsure", "no", "1"),
                {"id": "d", "status": "proposed", "rating": {"bot": {"verdict": "yes", "strength": "strong"}}}]
    assert agreement(sidecars) == {"recent": {"agreed": 2, "total": 3},
                                   "strong": {"agreed": 1, "total": 2},
                                   "unsure": {"agreed": 1, "total": 1}}
    assert agreement(sidecars, recent=1)["recent"] == {"agreed": 1, "total": 1}


def test_invalid_tone_not_written():
    r = RatingResult("yes", "strong", "why", "d", {}, "purple", {})
    out = apply_bot_rating({"class": "background", **EMPTY}, r, model="m", examples=[], vocab=VOCAB, now="T")
    assert "tone" not in out


def test_balance_keeps_lone_yes():
    sidecars = [_h(f"m{i}", "maybe", at=f"2024-02-0{9 - i}") for i in range(5)]
    sidecars += [_h("y", "yes", at="2024-01-01"), _h("n", "no", at="2023-01-01")]
    ids = [e["id"] for e in select_examples(Path("."), "t", sidecars, look_alike=False)]
    assert "y" in ids and "n" in ids and len(ids) == 6


def test_look_alike_balances_yes_and_no(monkeypatch):
    sidecars = [_h(f"y{i}", "yes", at="2024-01-01") for i in range(4)] + [_h("n", "no", at="2023-01-01")]
    monkeypatch.setattr(rating_mod, "more_like", lambda root, id, **kw: [_Hit(f"y{i}") for i in range(4)])
    ids = [e["id"] for e in select_examples(Path("."), "t", sidecars, look_alike=True, k=3)]
    assert "n" in ids and len(ids) == 3


def test_look_alike_tops_up_from_recent(monkeypatch):
    sidecars = [_h(f"p{i}", "yes", at=f"2024-01-0{i + 1}") for i in range(8)]
    monkeypatch.setattr(rating_mod, "more_like", lambda root, id, **kw: [_Hit("p0"), _Hit("p1")])
    ids = [e["id"] for e in select_examples(Path("."), "t", sidecars, look_alike=True, k=6)]
    assert ids[:2] == ["p0", "p1"] and len(ids) == 6 and len(set(ids)) == 6
