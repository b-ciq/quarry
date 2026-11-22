"""Hybrid search: BM25 (FTS5) + retrieval-vector kNN merged by reciprocal rank fusion.

Structured filters run as SQL over the assets table; servability is applied to each
candidate's sidecar through the one shared `schema.is_servable`.
"""

import json
import re
from dataclasses import dataclass
from pathlib import Path

from quarry.embeddings import Embedder
from quarry.indexer import connect
from quarry.schema import is_servable

RRF_K = 60


@dataclass
class Hit:
    id: str
    score: float
    sidecar: dict
    thumb_path: Path | None  # index/thumbs/<id>.webp if it exists, else None


def _open(repo_root: Path):
    db = Path(repo_root) / "index" / "library.db"
    if not db.exists():
        raise FileNotFoundError(f"no index at {db}; run `quarry index` first")
    return connect(db)


class EmbedderMismatch(ValueError):
    """The requested embedder mode differs from the one the index was built with."""


class EmbedderUnavailable(RuntimeError):
    """The requested embedder needs ML dependencies that are not installed."""


def _check_mode(conn, embedder) -> None:
    try:
        row = conn.execute("SELECT value FROM meta WHERE key = 'embedder_mode'").fetchone()
    except Exception:  # index predates the meta table
        return
    built, want = (row[0] if row else None), getattr(embedder, "mode", None)
    if built in ("fake", "hf") and want in ("fake", "hf") and built != want:
        if built == "fake":
            raise EmbedderMismatch("index was built with the fake embedder; pass --fake-embedder "
                                   "(or set QUARRY_FAKE_EMBEDDER=1)")
        raise EmbedderMismatch("index was built with the hf embedder; drop --fake-embedder "
                               "(or unset QUARRY_FAKE_EMBEDDER) and install the ml extra: "
                               "pip install -e '.[ml]'")


def _fts_match(query: str) -> str | None:
    # Quote every token so slugs like rlc-pro and FTS operators are treated literally.
    tokens = re.findall(r"\w+", query)
    return " OR ".join(f'"{t}"' for t in tokens) or None


def _hit(repo_root: Path, id: str, score: float, sidecar: dict) -> Hit:
    thumb = Path(repo_root) / "index" / "thumbs" / f"{id}.webp"
    return Hit(id, score, sidecar, thumb if thumb.exists() else None)


def _candidates(conn, cls, product, tone) -> dict[str, dict]:
    where, params = [], []
    if cls:
        where.append("json_extract(json, '$.class') = ?")
        params.append(cls)
    if tone:
        where.append("json_extract(json, '$.tone') = ?")
        params.append(tone)
    if product:
        where.append("EXISTS (SELECT 1 FROM json_each(json_extract(assets.json,'$.products')) WHERE value = ?)")
        params.append(product)
    # json_each has a hidden `json` column, so the outer one must be table-qualified above.
    sql = "SELECT id, json FROM assets" + (" WHERE " + " AND ".join(where) if where else "") + " ORDER BY id"
    return {i: json.loads(j) for i, j in conn.execute(sql, params)}


def _count(conn) -> int:
    return conn.execute("SELECT count(*) FROM assets").fetchone()[0]


def search(repo_root: Path, embedder: Embedder, query: str | None, *, cls=None, product=None,
           tone=None, servable_only=True, limit=10) -> list[Hit]:
    conn = _open(repo_root)
    try:
        if query and query.strip():
            _check_mode(conn, embedder)
        cands = _candidates(conn, cls, product, tone)
        if servable_only:
            cands = {i: s for i, s in cands.items() if is_servable(s)}
        if not query or not query.strip():
            # filter-only browsing: no ranking signal, so order by id, score 0.
            return [_hit(repo_root, i, 0.0, s) for i, s in list(cands.items())[:limit]]

        ranked_lists: list[list[str]] = []
        match = _fts_match(query)
        if match:
            rows = conn.execute("SELECT id FROM assets_fts WHERE assets_fts MATCH ? ORDER BY rank", (match,))
            ranked_lists.append([i for (i,) in rows if i in cands])
        total = _count(conn)
        if total:
            try:
                qv = embedder.embed_text(query).tobytes()
            except ImportError as exc:
                raise EmbedderUnavailable(
                    "the hf embedder needs torch/transformers: pip install -e '.[ml]' "
                    "(or use --fake-embedder for a fake-built index)") from exc
            rows = conn.execute(
                "SELECT id FROM vec_retrieval WHERE v MATCH ? AND k = ? ORDER BY distance", (qv, total))
            ranked_lists.append([i for (i,) in rows if i in cands])
    finally:
        conn.close()

    scores: dict[str, float] = {}
    for lst in ranked_lists:
        for rank, i in enumerate(lst, start=1):
            scores[i] = scores.get(i, 0.0) + 1.0 / (RRF_K + rank)
    ordered = sorted(scores, key=lambda i: (-scores[i], i))[:limit]
    return [_hit(repo_root, i, scores[i], cands[i]) for i in ordered]


def more_like(repo_root: Path, asset_id: str, *, space="style", servable_only=True,
              limit=10) -> list[Hit]:
    """Nearest neighbours of `asset_id` in a vector space; score is cosine similarity."""
    if space not in ("style", "retrieval"):
        raise ValueError(f"unknown space {space!r}; expected 'style' or 'retrieval'")
    table = f"vec_{space}"
    conn = _open(repo_root)
    try:
        row = conn.execute(f"SELECT v FROM {table} WHERE id = ?", (asset_id,)).fetchone()
        if row is None:
            raise KeyError(f"unknown asset id {asset_id!r}")
        rows = conn.execute(
            f"SELECT id, distance FROM {table} WHERE v MATCH ? AND k = ? ORDER BY distance",
            (row[0], _count(conn))).fetchall()
        sidecars = {i: json.loads(j) for i, j in conn.execute("SELECT id, json FROM assets")}
    finally:
        conn.close()
    hits: list[Hit] = []
    for i, dist in rows:
        if i == asset_id or (servable_only and not is_servable(sidecars[i])):
            continue
        # vectors are L2-normalized, so cosine = 1 - d^2/2
        hits.append(_hit(repo_root, i, 1.0 - dist * dist / 2.0, sidecars[i]))
        if len(hits) >= limit:
            break
    return hits
