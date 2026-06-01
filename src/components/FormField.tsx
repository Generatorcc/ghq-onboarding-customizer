import type { ReactNode, CSSProperties } from 'react'
import { fieldStyle, labelStyle, helperStyle } from '../data/styles'

interface Props {
  label: string
  helper?: string
  children: ReactNode
  style?: CSSProperties
}

export default function FormField({ label, helper, children, style }: Props) {
  return (
    <div style={{ ...fieldStyle, ...style }}>
      <label style={labelStyle}>{label}</label>
      {helper && <span style={helperStyle}>{helper}</span>}
      {children}
    </div>
  )
}
