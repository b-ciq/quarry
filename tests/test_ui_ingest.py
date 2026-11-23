import io
from pathlib import Path
import struct
import zlib

from fastapi.testclient import TestClient

from quarry.ui.app import create_app


def _png(w=1, h=1, shade=255) -> bytes:
    def chunk(t, d):
        c = struct.pack(">I", len(d)) + t + d
        return c + struct.pack(">I", zlib.crc32(t + d) & 0xFFFFFFFF)
    raw = b"".join(b"\x00" + bytes([shade, 0, 0]) * w for _ in range(h))
    return (b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0))
            + chunk(b"IDAT", zlib.compress(raw)) + chunk(b"IEND", b""))


def _seed(repo):
    repo.git("add", "-A")
    repo.git("commit", "-q", "-m", "seed", "--allow-empty")


def _post(c, files, **data):
    data.setdefault("asset_class", "hero")
    data.setdefault("origin", "designer")
    return c.post("/api/ingest", data=data,
                  files=[("files", (n, io.BytesIO(b), "application/octet-stream")) for n, b in files])


def _count(repo):
    return int(repo.git("rev-list", "--count", "HEAD").strip())


def test_ingest_two_pngs_one_commit(git_repo):
    _seed(git_repo)
    c = TestClient(create_app(git_repo.root))
    r = _post(c, [("One Pic.png", _png(shade=1)), ("two.png", _png(shade=2))])
    assert r.status_code == 200, r.text
    body = r.json()
    assert sorted(body["created"]) == ["one-pic", "two"] and body["skipped"] == []
    assert git_repo.git("log", "-1", "--format=%s") == "ingest: 2 assets from designer\n"
    files = set(git_repo.git("show", "--name-only", "--format=", "HEAD").split())
    assert len(files) == 4 and {Path(f).name for f in files} == {
        "one-pic.png", "one-pic.json", "two.png", "two.json"}
    assert all(f.startswith("library/") for f in files)
    assert git_repo.git("status", "--porcelain") == ""
    assert c.get("/api/assets/two").status_code == 200


def test_duplicate_upload_skipped_no_commit(git_repo):
    _seed(git_repo)
    c = TestClient(create_app(git_repo.root))
    data = _png(shade=9)
    first = _post(c, [("a.png", data)]).json()
    n = _count(git_repo)
    r = _post(c, [("b.png", data)])
    assert r.status_code == 200
    body = r.json()
    assert body["created"] == []
    assert body["skipped"][0]["file"] == "b.png" and first["created"][0] in body["skipped"][0]["reason"]
    assert _count(git_repo) == n


def test_screenshot_without_product_422(git_repo):
    _seed(git_repo)
    c = TestClient(create_app(git_repo.root))
    n = _count(git_repo)
    r = _post(c, [("a.png", _png())], asset_class="screenshot")
    assert r.status_code == 422
    assert _count(git_repo) == n
    assert _post(c, [("a.png", _png())], asset_class="screenshot", product="rlc-pro").status_code == 200


def test_unknown_class_and_missing_fields_422(git_repo):
    _seed(git_repo)
    c = TestClient(create_app(git_repo.root))
    assert _post(c, [("a.png", _png())], asset_class="bogus").status_code == 422
    assert c.post("/api/ingest", data={"asset_class": "hero"},
                  files=[("files", ("a.png", b"x"))]).status_code == 422


def test_non_image_skipped_not_crash(git_repo):
    _seed(git_repo)
    c = TestClient(create_app(git_repo.root))
    n = _count(git_repo)
    r = _post(c, [("notes.txt", b"hello")])
    assert r.status_code == 200
    assert r.json()["created"] == [] and r.json()["skipped"][0]["file"] == "notes.txt"
    assert _count(git_repo) == n


def test_corrupt_image_skipped(git_repo):
    _seed(git_repo)
    c = TestClient(create_app(git_repo.root))
    r = _post(c, [("bad.png", b"not a png"), ("ok.png", _png())])
    assert r.status_code == 200, r.text
    assert r.json()["created"] == ["ok"]
    assert r.json()["skipped"][0]["file"] == "bad.png"
