import type { Asset } from './state'

export const TAG_AXES = ['products', 'categories', 'verticals', 'concepts', 'style'] as const

export interface Draft {
  description: string
  tags: Record<(typeof TAG_AXES)[number], string[]>
  tone: string
  product_version: string
  captured_at: string
  usage_restrictions: string
  anti_example: boolean
  avoid_reason: string
}

export const toDraft = (a: Asset): Draft => ({
  description: a.description ?? '',
  tags: { products: a.products, categories: a.categories, verticals: a.verticals, concepts: a.concepts, style: a.style },
  tone: a.tone ?? '',
  product_version: a.product_version ?? '',
  captured_at: a.captured_at ?? '',
  usage_restrictions: (a.usage_restrictions ?? []).join(', '),
  anti_example: !!a.anti_example,
  avoid_reason: a.avoid_reason ?? '',
})

const sameList = (a: string[], b: string[]) => a.length === b.length && a.every((v, i) => v === b[i])

/** Only the fields that differ from the saved asset (the PATCH body). */
export function diffDraft(a: Asset, d: Draft): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  if (d.description !== (a.description ?? '')) out.description = d.description
  for (const axis of TAG_AXES) if (!sameList(d.tags[axis], a[axis])) out[axis] = d.tags[axis]
  if (a.class === 'background' && d.tone && d.tone !== (a.tone ?? '')) out.tone = d.tone
  if (a.class === 'screenshot') {
    if (d.product_version && d.product_version !== (a.product_version ?? '')) out.product_version = d.product_version
    if (d.captured_at && d.captured_at !== (a.captured_at ?? '')) out.captured_at = d.captured_at
  }
  const ur = d.usage_restrictions.split(',').map((s) => s.trim()).filter(Boolean)
  if (!sameList(ur, a.usage_restrictions ?? [])) out.usage_restrictions = ur
  // Turning anti-example off drops the reason server-side; turning it on sends the reason with it.
  if (d.anti_example !== !!a.anti_example) out.anti_example = d.anti_example
  if (d.anti_example && (out.anti_example !== undefined || d.avoid_reason !== (a.avoid_reason ?? '')))
    out.avoid_reason = d.avoid_reason
  return out
}

/** True when it is safe to drop the current draft: nothing unsaved, or the user agreed to discard it. */
export function canDiscard(dirty: boolean, ask: () => boolean): boolean {
  return !dirty || ask()
}
