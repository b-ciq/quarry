"""Rating core: verdict inference, example selection, bot-result merging, agreement stats.

Pure logic; no network and no writes. Callers persist the returned sidecars.
"""

from dataclasses import dataclass, field
from pathlib import Path

from quarry.schema import TAG_AXES, TONES
from quarry.search import more_like


@dataclass
class RatingResult:
    verdict: str
    strength: str
    reason: str
    description: str
    tags: dict[str, list[str]]
    tone: str | None
    suggested_slugs: dict[str, list[str]] = field(default_factory=dict)


_LEGACY = {"retired": "no", "parked": "maybe"}


def human_verdict(sidecar: dict) -> str | None:
    human = (sidecar.get("rating") or {}).get("human")
    if human and human.get("verdict"):
        return human["verdict"]
    status = sidecar.get("status")
    if status == "confirmed":
        return "no" if sidecar.get("anti_example") else "yes"
    return _LEGACY.get(status)


def apply_bot_rating(sidecar: dict, result: RatingResult, *, model: str, examples: list[str],
                     vocab: dict, now: str, redo: bool = False) -> dict:
    out = dict(sidecar)
    if not redo:
        if not str(out.get("description") or "").strip() and result.description.strip():
            out["description"] = result.description
        for axis in TAG_AXES:
            allowed = vocab.get(axis)
            if not allowed or out.get(axis):
                continue
            picked = list(dict.fromkeys(t for t in result.tags.get(axis, []) if t in allowed))
            if picked:
                out[axis] = picked
        if out.get("class") == "background" and not out.get("tone") and result.tone in TONES:
            out["tone"] = result.tone
    out["rating"] = {**(sidecar.get("rating") or {}), "bot": {
        "verdict": result.verdict, "strength": result.strength, "reason": result.reason,
        "model": model, "at": now, "examples": list(examples),
        "suggested_slugs": result.suggested_slugs,
    }}
    return out


def apply_human_verdict(sidecar: dict, verdict: str, *, by: str, now: str,
                        reason: str | None = None) -> dict:
    human = {"verdict": verdict, "by": by, "at": now}
    if reason and reason.strip():
        human["reason"] = reason
    out = dict(sidecar)
    out["rating"] = {**(sidecar.get("rating") or {}), "human": human}
    return out


def _recent_key(s: dict):
    at = ((s.get("rating") or {}).get("human") or {}).get("at")
    if at:
        return (1, at)
    return (0, (s.get("source") or {}).get("ingested_at") or "")


def _balance(top: list[dict], ranked: list[dict]) -> list[dict]:
    """Ensure top holds a yes and a no when the pool has them, never evicting a lone yes/no."""
    top = list(top)
    for want in ("yes", "no"):
        if any(human_verdict(s) == want for s in top):
            continue
        best = next((s for s in ranked if human_verdict(s) == want), None)
        if best is None:
            continue
        counts: dict = {}
        for s in top:
            counts[human_verdict(s)] = counts.get(human_verdict(s), 0) + 1
        for i in range(len(top) - 1, -1, -1):
            v = human_verdict(top[i])
            if v not in ("yes", "no") or counts[v] > 1:
                top[i] = best
                break
    return top


def select_examples(repo_root: Path, asset_id: str, sidecars: list[dict], *,
                    look_alike: bool, k: int = 6) -> list[dict]:
    pool = [s for s in sidecars if s["id"] != asset_id and human_verdict(s) is not None]
    by_id = {s["id"]: s for s in pool}
    ranked = sorted(pool, key=_recent_key, reverse=True)
    if look_alike:
        try:
            hits = more_like(repo_root, asset_id, space="style", servable_only=False,
                             limit=len(sidecars) + 1)
        except (KeyError, FileNotFoundError):
            hits = []
        near = [by_id[h.id] for h in hits if h.id in by_id]
        seen = {s["id"] for s in near}
        ranked = near + [s for s in ranked if s["id"] not in seen]
    return _balance(ranked[:k], ranked)


def agreement(sidecars: list[dict], recent: int = 50) -> dict:
    pairs = []
    for s in sidecars:
        r = s.get("rating") or {}
        if r.get("bot") and (r.get("human") or {}).get("verdict"):
            pairs.append(s)
    pairs.sort(key=_recent_key, reverse=True)
    out = {k: {"agreed": 0, "total": 0} for k in ("recent", "strong", "unsure")}
    for s in pairs[:recent]:
        bot, human = s["rating"]["bot"], s["rating"]["human"]
        ok = bot.get("verdict") == human["verdict"]
        for key in ("recent", bot.get("strength")):
            if key in out:
                out[key]["total"] += 1
                out[key]["agreed"] += ok
    return out
