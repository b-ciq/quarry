from PIL import Image

from quarry.embeddings import FakeEmbedder
from quarry.indexer import build_index
from quarry.search import more_like, search


def _img(repo, cls, id, color):
    Image.new("RGB", (8, 8), color).save(repo.root / "library" / cls / f"{id}.png")


def _build(repo):
    emb = FakeEmbedder(dim=16)
    build_index(repo.root, emb)
    return emb


def _ids(hits):
    return [h.id for h in hits]


def test_fts_exact_term_ranked_first(repo):
    repo.add_asset("hero", "fuzz-hero", description="Fuzzball GA announcement hero")
    repo.add_asset("hero", "other-one", description="Abstract blue gradient")
    repo.add_asset("hero", "other-two", description="Network of glowing nodes")
    _img(repo, "hero", "other-one", "red")
    _img(repo, "hero", "other-two", "green")
    emb = _build(repo)
    hits = search(repo.root, emb, "fuzzball GA")
    assert hits[0].id == "fuzz-hero"
    assert hits[0].sidecar["id"] == "fuzz-hero"
    assert hits[0].score > hits[1].score
    assert hits[0].thumb_path == repo.root / "index" / "thumbs" / "fuzz-hero.webp"


def test_rrf_scores_use_both_lists(repo):
    repo.add_asset("hero", "only-one", description="Fuzzball")
    emb = _build(repo)
    (hit,) = search(repo.root, emb, "fuzzball")
    assert abs(hit.score - 2 / 61) < 1e-9  # rank 1 in both BM25 and vector lists


def test_slug_query_does_not_break_fts(repo):
    repo.add_asset("hero", "a1", description="RLC-Pro launch", products=["rlc-pro"])
    emb = _build(repo)
    assert _ids(search(repo.root, emb, "rlc-pro")) == ["a1"]
    assert _ids(search(repo.root, emb, '"unbalanced AND (')) is not None


def test_filters_compose(repo):
    repo.add_asset("hero", "h-rlc", products=["rlc-pro"])
    repo.add_asset("hero", "h-fuzz", products=["fuzzball"])
    repo.add_asset("lifestyle", "l-rlc", products=["rlc-pro"])
    repo.add_asset("background", "bg-dark", tone="dark")
    repo.add_asset("background", "bg-light", tone="light")
    for cls, i, c in [("hero", "h-fuzz", "red"), ("lifestyle", "l-rlc", "green"),
                      ("background", "bg-dark", "blue"), ("background", "bg-light", "yellow")]:
        _img(repo, cls, i, c)
    emb = _build(repo)
    assert _ids(search(repo.root, emb, None, cls="hero", product="rlc-pro")) == ["h-rlc"]
    assert set(_ids(search(repo.root, emb, None, product="rlc-pro"))) == {"h-rlc", "l-rlc"}
    assert _ids(search(repo.root, emb, None, tone="light")) == ["bg-light"]
    assert _ids(search(repo.root, emb, None, cls="hero")) == ["h-fuzz", "h-rlc"]  # browse: id order


def test_servability_filtering(repo):
    repo.add_asset("hero", "ok", description="shared word")
    repo.add_asset("hero", "restricted", description="shared word", usage_restrictions=["internal"])
    repo.add_asset("hero", "retired", description="shared word", status="retired")
    repo.add_asset("hero", "proposed", description="shared word", status="proposed")
    for i, c in [("restricted", "red"), ("retired", "green"), ("proposed", "blue")]:
        _img(repo, "hero", i, c)
    emb = _build(repo)
    assert _ids(search(repo.root, emb, "shared")) == ["ok"]
    assert _ids(search(repo.root, emb, None)) == ["ok"]
    assert set(_ids(search(repo.root, emb, "shared", servable_only=False))) == {
        "ok", "restricted", "retired", "proposed"}


def test_limit(repo):
    for i, c in [("a", "red"), ("b", "green"), ("c", "blue")]:
        repo.add_asset("hero", i)
        _img(repo, "hero", i, c)
    emb = _build(repo)
    assert len(search(repo.root, emb, None, limit=2)) == 2


def test_more_like_excludes_self_and_respects_servable(repo):
    for i, c in [("q", "red"), ("n1", "green"), ("n2", "blue")]:
        repo.add_asset("hero", i)
        _img(repo, "hero", i, c)
    repo.add_asset("hero", "hidden", status="proposed")
    _img(repo, "hero", "hidden", "yellow")
    emb = _build(repo)
    hits = more_like(repo.root, "q")
    assert "q" not in _ids(hits) and "hidden" not in _ids(hits)
    assert set(_ids(hits)) == {"n1", "n2"}
    assert "hidden" in _ids(more_like(repo.root, "q", servable_only=False))
    # non-servable query asset is still usable as a query
    assert more_like(repo.root, "hidden")


def test_more_like_nearest_first(repo):
    import numpy as np
    for i, c in [("q", "red"), ("n1", "green"), ("n2", "blue"), ("n3", "yellow")]:
        repo.add_asset("hero", i)
        _img(repo, "hero", i, c)
    emb = _build(repo)
    for space, fn in [("style", emb.embed_image_style), ("retrieval", emb.embed_image_retrieval)]:
        vecs = {i: fn(repo.root / "library" / "hero" / f"{i}.png") for i in ["q", "n1", "n2", "n3"]}
        expected = sorted(["n1", "n2", "n3"], key=lambda i: float(np.linalg.norm(vecs["q"] - vecs[i])))
        assert _ids(more_like(repo.root, "q", space=space)) == expected


import pytest

from quarry.search import EmbedderMismatch


class _HFLike(FakeEmbedder):
    mode = "hf"


@pytest.mark.parametrize("built,asked,fragment", [
    (FakeEmbedder(dim=16), _HFLike(dim=16), "--fake-embedder"),
    (_HFLike(dim=16), FakeEmbedder(dim=16), "ml"),
])
def test_embedder_mode_mismatch_errors_before_embedding(repo, built, asked, fragment):
    repo.add_asset("hero", "h1")
    build_index(repo.root, built)
    asked.embed_text = lambda s: pytest.fail("must not embed on mismatch")
    with pytest.raises(EmbedderMismatch, match=fragment):
        search(repo.root, asked, "anything")


def test_index_records_meta(repo):
    import sqlite3
    repo.add_asset("hero", "h1")
    build_index(repo.root, FakeEmbedder(dim=16))
    rows = dict(sqlite3.connect(repo.root / "index" / "library.db").execute("SELECT key, value FROM meta"))
    assert rows == {"embedder_mode": "fake", "dims": "16,16"}


def test_cli_search_mismatch_exit_1_no_traceback(repo, capsys):
    from quarry.cli import main
    repo.add_asset("hero", "h1")
    build_index(repo.root, FakeEmbedder(dim=16))
    assert main(["search", "x", "--repo", str(repo.root)]) == 1
    assert "--fake-embedder" in capsys.readouterr().err


def test_cli_search_missing_torch_is_friendly(repo, capsys, monkeypatch):
    from quarry.cli import main
    import quarry.embeddings as emb
    repo.add_asset("hero", "h1")
    build_index(repo.root, _HFLike(dim=16))
    def boom(self, s):
        raise ImportError("No module named 'torch'")
    monkeypatch.setattr(emb.HFEmbedder, "embed_text", boom)
    assert main(["search", "x", "--repo", str(repo.root)]) == 1
    assert ".[ml]" in capsys.readouterr().err
