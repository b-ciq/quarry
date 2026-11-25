import json
import zipfile

from quarry.cli import main
from quarry.instagram import import_instagram, parse_export

POSTS_PATH = "your_instagram_activity/saved/saved_posts.json"
COLLECTIONS_PATH = "your_instagram_activity/saved/saved_collections.json"


def _owner(username, name="", url=""):
    return {"title": "Owner", "dict": [{"title": "", "dict": [
        {"label": "URL", "value": url},
        {"label": "Name", "value": name},
        {"label": "Username", "value": username},
    ]}]}


def _item(url, ts, caption="", username="someone", hashtags=()):
    return {"timestamp": ts, "media": [], "label_values": [
        {"label": "URL", "value": url, "href": url},
        {"label": "Caption", "value": caption},
        {"label": "Title", "value": ""},
        {"title": "Hashtags", "dict": [{"label": "Hashtag", "value": h} for h in hashtags]},
        _owner(username, name=f"{username} display", url=f"https://linktr.ee/{username}"),
        {"title": "Brand partner", "dict": []},
    ]}


# Meta's exports write UTF-8 bytes as if each were a Latin-1 char ("I’m" -> "Iâ\x80\x99m").
MOJIBAKE = "I’m testing".encode("utf-8").decode("latin-1")

NEW_FORMAT = [
    _item("https://www.instagram.com/p/DfaKjbkkZB8/", 1795490072, caption=MOJIBAKE,
          username="ojovivomotion", hashtags=("motion",)),
    _item("https://www.instagram.com/reel/Abc_123-x/", 1795489426, username="nasaames"),
]

# Older exports: {"saved_saved_media": [{"title": owner, "string_map_data": {"Saved on": {...}}}]}
OLD_FORMAT = {"saved_saved_media": [
    {"title": "oldowner", "string_map_data": {"Saved on": {
        "href": "https://www.instagram.com/p/OLDone1/", "timestamp": 1600000000}}},
]}

OLD_COLLECTIONS = {"saved_saved_collections": [
    {"title": "Collection", "string_map_data": {
        "Name": {"value": "Gradients"}, "Creation Time": {"timestamp": 1600000000}}},
    {"title": "ojovivomotion", "string_map_data": {
        "Name": {"value": "ojovivomotion", "href": "https://www.instagram.com/p/DfaKjbkkZB8/"},
        "Added Time": {"timestamp": 1600000001}}},
    {"title": "Collection", "string_map_data": {"Name": {"value": "Space"}}},
    {"title": "nasaames", "string_map_data": {
        "Name": {"value": "nasaames", "href": "https://www.instagram.com/reel/Abc_123-x/"}}},
    {"title": "ojovivomotion", "string_map_data": {
        "Name": {"value": "ojovivomotion", "href": "https://www.instagram.com/p/DfaKjbkkZB8/"}}},
]}


def _zip(path, posts, collections=None):
    with zipfile.ZipFile(path, "w") as z:
        z.writestr(POSTS_PATH, json.dumps(posts))
        if collections is not None:
            z.writestr(COLLECTIONS_PATH, json.dumps(collections))
    return path


def _sidecars(root):
    d = root / "inspiration" / "instagram"
    return {p.stem: json.loads(p.read_text()) for p in sorted(d.glob("*.json"))}


def test_parses_new_format_and_fixes_mojibake(tmp_path):
    saves = parse_export(_zip(tmp_path / "e.zip", NEW_FORMAT))
    assert [s.shortcode for s in saves] == ["DfaKjbkkZB8", "Abc_123-x"]
    first = saves[0]
    assert first.kind == "post" and first.url == "https://www.instagram.com/p/DfaKjbkkZB8/"
    assert first.caption == "I’m testing"
    assert first.hashtags == ["motion"]
    assert first.owner == {"username": "ojovivomotion", "name": "ojovivomotion display",
                           "url": "https://linktr.ee/ojovivomotion"}
    assert first.saved_at == "2026-11-24T03:14:32Z"
    assert saves[1].kind == "reel"


def test_parses_old_format_and_collections(tmp_path):
    saves = parse_export(_zip(tmp_path / "e.zip", OLD_FORMAT))
    assert len(saves) == 1 and saves[0].shortcode == "OLDone1"
    assert saves[0].owner["username"] == "oldowner"

    saves = parse_export(_zip(tmp_path / "f.zip", NEW_FORMAT, OLD_COLLECTIONS))
    by_code = {s.shortcode: s for s in saves}
    assert by_code["DfaKjbkkZB8"].collections == ["Gradients", "Space"]
    assert by_code["Abc_123-x"].collections == ["Space"]


def test_repeated_captions_are_kept_once_each(tmp_path):
    item = _item("https://www.instagram.com/p/Dup/", 1, caption="same")
    item["label_values"][3:3] = [{"label": "Caption", "value": "same"}, {"label": "Caption", "value": "other"}]
    assert parse_export(_zip(tmp_path / "e.zip", [item]))[0].caption == "same\n\nother"


def test_accepts_an_unzipped_directory(tmp_path):
    root = tmp_path / "unzipped"
    (root / POSTS_PATH).parent.mkdir(parents=True)
    (root / POSTS_PATH).write_text(json.dumps(NEW_FORMAT))
    assert len(parse_export(root)) == 2


def test_import_writes_metadata_only_sidecars_outside_library(tmp_path):
    repo = tmp_path / "repo"
    res = import_instagram(_zip(tmp_path / "e.zip", NEW_FORMAT), repo)
    assert len(res.created) == 2 and not res.updated
    assert not (repo / "library").exists()
    sc = _sidecars(repo)
    item = sc["ig-dfakjbkkzb8"]
    assert item["id"] == "ig-dfakjbkkzb8"
    assert item["status"] == "proposed"
    assert item["file"] is None and item["image_status"] == "pending"
    assert item["source_url"] == "https://www.instagram.com/p/DfaKjbkkZB8/"
    assert item["source"]["origin"] == "instagram" and item["source"]["shortcode"] == "DfaKjbkkZB8"
    assert item["source"]["kind"] == "post" and item["source"]["saved_at"] == "2026-11-24T03:14:32Z"
    assert item["saved_because"] == "" and item["style"] == [] and item["concepts"] == []
    assert item["caption"] == "I’m testing"
    assert "license" not in item  # inspiration never carries a servable license
    assert sc["ig-abc-123-x"]["source"]["kind"] == "reel"


def test_reimport_is_idempotent_and_keeps_curator_edits(tmp_path):
    repo = tmp_path / "repo"
    import_instagram(_zip(tmp_path / "e.zip", NEW_FORMAT), repo)
    path = repo / "inspiration/instagram/ig-dfakjbkkzb8.json"
    edited = json.loads(path.read_text())
    edited.update(saved_because="great pixel texture", style=["pixel-mosaic"], status="confirmed")
    path.write_text(json.dumps(edited, indent=2) + "\n")

    res = import_instagram(_zip(tmp_path / "e.zip", NEW_FORMAT), repo)
    assert not res.created and not res.updated and len(res.unchanged) == 2

    res = import_instagram(_zip(tmp_path / "f.zip", NEW_FORMAT, OLD_COLLECTIONS), repo)
    assert len(res.updated) == 2
    item = json.loads(path.read_text())
    assert item["collections"] == ["Gradients", "Space"]
    assert item["saved_because"] == "great pixel texture"
    assert item["style"] == ["pixel-mosaic"] and item["status"] == "confirmed"


def test_shortcodes_differing_only_by_case_get_distinct_ids(tmp_path):
    repo = tmp_path / "repo"
    posts = [_item("https://www.instagram.com/p/AbC/", 1), _item("https://www.instagram.com/p/abc/", 2)]
    res = import_instagram(_zip(tmp_path / "e.zip", posts), repo)
    assert len(res.created) == 2
    sc = _sidecars(repo)
    assert {v["source"]["shortcode"] for v in sc.values()} == {"AbC", "abc"}
    assert set(sc) == {"ig-abc", "ig-abc-2"}
    res = import_instagram(_zip(tmp_path / "e.zip", posts), repo)
    assert len(res.unchanged) == 2


def test_cli(tmp_path, capsys):
    repo = tmp_path / "repo"
    rc = main(["import-instagram", str(_zip(tmp_path / "e.zip", NEW_FORMAT)), "--repo", str(repo)])
    assert rc == 0
    assert "created 2, updated 0, unchanged 0" in capsys.readouterr().out


def test_cli_reports_missing_saves_file(tmp_path, capsys):
    with zipfile.ZipFile(tmp_path / "empty.zip", "w") as z:
        z.writestr("other.json", "{}")
    rc = main(["import-instagram", str(tmp_path / "empty.zip"), "--repo", str(tmp_path / "repo")])
    assert rc == 2
    assert "saved_posts.json" in capsys.readouterr().err
