# Quarry button

A Chrome extension that saves the open Instagram post's photos and videos for Quarry. It runs only when you click it, or press its shortcut. It never retries, prefetches, scrolls or moves to another post on its own.

## Load it

1. Open `chrome://extensions`.
2. Turn on **Developer mode** (top right).
3. Click **Load unpacked** and select this `extension/` folder.
4. Optional: pin **Quarry button** to the toolbar from the puzzle-piece menu.

After pulling changes, click the reload arrow on the extension's card.

## Use it

1. Open a post, reel or video on instagram.com, and reload the page (⌘R) if you got there by clicking around inside Instagram.
2. Click the button, or press **Option+Shift+Q** (`Alt+Shift+Q`). To change the shortcut, go to `chrome://extensions/shortcuts`.
3. Files land in `~/Downloads/quarry/<shortcode>__<time>/`. `capture.json` is written last. The workbench's sweep then files the folder into the inspiration store.

## Badge

| Badge | Meaning |
|---|---|
| `2/5` | Saving file 2 of 5. |
| `✓` | Everything is saved, including `capture.json`. |
| `⌘R` | The page data is for a different post, which happens after moving between posts inside Instagram. Reload the page (⌘R) and press again. |
| `–` | This page isn't a post, reel or video. |
| `!` | A download failed and the capture stopped. Hover for the reason. Nothing is retried. Press again to start over: files with the same names are overwritten. |

A capture that stops partway has no `capture.json`, so the sweep leaves the folder alone.

## What it saves

- Photos: the largest image, as `NN.jpg`.
- Videos: the highest-resolution DASH video track and its audio track (`NN.video.mp4`, `NN.audio.mp4`), plus the cover image as `NN-poster.jpg`. If the page has no DASH manifest, it saves the largest single MP4 as `NN.mp4` instead. The sweep joins the tracks and converts them to H.264.
- Carousels: every slide, in order, numbered `01`, `02` and so on.

## Tests

```
node --test 'extension/test/*.test.js'
```

`lib/postdata.js` holds the parsing and planning, and is tested against the synthetic fixtures in `test/fixtures/`. The tests also run `content.js` and `service-worker.js` against a fake page and a fake `chrome` object.
