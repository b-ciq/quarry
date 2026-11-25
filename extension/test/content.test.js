// Runs lib/postdata.js and content.js the way chrome.scripting.executeScript does: as classic
// scripts in one shared global, with content.js's last expression as the result.
const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')

const read = rel => fs.readFileSync(path.join(__dirname, '..', rel), 'utf8')
const load = name => JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8'))

function page(href, blocks) {
  const document = {
    querySelectorAll(sel) {
      assert.equal(sel, 'script[type="application/json"]')
      return blocks.map(textContent => ({textContent}))
    },
  }
  return vm.createContext({location: new URL(href), document})
}

function inject(ctx) {
  vm.runInContext(read('lib/postdata.js'), ctx)
  // executeScript hands the result back as a plain clone; JSON matches that for these values.
  return JSON.parse(JSON.stringify(vm.runInContext(read('content.js'), ctx)))
}

test('content.js plans the post on its own page', () => {
  const r = inject(page('https://www.instagram.com/fakecarousel/p/FAKEcar1/?img_index=2', load('carousel-mixed.json')))
  assert.equal(r.status, 'ok')
  assert.match(r.plan.folder, /^FAKEcar1__\d{8}T\d{6}$/)
  assert.equal(r.plan.manifest.page_url, 'https://www.instagram.com/fakecarousel/p/FAKEcar1/')
  assert.equal(r.plan.manifest.kind, 'post')
  assert.equal(r.plan.files.length, 5)
})

test('content.js reports a mismatch when the page data is for another post', () => {
  // In-app navigation: the URL says FAKEcar1 but the page data still holds the reel.
  const r = inject(page('https://www.instagram.com/p/FAKEcar1/', load('reel.json')))
  assert.deepEqual(r, {status: 'mismatch', plan: null})
})

test('content.js reports not-a-post off a post page', () => {
  assert.deepEqual(inject(page('https://www.instagram.com/explore/', load('reel.json'))), {status: 'not-a-post', plan: null})
})

test('content.js reports an error when the post cannot be planned', () => {
  const blocks = [JSON.stringify({x: {code: 'V9', pk: '1', media_type: 2}})]
  const r = inject(page('https://www.instagram.com/reel/V9/', blocks))
  assert.equal(r.status, 'error')
  assert.match(r.message, /slide 1/)
})

test('injecting both scripts twice into the same page works', () => {
  const ctx = page('https://www.instagram.com/reel/FAKEreel1/', load('reel.json'))
  inject(ctx)
  const r = inject(ctx)
  assert.equal(r.status, 'ok')
  assert.equal(r.plan.manifest.kind, 'reel')
})
