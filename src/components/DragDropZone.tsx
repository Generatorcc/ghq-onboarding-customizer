import { useRef, useState, type DragEvent, type ChangeEvent } from 'react'
import { colors } from '../data/styles'

interface Props {
  name: string
  multiple?: boolean
  accept?: string
  hint?: string
  formRef?: React.RefObject<HTMLFormElement | null>
}

export default function DragDropZone({ name, multiple = false, accept, hint }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)
  const [label, setLabel] = useState('')

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragOver(false)
    const files = e.dataTransfer.files
    if (files.length && inputRef.current) {
      const dt = new DataTransfer()
      Array.from(files).forEach(f => dt.items.add(f))
      inputRef.current.files = dt.files
      setLabel(Array.from(files).map(f => f.name).join(', '))
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (files && files.length) {
      setLabel(Array.from(files).map(f => f.name).join(', '))
    }
  }

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={e => { e.preventDefault(); setDragOver(true) }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      style={{
        border: `2px dashed ${dragOver ? colors.gold : 'rgba(255,255,255,0.15)'}`,
        borderRadius: 8,
        padding: '18px 16px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: dragOver ? 'rgba(240,192,64,0.06)' : 'rgba(255,255,255,0.02)',
        transition: 'all 0.2s ease',
        userSelect: 'none',
      }}
    >
      <div style={{ fontSize: 13, color: colors.textSecondary }}>
        {label ? label : (
          <>
            <span style={{ color: colors.primary, fontWeight: 600 }}>Click</span> or drag a file here
          </>
        )}
      </div>
      {hint && !label && (
        <div style={{ fontSize: 11, color: colors.textSecondary, opacity: 0.6, marginTop: 4 }}>
          {hint}
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        name={name}
        multiple={multiple}
        accept={accept}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  )
}
