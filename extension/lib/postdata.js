// Reads an Instagram post's embedded page data and plans what the Quarry button saves.
// A classic script (no modules): the service worker and content.js load it with
// importScripts / executeScript, and node tests load it with require. It is wrapped in a
// function so injecting it twice into the same page does not redeclare anything.
;(function () {
  'use strict'

  // The importer's POST_URL_RE forms (src/quarry/instagram.py), anchored to the real site so
  // a URL on another host that merely mentions instagram.com is not a post.
  const POST_URL_RE = /^https:\/\/www\.instagram\.com\/(?:[A-Za-z0-9._]+\/)?(p|reels?|tv)\/([A-Za-z0-9_-]+)/
  const KINDS = {p: 'post', reel: 'reel', reels: 'reel', tv: 'video'}
  const MISMATCH_TITLE = 'Reload the page (⌘R) and press again.'

  function shortcodeFromUrl(url) {
    const m = POST_URL_RE.exec(String(url || ''))
    return m ? {shortcode: m[2], kind: KINDS[m[1]]} : null
  }

  function isObject(v) {
    return v !== null && typeof v === 'object' && !Array.isArray(v)
  }

  // Depth-first, in document order: every object whose own `code` is the shortcode and that
  // has a `media_type` key. Other posts on the page (feeds, grids) are ignored.
  function findPostObjects(value, shortcode, out) {
    const stack = [value]
    while (stack.length) {
      const v = stack.pop()
      if (Array.isArray(v)) {
        for (let i = v.length - 1; i >= 0; i--) stack.push(v[i])
      } else if (isObject(v)) {
        if (v.code === shortcode && 'media_type' in v) out.push(v)
        const vals = Object.values(v)
        for (let i = vals.length - 1; i >= 0; i--) stack.push(vals[i])
      }
    }
    return out
  }

  function area(c) {
    return (Number(c.width) || 0) * (Number(c.height) || 0)
  }

  function largest(list) {
    let best = null
    for (const c of Array.isArray(list) ? list : []) {
      if (isObject(c) && typeof c.url === 'string' && /^https:\/\//.test(c.url) && (!best || area(c) > area(best))) best = c
    }
    return best
  }

  function decodeXml(s) {
    return s.replace(/&(#x[0-9a-fA-F]+|#[0-9]+|amp|lt|gt|quot|apos);/g, (_, e) => {
      if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10))
      return {amp: '&', lt: '<', gt: '>', quot: '"', apos: "'"}[e]
    })
  }

  function attrs(s) {
    const out = {}
    for (const m of s.matchAll(/([A-Za-z_:][\w:.-]*)\s*=\s*"([^"]*)"/g)) out[m[1]] = decodeXml(m[2])
    return out
  }

  // A small string parser for the on-demand DASH manifest (DOMParser is not available in
  // service workers). Returns {video: {url, width, height} | null, audio: {url} | null},
  // or null when it holds no usable Representation.
  function parseDash(mpd) {
    if (typeof mpd !== 'string' || !mpd) return null
    const videos = [], audios = []
    for (const set of mpd.matchAll(/<AdaptationSet\b([^>]*)>([\s\S]*?)<\/AdaptationSet>/g)) {
      const setAttrs = attrs(set[1])
      const setType = setAttrs.contentType || (setAttrs.mimeType || '').split('/')[0]
      for (const rep of set[2].matchAll(/<Representation\b([^>]*?)>([\s\S]*?)<\/Representation>/g)) {
        const a = attrs(rep[1])
        const base = /<BaseURL>([\s\S]*?)<\/BaseURL>/.exec(rep[2])
        const url = base ? decodeXml(base[1].trim()) : ''
        if (!/^https:\/\//.test(url)) continue
        const type = (a.mimeType || '').split('/')[0] || setType
        const r = {url, width: Number(a.width) || 0, height: Number(a.height) || 0, bandwidth: Number(a.bandwidth) || 0}
        if (type === 'video') videos.push(r)
        else if (type === 'audio') audios.push(r)
      }
    }
    if (!videos.length && !audios.length) return null
    // By resolution, never bandwidth alone: on real carousels 1080p has a lower bandwidth than 720p.
    videos.sort((x, y) => y.height - x.height || y.bandwidth - x.bandwidth)
    audios.sort((x, y) => y.bandwidth - x.bandwidth)
    const v = videos[0]
    return {video: v ? {url: v.url, width: v.width, height: v.height} : null, audio: audios[0] ? {url: audios[0].url} : null}
  }

  function readSlide(m, n) {
    if (m.media_type !== 1 && m.media_type !== 2) throw new Error(`slide ${n}: unsupported media_type ${m.media_type}`)
    const img = largest(m.image_versions2 && m.image_versions2.candidates)
    const slide = {
      media_id: m.pk != null ? String(m.pk) : null,
      type: m.media_type === 2 ? 'video' : 'image',
      image: img ? {url: img.url, width: Number(img.width) || 0, height: Number(img.height) || 0} : null,
      video: null,
    }
    if (slide.type === 'video') {
      const dash = parseDash(m.video_dash_manifest)
      if (dash && dash.video) {
        slide.video = {...dash.video, has_audio: Boolean(dash.audio), audio_url: dash.audio ? dash.audio.url : null, source: 'dash'}
      } else {
        const prog = largest(m.video_versions)
        if (prog) {
          slide.video = {url: prog.url, width: Number(prog.width) || 0, height: Number(prog.height) || 0,
            has_audio: typeof m.has_audio === 'boolean' ? m.has_audio : null, audio_url: null, source: 'progressive'}
        }
      }
    }
    return slide
  }

  // The post's slide objects, or a reason this copy of the post can't be used.
  function slideObjects(m) {
    if (m.media_type === 8) {
      const list = Array.isArray(m.carousel_media) ? m.carousel_media.filter(isObject) : []
      return list.length ? list : 'the carousel has no slide list in the page data'
    }
    if (m.media_type === 1 || m.media_type === 2) return [m]
    return `unsupported media_type ${m.media_type}`
  }

  // Post: {shortcode, owner: {username, name}, caption, slides_expected, slides: [{media_id, type, image, video}]}.
  // slide.video adds `audio_url` and `source` ('dash' or 'progressive') to {url, width, height, has_audio}.
  // Returns null when the page holds no copy of the post (a mismatch). The post can appear
  // more than once; a copy without its slide list is skipped for a later one, and if no copy
  // is usable this throws rather than save part of the post as if it were whole.
  function findPost(jsonTexts, shortcode) {
    if (!shortcode) return null
    const copies = []
    for (const text of jsonTexts || []) {
      let data
      try { data = JSON.parse(text) } catch { continue }
      findPostObjects(data, shortcode, copies)
    }
    if (!copies.length) return null
    const m = copies.find(c => Array.isArray(slideObjects(c)))
    if (!m) throw new Error(slideObjects(copies[0]))
    const user = isObject(m.user) ? m.user : {}
    const slides = slideObjects(m).map((s, i) => readSlide(s, i + 1))
    const count = m.carousel_media_count
    return {
      shortcode: m.code,
      owner: {username: typeof user.username === 'string' ? user.username : '',
        name: typeof user.full_name === 'string' ? user.full_name : ''},
      caption: isObject(m.caption) && typeof m.caption.text === 'string' ? m.caption.text : '',
      // Instagram's own count wins when it disagrees, so the sweep marks a short capture partial.
      slides_expected: Number.isInteger(count) && count > 0 ? count : slides.length,
      slides,
    }
  }

  function stamp(now) {
    const iso = now.toISOString()  // always UTC
    return {folder: iso.slice(0, 19).replace(/[-:]/g, ''), captured_at: iso.slice(0, 19) + 'Z'}
  }

  // -> {folder, files: [{url, filename}], manifest}; manifest follows the capture.json
  // contract checked by _check_capture in src/quarry/capture_sweep.py. Throws when a slide
  // has nothing to save, so a partial post is never planned.
  function planCapture(post, {kind, pageUrl, now}) {
    const t = stamp(now)
    const files = [], items = []
    post.slides.forEach((s, i) => {
      const nn = String(i + 1).padStart(2, '0')
      const item = {slide: i + 1, media_id: s.media_id, type: s.type}
      if (s.type === 'video') {
        if (!s.video) throw new Error(`slide ${i + 1}: no video URL in the page data`)
        if (!s.image) throw new Error(`slide ${i + 1}: no poster image in the page data`)
        if (s.video.source === 'dash') {
          files.push({url: s.video.url, filename: `${nn}.video.mp4`})
          if (s.video.audio_url) files.push({url: s.video.audio_url, filename: `${nn}.audio.mp4`})
          item.parts = {video: `${nn}.video.mp4`, audio: s.video.audio_url ? `${nn}.audio.mp4` : null}
        } else {
          files.push({url: s.video.url, filename: `${nn}.mp4`})
          item.file = `${nn}.mp4`
        }
        files.push({url: s.image.url, filename: `${nn}-poster.jpg`})
        item.poster = `${nn}-poster.jpg`
      } else {
        if (!s.image) throw new Error(`slide ${i + 1}: no image URL in the page data`)
        files.push({url: s.image.url, filename: `${nn}.jpg`})
        item.file = `${nn}.jpg`
      }
      item.method = 'page-data'
      items.push(item)
    })
    if (!items.length) throw new Error('the post has no slides')
    return {
      folder: `${post.shortcode}__${t.folder}`,
      files,
      manifest: {
        version: 1, shortcode: post.shortcode, page_url: pageUrl, kind,
        slides_expected: post.slides_expected || post.slides.length, owner: post.owner, caption: post.caption,
        captured_at: t.captured_at, items,
      },
    }
  }

  // Badge text and tooltip for each state the button can be in.
  function badgeFor(state) {
    switch (state && state.kind) {
      case 'saving':
        return {text: `${state.n}/${state.m}`, title: `Quarry: saving file ${state.n} of ${state.m}…`, color: '#555555'}
      case 'done':
        return {text: '✓', title: 'Quarry: saved. The workbench files it shortly.', color: '#1a7f37'}
      case 'mismatch':
        return {text: '⌘R', title: MISMATCH_TITLE, color: '#bf8700'}
      case 'not-a-post':
        return {text: '–', title: 'Quarry: not a post. Open a post, reel or video page and press again.', color: '#555555'}
      default:
        return {text: '!', title: `Quarry: save failed${state && state.message ? ': ' + state.message : ''}. Press again to retry.`, color: '#cf222e'}
    }
  }

  const api = {shortcodeFromUrl, findPost, planCapture, badgeFor, parseDash, MISMATCH_TITLE}
  globalThis.QuarryPostData = api
  if (typeof module !== 'undefined' && module.exports) module.exports = api
})()
