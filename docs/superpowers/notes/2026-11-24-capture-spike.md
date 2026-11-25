# Capture spike: Instagram page data, downloads, Drive

**Date:** 2026-11-24
**Who:** Brian (saved the pages in Chrome) and Claude (analysis)
**Feeds:** Task 0 of `docs/superpowers/plans/2026-11-24-instagram-capture.md`

## How the pages were captured

The plan's DevTools console snippet was dropped. Instagram's console shows a "Stop!" self-XSS warning, and asking Brian to paste code there teaches the wrong habit. Instead, Brian saved each post with Chrome's **Save Page** (⌘S) after a fresh reload. The saved HTML contains the same `<script type="application/json">` blocks. Analysis ran locally on those files, and the raw pages stay in `.context/` (never committed).

## Saves tested

| Kind | Shortcode | What it turned out to be |
|---|---|---|
| Reel | `DgFcEsKyGq_` | Single video, `media_type 2`, `product_type clips`, has audio |
| "Post" | `DfaKjbkkZB8` | Carousel (`media_type 8`) of **7 video slides**, only slide 3 has audio |
| Photo | `Df8Gm_AiTWa` | Single image, `media_type 1` |

No mixed image+video carousel was tested. The synthetic `carousel-mixed.json` fixture covers that shape. Its slide objects use the same fields as the slides seen here.

## Where the post data lives

- **The post object:** a dict anywhere in the JSON blocks with `code == <shortcode>` and a `media_type` key. On a fresh load it sits at `…__bbox.result.data.xig_fetch_media`.
- **Find it by walking:** the post object appears more than once, for example also under `xdt_api__v1__clips__home__connection_v2.edges[i].node.media` on reels. Walk the JSON looking for `code`, rather than hard-coding the path.
- **Verification is required:**
  - On a reel page, the clips feed holds other reels (`edges[1..]`) with other codes.
  - On posts, the "more posts" grid holds other posts.
  - Only objects whose own `code` equals the URL's shortcode may be used.

### Fields used

| Field | Meaning |
|---|---|
| `code` | the shortcode, case-sensitive |
| `pk` | the media id |
| `media_type` | `1` = image, `2` = video, `8` = carousel |
| `user.username`, `user.full_name` | the owner |
| `caption.text` | the caption (can be null) |
| `image_versions2.candidates[]` | `{width, height, url}`, largest first. Use as the image, or as the poster for a video |
| `video_versions[]` | `{type, width, height, url}`: a progressive MP4. Types 101, 102 and 103 were all the same size here |
| `video_dash_manifest` | an MPD XML string (on-demand profile), described below |
| `has_audio` | `true` on the reel. `null` on carousel slides, so use the MPD audio set instead |
| `carousel_media[]` | the slide objects, **in display order**, each with its own `pk`, `media_type`, `image_versions2` and, for video, `video_versions` and `video_dash_manifest` |
| `carousel_media_count` | the slide count, used as `slides_expected` |

## Quality available

| | Single file (`video_versions`) | DASH best | Original |
|---|---|---|---|
| Reel | 1280×720 | 1920×1080 video and separate audio | 1920×1080 |
| Carousel slides | 720×720 | 1080×1080 | 1080×1080 |
| Photo | — | — | image 2048×1134 = original |
| Carousel cover image | 720×720 | — | — |

**The MPD.**
- Each `<Representation>` has a `<BaseURL>` that is a complete file. The on-demand profile only uses byte ranges for streaming, so one request gets the whole track.
- Video is VP9 (`codecs="vp09…"`) in MP4. Audio is a separate `AdaptationSet contentType="audio"` (`mp4a.40.5`).
- `width`, `height` and `FBQualityLabel` are on each Representation.

**Choose by resolution, not bandwidth.** On two carousel slides, the 1080p `bandwidth` was *lower* than 720p.

## Decisions (ledgered as rulings)

1. **Video capture is the best DASH video plus DASH audio when present**, joined in the sweep. The best single `video_versions` file is kept as a fallback when the MPD is missing or unreadable. This is the spec's "Higher-res video" open item, triggered because the spike shows 1080p against 720p.
2. **The sweep transcodes non-H.264 video to H.264/AAC MP4** (libx264, CRF 18), so Finder, QuickLook and Drive preview all play it. The bundled ffmpeg (`imageio-ffmpeg`) has libx264, libvpx-vp9 decode and aac.
3. **Recording fallback (Task 8) is not built now.** Every tested type exposes files. It gets built if more than 5% of captured reels end up with no video file.

## Downloads and Drive

- **Chrome prompting:** in Brian's Instagram profile (`Profile 3`), `download.prompt_for_download` is unset, so it is off, and the default directory is `~/Downloads`. With `saveAs: false`, `chrome.downloads` should not prompt. The throwaway spike extension was skipped; Task 6's manual check confirms this.
- **Drive replace:** a test file was written into the Drive root, then replaced with `os.replace` from `~/.cache/quarry/tmp`.
  - No `EXDEV`: same volume (`/System/Volumes/Data`).
  - The Drive file id stayed the same.
  - Drive kept **2 revisions**. Replace-in-place preserves version history.
  - The test file was deleted afterward.

## Fixtures

`extension/test/fixtures/{image-post,reel,carousel-mixed}.json` are **synthetic**. Each is an array of JSON-block strings with the same nesting and field names as the real pages, with fake codes (`FAKEimg1`, `FAKEreel1`, `FAKEcar1`) and fake CDN URLs. `reel.json` includes a decoy feed reel `OTHERreel9`, and `carousel-mixed.json` includes the decoy too. The carousel's video slide repeats the "1080p has lower bandwidth" quirk. No real third-party content is in the repo.
