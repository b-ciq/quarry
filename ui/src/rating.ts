// Rating shapes stored on sidecars (bot and human verdicts) and the rate summary's agreement counts.

export type Verdict = 'yes' | 'no' | 'maybe'

export interface BotRating {
  verdict: Verdict
  strength: 'strong' | 'unsure'
  reason: string
  model: string
  at: string
  examples: string[]
  suggested_slugs: Record<string, string[]>
}
export interface HumanRating {
  verdict: Verdict
  by: string
  at: string
  reason?: string
}
export interface Rating {
  bot?: BotRating
  human?: HumanRating
}

export interface AgreementCount {
  agreed: number
  total: number
}
export interface Agreement {
  recent: AgreementCount
  strong: AgreementCount
  unsure: AgreementCount
}
