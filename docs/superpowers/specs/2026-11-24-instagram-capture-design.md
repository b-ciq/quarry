# Instagram Capture: Quarry Button in Chrome

**Date:** 2026-11-24 (revised after adversarial review)
**Author:** Brian Christensen with Claude
**Status:** Draft for approval
**Depends on:** `quarry import-instagram` (built on this branch), the workbench (`2026-11-22-workbench-design.md`), and the inspiration partition in `2026-11-22-quarry-design.md`.

## Intent

Brian saves Instagram posts as visual inspiration for CIQ's look and feel. Quarry already imports the list of saves from Instagram's data export (`quarry import-instagram`), but the export holds only links. The media is the point. Motion matters as much as stills: many saves are reels, and the animation is what made them worth saving.

This design adds a way to capture a post's actual images and videos. It has three parts:
- a Chrome extension (the "Quarry button");
- a sweep that files what the button saves;
- a Capture page in the workbench.

Brian views a post in their normal, logged-in Chrome and clicks the button. The post's files land in Quarry, attached to the right save.

Its first job is the 281-save backlog. The second is new saves Brian makes on the Mac.

### Where this sits with Instagram's rules

Instagram's robots.txt disallows all automated clients (`User-agent: * Disallow: /`). It states that automated data collection is prohibited without written permission.

Brian's requirement is that nothing causes problems for their account. So Quarry never opens, scrolls, advances, or fetches Instagram pages on its own. Every capture is one click by Brian on a post they are already viewing, and it saves only that post's files. The button is a convenience for right-click → Save.

Read strictly, a button that pulls and saves files can still count as "automated collection". This design keeps the risk low and the activity human-shaped, but doesn't make it zero. The most visible signal to Instagram is not the button. It is how many posts get opened in a sitting, so the backlog is paced (see Pacing).

## Goals

- Capture every image and video of a post at the best quality Instagram's web page offers, including every carousel slide, in order. Video includes its audio.
- Attach each capture to its save automatically, matched by the post's shortcode, and verified against the page data (see The Quarry button).
- Work through the backlog in paced sessions. The workbench shows what's missing and opens the next post with one click.
- Capture a post that isn't in the export yet (a new save) by creating its record.
- Keep everything inside the inspiration partition: reference only, never servable, never in git.

## Non-goals

- Capture from the phone. A later design covers it.
- Anything Brian hasn't opened and clicked on, such as bulk capture, background fetching, or walking the Saved page.
- AI tagging and an inspiration search index. Those belong to the vocabulary phase.
- Publishing the extension to the Chrome Web Store. It loads unpacked, on this Mac only.
- Two curators capturing into the same folder at once.

## Anti-goals (failure even if it works)

- **Any automation of Instagram.** That includes auto-advancing carousels, auto-opening posts, retries against Instagram, and scripted logins. If a capture needs the page in a different state, the button tells Brian what to do, for example "Reload the page and press again."
- **Inspiration media in a servable path, in git, or on the shared remote.**
- **Silent wrong matches.** A file must never attach to the wrong save. When in doubt, the capture fails and says why.
- **Silent partial captures.** If the button can't confirm it got every slide, the save is marked partial, never captured.

## Constraints

- Chrome on macOS holds Brian's Instagram session.
- The workbench runs locally (FastAPI in `src/quarry/ui/`, React + Quantic in `ui/`; the frontend build is committed in `src/quarry/ui/static/`). It may run from several Conductor workspaces on different ports.
- Chrome's messaging between a page and an extension carries only JSON, with size limits. Files therefore travel through Chrome's downloads, not through messages or localhost requests.
- Instagram's web markup and embedded data change without notice. Page-reading code lives in one small module and fails loudly.
- Instagram's web player tops out at about 1080 pixels wide, sometimes 1440. Downloadable video files are often 720p. "Best available" means best the page offers, not the creator's original.

## Approaches considered

- **A: Quarry button in Chrome (chosen by Brian).** Within it, two ways to move files:
  - **A1, upload to the workbench:** rejected after review. Chrome can't hand large files from the page to the extension this way. A localhost upload endpoint also needs pairing tokens and protection against other websites, and Chrome now prompts before sites reach the local network.
  - **A2, save through Chrome's downloads, then sweep (chosen):** the button saves files into a per-capture folder under `~/Downloads/quarry/`, and Quarry files them. There is no endpoint, no token, and no file passes through messages.
- **B: macOS screen capture plus drag-and-drop.** Kept only as the last-resort fallback for single posts.
- **C: Drive Brian's browser with Playwright or DevTools.** Rejected, because it is the automation Instagram prohibits.
- **Rejected earlier: an unattended logged-out preview fetcher.** robots.txt prohibits it.

## Design

### Overview

```
Brian on an Instagram post ──click──▶ Quarry button (extension)
   reads the post's embedded data, verifies the shortcode
   chrome.downloads ▶ ~/Downloads/quarry/<shortcode>__<capture-time>/
                         01.jpg  02.mp4  …  capture.json (written last)
Quarry sweep (workbench, or `quarry import-captures`)
   finished folders ▶ Drive: <root>/instagram/<id>/ (save.json + media)
Workbench Capture page: pending list · Open next · progress · fix-ups
```

### Where inspiration lives

The inspiration corpus, both save records and media, lives in one folder outside every git checkout: the **inspiration root**.

- **Brian's root is the Drive folder "Quarry inspiration saves"**, private to them.
  - Web: https://drive.google.com/drive/folders/1KKxZYdIfvicv-zunEObB2UJN-8c4LS_o
  - On this Mac: `~/Library/CloudStorage/GoogleDrive-bchristensen@ciq.com/My Drive/Quarry inspiration saves`
- **Why not the repo:** archiving a Conductor workspace deletes its folder.
- **Configuration:** `~/.config/quarry/config.toml` holds `inspiration_dir = "…"`, and `QUARRY_INSPIRATION_DIR` overrides it.
  - `import-instagram` and `import-captures` refuse to run without a root.
  - The workbench always starts. Without a root, only the Capture page is disabled, and it shows how to set one. Library work is unaffected.
- **Layout: one folder per save.** `<root>/instagram/<id>/`, holding:
  - `save.json`: the record;
  - media named by slide position, such as `01.jpg`, `02.mp4` and `02-poster.jpg`.

  One folder per save means file names never collide with ids and a cleanup can't touch another save's files. `<id>` is the importer's id (`ig-<lowercased shortcode>`, with `-2` added on a case clash). The exact shortcode lives in `save.json`.
- **Importer change.** The importer moves from flat `ig-x.json` files to this layout. It has only ever run in a scratch folder, so nothing needs migrating.
- **Writing to Drive safely:**
  - All writers take one cross-process lock, `~/.config/quarry/inspiration.lock` (`fcntl`). The writers are the importer, the sweep and workbench actions.
  - Each writer re-reads a record under the lock right before changing it, so nobody overwrites anyone else's changes.
  - Every file is written first to a temp area outside Drive (`~/.cache/quarry/tmp/`), then moved into place.
  - If the move crosses volumes, the file is copied to a dot-named temp file in the destination folder, then renamed. Dot-names never match `save.json` or media patterns.
  - Drive conflict copies (`save (1).json`) and anything that doesn't match the patterns are ignored, and the Capture page lists them as warnings.
- **Fast lookups:** the workbench keeps an in-memory index from shortcode to record, rebuilt from directory listings (cheap even when Drive streams files) and refreshed after each write. Records are read individually, only when needed.
- **Drive is the sync, not the backup:** Drive syncs deletions too. A periodic snapshot is an open item.

### The save record (`save.json`)

The existing importer fields stay as they are:
- `id`, `status`, `source_url`;
- `source.{origin, shortcode, kind, saved_at, ingested_at}`;
- `owner`, `caption`, `hashtags`, `collections`;
- the curator fields: `saved_because`, `concepts`, `style`, `description`.

`file: null` and `image_status` are replaced by:

```json
"capture": {
  "status": "captured",
  "slides_expected": 3,
  "items": [
    {"slide": 1, "media_id": "3512…", "type": "image", "file": "01.jpg", "width": 1080, "height": 1350,
     "sha256": "…", "method": "page-data", "captured_at": "2026-11-26T18:02:11Z"},
    {"slide": 2, "media_id": "3512…", "type": "video", "file": "02.mp4", "poster": "02-poster.jpg",
     "width": 720, "height": 1280, "duration_s": 22.4, "has_audio": true,
     "sha256": "…", "method": "page-data", "captured_at": "…"}
  ],
  "note": ""
}
```

**`capture.status` values:**
- `pending`: nothing captured yet.
- `partial`: some slides are missing, or the slide count couldn't be confirmed.
- `captured`: every expected slide is present.
- `unavailable`: Brian marked the post deleted or private.

**Rules:**
- Items are keyed by `slide`. A re-capture replaces any slide it brings and keeps the others. That is how a bad file gets fixed.
- Capture code writes only the `capture` block and never touches curator fields.
- **Records created by a capture** (a save not in the export yet) get:
  - `id` and `status: "proposed"`;
  - `source_url` and `source.{origin: "instagram", shortcode, kind, via: "capture", ingested_at}`, with `saved_at` set to null;
  - owner and caption from the page data where present.

  A later `import-instagram` run finds them by shortcode and fills in the export fields. Sorting by save date falls back to `captured_at` when `saved_at` is null.
- **Validator:** a `validate_inspiration_record()` function in `quarry/schema.py` checks every record before it is written by the importer, the sweep or the workbench. It is the one write path, matching the workbench spec's anti-goal.

### The Quarry button (Chrome extension)

The extension lives in `extension/` in this repo. It uses Manifest V3 and is loaded unpacked.

- **Permissions:** `downloads`, plus host access to `instagram.com` and Instagram's CDN hosts (`*.cdninstagram.com`, `*.fbcdn.net`). It needs no access to localhost.
- **Trigger:** a toolbar button plus a keyboard shortcut.
- **What a click does:**
  1. **Find the shortcode** in the tab URL. It accepts `/p/<code>/`, `/reel/<code>/`, `/reels/<code>/`, `/tv/<code>/` and `/<user>/p/<code>/`. The importer's URL pattern is widened to match the same forms.
  2. **Read the post's media data** that the page already embedded at load time: the JSON in its script tags. This lists every slide in order, each with a media id, the image candidates, and any video file URLs. Reading it is local and sends nothing to Instagram.
  3. **Verify the match.** The media data must belong to the URL's shortcode. If it doesn't (for example, Brian reached the post by clicking around inside Instagram and the data is stale), nothing is saved and the badge says "Reload the page (⌘R) and press again." The button never takes media from the visible page layout. That avoids grabbing from pop-ups, the "more posts" grid, or a reel loaded early.
  4. **Choose files.** For each slide: the largest image, or the highest-quality single video file that includes audio. For a video slide, it also takes the post's cover image as the poster.
  5. **Save through Chrome downloads** into `~/Downloads/quarry/<shortcode>__<yyyymmddThhmmss>/`, as `01.jpg`, `02.mp4` and so on. It saves one file at a time. Each file is a single CDN request, the same one the browser makes to show the media.
  6. **Write `capture.json` last.** It holds the shortcode, page URL, slide count, per-slide media id, type, method, and file names. The sweep treats a folder as finished only once that file exists and every file it lists is fully downloaded.
- **Feedback:** the toolbar badge shows progress and the result in plain words, such as "Saved 3 of 3", "Reload and press again", or "Not a post page".
- **Fallback, player recording.** This is only for posts whose page data offers no video file with audio.
  - **Build it only if needed:** build it in v1 if any spike reel lacks such a file. Otherwise defer it. In that case the sweep and the Capture page count reels that end up with "no video file", "Add file" covers them, and recording gets built once they pass 5% of captured reels. *(Claude's call.)*
  - **Recording:** the button records the playing `<video>` with `captureStream()` and `MediaRecorder` in MP4 (H.264/AAC) at a set bitrate. On Brian's click it may restart and unmute the video they are watching (the same as pressing replay), always at normal speed.
  - **Discarded:** the recording is thrown away if the tab is hidden, the video stalls, the page navigates, or the video is DRM-protected (black frames).
  - **End point:** it stops when playback wraps back to the start, because reels loop and never fire an end event.
  - **Duration check:** the recorded length must match the video's length within 5%.
  - **Saving:** how a recording reaches the downloads folder from the page is a spike item.
- **Last resort:** Brian drags a screen recording or image onto the save's row in the Capture page. That is an upload from the workbench's own page.

### The sweep

The sweep runs as a background loop in the workbench (about every 5 seconds, only while a root is configured) and as `quarry import-captures` for use without the workbench.

For each finished folder in `~/Downloads/quarry/`, under the cross-process lock:
1. **Check the files.** Images must open with Pillow. Video is probed with ffmpeg from the `imageio-ffmpeg` package (a new optional dependency, `pip install -e .[inspiration]`), which also gives duration, size and an audio check.
2. **Make a poster** with ffmpeg if the capture didn't include one.
3. **Find or create the record** by exact shortcode, then move the files into `<root>/instagram/<id>/`, replacing items with the same slide number.
4. **Set `capture.status`:**
   - `captured` if the number of slides in hand equals `slides_expected`;
   - `partial` otherwise, or if the expected count is unknown.
5. **Delete the downloads folder.**
6. **Failures:** a folder that fails a check is moved to `~/Downloads/quarry/_failed/` with a `reason.txt`. The Capture page shows it.

### Pacing

Opening many posts by direct link in a short time is the activity most likely to trigger Instagram's limits.

- **Session cap:** the Capture page counts posts opened today. After a cap (default 40, configurable), "Open next" turns off with "That's enough for today. Pick up tomorrow." The backlog then takes about a week of short sessions.
- **Open next:**
  - It targets a tab named `quarry-capture`, hoping to reuse one tab. Browsers may not honor that across sites, in which case each post opens a new tab. That's acceptable.
  - The workbench page sends `Referrer-Policy: no-referrer`, so Instagram never sees a localhost referrer. `rel="noreferrer"` isn't used because it would block the tab reuse. *(Claude's call.)*
  - It is always a click by Brian.
- **No hidden traffic:** nothing retries, prefetches, or runs while Brian is away.

### Capture page (workbench)

The workbench's current pages are library, rate, vocab and ingest. This adds **capture**. Version 1:

```
Capture: Instagram         212 pending · 4 partial · 63 captured · 2 unavailable   today 12/40
[ Open next ▸ ] (N)        filter: pending ▾
 ▸ ig-dfakjbkkzb8  ojovivomotion  reel  saved Nov 23   pending         [unavailable]
   ig-abc-123-x    nasaames       post  saved Nov 22   captured 3      [remove…] [add file]
   ig-…            rendahmag      post  saved Nov 20   partial 5/8     [open]
 ⚠ 1 capture failed: ~/Downloads/quarry/_failed/…  (unreadable video)
```

- **Open next** opens the next pending save (newest first), and the page waits for its capture to arrive.
- **Live updates:** the list refreshes every few seconds from the in-memory index.
- **Row actions:**
  - **Unavailable** marks a deleted or private post.
  - **Remove** deletes one captured item or all of them.
  - **Add file** takes a drag-and-drop for the last-resort fallback.
- **Thumbnails and playback** come after v1. When added, they're served by a capture-only route that reads the inspiration root. That route is never mounted in the MCP server, never in exports, and never touches `library.db`.

### Workbench hardening

The new page exposes the private saves list, and the workbench has no origin protection today. So, app-wide:
- **Host check:** a `TrustedHostMiddleware` allows only `127.0.0.1` and `localhost`. That blocks DNS-rebinding pages.
- **Origin check:** every state-changing request (POST, PATCH, PUT, DELETE) is rejected unless its `Origin` header matches the workbench's own address. That blocks other websites posting to it.
  - Requests with no `Origin` header (tests, CLI tools) are allowed, because a browser always sends one on a cross-site POST.
  - The Vite dev server's origin is allowed in development.
- **Existing ingest too:** this also closes the same hole in the existing `/api/ingest`.

### Docs to update with this work

- `docs/operations.md`: the import and capture how-to, the inspiration root, and pacing.
- `README.md`: the new commands and the `inspiration` extra.
- The `cli.py` message that still names `inspiration/instagram/`.
- `.gitignore`: reword the comment that says sidecars may be committed. Keep the binary patterns as a safety net, and add `*.webm`, `*.avif` and `*.heic`.
- The main spec's partition section: inspiration lives in an external root, not `inspiration/` in the repo, and its records are not in git.

### First build task: spike

Before building the rest, test on 3 real saves: a reel, a mixed carousel, and a single image. The spike answers:
1. Does the embedded page data list every slide and a video file with audio, on a fresh page load?
2. What resolution do the images and video come in?
3. Does `chrome.downloads` save CDN files into the named subfolder without prompting?
4. How does a recording reach the downloads folder?
5. Does replacing a file in the Drive folder keep its version history?

Bring the answers back to Brian before building further, if any of these hold:
- the page data has no video files;
- recording is the only path for most reels;
- downloads prompt every time.

## Decided

- Desktop first, using a Chrome extension: Brian.
- A click by Brian for every capture, with no automation of Instagram: Brian.
- Video is first-class: Brian ("these are important").
- Inspiration lives in Brian's Google Drive folder, not the repo: Brian.
- Revise toward the reviewer's simpler design (downloads plus sweep): Brian.
- Claude's calls:
  - page data as the main source, with recording as the fallback;
  - verifying the shortcode;
  - one folder per save;
  - the cross-process lock and temp-then-move writes;
  - session cap 40;
  - `imageio-ffmpeg`;
  - app-wide host and origin checks;
  - the workbench starts without a root.

## Left to the builder

- The exact page-data selectors and field names. These come from the spike, and all of it stays in one module.
- Recording details within the rules above.
- Badge wording, the keyboard shortcut, and the poll intervals.
- How the Capture page uses Quantic components, following `ui/AGENTS.md`.

## Open items

- **Backup.** Drive syncs deletions, so an accidental delete propagates. A periodic snapshot of the root to another location may be worth adding once the corpus is large.
- **CIQ Drive policy.** Third-party media in a company Drive is subject to CIQ's retention and offboarding rules. Flagged to Brian for a decision later.
- **Higher-res video.** If the spike shows Instagram's split high-quality streams beat the single file, joining them with ffmpeg is a later improvement.
