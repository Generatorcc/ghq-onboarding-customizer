import { colors } from '../data/styles'

interface StepInfo {
  icon: string
  label: string
}

const STEPS: StepInfo[] = [
  { icon: '◎', label: 'Business Info' },
  { icon: '◉', label: 'Personal Info' },
  { icon: '◈', label: 'Branding' },
  { icon: '◇', label: 'Social Media' },
  { icon: '◆', label: 'Testimonials' },
  { icon: '◎', label: 'Experience' },
  { icon: '◉', label: 'Calendar Setup' },
]

interface Props {
  current: number
  completed: Set<number>
  onNavigate: (step: number) => void
}

export default function SidebarNav({ current, completed, onNavigate }: Props) {
  return (
    <nav
      style={{
        backgroundColor: colors.card,
        borderRadius: 12,
        padding: '16px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        border: `1px solid ${colors.border}`,
        minWidth: 180,
      }}
    >
      {STEPS.map((step, i) => {
        const stepNum = i + 1
        const isActive = stepNum === current
        const isDone = completed.has(stepNum)
        return (
          <button
            key={stepNum}
            onClick={() => onNavigate(stepNum)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '11px 14px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: 14,
              fontWeight: isActive ? 600 : 400,
              fontFamily: 'system-ui, -apple-system, Inter, sans-serif',
              color: isActive ? colors.gold : colors.textSecondary,
              backgroundColor: isActive ? 'rgba(240,192,64,0.08)' : 'transparent',
              borderLeft: isActive ? `3px solid ${colors.gold}` : '3px solid transparent',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.04)'
                ;(e.currentTarget as HTMLButtonElement).style.color = colors.textPrimary
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                ;(e.currentTarget as HTMLButtonElement).style.color = colors.textSecondary
              }
            }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>
              {isDone && !isActive ? '✓' : step.icon}
            </span>
            <span>{step.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
