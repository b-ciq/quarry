import { Alert, Button, ButtonBar, ButtonBarItem } from '@ctrliq/quantic-react'
import { VIEW_LABEL, type View } from '../gallery'

export interface Notice {
  kind: 'error' | 'warning' | 'success'
  text: string
}

interface Props {
  view: View
  counts: Record<View, number>
  onView: (v: View) => void
  shown: number
  total: number
  filtering: boolean
  onClear: () => void
  /** Bulk verdict over the items shown; null hides the buttons. */
  bulk: ((verdict: 'yes' | 'no') => void) | null
  undoLabel: string | null
  onUndo: () => void
}

/** Inbox / Approved switch, plus what applies to the whole view: filter count, bulk actions, undo, Rejected. */
export function ViewBar({ view, counts, onView, shown, total, filtering, onClear, bulk, undoLabel, onUndo }: Props) {
  return (
    <div className="view-bar">
      <ButtonBar aria-label="View">
        <ButtonBarItem active={view === 'inbox'} onClick={() => onView('inbox')}>{VIEW_LABEL.inbox} ({counts.inbox})</ButtonBarItem>
        <ButtonBarItem active={view === 'approved'} onClick={() => onView('approved')}>{VIEW_LABEL.approved} ({counts.approved})</ButtonBarItem>
      </ButtonBar>
      {filtering && (
        <>
          <span className="view-shown">{shown} of {total} shown</span>
          <Button size="sm" variant="ghost" onClick={onClear}>Clear filters</Button>
        </>
      )}
      <span className="spacer" />
      {bulk && (
        <>
          <Button size="sm" variant="outline" destructive onClick={() => bulk('no')}>Reject all {shown} shown</Button>
          <Button size="sm" variant="outline" onClick={() => bulk('yes')}>Approve all {shown} shown...</Button>
        </>
      )}
      {undoLabel && <Button size="sm" variant="ghost" onClick={onUndo} title={`Undo ${undoLabel} (Z)`}>Undo</Button>}
      <Button size="sm" variant={view === 'rejected' ? 'secondary' : 'ghost'} onClick={() => onView(view === 'rejected' ? 'inbox' : 'rejected')}>
        {view === 'rejected' ? 'Back to Inbox' : `Rejected (${counts.rejected})`}
      </Button>
    </div>
  )
}

export function NoticeBar({ notice, onClose }: { notice: Notice | null; onClose: () => void }) {
  if (!notice) return null
  return (
    <div className="notice-bar">
      <Alert type={notice.kind} showCloseButton onClose={onClose}>{notice.text}</Alert>
    </div>
  )
}
