import subprocess

import pytest
from PIL import Image

from quarry.media_probe import video_frames


def test_video_frames(tmp_path):
    pytest.importorskip("imageio_ffmpeg")
    from quarry.media_probe import ffmpeg_exe
    clip = tmp_path / "clip.mp4"
    subprocess.run([ffmpeg_exe(), "-y", "-v", "error", "-f", "lavfi", "-i", "testsrc=duration=2:size=160x120:rate=10",
                    "-pix_fmt", "yuv420p", str(clip)], check=True)
    frames = video_frames(clip, (0.25, 0.5, 0.75), tmp_path / "frames")
    assert len(frames) == 3
    for f in frames:
        assert f.suffix == ".jpg"
        with Image.open(f) as im:
            assert im.format == "JPEG"
