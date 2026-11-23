import { useEffect, useRef, useState } from 'react'
import { Alert, Badge, LogOutput } from '@ctrliq/quantic-react'
import { fetchJob, type Job } from '../api'

const POLL_MS = 600

interface Props {
  jobId: string
  name: string
  onFinished: (job: Job) => void
}

/** Polls /api/jobs/{id} until done/failed, streaming log lines as they arrive. */
export function JobLog({ jobId, name, onFinished }: Props) {
  const [job, setJob] = useState<Job>({ state: 'running', log: [], result: null, error: null })
  const [pollError, setPollError] = useState<string | null>(null)
  const finished = useRef(onFinished)
  useEffect(() => { finished.current = onFinished })

  useEffect(() => {
    let stop = false
    let timer: ReturnType<typeof setTimeout> | undefined
    const tick = async () => {
      const r = await fetchJob(jobId)
      if (stop) return
      if (!r.ok) {
        setPollError(r.error)
        return
      }
      setJob(r.data)
      if (r.data.state === 'running') timer = setTimeout(tick, POLL_MS)
      else finished.current(r.data)
    }
    tick()
    return () => { stop = true; if (timer) clearTimeout(timer) }
  }, [jobId])

  return (
    <section className="job-log" aria-label={`${name} job`}>
      <div className="job-log-head">
        <strong>{name}</strong>
        <Badge size="sm" color={job.state === 'failed' ? 'error' : job.state === 'done' ? 'success' : 'warning'}>
          {job.state}
        </Badge>
      </div>
      {pollError && <Alert type="error">Lost contact with job: {pollError}</Alert>}
      {job.error && <Alert type="error">{job.error}</Alert>}
      <LogOutput lines={job.log} follow />
    </section>
  )
}
