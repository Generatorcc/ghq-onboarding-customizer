import type { CSSProperties } from 'react'

export const colors = {
  bg: '#0a0c12',
  surface: '#111318',
  card: '#161920',
  border: 'rgba(255,255,255,0.07)',
  gold: '#f0c040',
  primary: '#6366f1',
  textPrimary: '#f1f5f9',
  textSecondary: '#64748b',
  inputBg: '#1a1d26',
  inputBorder: 'rgba(255,255,255,0.1)',
}

export const inputStyle: CSSProperties = {
  width: '100%',
  backgroundColor: colors.inputBg,
  color: colors.textPrimary,
  border: `1px solid ${colors.inputBorder}`,
  borderRadius: 6,
  padding: '9px 14px',
  fontSize: 14,
  fontFamily: 'system-ui, -apple-system, Inter, sans-serif',
  outline: 'none',
  boxSizing: 'border-box',
}

export const selectStyle: CSSProperties = {
  ...inputStyle,
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l4 4 4-4'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 12px center',
  backgroundSize: '16px 16px',
  paddingRight: 40,
  appearance: 'none' as const,
  WebkitAppearance: 'none' as const,
  cursor: 'pointer',
}

export const labelStyle: CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 500,
  color: colors.textSecondary,
  marginBottom: 6,
}

export const helperStyle: CSSProperties = {
  fontSize: 12,
  color: colors.textSecondary,
  marginTop: -4,
  marginBottom: 6,
  opacity: 0.7,
}

export const fieldStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 18,
}

export const sectionHeadingStyle: CSSProperties = {
  color: colors.gold,
  fontSize: 13,
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  marginTop: 24,
  marginBottom: 12,
  paddingBottom: 6,
  borderBottom: `1px solid ${colors.border}`,
}
