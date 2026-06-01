import { colors } from '../data/styles'

interface Props {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100)
  return (
    <div style={{ height: 4, backgroundColor: 'rgba(255,255,255,0.06)', width: '100%' }}>
      <div
        style={{
          height: '100%',
          width: `${pct}%`,
          backgroundColor: colors.gold,
          transition: 'width 0.35s ease',
          borderRadius: '0 2px 2px 0',
        }}
      />
    </div>
  )
}
