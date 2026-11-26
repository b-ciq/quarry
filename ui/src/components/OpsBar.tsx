import { useState } from 'react'
import { Alert, Button, Spinner } from '@ctrliq/quantic-react'
import { startJob, syncNow, type Job, type Status } from '../api'
import { JobLog } from './JobLog'
import { liveState } from '../live'

interface Props {
  status: Status | null
  error: string | null
  /** Re-fetch status, assets and vocabulary (after sync or a finished job). */
  onRefresh: () => void
}

type Notice = { kind: 'error' | 'success'; text: string }
/** One status line and one button: Publish (sync, rebuild search and exports, push), or Get updates. */
export function OpsBar({ status, error, onRefresh }: Props) {
  const [job, setJob] = useState<string | null>(null)
  const [running, setRunning] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [notice, setNotice] = useState<Notice | null>(null)
  const [showLog, setShowLog] = useState(false)
  const busy = running || syncing

  const update = async () => {
    setSyncing(true)
    setNotice(null)
    const r = await syncNow()
    setSyncing(false)
    setNotice(r.ok ? { kind: 'success', text: 'Up to date with teammates.' } : { kind: 'error', text: r.error })
    onRefresh()
  }

  const publish = async () => {
    setNotice(null)
    setShowLog(false)
    const r = await startJob('publish')
    if (!r.ok) { setNotice({ kind: 'error', text: r.error }); return }
    setRunning(true)
    setJob(r.data.job_id)
  }

  const finished = (j: Job) => {
    setRunning(false)
    setNotice(j.state === 'done'
      ? { kind: 'success', text: 'Published. Agents and the deck builder have your latest approvals.' }
      : { kind: 'error', text: `Publish failed: ${j.error ?? 'unknown error'}` })
    if (j.state === 'done') setJob(null)
    onRefresh()
  }

  const state = status ? liveState(status) : null
  const fake = status?.embedder_mode === 'fake'

  return (
    <>
      <div className={`ops-bar ops-${state?.tone ?? 'ok'}`} role="status" aria-label="Publishing status">
        {error && <span>Couldn't check status: {error}</span>}
        {running ? (
          <>
            <Spinner size="sm" />
            <span>Publishing: getting teammates' changes, rebuilding search and exports, sharing yours...</span>
          </>
        ) : syncing ? (
          <><Spinner size="sm" /><span>Getting updates...</span></>
        ) : state && <span>{state.text}</span>}
        {fake && !running && (
          <span className="ops-dim" title="Restart Quarry without --fake-embedder, then Publish.">
            Search is using a stand-in model, so "More like this" and Claude's look-alike learning are rough.
          </span>
        )}
        <span className="ops-spacer" />
        {job && <Button size="sm" variant="ghost" onClick={() => setShowLog((v) => !v)}>{showLog ? 'Hide details' : 'Details'}</Button>}
        {state?.action === 'publish' && <Button size="sm" disabled={busy} onClick={() => void publish()}>Publish</Button>}
        {state?.action === 'update' && <Button size="sm" variant="outline" disabled={busy} onClick={() => void update()}>Get updates</Button>}
      </div>
      {notice && (
        <div className="ops-notice">
          <Alert type={notice.kind} showCloseButton onClose={() => setNotice(null)}>{notice.text}</Alert>
        </div>
      )}
      {job && (
        <div className="ops-notice" hidden={!showLog}>
          <JobLog key={job} jobId={job} name="Publish" onFinished={finished} />
        </div>
      )}
    </>
  )
}
