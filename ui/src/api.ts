import type { Asset } from './state'
import type { Agreement, Verdict } from './rating'
import type { CaptureItem, CaptureList, CaptureToday } from './capture'

export interface GitStatus {
  ahead: number
  behind: number
  dirty_managed: string[]
  dirty_other: string[]
}

export interface Status {
  index_stale: boolean
  exports_stale: boolean
  embedder_mode: string | null
  git: GitStatus | null
}

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`)
  return (await res.json()) as T
}

export const fetchAssets = () => getJson<Asset[]>('/api/assets')
export const fetchStatus = () => getJson<Status>('/api/status')
export const fetchVocabulary = () => getJson<Record<string, string[]>>('/api/vocabulary')

export type WriteResult =
  | { ok: true; asset: Asset }
  | { ok: false; status: number; error: string; errors: string[] }

async function send(method: string, url: string, body?: unknown): Promise<WriteResult> {
  try {
    const res = await fetch(url, {
      method,
      headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
    })
    const data = (await res.json().catch(() => ({}))) as { asset?: Asset; error?: string; errors?: string[] }
    if (res.ok && data.asset) return { ok: true, asset: withUrls(data.asset) }
    return { ok: false, status: res.status, error: data.error ?? `HTTP ${res.status}`, errors: data.errors ?? [] }
  } catch (e) {
    return { ok: false, status: 0, error: (e as Error).message, errors: [] }
  }
}

export const patchAsset = (id: string, fields: Record<string, unknown>) =>
  send('PATCH', `/api/assets/${encodeURIComponent(id)}`, fields)
export const confirmAsset = (id: string) => send('POST', `/api/assets/${encodeURIComponent(id)}/confirm`)
export const retireAsset = (id: string) => send('POST', `/api/assets/${encodeURIComponent(id)}/retire`)
export const restoreAsset = (id: string) => send('POST', `/api/assets/${encodeURIComponent(id)}/restore`)

export interface SimilarHit extends Asset {
  score: number
}
export const fetchSimilar = (id: string, limit = 8) =>
  getJson<SimilarHit[]>(`/api/assets/${encodeURIComponent(id)}/similar?limit=${limit}`)

/** Validator strings look like "tone: required ..."; group them by the leading field name. */
export function splitErrors(errors: string[]): { byField: Record<string, string[]>; general: string[] } {
  const byField: Record<string, string[]> = {}
  const general: string[] = []
  for (const e of errors) {
    const m = /^([a-z_]+)(?:\.[a-z_]+)?:/.exec(e)
    if (m) (byField[m[1]] ??= []).push(e)
    else general.push(e)
  }
  return { byField, general }
}

export interface CallResult<T = Record<string, unknown>> {
  ok: boolean
  status: number
  data: T
  /** Human message for a failed call: server `error`/`message`, validator errors, or the HTTP status. */
  error: string
}

async function call<T = Record<string, unknown>>(method: string, url: string, init?: { json?: unknown; form?: FormData }): Promise<CallResult<T>> {
  try {
    const res = await fetch(url, {
      method,
      headers: init?.json === undefined ? undefined : { 'Content-Type': 'application/json' },
      body: init?.form ?? (init?.json === undefined ? undefined : JSON.stringify(init.json)),
    })
    const data = (await res.json().catch(() => ({}))) as Record<string, unknown>
    const errors = Array.isArray(data.errors) ? ` (${(data.errors as string[]).join('; ')})` : ''
    const error = res.ok ? '' : `${(data.error as string) ?? (data.message as string) ?? `HTTP ${res.status}`}${errors}`
    return { ok: res.ok, status: res.status, data: data as T, error }
  } catch (e) {
    return { ok: false, status: 0, data: {} as T, error: (e as Error).message }
  }
}

const seg = encodeURIComponent
export const addSlug = (axis: string, slug: string) => call('POST', `/api/vocabulary/${seg(axis)}`, { json: { slug } })
export const renameSlug = (axis: string, slug: string, next: string) =>
  call('POST', `/api/vocabulary/${seg(axis)}/${seg(slug)}/rename`, { json: { new: next } })
export const mergeSlug = (axis: string, slug: string, into: string) =>
  call('POST', `/api/vocabulary/${seg(axis)}/${seg(slug)}/merge`, { json: { into } })
export const deleteSlug = (axis: string, slug: string) =>
  call<{ usage?: string[] }>('DELETE', `/api/vocabulary/${seg(axis)}/${seg(slug)}`)

export interface IngestResult {
  created: string[]
  skipped: { file: string; reason: string }[]
}
export const ingestFiles = (form: FormData) => call<IngestResult>('POST', '/api/ingest', { form })

export const syncNow = () => call<{ pulled: number; pushed: number; conflict: boolean; message: string }>('POST', '/api/sync')
export const startJob = (kind: 'reindex' | 'publish') => call<{ job_id: string }>('POST', `/api/${kind}`)

export interface Job {
  state: 'running' | 'done' | 'failed'
  log: string[]
  result: Record<string, unknown> | null
  error: string | null
}
export const fetchJob = (id: string) => call<Job>('GET', `/api/jobs/${seg(id)}`)

export interface SearchResult {
  ok: boolean
  hits: { id: string; score: number }[]
  stale: boolean
  /** Server message (e.g. embedder mismatch, no index) when !ok. */
  error: string
}
export async function searchIndex(q: string, limit = 50): Promise<SearchResult> {
  const r = await call<{ hits?: { id: string; score: number }[]; stale?: boolean }>(
    'GET', `/api/search?q=${encodeURIComponent(q)}&limit=${limit}`)
  return { ok: r.ok, hits: r.data.hits ?? [], stale: !!r.data.stale, error: r.error }
}

// --- Rating ---
export interface VerdictResult {
  asset: Asset
  commit: string
  needs_details: string[] | null
}
export interface BatchVerdictResult {
  commit: string | null
  applied: string[]
  needs_details: Record<string, string[]>
  failed: Record<string, string[]>
}
export interface RateSummary {
  waiting_for_bot: number
  to_review: number
  needs_details: number
  parked: number
  agreement: Agreement
  rater: { available: boolean; model: string; reason: string | null }
  learning: 'look-alike' | 'recent'
}

/** Sidecars from write endpoints lack the URLs the list endpoint adds. */
export const withUrls = (a: Asset): Asset => ({ ...a, thumb_url: `/thumbs/${a.id}.webp`, full_url: `/files/${a.id}` })

/** Validator errors from a failed call (422 bodies carry them as `errors`). */
export const callErrors = (r: CallResult<unknown>): string[] => {
  const errors = (r.data as { errors?: unknown } | null)?.errors
  return Array.isArray(errors) ? (errors as string[]) : []
}

export async function postVerdict(id: string, verdict: Verdict, reason?: string) {
  const r = await call<VerdictResult>('POST', `/api/assets/${seg(id)}/verdict`,
    { json: reason === undefined ? { verdict } : { verdict, reason } })
  if (r.ok && r.data.asset) r.data = { ...r.data, asset: withUrls(r.data.asset) }
  return r
}
export const postVerdicts = (verdict: Verdict, ids: string[]) =>
  call<BatchVerdictResult>('POST', '/api/verdicts', { json: { verdict, ids } })
export const postUndo = (commit: string) => call<{ commit: string; ids: string[] }>('POST', '/api/undo', { json: { commit } })
export const startAutoRate = (redo?: 'unsure') =>
  call<{ job_id: string }>('POST', `/api/rate${redo ? `?redo=${redo}` : ''}`)
export const fetchRateSummary = () => call<RateSummary>('GET', '/api/rate/summary')
/** A validator error blocking confirm, and whether the asset editor can fix that field. */
export interface NeedsDetailsError {
  error: string
  editable: boolean
}
/** Needs-details assets mapped to the errors that block confirming them. */
export const fetchNeedsDetails = () => call<Record<string, NeedsDetailsError[]>>('GET', '/api/rate/needs-details')

// --- Capture ---
export type CaptureResult<T> = { ok: true; data: T } | { ok: false; status: number; error: string }
export interface CaptureItemResult {
  item: CaptureItem
}
export interface CaptureOpenedResult extends CaptureItemResult {
  today: CaptureToday
}

async function captureCall<T>(method: string, url: string, form?: FormData): Promise<CaptureResult<T>> {
  const r = await call<T>(method, url, form ? { form } : undefined)
  return r.ok ? { ok: true, data: r.data } : { ok: false, status: r.status, error: r.error }
}

const shortcodeUrl = (shortcode: string) => `/api/capture/${seg(shortcode)}`
export const fetchCapture = () => captureCall<CaptureList>('GET', '/api/capture')
export const markOpened = (shortcode: string) => captureCall<CaptureOpenedResult>('POST', `${shortcodeUrl(shortcode)}/opened`)
export const markUnavailable = (shortcode: string) =>
  captureCall<CaptureItemResult>('POST', `${shortcodeUrl(shortcode)}/unavailable`)
export const removeSlide = (shortcode: string, slide: number) =>
  captureCall<CaptureItemResult>('DELETE', `${shortcodeUrl(shortcode)}/items/${slide}`)
export const removeAll = (shortcode: string) => captureCall<CaptureItemResult>('DELETE', `${shortcodeUrl(shortcode)}/items`)
export function addCaptureFile(shortcode: string, file: File, slide?: number) {
  const form = new FormData()
  form.append('file', file)
  if (slide !== undefined) form.append('slide', String(slide))
  return captureCall<CaptureItemResult>('POST', `${shortcodeUrl(shortcode)}/files`, form)
}
