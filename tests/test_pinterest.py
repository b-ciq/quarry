import hashlib
import json
import subprocess
from pathlib import Path

import imageio_ffmpeg
import pytest
from PIL import Image

from quarry.cli import main
from quarry.inspiration_store import Store
from quarry.pinterest import board_slug, import_pinterest

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
BOARD = "https://www.pinterest.com/bchristensen/ciq-catch-all/animations/"
OTHER = "https://www.pinterest.com/bchristensen/ciq-catch-all/diagrammatic/"


def pin_json(folder: Path, pin_id: str, ext: str, video: bool = False, alt: str = "alt text") -> None:
    data = {"id": pin_id, "src": f"https://i.pinimg.com/originals/x/{pin_id}.{ext}", "alt": alt,
            "origin": f"https://www.pinterest.com/pin/{pin_id}/", "resolution": {"x": 64, "y": 48}}
    if video:
        data["media_stream"] = {"video": {"url": "https://v1.pinimg.com/x.m3u8", "resolution": [320, 240],
                                          "duration": 1000}}
    (folder / f"{pin_id}.json").write_text(json.dumps(data))


@pytest.fixture
def root(tmp_path):
    r = tmp_path / "root"
    r.mkdir()
    return r


@pytest.fixture
def folder(tmp_path):
    f = tmp_path / "animations"
    f.mkdir()
    Image.new("RGB", (64, 48), (0, 128, 0)).save(f / "111.jpg", "JPEG")
    pin_json(f, "111", "jpg")
    Image.new("RGB", (320, 240), (0, 0, 255)).save(f / "222.jpg", "JPEG")
    subprocess.run([FFMPEG, "-y", "-v", "error", "-f", "lavfi", "-i", "testsrc=size=320x240:duration=1",
                    "-c:v", "libx264", "-pix_fmt", "yuv420p", str(f / "222.mp4")], check=True)
    pin_json(f, "222", "jpg", video=True)
    frames = [Image.new("RGB", (33, 21), c) for c in ((255, 0, 0), (0, 255, 0), (0, 0, 255))]
    frames[0].save(f / "333.gif", save_all=True, append_images=frames[1:], duration=100, loop=0)
    pin_json(f, "333", "gif")
    Image.new("RGB", (20, 10), (255, 255, 0)).save(f / "444.gif")
    pin_json(f, "444", "gif")
    Image.new("RGB", (40, 30), (9, 9, 9)).save(f / "555.png")
    pin_json(f, "555", "png", alt="")
    (f / ".DS_Store").write_bytes(b"")
    return f


def sha(p: Path) -> str:
    return hashlib.sha256(p.read_bytes()).hexdigest()


def test_board_slug():
    assert board_slug(OTHER) == "diagrammatic"
    assert board_slug("https://www.pinterest.com/bchristensen/ciq-catch-all/isc-2026/") == "isc-2026"
    assert board_slug(BOARD) == "animations"
    with pytest.raises(ValueError):
        board_slug("https://example.com/x/")
    with pytest.raises(ValueError):
        board_slug("https://www.pinterest.com/")


def test_imports_image_pin(folder, root):
    res = import_pinterest(folder, BOARD, root)
    assert sorted(res.created) == ["pin-111", "pin-222", "pin-333", "pin-444", "pin-555"]
    store = Store(root)
    rec = store.read("pin-111")
    assert rec["status"] == "proposed" and rec["collections"] == ["animations"]
    assert rec["caption"] == "alt text" and rec["owner"] == {}
    assert rec["source_url"] == "https://www.pinterest.com/pin/111/"
    assert rec["source"]["origin"] == "pinterest" and rec["source"]["board"] == BOARD
    assert rec["source"]["kind"] == "image" and rec["source"]["saved_at"] is None
    assert rec["capture"]["status"] == "captured" and rec["capture"]["slides_expected"] == 1
    [it] = rec["capture"]["items"]
    assert it["file"] == "01.jpg" and it["type"] == "image" and it["method"] == "pinterest-dl"
    assert (it["width"], it["height"]) == (64, 48)
    assert it["sha256"] == sha(store.media_path("pin-111", "01.jpg"))


def test_imports_video_pin_with_poster(folder, root):
    import_pinterest(folder, BOARD, root)
    store = Store(root)
    rec = store.read("pin-222")
    [it] = rec["capture"]["items"]
    assert rec["source"]["kind"] == "video"
    assert it["type"] == "video" and it["file"] == "01.mp4" and it["poster"] == "01-poster.jpg"
    assert abs(it["duration_s"] - 1.0) < 0.2 and (it["width"], it["height"]) == (320, 240)
    assert it["sha256"] == sha(store.media_path("pin-222", "01.mp4"))
    with Image.open(store.media_path("pin-222", "01-poster.jpg")) as im:
        assert im.format == "JPEG" and im.getpixel((160, 120))[2] > 200  # Pinterest's blue cover image


def test_animated_gif_becomes_video(folder, root):
    import_pinterest(folder, BOARD, root)
    store = Store(root)
    [it] = store.read("pin-333")["capture"]["items"]
    assert it["type"] == "video" and it["file"] == "01.mp4" and it["poster"] == "01-poster.jpg"
    assert store.media_path("pin-333", "01.mp4").is_file() and store.media_path("pin-333", "01-poster.jpg").is_file()
    assert not list(store.folder("pin-333").glob("*.gif"))


def test_still_gif_becomes_png(folder, root):
    import_pinterest(folder, BOARD, root)
    store = Store(root)
    [it] = store.read("pin-444")["capture"]["items"]
    assert it["type"] == "image" and it["file"] == "01.png" and (it["width"], it["height"]) == (20, 10)
    with Image.open(store.media_path("pin-444", "01.png")) as im:
        assert im.format == "PNG"


def test_video_pin_without_mp4_falls_back_to_image(folder, root):
    (folder / "222.mp4").unlink()
    res = import_pinterest(folder, BOARD, root)
    [it] = Store(root).read("pin-222")["capture"]["items"]
    assert it["type"] == "image" and it["file"] == "01.jpg"
    [w] = [w for w in res.warnings if "222" in w]
    assert "video" in w and "pinterest/pin-222" in w and "delete" in w  # says how to get the video in later


def test_missing_media_is_skipped(folder, root):
    pin_json(folder, "999", "jpg")  # JSON but no image
    (folder / "notes.txt").write_text("x")
    res = import_pinterest(folder, BOARD, root)
    assert ("999", "no media file") in res.skipped
    assert not Store(root).folder("pin-999").exists()
    assert "pin-999" not in res.created


def test_rerun_is_unchanged(folder, root):
    import_pinterest(folder, BOARD, root)
    store = Store(root)
    before = {p: p.stat().st_mtime_ns for p in root.rglob("*") if p.is_file()}
    res = import_pinterest(folder, BOARD, root)
    assert res.created == [] and res.updated == []
    assert sorted(res.unchanged) == ["pin-111", "pin-222", "pin-333", "pin-444", "pin-555"]
    assert {p: p.stat().st_mtime_ns for p in root.rglob("*") if p.is_file()} == before


def test_second_board_adds_collection_only(folder, root):
    import_pinterest(folder, BOARD, root)
    store = Store(root)
    sha_before = store.read("pin-111")["capture"]["items"][0]["sha256"]
    res = import_pinterest(folder, OTHER, root)
    assert "pin-111" in res.updated and res.created == []
    rec = store.read("pin-111")
    assert rec["collections"] == ["animations", "diagrammatic"]
    assert rec["capture"]["items"][0]["sha256"] == sha_before


def test_cli_import_pinterest(folder, root, capsys):
    assert main(["import-pinterest", str(folder), "--board", BOARD, "--inspiration-dir", str(root)]) == 0
    assert "created 5" in capsys.readouterr().out
    assert main(["import-pinterest", str(folder), "--board", "https://example.com/x/",
                 "--inspiration-dir", str(root)]) == 2
