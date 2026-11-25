"""Checks and conversions for captured media, using Pillow and the ffmpeg bundled by imageio-ffmpeg.

There is no ffprobe in imageio-ffmpeg, so video facts are parsed from the stderr of `ffmpeg -i`.
"""
from __future__ import annotations

import re
import subprocess
from dataclasses import dataclass
from pathlib import Path

from PIL import Image

TIMEOUT_S = 600

_DURATION_RE = re.compile(r"Duration: (\d+):(\d{2}):(\d{2}(?:\.\d+)?)")
_VIDEO_RE = re.compile(r"Stream #\d+:\d+.*?: Video: (\w+).*?, (\d+)x(\d+)")
_AUDIO_RE = re.compile(r"Stream #\d+:\d+.*?: Audio: (\w+)")


class MediaError(ValueError):
    """A media file is unreadable, or ffmpeg could not convert it."""


class FfmpegMissing(RuntimeError):
    """imageio-ffmpeg is not installed (it is the `inspiration` extra)."""


@dataclass
class VideoInfo:
    width: int
    height: int
    duration_s: float
    has_audio: bool
    codec: str


def ffmpeg_exe() -> str:
    try:
        import imageio_ffmpeg
    except ImportError as e:
        raise FfmpegMissing("imageio-ffmpeg is not installed: pip install 'quarry[inspiration]'") from e
    return imageio_ffmpeg.get_ffmpeg_exe()


def _run(args: list[str]) -> subprocess.CompletedProcess:
    try:
        return subprocess.run([ffmpeg_exe(), "-hide_banner", "-nostdin", *args],
                              capture_output=True, text=True, errors="replace", timeout=TIMEOUT_S)
    except subprocess.TimeoutExpired as e:
        raise MediaError(f"ffmpeg timed out after {TIMEOUT_S} s") from e


def _last_line(stderr: str) -> str:
    lines = [ln.strip() for ln in stderr.splitlines() if ln.strip()]
    return lines[-1] if lines else "ffmpeg failed"


def _input_info(p: Path) -> str:
    if not Path(p).is_file():
        raise MediaError("file not found")
    # Without an output ffmpeg exits non-zero, so success is judged by whether the input was read.
    stderr = _run(["-i", str(p)]).stderr
    if "Input #0" not in stderr:
        raise MediaError(f"not a readable media file ({_last_line(stderr)})")
    return stderr


def image_size(p: Path) -> tuple[int, int]:
    """(width, height) of an image that Pillow can verify and fully decode."""
    try:
        with Image.open(p) as im:
            im.verify()
        with Image.open(p) as im:
            im.load()
            return im.size
    except (OSError, SyntaxError, ValueError, Image.DecompressionBombError) as e:
        raise MediaError(f"not a readable image ({e})") from e


def audio_codec(p: Path) -> str | None:
    """The first audio stream's codec name, or None when the file has no audio."""
    m = _AUDIO_RE.search(_input_info(p))
    return m.group(1) if m else None


def probe_video(p: Path) -> VideoInfo:
    stderr = _input_info(p)
    video = _VIDEO_RE.search(stderr)
    if not video:
        raise MediaError("no video stream")
    duration = _DURATION_RE.search(stderr)
    if not duration:
        raise MediaError("unknown duration")
    h, m, s = duration.groups()
    return VideoInfo(width=int(video.group(2)), height=int(video.group(3)),
                     duration_s=round(int(h) * 3600 + int(m) * 60 + float(s), 3),
                     has_audio=_AUDIO_RE.search(stderr) is not None, codec=video.group(1))


def _convert(args: list[str], dest: Path) -> None:
    proc = _run(["-y", "-v", "error", *args, str(dest)])
    if proc.returncode != 0 or not Path(dest).is_file() or Path(dest).stat().st_size == 0:
        Path(dest).unlink(missing_ok=True)
        raise MediaError(f"ffmpeg failed: {_last_line(proc.stderr)}")


def make_poster(video: Path, dest: Path) -> None:
    """The first frame of `video` as a JPEG at `dest`."""
    _convert(["-i", str(video), "-map", "0:v:0", "-frames:v", "1", "-q:v", "2", "-f", "image2",
              "-c:v", "mjpeg"], dest)


def assemble_mp4(video: Path, audio: Path | None, dest: Path) -> None:
    """Write an MP4 with H.264 video and, when there is audio, AAC audio.

    H.264 is stream-copied; anything else (Instagram's DASH video is VP9) is encoded with libx264.
    With `audio` None, any audio already in `video` is kept.
    """
    info = probe_video(video)
    args = ["-i", str(video)]
    if audio is not None:
        acodec = audio_codec(audio)
        if acodec is None:
            raise MediaError("no audio stream")
        args += ["-i", str(audio), "-map", "0:v:0", "-map", "1:a:0"]
    else:
        acodec = audio_codec(video) if info.has_audio else None
        args += ["-map", "0:v:0", "-map", "0:a:0?"]
    if info.codec == "h264":
        args += ["-c:v", "copy"]
    else:
        args += ["-c:v", "libx264", "-crf", "18", "-pix_fmt", "yuv420p",
                 "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2"]
    if acodec is not None:
        args += ["-c:a", "copy" if acodec == "aac" else "aac"]
    _convert(args + ["-movflags", "+faststart", "-f", "mp4"], dest)
