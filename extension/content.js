// Injected on Brian's click, after lib/postdata.js. Reads the page's embedded JSON and returns
// {status, plan} to the service worker: its last expression is the executeScript result.
// It never fetches, scrolls or navigates.
;(function () {
  const {shortcodeFromUrl, findPost, planCapture} = globalThis.QuarryPostData
  if (location.protocol !== 'https:' || location.hostname !== 'www.instagram.com') return {status: 'not-a-post', plan: null}
  const target = shortcodeFromUrl(location.href)
  if (!target) return {status: 'not-a-post', plan: null}
  const texts = Array.from(document.querySelectorAll('script[type="application/json"]'), s => s.textContent || '')
  try {
    // After in-app navigation the page data still describes the first post, so the shortcode
    // will not be found and Brian is asked to reload.
    const post = findPost(texts, target.shortcode)
    if (!post) return {status: 'mismatch', plan: null}
    const plan = planCapture(post, {kind: target.kind, pageUrl: location.origin + location.pathname, now: new Date()})
    return {status: 'ok', plan}
  } catch (e) {
    return {status: 'error', plan: null, message: String(e && e.message || e)}
  }
})()
