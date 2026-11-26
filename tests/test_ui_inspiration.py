import json
import re

import pytest
from fastapi.testclient import TestClient

from inspiration_helpers import item, make_record
from quarry.inspiration_store import Store
from quarry.ui.app import create_app


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
def client(repo, root):
    return TestClient(create_app(repo.root))


def seed(store, code, items=(), saved_at=None, status="proposed", owner="someone"):
    rec = make_record(code)
    rec["status"] = status
    rec["owner"] = {"username": owner}
    rec["source"]["saved_at"] = saved_at
    rec["capture"]["items"] = list(items)
    if items:
        rec["capture"]["status"] = "captured"
    store.write(rec)
    for it in items:
        for key in ("file", "poster"):
            if it.get(key):
                (store.dir / rec["id"] / it[key]).write_bytes(b"img")
    return rec


def test_lists_only_saves_with_media_newest_first(client, store):
    seed(store, "AAA", [item(1)], saved_at="2026-01-01T00:00:00Z")
    seed(store, "BBB", [item(1), item(2)], saved_at="2026-02-01T00:00:00Z", owner="bee")
    seed(store, "CCC")  # not pulled in yet
    body = client.get("/api/inspiration").json()
    assert body["enabled"] is True
    assert [r["id"] for r in body["items"]] == ["ig-bbb", "ig-aaa"]
    bbb = body["items"][0]
    assert bbb["owner"] == "bee"
    assert bbb["media"] == ["/inspiration-media/ig-bbb/01.jpg", "/inspiration-media/ig-bbb/02.jpg"]


def test_video_slides_show_their_poster(client, store):
    video = {**item(1, type="video"), "file": "01.mp4", "poster": "01-poster.jpg"}
    seed(store, "VID", [video])
    row = client.get("/api/inspiration").json()["items"][0]
    assert row["media"] == ["/inspiration-media/ig-vid/01-poster.jpg"]


def test_serves_media_and_refuses_bad_names(client, store):
    seed(store, "AAA", [item(1)])
    r = client.get("/inspiration-media/ig-aaa/01.jpg")
    assert r.status_code == 200 and r.content == b"img"
    assert client.get("/inspiration-media/ig-aaa/save.json").status_code == 404
    assert client.get("/inspiration-media/ig-aaa/09.jpg").status_code == 404
    assert client.get("/inspiration-media/..%2Fx/01.jpg").status_code == 404


def test_set_status_moves_saves_and_reports_failures(client, store):
    seed(store, "AAA", [item(1)])
    seed(store, "BBB", [item(1)])
    r = client.post("/api/inspiration/status", json={"status": "confirmed", "ids": ["ig-aaa", "ig-bbb", "ig-nope", "../x"]})
    assert r.status_code == 200
    body = r.json()
    assert body["applied"] == [{"id": "ig-aaa", "from": "proposed"}, {"id": "ig-bbb", "from": "proposed"}]
    assert set(body["failed"]) == {"ig-nope", "../x"}
    assert json.loads((store.dir / "ig-aaa" / "save.json").read_text())["status"] == "confirmed"
    # and back again (undo)
    client.post("/api/inspiration/status", json={"status": "proposed", "ids": ["ig-aaa"]})
    assert store.read("ig-aaa")["status"] == "proposed"


def test_set_status_validates_body(client, store):
    assert client.post("/api/inspiration/status", json={"status": "parked", "ids": []}).status_code == 422
    assert client.post("/api/inspiration/status", json={"status": "confirmed"}).status_code == 422


def test_disabled_without_root(repo):
    client = TestClient(create_app(repo.root))
    body = client.get("/api/inspiration").json()
    assert body["enabled"] is False and body["items"] == []
    assert client.post("/api/inspiration/status", json={"status": "confirmed", "ids": ["ig-a"]}).status_code == 409


DESCRIBER_KEYS = {"state", "reason", "waiting", "current", "holder", "today", "cap", "retry_at"}


def test_list_includes_bot_and_error_fields(client, store):
    described = seed(store, "AAA", [item(1)])
    described["bot"] = {"model": "claude-opus-5-5", "at": "2026-11-25T10:00:00Z", "media": "abc", "vocab": "v",
                        "images": 1, "applied": {"description": "x", "style": [], "concepts": []},
                        "answer": {"description": "x", "style": [], "concepts": []},
                        "suggested_slugs": {"style": [{"slug": "form-ribbon", "definition": "bands"}], "concepts": []}}
    store.write(described)
    failed = seed(store, "BBB", [item(1)])
    failed["describe_error"] = {"code": "refusal", "message": "no", "tries": 3, "at": "2026-11-25T10:00:00Z",
                                "gave_up": True}
    store.write(failed)
    seed(store, "CCC", [item(1)])
    by_id = {r["id"]: r for r in client.get("/api/inspiration").json()["items"]}
    assert by_id["ig-aaa"]["bot"] == {"model": "claude-opus-5-5", "at": "2026-11-25T10:00:00Z",
                                      "suggested_slugs": {"style": [{"slug": "form-ribbon", "definition": "bands"}],
                                                          "concepts": []}}
    assert by_id["ig-aaa"]["describe_error"] is None
    assert by_id["ig-bbb"]["describe_error"] == {"message": "no", "tries": 3, "gave_up": True}
    assert by_id["ig-bbb"]["bot"] is None
    assert by_id["ig-ccc"]["bot"] is None and by_id["ig-ccc"]["describe_error"] is None


def test_describer_status_off_without_loop(client, store):
    seed(store, "AAA", [item(1)])
    seed(store, "BBB", [item(1)])
    seed(store, "CCC")  # no media: not a target
    d = client.get("/api/inspiration").json()["describer"]
    assert set(d) == DESCRIBER_KEYS
    assert d["state"] == "off" and d["reason"]
    assert d["waiting"] == 2
    assert d["current"] is None and d["holder"] is None and d["today"] == 0 and d["retry_at"] is None
    assert d["cap"] == 150


def test_describe_endpoint_sets_marker(client, store):
    seed(store, "AAA", [item(1)])
    r = client.post("/api/inspiration/ig-aaa/describe")
    assert r.status_code == 200 and r.json() == {"ok": True}
    stamp = store.read("ig-aaa")["describe_requested_at"]
    assert re.fullmatch(r"\d{4}-\d\d-\d\dT\d\d:\d\d:\d\dZ", stamp)


def test_describe_endpoint_unknown_id(client, store):
    assert client.post("/api/inspiration/ig-nope/describe").status_code == 404
    assert client.post("/api/inspiration/..%2Fx/describe").status_code == 404


def test_describe_endpoint_off_without_root(repo):
    client = TestClient(create_app(repo.root))
    assert client.post("/api/inspiration/ig-aaa/describe").status_code == 409
    d = client.get("/api/inspiration").json()["describer"]
    assert set(d) == DESCRIBER_KEYS and d["state"] == "off" and d["waiting"] == 0
