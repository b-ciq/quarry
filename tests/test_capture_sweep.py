import json
import subprocess
from pathlib import Path

import pytest
from PIL import Image

from inspiration_helpers import make_record
from quarry.capture_sweep import is_finished, sweep
from quarry.cli import main
from quarry.inspiration_store import Store
from quarry.media_probe import MediaError, assemble_mp4, image_size, make_poster, probe_video

imageio_ffmpeg = pytest.importorskip("imageio_ffmpeg")
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

RED, BLUE, GREEN = (255, 0, 0), (0, 0, 255), (0, 255, 0)
COLORS = {"red": RED, "blue": BLUE, "green": GREEN}
_media_cache: dict[tuple, bytes] = {}
_folder_seq = iter(range(1, 10_000))


def write(p: Path, data: bytes) -> Path:
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_bytes(data)
    return p


def _ffmpeg_bytes(key: tuple, args: list[str], tmp: Path) -> bytes:
    if key not in _media_cache:
        out = tmp / f".gen-{'-'.join(map(str, key))}.mp4"
        subprocess.run([FFMPEG, "-y", "-v", "error", *args, str(out)], check=True, capture_output=True)
        _media_cache[key] = out.read_bytes()
        out.unlink()
    return _media_cache[key]


def make_mp4(p: Path, audio: bool = True, codec: str = "h264") -> Path:
    """A tiny 320x240, 1 s test clip; H.264 (+AAC) by default, or VP9 for a non-H.264 file."""
    args = ["-f", "lavfi", "-i", "testsrc=size=320x240:duration=1"]
    if audio:
        args += ["-f", "lavfi", "-i", "sine=duration=1", "-shortest", "-c:a", "aac"]
    else:
        args += ["-an"]
    if codec == "vp9":
        args += ["-c:v", "libvpx-vp9", "-deadline", "realtime", "-pix_fmt", "yuv420p"]
    else:
        args += ["-c:v", "libx264", "-pix_fmt", "yuv420p"]
    p.parent.mkdir(parents=True, exist_ok=True)
    return write(p, _ffmpeg_bytes(("mp4", audio, codec), args, p.parent))


def make_vp9_track(p: Path) -> Path:
    args = ["-f", "lavfi", "-i", "testsrc=size=320x240:duration=1", "-c:v", "libvpx-vp9",
            "-deadline", "realtime", "-pix_fmt", "yuv420p", "-an"]
    p.parent.mkdir(parents=True, exist_ok=True)
    return write(p, _ffmpeg_bytes(("vp9track",), args, p.parent))


def make_aac_track(p: Path) -> Path:
    args = ["-f", "lavfi", "-i", "sine=duration=1", "-vn", "-c:a", "aac"]
    p.parent.mkdir(parents=True, exist_ok=True)
    return write(p, _ffmpeg_bytes(("aactrack",), args, p.parent))


def make_jpeg(p: Path, color: str = "green", size=(64, 48)) -> Path:
    p.parent.mkdir(parents=True, exist_ok=True)
    Image.new("RGB", size, COLORS[color]).save(p, "JPEG", quality=95)
    return p


def pixel(p: Path) -> tuple[int, int, int]:
    """Centre pixel, snapped to 0/255 per channel so JPEG noise does not matter."""
    with Image.open(p) as im:
        px = im.convert("RGB").getpixel((im.width // 2, im.height // 2))
    return tuple(255 if c > 127 else 0 for c in px)


def img(n, color="green"):
    return {"slide": n, "media_id": f"m{n}", "type": "image", "file": f"{n:02d}.jpg", "method": "page-data",
            "_make": lambda f, n=n: make_jpeg(f / f"{n:02d}.jpg", color)}


def vid(n, audio=True, codec="h264", poster=False):
    spec = {"slide": n, "media_id": f"m{n}", "type": "video", "file": f"{n:02d}.mp4", "method": "page-data"}

    def make(f):
        make_mp4(f / f"{n:02d}.mp4", audio=audio, codec=codec)
        if poster:
            make_jpeg(f / f"{n:02d}-poster.jpg", "red")
    if poster:
        spec["poster"] = f"{n:02d}-poster.jpg"
    spec["_make"] = make
    return spec


def vid_parts(n, audio=True):
    parts = {"video": f"{n:02d}.video.mp4", "audio": f"{n:02d}.audio.mp4" if audio else None}

    def make(f):
        make_vp9_track(f / parts["video"])
        if audio:
            make_aac_track(f / parts["audio"])
    return {"slide": n, "media_id": f"m{n}", "type": "video", "parts": parts, "method": "page-data", "_make": make}


def capture_folder(downloads: Path, shortcode: str, items: list[dict], slides_expected) -> Path:
    folder = downloads / f"{shortcode}__20261126T18{next(_folder_seq):04d}"
    folder.mkdir(parents=True)
    for spec in items:
        spec["_make"](folder)
    capture = {"version": 1, "shortcode": shortcode, "page_url": f"https://www.instagram.com/p/{shortcode}/",
               "kind": "post", "slides_expected": slides_expected, "owner": {"username": "u", "name": "U"},
               "caption": "a caption", "captured_at": "2026-11-26T18:02:11Z",
               "items": [{k: v for k, v in spec.items() if k != "_make"} for spec in items]}
    (folder / "capture.json").write_text(json.dumps(capture))
    return folder


@pytest.fixture
def store(tmp_path):
    (tmp_path / "root").mkdir()
    return Store(tmp_path / "root")


@pytest.fixture
def downloads(tmp_path):
    d = tmp_path / "downloads"
    d.mkdir()
    return d


# --- media_probe -------------------------------------------------------------------------------

def test_probe_video_reports_size_duration_audio(tmp_path):
    v = make_mp4(tmp_path / "a.mp4", audio=True); info = probe_video(v)
    assert (info.width, info.height, info.has_audio) == (320, 240, True) and 0.8 < info.duration_s < 1.3
    assert info.codec == "h264"
    assert probe_video(make_mp4(tmp_path / "b.mp4", audio=False)).has_audio is False
    with pytest.raises(MediaError): probe_video(write(tmp_path / "c.mp4", b"not a video"))
    with pytest.raises(MediaError): probe_video(make_aac_track(tmp_path / "d.mp4"))
    with pytest.raises(MediaError): probe_video(tmp_path / "missing.mp4")


def test_image_size_verifies_with_pillow(tmp_path):
    assert image_size(make_jpeg(tmp_path / "a.jpg", size=(64, 48))) == (64, 48)
    with pytest.raises(MediaError): image_size(write(tmp_path / "b.jpg", b"junk"))
    good = (tmp_path / "a.jpg").read_bytes()
    with pytest.raises(MediaError): image_size(write(tmp_path / "c.jpg", good[: len(good) // 2]))


def test_assemble_mp4_and_make_poster(tmp_path):
    vp9, aac = make_vp9_track(tmp_path / "v.mp4"), make_aac_track(tmp_path / "a.mp4")
    assert probe_video(vp9).codec == "vp9"
    assemble_mp4(vp9, aac, tmp_path / "out.mp4")
    info = probe_video(tmp_path / "out.mp4")
    assert (info.codec, info.has_audio, info.width, info.height) == ("h264", True, 320, 240)
    assemble_mp4(vp9, None, tmp_path / "silent.mp4")
    assert probe_video(tmp_path / "silent.mp4").has_audio is False
    make_poster(tmp_path / "out.mp4", tmp_path / "poster.jpg")
    assert image_size(tmp_path / "poster.jpg") == (320, 240)


# --- sweep -------------------------------------------------------------------------------------

def test_sweep_files_a_new_capture_and_creates_record(store, downloads):
    capture_folder(downloads, "FAKEcar1", [img(1), vid(2), img(3)], slides_expected=3)
    res = sweep(downloads, store)
    rec = store.read("ig-fakecar1")
    assert res.filed == ["ig-fakecar1"] and rec["capture"]["status"] == "captured"
    assert rec["source"]["via"] == "capture" and rec["source"]["saved_at"] is None and rec["status"] == "proposed"
    v = rec["capture"]["items"][1]
    assert v["type"] == "video" and v["has_audio"] is True and v["poster"] == "02-poster.jpg"
    assert (store.dir / "ig-fakecar1" / "02-poster.jpg").exists() and not any(downloads.iterdir())


def test_new_record_takes_capture_metadata_and_item_details(store, downloads):
    capture_folder(downloads, "FAKEcar1", [img(1), vid(2)], slides_expected=2); sweep(downloads, store)
    rec = store.read("ig-fakecar1")
    assert rec["source_url"] == "https://www.instagram.com/p/FAKEcar1/"
    assert (rec["source"]["shortcode"], rec["source"]["kind"]) == ("FAKEcar1", "post")
    assert rec["owner"] == {"username": "u", "name": "U"} and rec["caption"] == "a caption"
    i, v = rec["capture"]["items"]
    assert (i["file"], i["width"], i["height"], i["media_id"], i["method"]) == ("01.jpg", 64, 48, "m1", "page-data")
    assert i["captured_at"] == "2026-11-26T18:02:11Z" and len(i["sha256"]) == 64
    assert (v["file"], v["width"], v["height"]) == ("02.mp4", 320, 240) and 0.8 < v["duration_s"] < 1.3
    assert store.scan().warnings == []


def test_supplied_poster_is_kept(store, downloads):
    capture_folder(downloads, "FAKEreel1", [vid(1, poster=True)], slides_expected=1); sweep(downloads, store)
    assert store.read("ig-fakereel1")["capture"]["items"][0]["poster"] == "01-poster.jpg"
    assert pixel(store.dir / "ig-fakereel1" / "01-poster.jpg") == RED


def test_sweep_skips_unfinished_folders(store, downloads):
    f = capture_folder(downloads, "FAKEimg1", [img(1)], slides_expected=1)
    (f / "01.jpg").rename(f / "01.jpg.crdownload")
    assert sweep(downloads, store).filed == [] and f.exists()
    (f / "capture.json").unlink(); (f / "01.jpg.crdownload").rename(f / "01.jpg")
    assert sweep(downloads, store).filed == [] and f.exists()


def test_is_finished_needs_every_listed_file(downloads):
    f = capture_folder(downloads, "FAKEreel1", [vid_parts(1, audio=True)], slides_expected=1)
    assert is_finished(f)
    (f / "01.audio.mp4").unlink()
    assert not is_finished(f)
    (f / "capture.json").write_text("{not json")
    assert not is_finished(f)


def test_unknown_or_short_slide_count_is_partial(store, downloads):
    capture_folder(downloads, "FAKEcar1", [img(1)], slides_expected=3); sweep(downloads, store)
    assert store.read("ig-fakecar1")["capture"]["status"] == "partial"
    capture_folder(downloads, "FAKEimg1", [img(1)], slides_expected=None); sweep(downloads, store)
    assert store.read("ig-fakeimg1")["capture"]["status"] == "partial"


def test_recapture_replaces_slides_and_keeps_others(store, downloads):
    capture_folder(downloads, "FAKEcar1", [img(1, color="red"), img(2)], slides_expected=3); sweep(downloads, store)
    capture_folder(downloads, "FAKEcar1", [img(1, color="blue"), img(3)], slides_expected=3); sweep(downloads, store)
    items = store.read("ig-fakecar1")["capture"]["items"]
    assert [i["slide"] for i in items] == [1, 2, 3] and store.read("ig-fakecar1")["capture"]["status"] == "captured"
    assert pixel(store.dir / "ig-fakecar1" / "01.jpg") == BLUE


def test_recapture_removes_files_the_new_item_no_longer_uses(store, downloads):
    capture_folder(downloads, "FAKEcar1", [vid(1)], slides_expected=1); sweep(downloads, store)
    assert (store.dir / "ig-fakecar1" / "01-poster.jpg").exists()
    capture_folder(downloads, "FAKEcar1", [img(1)], slides_expected=1); sweep(downloads, store)
    names = sorted(p.name for p in (store.dir / "ig-fakecar1").iterdir())
    assert names == ["01.jpg", "save.json"]


def test_dash_parts_are_joined_into_h264_mp4(store, downloads):
    # parts: a VP9-only video track (ffmpeg -c:v libvpx-vp9) and an AAC-only audio track
    capture_folder(downloads, "FAKEreel1", [vid_parts(1, audio=True)], slides_expected=1); sweep(downloads, store)
    item = store.read("ig-fakereel1")["capture"]["items"][0]
    info = probe_video(store.dir / "ig-fakereel1" / "01.mp4")
    assert item["file"] == "01.mp4" and info.codec == "h264" and info.has_audio is True
    assert not list((store.dir / "ig-fakereel1").glob("*.video.mp4"))
    assert "parts" not in item


def test_silent_dash_video_has_no_audio(store, downloads):
    capture_folder(downloads, "FAKEcar1", [vid_parts(1, audio=False)], slides_expected=1); sweep(downloads, store)
    assert store.read("ig-fakecar1")["capture"]["items"][0]["has_audio"] is False


def test_progressive_h264_is_moved_as_is_and_vp9_is_transcoded(store, downloads):
    f = capture_folder(downloads, "FAKEcar1", [vid(1), vid(2, codec="vp9")], slides_expected=2)
    original = (f / "01.mp4").read_bytes()
    sweep(downloads, store)
    assert (store.dir / "ig-fakecar1" / "01.mp4").read_bytes() == original
    assert probe_video(store.dir / "ig-fakecar1" / "02.mp4").codec == "h264"


def test_bad_media_goes_to_failed_with_reason(store, downloads):
    f = capture_folder(downloads, "FAKEreel1", [vid(1)], slides_expected=1); (f / "01.mp4").write_bytes(b"junk")
    res = sweep(downloads, store)
    assert res.failed and (downloads / "_failed" / f.name / "reason.txt").read_text().startswith("01.mp4:")
    assert store.scan().by_shortcode == {}


def test_failure_keeps_every_file_and_writes_nothing(store, downloads):
    f = capture_folder(downloads, "FAKEcar1", [img(1), vid(2), img(3)], slides_expected=3)
    (f / "03.jpg").write_bytes(b"junk")
    before = sorted(p.name for p in f.iterdir())
    res = sweep(downloads, store)
    failed = downloads / "_failed" / f.name
    assert res.filed == [] and res.failed == [(f.name, (failed / "reason.txt").read_text().strip())]
    assert sorted(p.name for p in failed.iterdir()) == sorted(before + ["reason.txt"])
    assert not store.dir.exists() or not any(store.dir.iterdir())


def test_malformed_capture_json_goes_to_failed(store, downloads):
    spec = vid(1)
    spec["parts"] = {"video": "01.mp4", "audio": None}  # both file and parts
    f = capture_folder(downloads, "FAKEreel1", [spec], slides_expected=1)
    sweep(downloads, store)
    assert (downloads / "_failed" / f.name / "reason.txt").read_text().startswith("capture.json:")


def test_file_names_cannot_escape_the_folder(store, downloads, tmp_path):
    make_jpeg(tmp_path / "outside.jpg")
    spec = img(1)
    spec["file"] = "../outside.jpg"
    f = capture_folder(downloads, "FAKEimg1", [spec], slides_expected=1)
    assert sweep(downloads, store).filed == []
    assert (downloads / "_failed" / f.name / "reason.txt").read_text().startswith("capture.json:")
    assert (tmp_path / "outside.jpg").exists() and store.scan().by_shortcode == {}


def test_capture_never_touches_curator_fields(store, downloads):
    rec = make_record("FAKEimg1"); rec.update(status="confirmed", saved_because="texture", style=["grain"]); store.write(rec)
    capture_folder(downloads, "FAKEimg1", [img(1)], slides_expected=1); sweep(downloads, store)
    after = store.read("ig-fakeimg1")
    assert (after["status"], after["saved_because"], after["style"]) == ("confirmed", "texture", ["grain"])
    assert after["capture"]["status"] == "captured"


# --- CLI ---------------------------------------------------------------------------------------

def test_cli_import_captures(tmp_path, monkeypatch, capsys):
    (tmp_path / "root").mkdir()
    dl = tmp_path / "dl"
    capture_folder(dl, "FAKEimg1", [img(1)], slides_expected=1)
    rc = main(["import-captures", "--inspiration-dir", str(tmp_path / "root"), "--downloads", str(dl)])
    assert rc == 0 and "filed 1, failed 0" in capsys.readouterr().out
    assert Store(tmp_path / "root").read("ig-fakeimg1")["capture"]["status"] == "captured"


def test_cli_import_captures_without_root(tmp_path, capsys):
    rc = main(["import-captures", "--downloads", str(tmp_path)])
    assert rc == 2 and "inspiration" in capsys.readouterr().err.lower()


def test_store_write_failure_leaves_folder_and_no_half_made_save(store, downloads, monkeypatch):
    f = capture_folder(downloads, "FAKEcar1", [img(1), vid(2)], slides_expected=2)
    before = sorted(p.name for p in f.iterdir())

    def boom(record):
        raise OSError("drive offline")
    monkeypatch.setattr(store, "write", boom)
    res = sweep(downloads, store)
    assert res.filed == [] and res.failed[0][0] == f.name and "drive offline" in res.failed[0][1]
    assert sorted(p.name for p in f.iterdir()) == before and not (downloads / "_failed").exists()
    assert not (store.dir / "ig-fakecar1").exists()
    monkeypatch.undo()
    assert sweep(downloads, store).filed == ["ig-fakecar1"]


def _snapshot(folder: Path) -> dict[str, bytes]:
    return {p.name: p.read_bytes() for p in sorted(folder.iterdir())}


@pytest.mark.parametrize("second", ["image", "video"])
def test_failed_write_over_existing_record_restores_replaced_media(store, downloads, monkeypatch, second):
    """Re-capturing slide 1 when the write fails leaves the old bytes, save.json and no stray files."""
    capture_folder(downloads, "FAKEcar1", [vid(1)], slides_expected=1); sweep(downloads, store)
    save = store.dir / "ig-fakecar1"
    before = _snapshot(save)
    spec = img(1, color="blue") if second == "image" else vid(1, codec="vp9", audio=False)
    f = capture_folder(downloads, "FAKEcar1", [spec], slides_expected=1)

    def boom(record):
        raise OSError("drive offline")
    monkeypatch.setattr(store, "write", boom)
    res = sweep(downloads, store)
    assert res.filed == [] and "drive offline" in res.failed[0][1] and f.exists()
    assert _snapshot(save) == before
    assert list((store.root.parent / "_cache" / "tmp").iterdir()) == []


def test_invalid_existing_record_is_refused_before_any_media_moves(store, downloads):
    capture_folder(downloads, "FAKEcar1", [img(1, color="red")], slides_expected=1); sweep(downloads, store)
    save = store.dir / "ig-fakecar1"
    rec = json.loads((save / "save.json").read_text())
    rec["status"] = "bogus"  # hand-edited into something the validator rejects
    (save / "save.json").write_text(json.dumps(rec))
    before = _snapshot(save)
    f = capture_folder(downloads, "FAKEcar1", [img(1, color="blue")], slides_expected=1)
    res = sweep(downloads, store)
    assert res.filed == [] and "invalid inspiration record" in res.failed[0][1] and f.exists()
    assert _snapshot(save) == before and pixel(save / "01.jpg") == RED


def test_io_error_while_checking_leaves_folder_in_place(store, downloads, monkeypatch):
    f = capture_folder(downloads, "FAKEimg1", [img(1)], slides_expected=1)

    def boom(*a, **k):
        raise OSError("disk full")
    monkeypatch.setattr("quarry.capture_sweep.shutil.copyfile", boom)
    res = sweep(downloads, store)
    assert res.filed == [] and "disk full" in res.failed[0][1]
    assert (f / "01.jpg").exists() and not (downloads / "_failed").exists()


def test_unreadable_save_folder_blocks_filing_without_duplicate(store, downloads):
    bad = store.dir / "ig-abc" / "save.json"
    bad.parent.mkdir(parents=True)
    bad.write_bytes(b"{not json")
    f = capture_folder(downloads, "Abc", [img(1)], slides_expected=1)
    res = sweep(downloads, store)
    assert res.filed == [] and res.failed[0][0] == f.name and "ig-abc" in res.failed[0][1]
    assert not (store.dir / "ig-abc-2").exists() and bad.read_bytes() == b"{not json"
    assert (f / "capture.json").exists() and not (downloads / "_failed").exists()
    store.write(make_record("Abc"))  # Drive caught up
    assert sweep(downloads, store).filed == ["ig-abc"]
