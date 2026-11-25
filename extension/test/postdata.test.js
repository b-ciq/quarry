const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const {shortcodeFromUrl, findPost, planCapture, badgeFor, parseDash} = require('../lib/postdata.js')

const load = name => JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8'))
const NOW = new Date('2026-11-26T18:02:11Z')
const plan = (fixture, code, kind = 'post') =>
  planCapture(findPost(load(fixture), code), {kind, pageUrl: `https://www.instagram.com/p/${code}/`, now: NOW})

// A minimal block holding one post object, for shapes the fixtures do not cover.
const block = media => [JSON.stringify({require: [[null, null, null, [{__bbox: {result: {data: {xig_fetch_media: media}}}}]]]})]

test('shortcodeFromUrl accepts all forms', () => {
  assert.deepEqual(shortcodeFromUrl('https://www.instagram.com/u.ser/p/AbC_1-x/?img_index=2'), {shortcode: 'AbC_1-x', kind: 'post'})
  assert.deepEqual(shortcodeFromUrl('https://www.instagram.com/reels/R1/'), {shortcode: 'R1', kind: 'reel'})
  assert.deepEqual(shortcodeFromUrl('https://www.instagram.com/reel/R2/'), {shortcode: 'R2', kind: 'reel'})
  assert.deepEqual(shortcodeFromUrl('https://www.instagram.com/tv/T1/'), {shortcode: 'T1', kind: 'video'})
  assert.deepEqual(shortcodeFromUrl('https://www.instagram.com/p/P1'), {shortcode: 'P1', kind: 'post'})
  assert.equal(shortcodeFromUrl('https://www.instagram.com/explore/'), null)
  assert.equal(shortcodeFromUrl('https://www.instagram.com/someone/'), null)
  assert.equal(shortcodeFromUrl(''), null)
})

test('findPost verifies the shortcode', () => {
  assert.equal(findPost(load('carousel-mixed.json'), 'FAKEcar1').slides.length, 3)
  assert.equal(findPost(load('carousel-mixed.json'), 'SOMEOTHER'), null)
  assert.equal(findPost(load('carousel-mixed.json'), 'fakecar1'), null)  // case-sensitive
})

test('findPost reads owner, caption and slide ids', () => {
  const p = findPost(load('carousel-mixed.json'), 'FAKEcar1')
  assert.equal(p.shortcode, 'FAKEcar1')
  assert.deepEqual(p.owner, {username: 'fakecarousel', name: 'Fakecarousel Studio'})
  assert.equal(p.caption, 'Fake carousel caption')
  assert.deepEqual(p.slides.map(s => s.media_id), ['301', '302', '303'])
  assert.deepEqual(p.slides.map(s => s.type), ['image', 'video', 'image'])
  assert.equal(p.slides[0].video, null)
  assert.equal(p.slides[0].image.url, 'https://scontent.cdninstagram.com/fake/car1-s1-1080.jpg?stp=x')
})

test('findPost skips unreadable blocks and a null caption', () => {
  const texts = ['not json', ...block({code: 'X1', pk: '1', media_type: 1, user: {username: 'u', full_name: 'U'},
    caption: null, image_versions2: {candidates: [{width: 10, height: 10, url: 'https://a/x.jpg'}]}})]
  const p = findPost(texts, 'X1')
  assert.equal(p.caption, '')
  assert.equal(p.slides.length, 1)
})

test('findPost on the decoy code resolves only to the decoy, never to FAKEreel1', () => {
  const p = findPost(load('reel.json'), 'OTHERreel9')
  assert.equal(p.shortcode, 'OTHERreel9')
  assert.deepEqual(p.slides.map(s => s.media_id), ['999'])
  const real = findPost(load('reel.json'), 'FAKEreel1')
  assert.deepEqual(real.slides.map(s => s.media_id), ['201'])
})

test('findPost ignores an object with the code but no media_type', () => {
  const texts = [JSON.stringify({route: {code: 'X2'}}), ...block({code: 'X3', pk: '3', media_type: 1,
    image_versions2: {candidates: [{width: 1, height: 1, url: 'https://a/y.jpg'}]}})]
  assert.equal(findPost(texts, 'X2'), null)
})

test('planCapture picks largest image, audio video, posters, ordered names', () => {
  const p = planCapture(findPost(load('carousel-mixed.json'), 'FAKEcar1'), {kind: 'post', pageUrl: 'https://www.instagram.com/p/FAKEcar1/', now: new Date('2026-11-26T18:02:11Z')})
  assert.equal(p.folder, 'FAKEcar1__20261126T180211')
  assert.deepEqual(p.files.map(f => f.filename), ['01.jpg', '02.video.mp4', '02.audio.mp4', '02-poster.jpg', '03.jpg'])
  assert.match(p.files[1].url, /car1-s2-1080p/)   // highest resolution, despite lower bandwidth
  assert.equal(p.manifest.slides_expected, 3)
  assert.deepEqual(p.manifest.items.map(i => i.type), ['image', 'video', 'image'])
})

test('planCapture writes the capture.json contract exactly', () => {
  const p = plan('carousel-mixed.json', 'FAKEcar1')
  assert.deepEqual(p.manifest, {
    version: 1, shortcode: 'FAKEcar1', page_url: 'https://www.instagram.com/p/FAKEcar1/', kind: 'post',
    slides_expected: 3, owner: {username: 'fakecarousel', name: 'Fakecarousel Studio'},
    caption: 'Fake carousel caption', captured_at: '2026-11-26T18:02:11Z',
    items: [
      {slide: 1, media_id: '301', type: 'image', file: '01.jpg', method: 'page-data'},
      {slide: 2, media_id: '302', type: 'video', parts: {video: '02.video.mp4', audio: '02.audio.mp4'},
        poster: '02-poster.jpg', method: 'page-data'},
      {slide: 3, media_id: '303', type: 'image', file: '03.jpg', method: 'page-data'},
    ],
  })
  // XML entities in BaseURL are decoded
  assert.equal(p.files[1].url, 'https://scontent.cdninstagram.com/fake/dash-car1-s2-1080p.mp4?sig=1&x=2')
  assert.equal(p.files[3].url, 'https://scontent.cdninstagram.com/fake/car1-s2-1080.jpg?stp=x')
})

test('captured_at and folder drop milliseconds and use UTC', () => {
  const post = findPost(load('image-post.json'), 'FAKEimg1')
  const p = planCapture(post, {kind: 'post', pageUrl: 'u', now: new Date('2026-01-02T03:04:05.678Z')})
  assert.equal(p.folder, 'FAKEimg1__20260102T030405')
  assert.equal(p.manifest.captured_at, '2026-01-02T03:04:05Z')
})

test('image post plans exactly one slide at the largest size', () => {
  const p = plan('image-post.json', 'FAKEimg1')
  assert.deepEqual(p.files, [{url: 'https://scontent.cdninstagram.com/fake/img1-2048.jpg?stp=x', filename: '01.jpg'}])
  assert.equal(p.manifest.slides_expected, 1)
  assert.equal(p.manifest.items.length, 1)
})

test('reel plans one slide with dash-reel1-1080p and its audio', () => {
  const p = plan('reel.json', 'FAKEreel1', 'reel')
  assert.equal(p.manifest.kind, 'reel')
  assert.equal(p.manifest.slides_expected, 1)
  assert.deepEqual(p.files.map(f => f.filename), ['01.video.mp4', '01.audio.mp4', '01-poster.jpg'])
  assert.match(p.files[0].url, /dash-reel1-1080p\.mp4/)
  assert.match(p.files[1].url, /dash-reel1-audio\.mp4/)
  assert.match(p.files[2].url, /reel1-1920\.jpg/)
  assert.deepEqual(p.manifest.items[0].parts, {video: '01.video.mp4', audio: '01.audio.mp4'})
})

test('a video with no audio Representation gets parts.audio null', () => {
  const mpd = '<MPD><Period><AdaptationSet contentType="video"><Representation id="a" bandwidth="5" width="640" height="640"><BaseURL>https://a/v.mp4</BaseURL></Representation></AdaptationSet></Period></MPD>'
  const post = findPost(block({code: 'S1', pk: '7', media_type: 2, video_dash_manifest: mpd,
    image_versions2: {candidates: [{width: 640, height: 640, url: 'https://a/p.jpg'}]}}), 'S1')
  const p = planCapture(post, {kind: 'post', pageUrl: 'u', now: NOW})
  assert.deepEqual(p.files.map(f => f.filename), ['01.video.mp4', '01-poster.jpg'])
  assert.deepEqual(p.manifest.items[0].parts, {video: '01.video.mp4', audio: null})
})

test('no video_dash_manifest falls back to the largest video_versions entry as NN.mp4', () => {
  const post = findPost(block({code: 'V1', pk: '8', media_type: 2, video_dash_manifest: null,
    video_versions: [{type: 101, width: 480, height: 480, url: 'https://a/small.mp4'},
      {type: 102, width: 720, height: 720, url: 'https://a/big.mp4'}],
    image_versions2: {candidates: [{width: 720, height: 720, url: 'https://a/p.jpg'}]}}), 'V1')
  const p = planCapture(post, {kind: 'post', pageUrl: 'u', now: NOW})
  assert.deepEqual(p.files, [{url: 'https://a/big.mp4', filename: '01.mp4'}, {url: 'https://a/p.jpg', filename: '01-poster.jpg'}])
  assert.deepEqual(p.manifest.items[0], {slide: 1, media_id: '8', type: 'video', file: '01.mp4', poster: '01-poster.jpg', method: 'page-data'})
})

test('a manifest with no video Representation also falls back to video_versions', () => {
  const mpd = '<MPD><Period><AdaptationSet contentType="audio"><Representation id="a" bandwidth="5"><BaseURL>https://a/a.mp4</BaseURL></Representation></AdaptationSet></Period></MPD>'
  const post = findPost(block({code: 'V2', pk: '9', media_type: 2, video_dash_manifest: mpd,
    video_versions: [{width: 720, height: 720, url: 'https://a/prog.mp4'}],
    image_versions2: {candidates: [{width: 720, height: 720, url: 'https://a/p.jpg'}]}}), 'V2')
  const p = planCapture(post, {kind: 'post', pageUrl: 'u', now: NOW})
  assert.deepEqual(p.files.map(f => f.filename), ['01.mp4', '01-poster.jpg'])
  assert.equal(p.manifest.items[0].file, '01.mp4')
})

test('parseDash ties on height break by bandwidth, and decodes entities', () => {
  const mpd = '<MPD><AdaptationSet contentType="video">' +
    '<Representation bandwidth="100" width="720" height="720"><BaseURL>https://a/lo.mp4?a=1&amp;b=2</BaseURL></Representation>' +
    '<Representation bandwidth="200" width="720" height="720"><BaseURL>https://a/hi.mp4?a=1&amp;b=2</BaseURL></Representation>' +
    '</AdaptationSet></MPD>'
  assert.deepEqual(parseDash(mpd), {video: {url: 'https://a/hi.mp4?a=1&b=2', width: 720, height: 720}, audio: null})
  assert.equal(parseDash('garbage'), null)
  assert.equal(parseDash(null), null)
})

test('a video slide with nothing to download makes planCapture throw', () => {
  const post = findPost(block({code: 'V3', pk: '1', media_type: 2,
    image_versions2: {candidates: [{width: 1, height: 1, url: 'https://a/p.jpg'}]}}), 'V3')
  assert.throws(() => planCapture(post, {kind: 'post', pageUrl: 'u', now: NOW}))
})

test('badgeFor covers every state', () => {
  assert.equal(badgeFor({kind: 'mismatch'}).title, 'Reload the page (⌘R) and press again.')
  assert.deepEqual(badgeFor({kind: 'saving', n: 2, m: 5}).text, '2/5')
  for (const kind of ['saving', 'done', 'mismatch', 'not-a-post', 'error']) {
    const b = badgeFor({kind, n: 1, m: 2})
    assert.equal(typeof b.text, 'string')
    assert.ok(b.title.length > 0, kind)
  }
  assert.ok(badgeFor({kind: 'error', message: 'boom'}).title.includes('boom'))
})
