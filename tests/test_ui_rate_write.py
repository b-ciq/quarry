import json

from fastapi.testclient import TestClient

from quarry.ui.app import create_app


def _client(repo):
    return TestClient(create_app(repo.root))


def _commit(repo):
    repo.git("add", "-A")
    repo.git("commit", "-q", "-m", "seed")


def _subject(repo):
    return repo.git("log", "-1", "--format=%s")


def test_verdict_yes_confirms_and_records_human(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    _commit(git_repo)
    r = _client(git_repo).post("/api/assets/h1/verdict", json={"verdict": "yes"})
    assert r.status_code == 200, r.text
    assert r.json()["asset"]["status"] == "confirmed"
    assert r.json()["needs_details"] is None
    assert r.json()["asset"]["rating"]["human"]["by"] == "Test <test@example.com>"
    assert _subject(git_repo) == "rate: yes h1\n"


def test_verdict_maybe_parks_and_no_retires(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    git_repo.add_asset("hero", "h2", status="proposed")
    _commit(git_repo)
    c = _client(git_repo)
    r = c.post("/api/assets/h1/verdict", json={"verdict": "maybe"})
    assert r.json()["asset"]["status"] == "parked" and _subject(git_repo) == "rate: maybe h1\n"
    r = c.post("/api/assets/h2/verdict", json={"verdict": "no"})
    assert r.json()["asset"]["status"] == "retired" and _subject(git_repo) == "rate: no h2\n"


def test_parked_can_be_upgraded(git_repo):
    git_repo.add_asset("hero", "h1", status="parked")
    _commit(git_repo)
    r = _client(git_repo).post("/api/assets/h1/verdict", json={"verdict": "yes"})
    assert r.status_code == 200 and r.json()["asset"]["status"] == "confirmed"


def test_wrong_status_409_and_bad_verdict_422(git_repo):
    git_repo.add_asset("hero", "h1", status="retired")
    _commit(git_repo)
    c = _client(git_repo)
    assert c.post("/api/assets/h1/verdict", json={"verdict": "yes"}).status_code == 409
    assert c.post("/api/assets/h1/verdict", json={"verdict": "wat"}).status_code == 422
    assert c.post("/api/assets/nope/verdict", json={"verdict": "yes"}).status_code == 404


def test_confirmed_can_be_dropped_to_no_but_not_maybe(git_repo):
    git_repo.add_asset("hero", "h1", status="confirmed")
    _commit(git_repo)
    c = _client(git_repo)
    assert c.post("/api/assets/h1/verdict", json={"verdict": "maybe"}).status_code == 409
    assert c.post("/api/assets/h1/verdict", json={"verdict": "no"}).status_code == 200


def test_yes_with_missing_license_records_needs_details(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed", license="")
    _commit(git_repo)
    body = _client(git_repo).post("/api/assets/h1/verdict", json={"verdict": "yes"}).json()
    assert body["asset"]["status"] == "proposed"
    assert body["asset"]["rating"]["human"]["verdict"] == "yes"
    assert body["needs_details"] == ["license: required for confirmed assets"]


def test_yes_with_only_card_fixable_errors_is_422_and_untouched(git_repo, drop):
    git_repo.add_asset("background", "b1", status="proposed", tone=drop)
    _commit(git_repo)
    r = _client(git_repo).post("/api/assets/b1/verdict", json={"verdict": "yes"})
    assert r.status_code == 422
    assert "tone: required (dark|light) for background" in r.json()["errors"]
    assert git_repo.git("status", "--porcelain") == ""


def test_override_reason_stored(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    _commit(git_repo)
    r = _client(git_repo).post("/api/assets/h1/verdict", json={"verdict": "no", "reason": "too cliché"})
    assert r.json()["asset"]["rating"]["human"]["reason"] == "too cliché"


def test_confirm_and_retire_routes_record_human_verdict(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    git_repo.add_asset("hero", "h2", status="proposed")
    _commit(git_repo)
    c = _client(git_repo)
    a = c.post("/api/assets/h1/confirm").json()["asset"]
    assert a["rating"]["human"]["verdict"] == "yes"
    b = c.post("/api/assets/h2/retire").json()["asset"]
    assert b["rating"]["human"]["verdict"] == "no"


def test_batch_one_commit_and_partial_results(git_repo, drop):
    git_repo.add_asset("hero", "h1", status="proposed")
    git_repo.add_asset("hero", "h2", status="proposed")
    git_repo.add_asset("hero", "h3", status="proposed", license="")
    git_repo.add_asset("background", "b1", status="proposed", tone=drop)
    _commit(git_repo)
    seed = int(git_repo.git("rev-list", "--count", "HEAD").strip())
    body = _client(git_repo).post("/api/verdicts", json={"verdict": "yes", "ids": ["h1", "h2", "h3", "b1"]}).json()
    assert body["applied"] == ["h1", "h2"]
    assert list(body["needs_details"]) == ["h3"] and list(body["failed"]) == ["b1"]
    assert _subject(git_repo) == "rate: accept 3 strong yes\n"
    assert git_repo.git("rev-list", "--count", "HEAD").strip() == str(seed + 1)
    assert body["commit"] == git_repo.git("rev-parse", "HEAD").strip()


def test_batch_nothing_applied_makes_no_commit(git_repo):
    git_repo.add_asset("hero", "h1", status="retired")
    _commit(git_repo)
    head = git_repo.git("rev-parse", "HEAD")
    body = _client(git_repo).post("/api/verdicts", json={"verdict": "yes", "ids": ["h1", "ghost"]}).json()
    assert body["commit"] is None and body["applied"] == [] and set(body["failed"]) == {"h1", "ghost"}
    assert git_repo.git("rev-parse", "HEAD") == head


def test_undo_restores_previous_content(git_repo):
    path = git_repo.add_asset("hero", "h1", status="proposed")
    _commit(git_repo)
    before = path.read_text()
    c = _client(git_repo)
    sha = c.post("/api/assets/h1/verdict", json={"verdict": "no"}).json()["commit"]
    r = c.post("/api/undo", json={"commit": sha})
    assert r.status_code == 200, r.text
    assert path.read_text() == before and r.json()["ids"] == ["h1"]
    assert _subject(git_repo) == "rate: undo no h1\n"
    assert c.get("/api/assets/h1").json()["status"] == "proposed"


def test_undo_refuses_when_changed_since(git_repo):
    path = git_repo.add_asset("hero", "h1", status="proposed")
    _commit(git_repo)
    c = _client(git_repo)
    sha = c.post("/api/assets/h1/verdict", json={"verdict": "maybe"}).json()["commit"]
    assert c.patch("/api/assets/h1", json={"description": "edited later"}).status_code == 200
    r = c.post("/api/undo", json={"commit": sha})
    assert r.status_code == 409
    assert json.loads(path.read_text())["description"] == "edited later"


def test_undo_refuses_non_rate_commits_and_unknown_sha(git_repo):
    git_repo.add_asset("hero", "h1", status="proposed")
    _commit(git_repo)
    c = _client(git_repo)
    sha = c.patch("/api/assets/h1", json={"description": "x"}).json()["commit"]
    assert c.post("/api/undo", json={"commit": sha}).status_code == 409
    assert c.post("/api/undo", json={"commit": "deadbeef" * 5}).status_code == 404
    assert c.post("/api/undo", json={"commit": "--bad"}).status_code == 404


def test_gitops_identity_fallbacks(git_repo):
    from quarry.ui import gitops
    assert gitops.identity(git_repo.root) == "Test <test@example.com>"
    git_repo.git("config", "--unset", "user.email")
    # a global email may exist on the machine; only assert the name survives
    assert gitops.identity(git_repo.root).startswith("Test")
