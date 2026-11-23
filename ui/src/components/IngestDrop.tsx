import { useRef, useState } from 'react'
import { Alert, Button, Checkbox, Select, TextInput } from '@ctrliq/quantic-react'
import { ingestFiles, startJob, type IngestResult } from '../api'
import { JobLog } from './JobLog'

const CLASSES = ['hero', 'spot-illustration', 'background', 'screenshot', 'diagram', 'lifestyle']

interface Props {
  products: string[]
  /** Called after a successful ingest so the app can refresh and offer the review queue. */
  onIngested: (r: IngestResult) => void
  onReviewQueue: () => void
}

export function IngestDrop({ products, onIngested, onReviewQueue }: Props) {
  const [files, setFiles] = useState<File[]>([])
  const [over, setOver] = useState(false)
  const [cls, setCls] = useState('')
  const [origin, setOrigin] = useState('')
  const [license, setLicense] = useState('')
  const [licenseId, setLicenseId] = useState('')
  const [product, setProduct] = useState('')
  const [anti, setAnti] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<IngestResult | null>(null)
  const [reindexJob, setReindexJob] = useState<string | null>(null)
  const [reindexError, setReindexError] = useState<string | null>(null)
  const picker = useRef<HTMLInputElement>(null)

  const addFiles = (list: FileList | null) => {
    if (list?.length) setFiles((f) => [...f, ...Array.from(list)])
  }
  const needProduct = cls === 'screenshot'
  const ready = files.length > 0 && cls !== '' && origin.trim() !== '' && (!needProduct || product !== '')

  const reindex = async () => {
    setReindexError(null)
    const r = await startJob('reindex')
    if (r.ok) setReindexJob(r.data.job_id)
    else setReindexError(r.error)
  }

  const submit = async () => {
    setBusy(true)
    setError(null)
    setResult(null)
    setReindexJob(null)
    setReindexError(null)
    const form = new FormData()
    files.forEach((f) => form.append('files', f))
    form.append('asset_class', cls)
    form.append('origin', origin.trim())
    if (license.trim()) form.append('license', license.trim())
    if (licenseId.trim()) form.append('license_id', licenseId.trim())
    if (needProduct) form.append('product', product)
    if (anti) form.append('anti_example', 'true')
    const r = await ingestFiles(form)
    setBusy(false)
    if (!r.ok) {
      setError(r.error)
      return
    }
    setResult(r.data)
    setFiles([])
    onIngested(r.data)
  }

  return (
    <div className="ingest">
      <div
        className={`dropzone${over ? ' dropzone-over' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setOver(true) }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); addFiles(e.dataTransfer.files) }}
      >
        <p>Drop images here</p>
        <Button size="sm" variant="outline" onClick={() => picker.current?.click()}>Choose files</Button>
        <input
          ref={picker}
          type="file"
          multiple
          accept="image/*"
          hidden
          aria-label="Choose image files"
          onChange={(e) => { addFiles(e.target.files); e.target.value = '' }}
        />
        {files.length > 0 && (
          <ul className="ingest-files" aria-label="Files to ingest">
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`}>
                {f.name}{' '}
                <Button size="sm" variant="ghost" onClick={() => setFiles((xs) => xs.filter((_, j) => j !== i))}>Remove</Button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="ingest-form">
        <div className="field">
          <span className="field-label">Class</span>
          <Select aria-label="Class" placeholder="Choose class" options={CLASSES.map((c) => [c, c])} value={cls}
            onValueChanged={(e) => setCls(e.detail.value)} />
        </div>
        {needProduct && (
          <div className="field">
            <span className="field-label">Product (required for screenshots)</span>
            <Select aria-label="Product" placeholder="Choose product" options={products.map((p) => [p, p])} value={product}
              onValueChanged={(e) => setProduct(e.detail.value)} />
          </div>
        )}
        <div className="field">
          <span className="field-label">Source origin</span>
          <TextInput aria-label="Source origin" placeholder="e.g. adobe-stock" value={origin}
            onValueChanged={(e) => setOrigin(e.detail.value)} />
        </div>
        <div className="field">
          <span className="field-label">License (optional)</span>
          <TextInput aria-label="License" value={license} onValueChanged={(e) => setLicense(e.detail.value)} />
        </div>
        <div className="field">
          <span className="field-label">License id (optional)</span>
          <TextInput aria-label="License id" value={licenseId} onValueChanged={(e) => setLicenseId(e.detail.value)} />
        </div>
        <div className="field">
          <Checkbox size="sm" checked={anti} onValueChanged={(e) => setAnti(e.detail.checked)}>
            These are anti-examples (what not to do)
          </Checkbox>
        </div>
        <div>
          <Button disabled={!ready || busy} onClick={submit}>{busy ? 'Ingesting...' : `Ingest ${files.length || ''} file${files.length === 1 ? '' : 's'}`}</Button>
        </div>
      </div>

      {error && <Alert type="error">{error}</Alert>}
      {result && (
        <section className="ingest-report" aria-label="Ingest report">
          <Alert type={result.created.length ? 'success' : 'warning'}>
            {result.created.length} created, {result.skipped.length} skipped.
          </Alert>
          {result.created.length > 0 && (
            <>
              <ul>{result.created.map((id) => <li key={id}>{id}</li>)}</ul>
              <p>Re-index so new assets get thumbnails and show up in search.</p>
              <div className="ingest-actions">
                <Button size="sm" onClick={reindex} disabled={reindexJob !== null}>Re-index now</Button>{' '}
                <Button size="sm" variant="outline" onClick={onReviewQueue}>Open review queue</Button>
              </div>
              {reindexError && <Alert type="error">{reindexError}</Alert>}
              {reindexJob && <JobLog key={reindexJob} jobId={reindexJob} name="Re-index" onFinished={() => onIngested(result)} />}
            </>
          )}
          {result.skipped.length > 0 && (
            <ul aria-label="Skipped files">
              {result.skipped.map((s, i) => <li key={`${s.file}-${i}`}><strong>{s.file}</strong>: {s.reason}</li>)}
            </ul>
          )}
        </section>
      )}
    </div>
  )
}
