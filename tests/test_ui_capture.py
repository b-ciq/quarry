import io
import json
import threading
import time
from datetime import date, timedelta

import pytest
from fastapi.testclient import TestClient

from inspiration_helpers import item, make_record
from quarry.inspiration_store import Store, cache_dir, config_dir
from quarry.ui import capture_api
from quarry.ui.app import create_app

CAP_COPY = "That's enough for today. Pick up tomorrow."


def set_config(**values):
    lines = [f"{k} = {json.dumps(v) if isinstance(v, str) else v}" for k, v in values.items()]
    config_dir().mkdir(parents=True, exist_ok=True)
    (config_dir() / "config.toml").write_text("\n".join(lines) + "\n")


def seed(store, code, items=(), expected=None, status=None, saved_at=None, owner=None, files=True):
    rec = make_record(code)
    rec["source"]["saved_at"] = saved_at
    if owner is not None:
        rec["owner"] = owner
    rec["capture"]["items"] = list(items)
    rec["capture"]["slides_expected"] = expected
    if status:
        rec["capture"]["status"] = status
    store.write(rec)
    if files:
        for it in items:
            (store.dir / rec["id"] / it["file"]).write_bytes(b"x")
    return rec


def jpeg_bytes(size=(64, 48)):
    from PIL import Image
    buf = io.BytesIO()
    Image.new("RGB", size, (0, 255, 0)).save(buf, "JPEG")
    return buf.getvalue()


@pytest.fixture
def root(tmp_path, monkeypatch):
    r = tmp_path / "root"
    r.mkdir()
    monkeypatch.setenv("QUARRY_INSPIRATION_DIR", str(r))
    return r


@pytest.fixture
def store(root):
    return Store(root)


@pytest.fixture
def downloads(tmp_path):
    d = tmp_path / "downloads"
    d.mkdir()
    set_config(capture_downloads_dir=str(d))
    return d


@pytest.fixture
def app(repo, root):
    return create_app(repo.root)


@pytest.fixture
def client(app):
    return TestClient(app)


def stop_sweeper(stop):
    """Stop and join the sweeper so it never runs after the test's env is restored."""
    stop.set()
    for t in threading.enumerate():
        if t.name == "quarry-capture-sweep":
            t.join(timeout=10)
            assert not t.is_alive()


def row(client, code):
    return next(r for r in client.get("/api/capture").json()["items"] if r["shortcode"] == code)


def test_list_counts_and_sort(client, store):
    seed(store, "OLD", saved_at="2026-01-01T00:00:00Z", owner={"username": "anna", "name": "Anna"})
    seed(store, "NEW", saved_at="2026-06-01T00:00:00Z")
    rec = seed(store, "CAP", items=[item(1)], expected=1, status="captured")
    seed(store, "PART", items=[{**item(1), "captured_at": "2026-03-01T00:00:00Z"}], status="partial")
    seed(store, "GONE", status="unavailable")
    body = client.get("/api/capture").json()
    assert body["enabled"] is True and body["setup"] is None
    assert body["counts"] == {"pending": 2, "partial": 1, "captured": 1, "unavailable": 1}
    assert body["today"] == {"opened": 0, "cap": 40}
    order = [r["shortcode"] for r in body["items"]]
    assert order[:3] == ["CAP", "NEW", "PART"] and order[3] == "OLD"  # CAP captured 2026-11-24, no saved_at
    old = row(client, "OLD")
    assert old == {"id": "ig-old", "shortcode": "OLD", "source_url": "https://www.instagram.com/p/OLD/",
                   "kind": "post", "owner": "anna", "saved_at": "2026-01-01T00:00:00Z", "captured_at": None,
                   "status": "pending", "slides_expected": None, "slides": []}
    cap = row(client, "CAP")
    assert cap["owner"] == "" and cap["captured_at"] == "2026-11-24T00:00:00Z"
    assert cap["slides"] == [{"slide": 1, "type": "image"}] and cap["slides_expected"] == 1
    assert rec["id"] == cap["id"]
    assert body["failed"] == [] and body["warnings"] == []


def test_disabled_without_root(repo):
    client = TestClient(create_app(repo.root))
    body = client.get("/api/capture").json()
    assert body["enabled"] is False and "QUARRY_INSPIRATION_DIR" in body["setup"]
    assert body["items"] == [] and body["failed"] == [] and body["warnings"] == []
    r = client.post("/api/capture/ABC/unavailable")
    assert r.status_code == 409 and r.json()["error"] == body["setup"]
    assert client.post("/api/capture/ABC/opened").status_code == 409
    assert client.delete("/api/capture/ABC/items").status_code == 409
    assert client.get("/api/status").status_code == 200
    assert capture_api.start_sweeper(client.app, interval=0.1).is_set()


def test_unknown_shortcode_is_404(client, store):
    assert client.post("/api/capture/NOPE/unavailable").status_code == 404
    assert client.post("/api/capture/NOPE/opened").status_code == 404
    assert client.delete("/api/capture/NOPE/items/1").status_code == 404
    r = client.post("/api/capture/NOPE/files", files={"file": ("a.jpg", jpeg_bytes(), "image/jpeg")})
    assert r.status_code == 404


def test_daily_cap(client, store):
    set_config(capture_daily_cap=2)
    for code in ("A", "B", "C"):
        seed(store, code)
    r = client.post("/api/capture/A/opened")
    assert r.status_code == 200 and r.json()["item"]["shortcode"] == "A"
    assert client.post("/api/capture/A/opened").status_code == 200  # same post, not counted twice
    assert client.post("/api/capture/B/opened").json()["today"] == {"opened": 2, "cap": 2}
    r = client.post("/api/capture/C/opened")
    assert r.status_code == 429 and r.json()["error"] == CAP_COPY
    assert client.post("/api/capture/A/opened").status_code == 200  # already opened today: still fine
    assert client.get("/api/capture").json()["today"] == {"opened": 2, "cap": 2}
    saved = json.loads((cache_dir() / "capture-opens.json").read_text())
    assert saved == {"date": date.today().isoformat(), "opened": ["A", "B"]}


def test_opens_reset_on_a_new_day(client, store):
    seed(store, "A")
    cache_dir().mkdir(parents=True, exist_ok=True)
    yesterday = (date.today() - timedelta(days=1)).isoformat()
    (cache_dir() / "capture-opens.json").write_text(json.dumps({"date": yesterday, "opened": ["X", "Y"]}))
    assert client.get("/api/capture").json()["today"]["opened"] == 0
    assert client.post("/api/capture/A/opened").json()["today"]["opened"] == 1
    (cache_dir() / "capture-opens.json").write_text("not json")
    assert client.get("/api/capture").json()["today"]["opened"] == 0


def test_unavailable_remove_and_add_file(client, store):
    rec = seed(store, "FAKEa1", items=[item(1), item(2)], expected=2, status="captured")
    folder = store.dir / rec["id"]
    r = client.post("/api/capture/FAKEa1/unavailable")
    assert r.status_code == 200 and r.json()["item"]["status"] == "unavailable"
    assert store.read(rec["id"])["capture"]["status"] == "unavailable"

    r = client.delete("/api/capture/FAKEa1/items/2")
    assert r.status_code == 200 and r.json()["item"]["status"] == "partial"
    assert r.json()["item"]["slides"] == [{"slide": 1, "type": "image"}]
    assert not (folder / "02.jpg").exists() and (folder / "01.jpg").exists()
    assert client.delete("/api/capture/FAKEa1/items/2").status_code == 404

    r = client.delete("/api/capture/FAKEa1/items/1")
    assert r.json()["item"]["status"] == "pending" and not (folder / "01.jpg").exists()

    r = client.post("/api/capture/FAKEa1/files", files={"file": ("shot.JPG", jpeg_bytes(), "image/jpeg")})
    assert r.status_code == 200, r.text
    assert r.json()["item"]["slides"] == [{"slide": 1, "type": "image"}]
    assert r.json()["item"]["status"] == "partial"  # 1 of 2
    it = store.read(rec["id"])["capture"]["items"][0]
    assert (it["slide"], it["file"], it["method"], it["width"], it["height"]) == (1, "01.jpg", "manual", 64, 48)
    assert len(it["sha256"]) == 64 and it["captured_at"].endswith("Z")
    r = client.post("/api/capture/FAKEa1/files", files={"file": ("b.png", _png(), "image/png")})
    assert r.json()["item"]["status"] == "captured"
    assert store.read(rec["id"])["capture"]["items"][1]["file"] == "02.png"
    assert store.scan().warnings == []

    r = client.delete("/api/capture/FAKEa1/items")
    assert r.json()["item"]["status"] == "pending" and r.json()["item"]["slides"] == []
    assert sorted(p.name for p in folder.iterdir()) == ["save.json"]


def _png():
    from PIL import Image
    buf = io.BytesIO()
    Image.new("RGB", (10, 20), (255, 0, 0)).save(buf, "PNG")
    return buf.getvalue()


def test_add_file_at_slide_replaces_and_rejects_bad_files(client, store, root):
    rec = seed(store, "FAKEb1", items=[item(1), item(3)], expected=3)
    folder = store.dir / rec["id"]
    r = client.post("/api/capture/FAKEb1/files", files={"file": ("x.jpg", jpeg_bytes(), "image/jpeg")})
    assert [s["slide"] for s in r.json()["item"]["slides"]] == [1, 2, 3]  # next free slide fills the gap
    assert r.json()["item"]["status"] == "captured"
    r = client.post("/api/capture/FAKEb1/files", data={"slide": "3"},
                    files={"file": ("x.png", _png(), "image/png")})
    assert r.status_code == 200 and not (folder / "03.jpg").exists() and (folder / "03.png").exists()
    before = store.read(rec["id"])
    for name, data, field in [("x.jpg", b"junk", None), ("x.gif", jpeg_bytes(), None), ("x.mp4", b"junk", None),
                              ("x.jpg", jpeg_bytes(), "0"), ("x.jpg", jpeg_bytes(), "100")]:
        r = client.post("/api/capture/FAKEb1/files", data={"slide": field} if field else {},
                        files={"file": (name, data, "application/octet-stream")})
        assert r.status_code == 422, (name, r.text)
        assert r.json()["error"]
    assert store.read(rec["id"]) == before
    assert sorted(p.name for p in folder.iterdir()) == ["01.jpg", "02.jpg", "03.png", "save.json"]
    assert [p.name for p in root.rglob("*") if p.is_file() and p.parent != folder] == []


def test_add_file_too_large(client, store, monkeypatch):
    seed(store, "FAKEc1")
    monkeypatch.setattr(capture_api, "MAX_UPLOAD_BYTES", 100)
    r = client.post("/api/capture/FAKEc1/files", files={"file": ("x.jpg", jpeg_bytes(), "image/jpeg")})
    assert r.status_code == 413 and "500 MB" in r.json()["error"]
    assert list((cache_dir() / "tmp").iterdir()) == []


def test_add_video_file_converts_to_h264_with_poster(client, store, root):
    pytest.importorskip("imageio_ffmpeg")
    from test_capture_sweep import make_mp4
    rec = seed(store, "FAKEv1")
    src = make_mp4(root.parent / "src" / "clip.webm", audio=False, codec="vp9")
    r = client.post("/api/capture/FAKEv1/files", files={"file": ("clip.webm", src.read_bytes(), "video/webm")})
    assert r.status_code == 200, r.text
    it = store.read(rec["id"])["capture"]["items"][0]
    assert (it["type"], it["file"], it["poster"], it["method"]) == ("video", "01.mp4", "01-poster.jpg", "manual")
    assert (it["width"], it["height"], it["has_audio"]) == (320, 240, False) and it["duration_s"] > 0
    from quarry.media_probe import probe_video
    assert probe_video(store.dir / rec["id"] / "01.mp4").codec == "h264"
    assert (store.dir / rec["id"] / "01-poster.jpg").is_file()


def test_failed_folders_and_warnings_listed(client, store, downloads):
    seed(store, "OK")
    (store.dir / "junk.txt").write_text("x")
    bad = downloads / "_failed" / "FAKEx__20261126T180000"
    bad.mkdir(parents=True)
    (bad / "reason.txt").write_text("01.jpg: not a readable image\n")
    (downloads / "_failed" / "noreason").mkdir()
    body = client.get("/api/capture").json()
    assert body["failed"] == [{"folder": "FAKEx__20261126T180000", "reason": "01.jpg: not a readable image"},
                              {"folder": "noreason", "reason": ""}]
    assert body["warnings"] == ["unexpected entry in instagram/: junk.txt"]


def test_start_sweeper_files_a_capture(app, downloads, store):
    from test_capture_sweep import capture_folder, img
    capture_folder(downloads, "FAKEsw1", [img(1)], slides_expected=1)
    stop = capture_api.start_sweeper(app, interval=0.1)
    try:
        deadline = time.monotonic() + 3
        while "FAKEsw1" not in store.scan().by_shortcode and time.monotonic() < deadline:
            time.sleep(0.05)
        assert store.read("ig-fakesw1")["capture"]["status"] == "captured"
    finally:
        stop_sweeper(stop)


def test_sweeper_survives_errors(app, downloads, monkeypatch):
    calls = []

    def boom(*a):
        calls.append(1)
        raise RuntimeError("boom")
    monkeypatch.setattr(capture_api, "sweep", boom)
    stop = capture_api.start_sweeper(app, interval=0.01)
    try:
        deadline = time.monotonic() + 3
        while len(calls) < 3 and time.monotonic() < deadline:
            time.sleep(0.01)
        assert len(calls) >= 3
    finally:
        stop_sweeper(stop)


def _files_in(folder):
    return {p.name: p.read_bytes() for p in sorted(folder.iterdir())}


@pytest.mark.parametrize("name,data", [("x.jpg", None), ("x.png", "png")])
def test_add_file_failed_write_keeps_old_slide(client, store, monkeypatch, name, data):
    rec = seed(store, "FAKEw1", items=[item(1)], expected=1, status="captured", files=False)
    folder = store.dir / rec["id"]
    (folder / "01.jpg").write_bytes(jpeg_bytes(size=(8, 8)))
    before = _files_in(folder)

    def boom(self, record):
        raise OSError("drive offline")
    monkeypatch.setattr(Store, "write", boom)
    body = _png() if data == "png" else jpeg_bytes()
    r = client.post("/api/capture/FAKEw1/files", data={"slide": "1"}, files={"file": (name, body, "image/png")})
    assert r.status_code == 500 and "drive offline" in r.json()["error"]
    assert _files_in(folder) == before  # old bytes back, save.json unchanged, no stray 01.png
    assert list((cache_dir() / "tmp").iterdir()) == []


def test_add_file_on_invalid_record_moves_nothing(client, store):
    rec = seed(store, "FAKEw2", items=[item(1)], expected=1, files=False)
    folder = store.dir / rec["id"]
    (folder / "01.jpg").write_bytes(jpeg_bytes(size=(8, 8)))
    bad = json.loads((folder / "save.json").read_text())
    bad["status"] = "bogus"
    (folder / "save.json").write_text(json.dumps(bad))
    before = _files_in(folder)
    r = client.post("/api/capture/FAKEw2/files", data={"slide": "1"},
                    files={"file": ("x.jpg", jpeg_bytes(), "image/jpeg")})
    assert r.status_code == 500 and "invalid inspiration record" in r.json()["error"]
    assert _files_in(folder) == before


def test_malformed_config_still_starts(repo):
    config_dir().mkdir(parents=True, exist_ok=True)
    (config_dir() / "config.toml").write_text("inspiration_dir = [\n")
    client = TestClient(create_app(repo.root))
    assert client.get("/api/status").status_code == 200
    body = client.get("/api/capture").json()
    assert body["enabled"] is False and "config.toml" in body["setup"]
    assert client.post("/api/capture/A/opened").status_code == 409
    assert capture_api.start_sweeper(client.app).is_set()


def test_bad_cap_or_config_never_500s_the_list(client, store):
    seed(store, "A")
    set_config(capture_daily_cap="lots")
    r = client.get("/api/capture")
    assert r.status_code == 200 and r.json()["today"]["cap"] == 40
    assert any("capture_daily_cap" in w for w in r.json()["warnings"])
    assert client.post("/api/capture/A/opened").status_code == 200
    (config_dir() / "config.toml").write_text("capture_daily_cap = [\n")
    r = client.get("/api/capture")
    assert r.status_code == 200 and r.json()["today"]["cap"] == 40 and r.json()["items"]


def _run_sweeper_until(app, monkeypatch, fake, ticks=3):
    calls = []

    def counted(*a, **k):
        calls.append(a)
        return fake(*a, **k)
    monkeypatch.setattr(capture_api, "sweep", counted)
    stop = capture_api.start_sweeper(app, interval=0.01)
    try:
        deadline = time.monotonic() + 3
        while len(calls) < ticks and time.monotonic() < deadline:
            time.sleep(0.01)
    finally:
        stop_sweeper(stop)
    return calls


def test_left_in_place_folders_show_as_warnings(app, client, downloads, monkeypatch):
    from quarry.capture_sweep import SweepResult

    def fake(d, s, held):
        held["seen"] = held.get("seen", 0) + 1  # the same backoff state comes back every tick
        r = SweepResult()
        r.leave("FAKEx__20261126T180000", "not filed, left in place: drive offline")
        return r
    calls = _run_sweeper_until(app, monkeypatch, fake)
    assert len({id(c[2]) for c in calls}) == 1 and calls[-1][2]["seen"] == len(calls)
    warnings = client.get("/api/capture").json()["warnings"]
    assert "Capture folder FAKEx__20261126T180000: not filed, left in place: drive offline" in warnings


def test_failing_sweeper_shows_as_a_warning_and_clears(app, client, downloads, monkeypatch):
    from quarry.capture_sweep import SweepResult

    def boom(*a):
        raise RuntimeError("cache disk full")
    _run_sweeper_until(app, monkeypatch, boom)
    assert "Capture sweeper stopped: cache disk full" in client.get("/api/capture").json()["warnings"]
    _run_sweeper_until(app, monkeypatch, lambda *a: SweepResult())
    assert not any("sweeper" in w for w in client.get("/api/capture").json()["warnings"])
