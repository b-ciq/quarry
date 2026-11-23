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


def test_id_must_be_kebab_case(repo):
    p = repo.add_asset("hero", "hero-one")
    entry = json.loads(p.read_text())
    entry["id"] = "Foo_Bar"
    assert any("kebab" in e for e in schema.validate_sidecar(entry, load_vocabulary(repo.root)))


def test_file_stem_must_match_id(repo):
    p = repo.add_asset("hero", "hero-one", file="other.png")
    assert any("file" in e for e in check(repo, p))


def test_cli_rejects_id_not_matching_filename(repo, capsys):
    p = repo.add_asset("hero", "hero-one")
    entry = json.loads(p.read_text())
    entry["id"] = "hero-two"
    entry["file"] = "hero-two.png"
    p.write_text(json.dumps(entry))
    assert main(["validate", "--repo", str(repo.root)]) == 1
    assert "filename stem" in capsys.readouterr().out


def test_cli_uppercase_extension_image_pairs_with_sidecar(repo, capsys):
    p = repo.add_asset("hero", "hero-one")
    img = p.with_suffix(".png")
    img.rename(img.with_suffix(".PNG"))
    entry = json.loads(p.read_text())
    entry["file"] = "hero-one.PNG"
    p.write_text(json.dumps(entry))
    assert main(["validate", "--repo", str(repo.root)]) == 0
    assert "orphan" not in capsys.readouterr().out


def test_cli_validate_flags_duplicate_ids(repo, capsys):
    from quarry.cli import main
    repo.add_asset("hero", "dup")
    repo.add_asset("lifestyle", "dup")
    assert main(["validate", "--repo", str(repo.root)]) == 1
    assert "duplicate id" in capsys.readouterr().out


def test_parked_is_valid_and_not_servable(repo):
    s = json.loads(repo.add_asset("hero", "h1", status="parked", description="").read_text())
    assert schema.validate_sidecar(s, load_vocabulary(repo.root)) == []
    assert not schema.is_servable(s)


def test_rating_block_shape_checked(repo):
    vocab = load_vocabulary(repo.root)
    good = {"bot": {"verdict": "yes", "strength": "strong", "reason": "r", "model": "m", "at": "t",
                    "examples": [], "suggested_slugs": {}},
            "human": {"verdict": "maybe", "by": "A <a@b>", "at": "t"}}
    s = json.loads(repo.add_asset("hero", "h1", rating=good).read_text())
    assert schema.validate_sidecar(s, vocab) == []
    s["rating"] = {"bot": {**good["bot"], "verdict": "sure"}}
    assert "rating.bot.verdict: invalid value 'sure'" in schema.validate_sidecar(s, vocab)
    s["rating"] = {"bot": {**good["bot"], "strength": "very"}}
    assert "rating.bot.strength: invalid value 'very'" in schema.validate_sidecar(s, vocab)
    s["rating"] = "yes"
    assert "rating: must be an object" in schema.validate_sidecar(s, vocab)
