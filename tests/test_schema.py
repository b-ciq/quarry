import json

from quarry import schema
from quarry.cli import main
from quarry.vocabulary import load_vocabulary


def check(repo, path):
    return schema.validate_sidecar(json.loads(path.read_text()), load_vocabulary(repo.root))


def test_valid_confirmed_background_passes(repo):
    p = repo.add_asset("background", "bg-one", tone="dark", license="owned")
    assert check(repo, p) == []


def test_confirmed_background_without_tone_fails(repo, drop):
    p = repo.add_asset("background", "bg-one", tone=drop)
    assert any("tone" in e for e in check(repo, p))


def test_tone_on_non_background_fails(repo):
    p = repo.add_asset("hero", "hero-one", tone="dark")
    assert any("tone" in e for e in check(repo, p))


def test_confirmed_requires_license_and_description(repo):
    p = repo.add_asset("hero", "hero-one", license="", description="")
    errs = check(repo, p)
    assert any("license" in e for e in errs)
    assert any("description" in e for e in errs)


def test_unknown_vocab_slug_fails(repo):
    p = repo.add_asset("hero", "hero-one", products=["nope"])
    assert any("nope" in e for e in check(repo, p))


def test_screenshot_confirmed_requires_product_version_and_captured_at(repo, drop):
    p = repo.add_asset("screenshot", "shot-one", product_version=drop, captured_at=drop)
    errs = check(repo, p)
    assert any("product_version" in e for e in errs)
    assert any("captured_at" in e for e in errs)


def test_proposed_skips_content_rules_but_not_structure(repo):
    p = repo.add_asset("hero", "hero-one", status="proposed", license="", description="", products=["nope"])
    assert check(repo, p) == []
    p = repo.add_asset("hero", "hero-two", status="proposed", **{"class": "bogus"})
    assert any("class" in e for e in check(repo, p))


def test_midjourney_requires_generation(repo):
    src = {"origin": "midjourney", "ingested_at": "2026-01-01T00:00:00Z"}
    p = repo.add_asset("hero", "hero-one", source=src)
    assert any("generation" in e for e in check(repo, p))


def test_is_servable():
    base = {"status": "confirmed", "usage_restrictions": []}
    assert schema.is_servable(base)
    assert not schema.is_servable({**base, "status": "proposed"})
    assert not schema.is_servable({**base, "status": "retired"})
    assert not schema.is_servable({**base, "usage_restrictions": ["internal-only"]})


def test_cli_validate_passes_on_valid_repo(repo, capsys):
    repo.add_asset("hero", "hero-one")
    assert main(["validate", "--repo", str(repo.root)]) == 0


def test_cli_validate_exits_nonzero_on_invalid_sidecar(repo, capsys):
    repo.add_asset("hero", "hero-one", products=["nope"])
    assert main(["validate", "--repo", str(repo.root)]) == 1
    assert "nope" in capsys.readouterr().out


def test_cli_validate_reports_orphans(repo, capsys):
    p = repo.add_asset("hero", "hero-one")
    p.with_suffix(".png").unlink()
    (repo.root / "library" / "hero" / "lonely.png").write_bytes(b"x")
    assert main(["validate", "--repo", str(repo.root)]) == 1
    out = capsys.readouterr().out
    assert "orphan sidecar" in out and "orphan image" in out
