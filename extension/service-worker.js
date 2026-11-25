// The Quarry button. Everything here starts from Brian's click (or its keyboard shortcut):
// no retries, no prefetching, no navigation. Files go to ~/Downloads/quarry/<folder>/, and
// capture.json is written last so the sweep only files a complete folder.
importScripts('lib/postdata.js')

const {badgeFor} = globalThis.QuarryPostData
let busy = false

chrome.action.onClicked.addListener(async tab => {
  if (busy || !tab || tab.id == null) return  // one capture at a time; a second click is ignored
  busy = true
  // Any extension API call resets the service worker's idle timer, so a long video download
  // is not cut off with capture.json unwritten. This is a local call, not an Instagram request.
  const keepAlive = setInterval(() => chrome.runtime.getPlatformInfo(), 20000)
  try {
    await capture(tab.id)
  } catch (e) {
    await show(tab.id, {kind: 'error', message: String(e && e.message || e)})
  } finally {
    clearInterval(keepAlive)
    busy = false
  }
})

async function capture(tabId) {
  const [injection] = await chrome.scripting.executeScript({target: {tabId}, files: ['lib/postdata.js', 'content.js']})
  const res = injection && injection.result
  if (!res) throw new Error('could not read the page')
  if (res.status !== 'ok') {
    await show(tabId, {kind: res.status, message: res.message})
    return
  }
  const {folder, files, manifest} = res.plan
  for (let i = 0; i < files.length; i++) {
    await show(tabId, {kind: 'saving', n: i + 1, m: files.length})
    await download(files[i].url, `quarry/${folder}/${files[i].filename}`)
  }
  const json = JSON.stringify(manifest, null, 2)
  await download('data:application/json;charset=utf-8,' + encodeURIComponent(json), `quarry/${folder}/capture.json`)
  await show(tabId, {kind: 'done'})
}

// Starts one download and resolves when it completes; rejects if it is interrupted.
function download(url, filename) {
  return new Promise((resolve, reject) => {
    let id = null
    const early = []  // changes that arrive before download() hands back the id
    const settle = delta => {
      const state = delta.state && delta.state.current
      if (state === 'complete') finish(resolve)
      else if (state === 'interrupted') {
        const why = (delta.error && delta.error.current) || 'interrupted'
        finish(() => reject(new Error(`${filename.split('/').pop()}: ${why}`)))
      }
    }
    const onChanged = delta => {
      if (id === null) early.push(delta)
      else if (delta.id === id) settle(delta)
    }
    let done = false
    const finish = fn => {
      if (done) return
      done = true
      chrome.downloads.onChanged.removeListener(onChanged)
      fn()
    }
    chrome.downloads.onChanged.addListener(onChanged)
    chrome.downloads.download({url, filename, saveAs: false, conflictAction: 'overwrite'}).then(async newId => {
      id = newId
      for (const d of early) if (d.id === id) settle(d)
      if (done) return
      // In case it finished before the listener saw it.
      const [item] = await chrome.downloads.search({id})
      if (item) settle({state: {current: item.state}, error: {current: item.error}})
    }).catch(e => finish(() => reject(e)))
  })
}

async function show(tabId, state) {
  const b = badgeFor(state)
  try {
    await chrome.action.setBadgeBackgroundColor({tabId, color: b.color})
    await chrome.action.setBadgeText({tabId, text: b.text})
    await chrome.action.setTitle({tabId, title: b.title})
  } catch {
    // The tab was closed; the downloads carry on regardless.
  }
}
