import threading
from pathlib import Path

import pytest

from quarry import cli
from quarry.describer import FakeDescriber
from quarry.describer_loop import DescriberLoop
from quarry.inspiration_store import Store
from tests.inspiration_helpers import item, make_record

ROOT = Path(__file__).resolve().parent.parent


def seed(store, code):
    rec = make_record(code)
    rec["capture"]["items"] = [{**item(1), "sha256": f"{code}0"}]
    store.write(rec)
    return rec["id"]


@pytest.fixture
def store(tmp_path):
    (tmp_path / "store").mkdir()
    return Store(tmp_path / "store")


def run(store, monkeypatch, fake, *extra):
    monkeypatch.setattr(cli, "_make_describer", lambda: fake)
    done = {}

    def go():
        done["rc"] = cli.main(["describe-inspiration", "--repo", str(ROOT),
                               "--inspiration-dir", str(store.root), *extra])

    t = threading.Thread(target=go, daemon=True)
    t.start()
    t.join(20)
    assert not t.is_alive(), "describe-inspiration did not terminate"
    return done["rc"]


def test_cli_describes_waiting(store, monkeypatch, capsys):
    a, b = seed(store, "A"), seed(store, "B")
    fake = FakeDescriber()
    assert run(store, monkeypatch, fake) == 0
    out = capsys.readouterr().out
    assert f"described {a}" in out and f"described {b}" in out
    assert "described 2, failed 0" in out
    assert store.read(a)["bot"]["media"]


def test_cli_limit(store, monkeypatch, capsys):
    seed(store, "A"), seed(store, "B")
    fake = FakeDescriber()
    assert run(store, monkeypatch, fake, "--limit", "1") == 0
    assert len(fake.calls) == 1
    assert "described 1, failed 0" in capsys.readouterr().out


def test_cli_terminates_when_only_target_waits_to_retry(store, monkeypatch, capsys):
    a = seed(store, "A")
    fake = FakeDescriber(fail={a: "bad_output"})
    assert run(store, monkeypatch, fake) == 0
    assert "described 0, failed 1" in capsys.readouterr().out
    assert run(store, monkeypatch, fake) == 0  # the saved error makes it wait an hour: no call, no hang
    assert fake.calls == [a]
    assert "described 0, failed 0" in capsys.readouterr().out


def test_cli_refuses_when_locked(store, monkeypatch, capsys):
    seed(store, "A")
    holder = DescriberLoop(store, FakeDescriber(), ROOT, port=4321)
    holder.tick()
    try:
        fake = FakeDescriber()
        assert run(store, monkeypatch, fake) == 2
    finally:
        holder.close()
    assert "another Quarry window is describing (port 4321)" in capsys.readouterr().err
    assert fake.calls == []


def test_cli_redo(store, monkeypatch, capsys):
    a = seed(store, "A")
    fake = FakeDescriber()
    assert run(store, monkeypatch, fake) == 0
    assert run(store, monkeypatch, fake) == 0
    assert fake.calls == [a]
    assert run(store, monkeypatch, fake, "--redo", a) == 0
    assert fake.calls == [a, a]
    assert capsys.readouterr().out.count(f"described {a}") == 2


def test_cli_redo_unknown_id_exits_2(store, monkeypatch, capsys):
    assert run(store, monkeypatch, FakeDescriber(), "--redo", "ig-nope") == 2
    assert "ig-nope" in capsys.readouterr().err


def test_cli_no_root_exits_2(tmp_path, monkeypatch, capsys):
    monkeypatch.delenv("QUARRY_INSPIRATION_DIR", raising=False)
    monkeypatch.setattr(cli, "_make_describer", lambda: FakeDescriber())
    assert cli.main(["describe-inspiration", "--repo", str(ROOT)]) == 2
    assert "error" in capsys.readouterr().err


def test_cli_claude_unavailable_exits_2(store, monkeypatch, capsys):
    monkeypatch.setattr("quarry.cli.rater_status", lambda: {"available": False, "reason": "no key"})
    assert cli.main(["describe-inspiration", "--repo", str(ROOT), "--inspiration-dir", str(store.root)]) == 2
    assert "no key" in capsys.readouterr().err


@pytest.mark.parametrize("bad", ["0", "-1", "x"])
def test_cli_limit_must_be_positive(store, monkeypatch, capsys, bad):
    seed(store, "A")
    fake = FakeDescriber()
    monkeypatch.setattr(cli, "_make_describer", lambda: fake)
    with pytest.raises(SystemExit) as exc:
        cli.main(["describe-inspiration", "--repo", str(ROOT), "--inspiration-dir", str(store.root), "--limit", bad])
    assert exc.value.code == 2
    assert fake.calls == []
    assert "--limit" in capsys.readouterr().err
