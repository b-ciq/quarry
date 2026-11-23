import { Badge, Button } from '@ctrliq/quantic-react'
import type { Status } from '../api'

// Skeleton: live /api/status readout. Sync and job buttons are wired in Task 10.
export function OpsBar({ status, error }: { status: Status | null; error: string | null }) {
  return (
    <div className="ops-bar" role="status" aria-label="Workspace status">
      {error && <Badge color="error">Status unavailable: {error}</Badge>}
      {status && (
        <>
          {status.git && (
            <>
              <Badge color="gray">
                git: {status.git.ahead} ahead / {status.git.behind} behind
              </Badge>
              <Badge color={status.git.dirty_managed.length ? 'warning' : 'gray'}>
                {status.git.dirty_managed.length} uncommitted managed
              </Badge>
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
      <span className="ops-spacer" />
      <Button size="sm" variant="outline" disabled>
        Sync
      </Button>
      <Button size="sm" variant="outline" disabled>
        Jobs
      </Button>
    </div>
  )
}
