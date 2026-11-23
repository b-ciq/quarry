// Pure review-queue state. The queue is a snapshot of proposed ids taken on entry.

export interface QueueState {
  queue: string[]
  index: number
  exited: boolean
}

export type QueueAction =
  | { type: 'next' }
  | { type: 'prev' }
  | { type: 'confirmed' }
  | { type: 'retired' }
  | { type: 'exit' }

export const initQueue = (ids: string[]): QueueState => ({ queue: ids, index: 0, exited: ids.length === 0 })

export const current = (s: QueueState): string | undefined => s.queue[s.index]

export function reviewReducer(s: QueueState, a: QueueAction): QueueState {
  if (s.exited) return s
  switch (a.type) {
    case 'next':
      return { ...s, index: Math.min(s.index + 1, s.queue.length - 1) }
    case 'prev':
      return { ...s, index: Math.max(s.index - 1, 0) }
    case 'confirmed':
    case 'retired': {
      // The next item slides into the current slot; at the end, fall back to the new last item.
      const queue = s.queue.filter((_, i) => i !== s.index)
      return { queue, index: Math.min(s.index, queue.length - 1), exited: queue.length === 0 }
    }
    case 'exit':
      return { ...s, exited: true }
  }
}
