"""Scoped git operations for the workbench. Never stages anything outside the given paths."""
import subprocess
import time
from dataclasses import dataclass, field
from pathlib import Path

MANAGED = ("library", "taxonomy", "exports")


class GitError(RuntimeError):
    pass


@dataclass
class ManagedStatus:
    dirty_managed: list[str] = field(default_factory=list)
    dirty_other: list[str] = field(default_factory=list)
    ahead: int = 0
    behind: int = 0
    has_upstream: bool = True


@dataclass
class SyncResult:
    pulled: int = 0
    pushed: int = 0
    conflict: bool = False
    message: str = ""


def _git(repo, *args, check=True) -> subprocess.CompletedProcess:
    p = subprocess.run(["git", "-C", str(repo), *args], capture_output=True, text=True)
    if check and p.returncode != 0:
        raise GitError(f"git {' '.join(args)} failed: {(p.stderr or p.stdout).strip()}")
    return p


def identity(repo) -> str:
    """`Name <email>` from git config; falls back to whichever half is set, else "unknown"."""
    name = _git(repo, "config", "user.name", check=False).stdout.strip()
    email = _git(repo, "config", "user.email", check=False).stdout.strip()
    if name and email:
        return f"{name} <{email}>"
    return name or (f"<{email}>" if email else "unknown")


def show_bytes(repo, rev: str, path: str) -> bytes | None:
    """Exact bytes of `path` at `rev`, or None if it doesn't exist there."""
    p = subprocess.run(["git", "-C", str(repo), "show", f"{rev}:{path}"], capture_output=True)
    return p.stdout if p.returncode == 0 else None


def is_git_repo(repo) -> bool:
    return _git(repo, "rev-parse", "--git-dir", check=False).returncode == 0


def _ahead_behind(repo) -> tuple[int, int, bool]:
    p = _git(repo, "rev-list", "--left-right", "--count", "@{upstream}...HEAD", check=False)
    if p.returncode != 0:
        return 0, 0, False
    behind, ahead = p.stdout.split()
    return int(ahead), int(behind), True


FETCH_MAX_AGE = 60.0
FETCH_TIMEOUT = 15
_last_attempt: dict[str, float] = {}


def fetch_if_stale(repo, max_age: float | None = None) -> bool:
    """Best-effort `git fetch` when the last fetch is older than max_age seconds.

    Never fetches without an upstream; offline/failed fetches are swallowed (and not
    retried until max_age elapses). Returns True if a fetch succeeded.
    """
    max_age = FETCH_MAX_AGE if max_age is None else max_age
    if not _ahead_behind(repo)[2]:
        return False
    now = time.time()
    key = str(Path(repo).resolve())
    if now - _last_attempt.get(key, 0.0) < max_age:
        return False
    try:
        common = _git(repo, "rev-parse", "--git-common-dir", check=False).stdout.strip()
        fh = (Path(repo) / common) / "FETCH_HEAD"
        if fh.exists() and now - fh.stat().st_mtime < max_age:
            return False
    except OSError:
        pass
    _last_attempt[key] = now
    try:
        p = subprocess.run(["git", "-C", str(repo), "fetch", "--quiet"], capture_output=True,
                           text=True, timeout=FETCH_TIMEOUT)
    except (subprocess.TimeoutExpired, OSError):
        return False
    return p.returncode == 0


def managed_status(repo) -> ManagedStatus:
    out = _git(repo, "status", "--porcelain", "-uall", "-z").stdout
    managed, other = [], []
    entries = out.split("\0")
    i = 0
    while i < len(entries):
        e = entries[i]
        i += 1
        if len(e) < 4:
            continue
        if e[0] in "RC":
            i += 1  # skip the rename/copy source path
        path = e[3:]
        (managed if path.split("/", 1)[0] in MANAGED else other).append(path)
    ahead, behind, up = _ahead_behind(repo)
    return ManagedStatus(sorted(managed), sorted(other), ahead, behind, up)


def commit_paths(repo, paths: list[str], message: str) -> str:
    """Commit ONLY `paths` (even if other files are dirty or staged); return the new sha."""
    if not paths:
        raise GitError("commit_paths requires at least one path")
    _git(repo, "add", "--", *paths)
    _git(repo, "commit", "-m", message, "--only", "--", *paths)
    return _git(repo, "rev-parse", "HEAD").stdout.strip()


def _rebase_in_progress(repo) -> bool:
    gd = Path(_git(repo, "rev-parse", "--absolute-git-dir").stdout.strip())
    return (gd / "rebase-merge").exists() or (gd / "rebase-apply").exists()


def sync(repo) -> SyncResult:
    if _ahead_behind(repo)[2] is False:
        return SyncResult(message="no upstream configured; nothing to sync")
    _git(repo, "fetch")
    _, behind, _ = _ahead_behind(repo)
    pull = _git(repo, "pull", "--rebase", "--autostash", check=False)
    detail = (pull.stderr or pull.stdout).strip()
    if pull.returncode != 0:
        if not _rebase_in_progress(repo):
            raise GitError(f"git pull failed: {detail}")
        _git(repo, "rebase", "--abort")
        return SyncResult(
            conflict=True,
            message="Sync conflict: your changes and the remote edit the same files. "
                    "Nothing was lost; resolve this with your agent, then sync again. "
                    f"({detail.splitlines()[-1] if detail else 'rebase failed'})",
        )
    # Autostash reapply can conflict while git still exits 0.
    unmerged = [x for x in _git(repo, "diff", "--name-only", "--diff-filter=U", "-z").stdout.split("\0") if x]
    if unmerged:
        # Drop conflict markers; the user's edit stays safe in the kept stash entry.
        _git(repo, "reset", "-q", "--", *unmerged)
        _git(repo, "checkout", "--", *unmerged)
        return SyncResult(
            pulled=behind, conflict=True,
            message="Sync conflict: your uncommitted edits to " + ", ".join(unmerged) +
                    " clash with changes pulled from the remote. Nothing was pushed and your edits are "
                    "saved in the latest git stash entry; resolve this with your agent, then sync again.",
        )
    ahead, _, _ = _ahead_behind(repo)
    if ahead:
        push = _git(repo, "push", check=False)
        if push.returncode != 0:
            raise GitError(f"git push failed: {(push.stderr or push.stdout).strip()}")
    return SyncResult(pulled=behind, pushed=ahead, message="synced")


def push(repo) -> None:
    p = _git(repo, "push", check=False)
    if p.returncode != 0:
        raise GitError(f"git push failed: {(p.stderr or p.stdout).strip()}")
