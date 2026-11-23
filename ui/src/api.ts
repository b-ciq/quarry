import type { Asset } from './state'

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
