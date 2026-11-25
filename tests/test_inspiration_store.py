import subprocess
import sys
import time
from pathlib import Path

import pytest

from inspiration_helpers import item, make_record
from quarry.inspiration_store import (
    NoInspirationRoot, Store, StoreUnreadable, atomic_move, atomic_write_bytes, capture_downloads_dir,
    daily_cap, inspiration_root, store_lock,
)
from quarry.schema import validate_inspiration_record


@pytest.fixture
def store(tmp_path):
    root = tmp_path / "root"
    root.mkdir()
    return Store(root)


def test_root_precedence_and_refusal(tmp_path, monkeypatch):
    monkeypatch.setenv("QUARRY_CONFIG_DIR", str(tmp_path / "cfg"))
    monkeypatch.delenv("QUARRY_INSPIRATION_DIR", raising=False)
    with pytest.raises(NoInspirationRoot, match="QUARRY_INSPIRATION_DIR"):
        inspiration_root()
    (tmp_path / "cfg").mkdir(); (tmp_path / "a").mkdir(); (tmp_path / "b").mkdir()
    (tmp_path / "cfg" / "config.toml").write_text(f'inspiration_dir = "{tmp_path / "a"}"\ncapture_daily_cap = 7\n')
    assert inspiration_root() == tmp_path / "a" and daily_cap() == 7
    monkeypatch.setenv("QUARRY_INSPIRATION_DIR", str(tmp_path / "b"))
    assert inspiration_root() == tmp_path / "b"
    assert inspiration_root(tmp_path / "a") == tmp_path / "a"


def test_missing_root_folder_refused(tmp_path, monkeypatch):
    monkeypatch.setenv("QUARRY_INSPIRATION_DIR", str(tmp_path / "nope"))
    with pytest.raises(NoInspirationRoot):
        inspiration_root()


def test_daily_cap_defaults_to_40(tmp_path, monkeypatch):
    monkeypatch.setenv("QUARRY_CONFIG_DIR", str(tmp_path / "none"))
    assert daily_cap() == 40 and capture_downloads_dir() == Path.home() / "Downloads" / "quarry"


def test_write_validates_and_read_round_trips(store):
    rec = make_record("DfaKjbkkZB8")
    store.write(rec)
    assert store.read("ig-dfakjbkkzb8") == rec
    with pytest.raises(ValueError, match="capture.status"):
        store.write({**rec, "capture": {**rec["capture"], "status": "done"}})


def test_scan_ignores_conflict_copies_and_strays(store):
    store.write(make_record("Abc"))
    d = store.dir / "ig-abc"
    (d / "save (1).json").write_text("{}"); (d / ".DS_Store").write_text(""); (store.dir / "junk.txt").write_text("")
    s = store.scan()
    assert s.by_shortcode == {"Abc": "ig-abc"} and s.ids == {"ig-abc"}
    assert any("save (1).json" in w for w in s.warnings) and any("junk.txt" in w for w in s.warnings)
    assert not any(".DS_Store" in w for w in s.warnings)


def test_scan_picks_up_changed_record(store):
    rec = make_record("Abc")
    store.write(rec)
    assert store.scan().by_shortcode == {"Abc": "ig-abc"}
    path = store.dir / "ig-abc" / "save.json"
    import json, os
    new = {**rec, "source": {**rec["source"], "shortcode": "Xyz"}}
    path.write_text(json.dumps(new))
    st = path.stat()
    os.utime(path, ns=(st.st_atime_ns, st.st_mtime_ns + 10_000_000))
    assert store.scan().by_shortcode == {"Xyz": "ig-abc"}


def test_new_id_handles_case_clash(store):
    store.write(make_record("AbC"))
    assert store.new_id("abc", store.scan()) == "ig-abc-2"
    assert store.new_id("a.b", store.scan()) == "ig-a-b"


def test_id_for_new_refuses_when_an_unreadable_folder_could_be_the_shortcode(store):
    assert store.id_for_new("Abc", store.scan()) == "ig-abc"
    store.write(make_record("AbC"))
    assert store.id_for_new("abc", store.scan()) == "ig-abc-2"
    bad = store.dir / "ig-abc-2" / "save.json"
    bad.parent.mkdir()
    bad.write_bytes(b"{not json")
    with pytest.raises(StoreUnreadable, match="ig-abc-2"):
        store.id_for_new("ABC", store.scan())
    (store.dir / "ig-xyz").mkdir()  # no save.json at all: could be this shortcode too
    with pytest.raises(StoreUnreadable):
        store.id_for_new("Xyz", store.scan())
    assert isinstance(StoreUnreadable("x"), OSError)


def test_media_path_is_bounded(store):
    assert store.media_path("ig-abc", "02-poster.jpg") == store.dir / "ig-abc" / "02-poster.jpg"
    for bad in ("../x.jpg", "1.jpg", "02.exe", "save.json"):
        with pytest.raises(ValueError):
            store.media_path("ig-abc", bad)
    with pytest.raises(ValueError):
        store.media_path("../evil", "01.jpg")


def test_validator_rules():
    rec = make_record("X1")
    assert validate_inspiration_record(rec) == []
    assert "license: not allowed on inspiration records" in validate_inspiration_record({**rec, "license": "x"})
    dup = {**rec, "capture": {**rec["capture"], "items": [item(1), item(1)]}}
    assert any("duplicate slide 1" in e for e in validate_inspiration_record(dup))
    bad = {**rec, "capture": {**rec["capture"], "slides_expected": 0, "items": [{**item(1), "poster": "x.exe"}]}}
    errs = validate_inspiration_record(bad)
    assert any("slides_expected" in e for e in errs) and any("poster" in e for e in errs)


def test_atomic_write_and_move_stage_in_cache(store, tmp_path):
    dest = store.dir / "ig-abc" / "01.jpg"
    atomic_write_bytes(dest, b"xyz")
    assert dest.read_bytes() == b"xyz"
    src = tmp_path / "dl.jpg"
    src.write_bytes(b"abc")
    atomic_move(src, store.dir / "ig-abc" / "02.jpg")
    assert (store.dir / "ig-abc" / "02.jpg").read_bytes() == b"abc" and not src.exists()


def test_atomic_move_falls_back_on_cross_volume(store, tmp_path, monkeypatch):
    import errno, os
    real = os.replace
    calls = []

    def fake(a, b):
        calls.append(Path(b).name)
        if Path(b).parent == store.dir / "ig-abc" and not Path(b).name.startswith(".") and "raised" not in calls:
            calls.append("raised")
            raise OSError(errno.EXDEV, "cross-device")
        return real(a, b)

    monkeypatch.setattr(os, "replace", fake)
    src = tmp_path / "dl.jpg"
    src.write_bytes(b"abc")
    dest = store.dir / "ig-abc" / "01.jpg"
    atomic_move(src, dest)
    assert dest.read_bytes() == b"abc" and "raised" in calls and calls[-1] == "01.jpg"
    assert not list(dest.parent.glob(".*.part"))


def test_atomic_move_failure_keeps_source_and_dest(store, tmp_path, monkeypatch):
    import os
    dest = store.dir / "ig-abc" / "01.jpg"
    atomic_write_bytes(dest, b"old")
    src = tmp_path / "dl.jpg"
    src.write_bytes(b"new")
    real = os.replace

    def fake(a, b):
        if Path(b) == dest:
            raise OSError(5, "drive offline")
        return real(a, b)

    monkeypatch.setattr(os, "replace", fake)
    with pytest.raises(OSError):
        atomic_move(src, dest)
    assert src.read_bytes() == b"new" and dest.read_bytes() == b"old"


def test_lock_is_exclusive_across_processes(store, tmp_path, monkeypatch):
    import os
    monkeypatch.setenv("QUARRY_CONFIG_DIR", str(tmp_path / "lockcfg"))
    code = ("import time\nfrom quarry.inspiration_store import store_lock\n"
            "with store_lock():\n print('held', flush=True)\n time.sleep(1)\n")
    p = subprocess.Popen([sys.executable, "-c", code], stdout=subprocess.PIPE, text=True, env=os.environ.copy())
    assert p.stdout.readline().strip() == "held"
    t = time.monotonic()
    with store_lock():
        waited = time.monotonic() - t
    p.wait()
    assert waited >= 0.8
