// Drives service-worker.js against a fake `chrome` to check the download sequence and badges.
const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')

const read = rel => fs.readFileSync(path.join(__dirname, '..', rel), 'utf8')

function worker({result, interruptAt = null, completeBeforeId = false}) {
  const log = {downloads: [], badges: [], titles: [], injected: null}
  const listeners = {clicked: [], changed: new Set()}
  let nextId = 1
  const fire = delta => { for (const l of [...listeners.changed]) l(delta) }
  const chrome = {
    action: {
      onClicked: {addListener: fn => listeners.clicked.push(fn)},
      setBadgeText: async ({text}) => { log.badges.push(text) },
      setTitle: async ({title}) => { log.titles.push(title) },
      setBadgeBackgroundColor: async () => {},
    },
    scripting: {executeScript: async opts => { log.injected = opts; return [{result}] }},
    runtime: {getPlatformInfo: async () => ({})},
    downloads: {
      onChanged: {addListener: fn => listeners.changed.add(fn), removeListener: fn => listeners.changed.delete(fn)},
      search: async () => [],
      download: async opts => {
        const id = nextId++
        log.downloads.push(opts)
        const bad = log.downloads.length === interruptAt
        const delta = bad ? {id, state: {current: 'interrupted'}, error: {current: 'SERVER_FORBIDDEN'}}
          : {id, state: {current: 'complete'}}
        if (completeBeforeId) fire(delta)
        else setTimeout(() => fire(delta), 0)
        return id
      },
    },
  }
  const ctx = vm.createContext({chrome, setInterval, clearInterval, setTimeout, console})
  ctx.importScripts = f => vm.runInContext(read(f), ctx)
  vm.runInContext(read('service-worker.js'), ctx)
  return {log, click: () => listeners.clicked[0]({id: 7}), listeners}
}

const plan = {
  folder: 'S1__20261126T180211',
  files: [{url: 'https://a/v.mp4', filename: '01.video.mp4'}, {url: 'https://a/p.jpg', filename: '01-poster.jpg'}],
  manifest: {version: 1, shortcode: 'S1', caption: 'a & b # c'},
}

test('saves each file in order, then capture.json, with overwrite and no prompt', async () => {
  const w = worker({result: {status: 'ok', plan}})
  await w.click()
  assert.deepEqual(JSON.parse(JSON.stringify(w.log.injected)), {target: {tabId: 7}, files: ['lib/postdata.js', 'content.js']})
  assert.deepEqual(w.log.downloads.map(d => d.filename),
    ['quarry/S1__20261126T180211/01.video.mp4', 'quarry/S1__20261126T180211/01-poster.jpg', 'quarry/S1__20261126T180211/capture.json'])
  for (const d of w.log.downloads) {
    assert.equal(d.saveAs, false)
    assert.equal(d.conflictAction, 'overwrite')
  }
  const last = w.log.downloads[2].url
  assert.ok(last.startsWith('data:application/json;charset=utf-8,'))
  assert.deepEqual(JSON.parse(decodeURIComponent(last.split(',').slice(1).join(','))), plan.manifest)
  assert.deepEqual(w.log.badges, ['1/2', '2/2', '✓'])
  assert.equal(w.listeners.changed.size, 0)
})

test('a download that finishes before its id comes back still counts', async () => {
  const w = worker({result: {status: 'ok', plan}, completeBeforeId: true})
  await w.click()
  assert.equal(w.log.downloads.length, 3)
  assert.equal(w.log.badges.at(-1), '✓')
})

test('an interrupted download stops the capture with the error badge and no capture.json', async () => {
  const w = worker({result: {status: 'ok', plan}, interruptAt: 1})
  await w.click()
  assert.equal(w.log.downloads.length, 1)  // no retry, nothing after it
  assert.deepEqual(w.log.badges, ['1/2', '!'])
  assert.match(w.log.titles.at(-1), /SERVER_FORBIDDEN/)
})

test('mismatch and not-a-post download nothing', async () => {
  const m = worker({result: {status: 'mismatch', plan: null}})
  await m.click()
  assert.equal(m.log.downloads.length, 0)
  assert.deepEqual(m.log.titles, ['Reload the page (⌘R) and press again.'])
  const n = worker({result: {status: 'not-a-post', plan: null}})
  await n.click()
  assert.equal(n.log.downloads.length, 0)
  assert.deepEqual(n.log.badges, ['–'])
})

test('registers only a click listener at startup: nothing runs on its own', () => {
  const w = worker({result: null})
  assert.equal(w.log.injected, null)
  assert.equal(w.log.downloads.length, 0)
})
