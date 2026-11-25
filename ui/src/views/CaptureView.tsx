import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Alert, Button, Dialog, DialogActions, DialogTitle, Select, Table, TableBody, TableCell, TableControls, TableHead,
  TableHeader, TableRow,
} from '@ctrliq/quantic-react'
import { addCaptureFile, fetchCapture, markOpened, markUnavailable, removeAll, removeSlide, type CaptureResult } from '../api'
import {
  CAP_MESSAGE, capReached, FILTERS, filterItems, NOTHING_LEFT, nextPending, openTitle, savedDate, sortItems, statusLabel,
  type CaptureFilter, type CaptureItem, type CaptureList,
} from '../capture'

const POLL_MS = 3000

/** The Capture page. Mounted only while shown, so its poll stops when Brian leaves the page. */
export function CaptureView() {
  const [list, setList] = useState<CaptureList | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [filter, setFilter] = useState<CaptureFilter>('pending')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState<string | null>(null)
  const [waitingFor, setWaitingFor] = useState<string | null>(null)
  const [removing, setRemoving] = useState<CaptureItem | null>(null)
  const [removeWhich, setRemoveWhich] = useState('')
  const [dropTarget, setDropTarget] = useState<string | null>(null)
  const picker = useRef<HTMLInputElement>(null)
  const pickFor = useRef<string | null>(null)
  const inFlight = useRef(false)

  // One fetch at a time; a refresh asked for mid-fetch (say, after a fix-up) runs once that one lands.
  const again = useRef(false)
  const live = useRef(true)
  const refresh = useCallback(function load(): void {
    if (!live.current) return
    if (inFlight.current) { again.current = true; return }
    inFlight.current = true
    void fetchCapture().then((r) => {
      inFlight.current = false
      if (r.ok) { setList(r.data); setLoadError(null) } else setLoadError(r.error)
      if (again.current) { again.current = false; load() }
    })
  }, [])

  useEffect(() => {
    live.current = true
    refresh()
    const t = setInterval(refresh, POLL_MS)
    return () => { live.current = false; clearInterval(t) }
  }, [refresh])

  const items = useMemo(() => sortItems(list?.items ?? []), [list])
  const shown = useMemo(() => filterItems(items, filter), [items, filter])
  const next = useMemo(() => nextPending(items), [items])
  const waiting = waitingFor ? items.find((i) => i.shortcode === waitingFor && i.status === 'pending') : undefined

  const act = async <T,>(shortcode: string, fn: () => Promise<CaptureResult<T>>) => {
    setBusy(shortcode)
    setError(null)
    const r = await fn()
    setBusy(null)
    if (!r.ok) setError(`${shortcode}: ${r.error}`)
    refresh()
    return r.ok
  }

  // Fire-and-forget: the link itself opens the post; this only counts it against today's cap.
  const opened = (item: CaptureItem) => {
    setWaitingFor(item.shortcode)
    void markOpened(item.shortcode).then((r) => {
      if (r.ok) setList((l) => (l ? { ...l, today: r.data.today } : l))
      else setError(`${item.shortcode}: ${r.error}`)
      refresh()
    })
  }

  const openRemove = (item: CaptureItem) => {
    setRemoving(item)
    setRemoveWhich(String(item.slides[0]?.slide ?? ''))
  }
  const closeRemove = () => setRemoving(null)
  const remove = async (all: boolean) => {
    const item = removing
    if (!item) return
    const slide = Number(removeWhich)
    const ok = await act(item.shortcode, () => (all ? removeAll(item.shortcode) : removeSlide(item.shortcode, slide)))
    if (ok) closeRemove()
  }

  const addFile = (shortcode: string, files: FileList | null) => {
    const file = files?.[0]
    if (file) void act(shortcode, () => addCaptureFile(shortcode, file))
  }

  if (!list) {
    return (
      <div className="capture">
        {loadError ? <Alert type="error"><span slot="title">Could not load captures</span>{loadError}</Alert> : <p className="empty">Loading...</p>}
      </div>
    )
  }
  if (!list.enabled) {
    return <div className="capture"><p className="capture-setup">{list.setup}</p></div>
  }

  const { counts, today } = list
  const atCap = capReached(today)

  return (
    <div className="capture">
      <header className="capture-head">
        <h2>Capture: Instagram</h2>
        <span className="capture-counts">
          {counts.pending} pending · {counts.partial} partial · {counts.captured} captured · {counts.unavailable} unavailable
        </span>
        <span className="ops-spacer" />
        <span className="capture-today" title="Posts opened today, against the daily cap">today {today.opened}/{today.cap}</span>
      </header>

      <div className="capture-next">
        {atCap ? (
          <Button variant="outline" disabled>{CAP_MESSAGE}</Button>
        ) : next ? (
          <Button
            as="a"
            href={next.source_url}
            target="quarry-capture"
            onClick={() => opened(next)}
            onAuxClick={(e) => { if (e.button === 1) opened(next) }}
          >
            Open next
          </Button>
        ) : (
          <Button variant="outline" disabled>{NOTHING_LEFT}</Button>
        )}
        {!atCap && next && <span className="capture-next-id">{next.id} · {next.owner || 'unknown owner'} · {next.kind}</span>}
        {waiting && <span className="capture-waiting" role="status">Waiting for {waiting.id} to arrive...</span>}
      </div>

      {loadError && <Alert type="warning"><span slot="title">Refresh failed</span>{loadError}</Alert>}
      {error && (
        <Alert type="error" showCloseButton onClose={() => setError(null)}>
          <span slot="title">That did not work</span>
          {error}
        </Alert>
      )}
      {list.failed.length > 0 && (
        <Alert type="warning">
          <span slot="title">{list.failed.length} capture{list.failed.length === 1 ? '' : 's'} failed</span>
          <ul className="capture-banner-list">
            {list.failed.map((f) => <li key={f.folder}>_failed/{f.folder}{f.reason ? `: ${f.reason}` : ''}</li>)}
          </ul>
        </Alert>
      )}
      {list.warnings.length > 0 && (
        <Alert type="warning">
          <span slot="title">{list.warnings.length} warning{list.warnings.length === 1 ? '' : 's'}</span>
          <ul className="capture-banner-list">
            {list.warnings.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </Alert>
      )}

      <Table dense aria-label="Instagram saves">
        <TableControls slot="toolbar" aria-label="Filter saves">
          <Select
            size="sm"
            aria-label="Status filter"
            options={FILTERS.map((f) => [f, f])}
            value={filter}
            onValueChanged={(e) => setFilter(e.detail.value as CaptureFilter)}
          />
          <span slot="end" className="result-count">{shown.length} shown</span>
        </TableControls>
        <TableHeader slot="header">
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Kind</TableHead>
            <TableHead>Saved</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shown.map((item) => (
            <TableRow
              key={item.shortcode}
              selected={dropTarget === item.shortcode}
              onDragOver={(e) => { e.preventDefault(); setDropTarget(item.shortcode) }}
              onDragLeave={() => setDropTarget((t) => (t === item.shortcode ? null : t))}
              onDrop={(e) => { e.preventDefault(); setDropTarget(null); addFile(item.shortcode, e.dataTransfer.files) }}
            >
              <TableCell role="rowheader">{item.id}</TableCell>
              <TableCell>{item.owner}</TableCell>
              <TableCell>{item.kind}</TableCell>
              <TableCell>{savedDate(item)}</TableCell>
              <TableCell>{statusLabel(item)}</TableCell>
              <TableCell>
                <div className="capture-actions">
                  {atCap ? (
                    <span title={openTitle(item, today)}>
                      <Button size="xs" variant="outline" disabled aria-label={`Open ${item.id} on Instagram`}>Open</Button>
                    </span>
                  ) : (
                    <Button size="xs" variant="outline" as="a" href={item.source_url} target="quarry-capture"
                      title={openTitle(item, today)} aria-label={`Open ${item.id} on Instagram`}
                      onClick={() => opened(item)} onAuxClick={(e) => { if (e.button === 1) opened(item) }}>Open</Button>
                  )}
                  <Button size="xs" variant="outline" disabled={busy !== null || item.status === 'unavailable'}
                    aria-label={`Mark ${item.id} unavailable`}
                    onClick={() => void act(item.shortcode, () => markUnavailable(item.shortcode))}>Unavailable</Button>
                  <Button size="xs" variant="outline" destructive disabled={busy !== null || item.slides.length === 0}
                    aria-label={`Remove files from ${item.id}`} onClick={() => openRemove(item)}>Remove...</Button>
                  <Button size="xs" variant="outline" disabled={busy !== null}
                    aria-label={`Add a file to ${item.id}`}
                    onClick={() => { pickFor.current = item.shortcode; picker.current?.click() }}>Add file</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {shown.length === 0 && <p className="empty">No {filter === 'all' ? '' : `${filter} `}saves.</p>}
      <p className="capture-hint">Drop an image or video on a row to add it to that save.</p>

      <input
        ref={picker}
        type="file"
        accept="image/jpeg,image/png,image/webp,video/mp4,video/quicktime,video/webm"
        hidden
        aria-label="Choose a file to add"
        onChange={(e) => { if (pickFor.current) addFile(pickFor.current, e.target.files); e.target.value = '' }}
      />

      <Dialog open={removing !== null} size="md" onOpenChanged={(e) => { if (!e.detail.open) closeRemove() }}>
        <DialogTitle slot="header">Remove files from {removing?.id ?? ''}?</DialogTitle>
        <p>Remove this slide deletes the chosen slide's file. Remove all slides deletes every file captured for this save. Either way the save goes back to partial or pending.</p>
        <div className="field">
          <span className="field-label">Slide</span>
          <Select
            size="sm"
            aria-label="Slide to remove"
            options={(removing?.slides ?? []).map((s) => [`Slide ${s.slide} (${s.type})`, String(s.slide)])}
            value={removeWhich}
            onValueChanged={(e) => setRemoveWhich(e.detail.value)}
          />
        </div>
        <DialogActions slot="footer">
          <Button variant="outline" onClick={closeRemove}>Cancel</Button>
          <Button variant="outline" destructive disabled={busy !== null || !removeWhich} onClick={() => void remove(false)}>
            Remove this slide
          </Button>
          <Button destructive disabled={busy !== null} onClick={() => void remove(true)}>
            Remove all slides
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
