"""Embedders: a protocol, a deterministic fake for tests, and a lazy HF implementation.

All vectors are 1-D float32 and L2-normalized. Retrieval space (SigLIP) is shared
between text and images; style space (DINO) is image-only.
"""

from __future__ import annotations

import hashlib
from pathlib import Path
from typing import Protocol, runtime_checkable

import numpy as np

DEFAULT_SIGLIP = "google/siglip2-base-patch16-256"
DEFAULT_DINO = "facebook/dinov2-base"


@runtime_checkable
class Embedder(Protocol):
    @property
    def dims(self) -> tuple[int, int]:
        """(retrieval_dim, style_dim)"""
        ...

    def embed_text(self, s: str) -> np.ndarray: ...

    def embed_image_retrieval(self, p: Path) -> np.ndarray: ...

    def embed_image_style(self, p: Path) -> np.ndarray: ...


def _normalize(v: np.ndarray) -> np.ndarray:
    v = np.asarray(v, dtype=np.float32).reshape(-1)
    return (v / np.linalg.norm(v)).astype(np.float32)


class FakeEmbedder:
    """Deterministic embedder seeded from sha256 of the input; no models, no network."""

    mode = "fake"

    def __init__(self, dim: int = 16):
        self.dim = dim

    @property
    def dims(self) -> tuple[int, int]:
        return (self.dim, self.dim)

    def _vec(self, kind: str, data: bytes) -> np.ndarray:
        digest = hashlib.sha256(kind.encode() + b"\0" + data).digest()
        rng = np.random.default_rng(int.from_bytes(digest, "big"))
        return _normalize(rng.standard_normal(self.dim))

    def embed_text(self, s: str) -> np.ndarray:
        return self._vec("text", s.encode("utf-8"))

    def embed_image_retrieval(self, p: Path) -> np.ndarray:
        return self._vec("retrieval", Path(p).read_bytes())

    def embed_image_style(self, p: Path) -> np.ndarray:
        return self._vec("style", Path(p).read_bytes())


class HFEmbedder:
    """SigLIP (retrieval, text+image) and DINOv2 (style) via transformers.

    Requires the `ml` extra. torch/transformers are imported only on first use.
    """

    mode = "hf"

    def __init__(self, retrieval_model: str = DEFAULT_SIGLIP, style_model: str = DEFAULT_DINO):
        self.retrieval_model = retrieval_model
        self.style_model = style_model
        self._siglip = None
        self._dino = None

    def _load_siglip(self):
        if self._siglip is None:
            from transformers import AutoModel, AutoProcessor

            model = AutoModel.from_pretrained(self.retrieval_model).eval()
            self._siglip = (model, AutoProcessor.from_pretrained(self.retrieval_model))
        return self._siglip

    def _load_dino(self):
        if self._dino is None:
            from transformers import AutoImageProcessor, AutoModel

            model = AutoModel.from_pretrained(self.style_model).eval()
            self._dino = (model, AutoImageProcessor.from_pretrained(self.style_model))
        return self._dino

    @property
    def dims(self) -> tuple[int, int]:
        siglip, _ = self._load_siglip()
        dino, _ = self._load_dino()
        return (int(siglip.config.vision_config.hidden_size), int(dino.config.hidden_size))

    @staticmethod
    def _open(p: Path):
        from PIL import Image

        return Image.open(p).convert("RGB")

    def embed_text(self, s: str) -> np.ndarray:
        import torch

        model, proc = self._load_siglip()
        inputs = proc(text=[s], padding="max_length", max_length=64, truncation=True, return_tensors="pt")
        with torch.no_grad():
            out = model.get_text_features(**inputs)
        return _normalize(out[0].cpu().numpy())

    def embed_image_retrieval(self, p: Path) -> np.ndarray:
        import torch

        model, proc = self._load_siglip()
        inputs = proc(images=self._open(p), return_tensors="pt")
        with torch.no_grad():
            out = model.get_image_features(**inputs)
        return _normalize(out[0].cpu().numpy())

    def embed_image_style(self, p: Path) -> np.ndarray:
        import torch

        model, proc = self._load_dino()
        inputs = proc(images=self._open(p), return_tensors="pt")
        with torch.no_grad():
            out = model(**inputs)
        return _normalize(out.last_hidden_state[0, 0].cpu().numpy())
