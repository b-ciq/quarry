import { useState } from 'react'
import { Alert, Badge, Button } from '@ctrliq/quantic-react'
import { startJob, syncNow, type Job, type Status } from '../api'
import { JobLog } from './JobLog'

interface Props {
  status: Status | null
  error: string | null
  /** Re-fetch status, assets and vocabulary (after sync or a finished job). */
  onRefresh: () => void
}

type Notice = { kind: 'error' | 'success'; text: string }

export function OpsBar({ status, error, onRefresh }: Props) {
  const [job, setJob] = useState<{ id: string; name: string } | null>(null)
  const [running, setRunning] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [notice, setNotice] = useState<Notice | null>(null)
  const [published, setPublished] = useState<string | null>(null)
  const busy = running || syncing

  const sync = async () => {
    setSyncing(true)
    setNotice(null)
    const r = await syncNow()
    setSyncing(false)
    if (r.ok) {
      const d = r.data
      setNotice({
        kind: 'success',
        text: !d.pulled && !d.pushed ? 'In sync with origin.' : `Synced${d.pulled ? ', pulled changes' : ''}${d.pushed ? ', pushed changes' : ''}.`,
      })
    } else {
      setNotice({ kind: 'error', text: r.error })
    }
    onRefresh()
  }

  const start = async (kind: 'reindex' | 'publish') => {
    setNotice(null)
    const r = await startJob(kind)
    if (!r.ok) {
      setNotice({ kind: 'error', text: r.error })
      return
    }
    setRunning(true)
    setJob({ id: r.data.job_id, name: kind === 'reindex' ? 'Re-index' : 'Publish' })
  }

  const finished = (j: Job) => {
    setRunning(false)
    if (j.state === 'done' && typeof j.result?.version === 'string') setPublished(j.result.version)
    onRefresh()
  }

  return (
    <>
      <div className="ops-bar" role="status" aria-label="Workspace status">
        {error && <Badge color="error">Status unavailable: {error}</Badge>}
        {status && (
          <>
            {status.git && (
              <>
                <Badge color={status.git.behind ? 'warning' : 'gray'}>
                  git: {status.git.ahead} ahead / {status.git.behind} behind
                </Badge>
                <Badge color={status.git.dirty_managed.length ? 'warning' : 'gray'}>
                  {status.git.dirty_managed.length} uncommitted managed
                </Badge>
                {status.git.dirty_other.length > 0 && (
                  <Badge color="gray">{status.git.dirty_other.length} other dirty (ignored)</Badge>
                )}
              </>
            )}
            <Badge color={status.index_stale ? 'warning' : 'success'}>
              index {status.index_stale ? 'stale' : 'fresh'}
            </Badge>
            <Badge color={status.exports_stale ? 'warning' : 'success'}>
              exports {status.exports_stale ? 'stale' : 'fresh'}
            </Badge>
            <Badge color="gray">embedder: {status.embedder_mode ?? 'none'}</Badge>
          </>
        )}
        {published && <Badge color="success">last publish: {published}</Badge>}
        <span className="ops-spacer" />
        <Button size="sm" variant="outline" disabled={busy} onClick={sync}>
          {syncing ? 'Syncing...' : 'Sync'}
        </Button>
        <Button size="sm" variant="outline" disabled={busy} onClick={() => start('reindex')}>
          Re-index
        </Button>
        <Button size="sm" disabled={busy} onClick={() => start('publish')}>
          Publish
        </Button>
      </div>
      {notice && (
        <div className="ops-notice">
          <Alert type={notice.kind === 'error' ? 'error' : 'success'}>{notice.text}</Alert>
        </div>
      )}
      {job && (
        <div className="ops-notice">
          <JobLog key={job.id} jobId={job.id} name={job.name} onFinished={finished} />
        </div>
      )}
    </>
  )
}
