import importlib.util

import numpy as np
import pytest
from PIL import Image

from quarry.embeddings import DEFAULT_DINO, DEFAULT_SIGLIP, Embedder, FakeEmbedder, HFEmbedder


@pytest.fixture
def img(tmp_path):
    def make(name, color):
        p = tmp_path / name
        Image.new("RGB", (8, 8), color).save(p)
        return p

    return make


def test_text_deterministic_and_distinct():
    e = FakeEmbedder()
    assert np.array_equal(e.embed_text("a"), e.embed_text("a"))
    assert not np.array_equal(e.embed_text("a"), e.embed_text("b"))


def test_image_deterministic_and_distinct(img):
    e = FakeEmbedder()
    a, b = img("a.png", "red"), img("b.png", "blue")
    assert np.array_equal(e.embed_image_retrieval(a), e.embed_image_retrieval(a))
    assert not np.array_equal(e.embed_image_retrieval(a), e.embed_image_retrieval(b))
    assert not np.array_equal(e.embed_image_style(a), e.embed_image_style(b))


def test_normalized_float32(img):
    e = FakeEmbedder()
    p = img("a.png", "red")
    for v in (e.embed_text("x"), e.embed_image_retrieval(p), e.embed_image_style(p)):
        assert v.dtype == np.float32
        assert v.ndim == 1
        assert np.linalg.norm(v) == pytest.approx(1.0, abs=1e-5)


def test_text_and_image_of_same_content_differ(tmp_path):
    p = tmp_path / "f.bin"
    p.write_bytes(b"hello")
    e = FakeEmbedder()
    assert not np.array_equal(e.embed_text("hello"), e.embed_image_retrieval(p))


def test_retrieval_and_style_spaces_differ(img):
    e = FakeEmbedder()
    p = img("a.png", "red")
    assert not np.array_equal(e.embed_image_retrieval(p), e.embed_image_style(p))


def test_dims_respected(img):
    e = FakeEmbedder(dim=32)
    assert e.dims == (32, 32)
    p = img("a.png", "red")
    assert e.embed_text("x").shape == (32,)
    assert e.embed_image_retrieval(p).shape == (32,)
    assert e.embed_image_style(p).shape == (32,)
    assert FakeEmbedder().dims == (16, 16)


def test_fake_satisfies_protocol():
    assert isinstance(FakeEmbedder(), Embedder)


def test_hf_defaults_and_lazy():
    assert DEFAULT_SIGLIP == "google/siglip2-base-patch16-256"
    assert DEFAULT_DINO == "facebook/dinov2-base"
    h = HFEmbedder()  # must not import torch or load models
    assert h.retrieval_model == DEFAULT_SIGLIP
    assert h.style_model == DEFAULT_DINO


@pytest.mark.slow
@pytest.mark.skipif(
    importlib.util.find_spec("torch") is None or importlib.util.find_spec("transformers") is None,
    reason="ml extra not installed",
)
def test_hf_smoke(img):
    h = HFEmbedder()
    p = img("a.png", "red")
    t, r, s = h.embed_text("a red square"), h.embed_image_retrieval(p), h.embed_image_style(p)
    assert t.shape == r.shape == (h.dims[0],)
    assert s.shape == (h.dims[1],)
    for v in (t, r, s):
        assert v.dtype == np.float32
        assert np.linalg.norm(v) == pytest.approx(1.0, abs=1e-4)
