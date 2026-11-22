import json
from pathlib import Path

import pytest

from quarry import publish as pub
from quarry.cli import main
from quarry.embeddings import FakeEmbedder
from quarry.indexer import IndexBuildError


@pytest.fixture
def skill(tmp_path):
    d = tmp_path / "skill"
    img = d / "brand" / "assets" / "images"
    img.mkdir(parents=True)
    (img / "old.png").write_bytes(b"old")
    (img / "manifest.json").write_text("{}")
    (d / "SKILL.md").write_text("keep me")
    (d / "brand" / "assets" / "index.json").write_text("keep")
    return d


def snapshot(root: Path):
    return {p.relative_to(root).as_posix(): p.read_bytes() for p in sorted(root.rglob("*")) if p.is_file()}


def test_publish_writes_artifacts_and_stamp(repo, skill):
    repo.add_asset("hero", "good-hero")
    res = pub.publish(repo.root, FakeEmbedder(), skill)
    stamp = json.loads((repo.root / "exports" / "STAMP.json").read_text())
    assert stamp["digest"] == pub.sidecar_digest(repo.root)
    assert stamp["version"] == stamp["digest"][:12] == res.version
    assert stamp["published_at"]
    assert (repo.root / "index" / "library.db").exists()
    assert json.loads((repo.root / "exports" / "manifest.json").read_text())["images"][0]["id"] == "good-hero"
    assert not (repo.root / "exports.staging").exists()


def test_bundle_replaces_only_images_dir(repo, skill):
    repo.add_asset("hero", "good-hero")
    repo.add_asset("spot-illustration", "a-spot")
    pub.publish(repo.root, FakeEmbedder(), skill)
    imgs = skill / "brand" / "assets" / "images"
    assert sorted(p.name for p in imgs.iterdir()) == ["a-spot.png", "good-hero.png", "manifest.json"]
    assert (skill / "SKILL.md").read_text() == "keep me"
    assert (skill / "brand" / "assets" / "index.json").read_text() == "keep"
    assert [p.name for p in (skill / "brand" / "assets").iterdir() if "staging" in p.name or p.name.endswith(".old")] == []
    bundled = json.loads((imgs / "manifest.json").read_text())
    assert bundled == json.loads((repo.root / "exports" / "manifest.json").read_text())


def test_restricted_and_unconfirmed_never_bundled(repo, skill):
    repo.add_asset("hero", "ok-hero")
    repo.add_asset("hero", "restricted-hero", usage_restrictions=["no-publish"])
    repo.add_asset("hero", "draft-hero", status="proposed")
    pub.publish(repo.root, FakeEmbedder(), skill)
    imgs = skill / "brand" / "assets" / "images"
    names = {p.name for p in imgs.iterdir()}
    assert "restricted-hero.png" not in names and "draft-hero.png" not in names
    assert "restricted-hero" not in (imgs / "manifest.json").read_text()
    assert "restricted-hero" not in (repo.root / "exports" / "manifest.json").read_text()


def test_validation_failure_leaves_everything_untouched(repo, skill):
    repo.add_asset("hero", "good-hero")
    pub.publish(repo.root, FakeEmbedder(), skill)
    before_repo = snapshot(repo.root)
    before_skill = snapshot(skill)
    bad = repo.add_asset("hero", "bad-hero")
    bad.write_text(json.dumps({"id": "bad-hero", "file": "bad-hero.png", "class": "nope"}))
    before_repo = snapshot(repo.root)
    with pytest.raises(IndexBuildError):
        pub.publish(repo.root, FakeEmbedder(), skill)
    assert snapshot(repo.root) == before_repo
    assert snapshot(skill) == before_skill


def test_bundle_failure_leaves_exports_and_skill_untouched(repo, skill, monkeypatch):
    repo.add_asset("hero", "good-hero")
    pub.publish(repo.root, FakeEmbedder(), skill)
    repo.add_asset("hero", "second-hero")
    before_exports = snapshot(repo.root / "exports")
    before_skill = snapshot(skill)

    def boom(*a, **k):
        raise OSError("disk full")
    monkeypatch.setattr(pub.shutil, "copy2", boom)
    with pytest.raises(OSError):
        pub.publish(repo.root, FakeEmbedder(), skill)
    assert snapshot(repo.root / "exports") == before_exports
    assert snapshot(skill) == before_skill


def test_check_stale_lifecycle(repo, skill):
    path = repo.add_asset("hero", "good-hero")
    assert pub.check_stale(repo.root) is True  # no stamp
    pub.publish(repo.root, FakeEmbedder(), skill)
    assert pub.check_stale(repo.root) is False
    path.write_text(path.read_text().replace("A test asset.", "Edited."))
    assert pub.check_stale(repo.root) is True
    pub.publish(repo.root, FakeEmbedder(), skill)
    assert pub.check_stale(repo.root) is False


def test_cli_publish_and_check_stale(repo, skill, capsys):
    repo.add_asset("hero", "good-hero")
    assert main(["validate", "--repo", str(repo.root), "--check-stale"]) == 1
    assert main(["publish", "--repo", str(repo.root), "--skill-dir", str(skill), "--fake-embedder"]) == 0
    assert main(["validate", "--repo", str(repo.root), "--check-stale"]) == 0
    assert (skill / "brand/assets/images/good-hero.png").exists()
