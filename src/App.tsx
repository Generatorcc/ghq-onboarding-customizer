import { useState, useRef, useEffect, type FormEvent } from 'react'
import { colors } from './data/styles'
import SidebarNav from './components/SidebarNav'
import ProgressBar from './components/ProgressBar'
import Step1BusinessInfo from './steps/Step1BusinessInfo'
import Step2PersonalInfo from './steps/Step2PersonalInfo'
import Step3Branding from './steps/Step3Branding'
import Step4SocialMedia from './steps/Step4SocialMedia'
import Step5Testimonials from './steps/Step5Testimonials'
import Step6Experience from './steps/Step6Experience'
import Step7Calendar from './steps/Step7Calendar'

const TOTAL_STEPS = 7
const ENDPOINT = 'https://ghq-customizer.long-hill-e0d7.workers.dev/custom'

const STEP_TITLES = [
  'Business Info',
  'Personal Info',
  'Branding',
  'Social Media',
  'Testimonials',
  'Experience',
  'Calendar Setup',
]

function parseUrlDefaults(): Record<string, string> {
  const params = new URLSearchParams(window.location.search)
  const defaults: Record<string, string> = {}

  const fullName = params.get('contact.name')
  if (fullName) {
    const parts = fullName.trim().split(/\s+/)
    defaults['contact.first_name'] = parts[0] ?? ''
    defaults['contact.last_name'] = parts.slice(1).join(' ')
  }

  const directKeys = [
    'contact.company_name',
    'contact.email',
    'business_address',
    'business_city',
    'business_state',
    'business_postal_code',
    'business_country',
  ]
  for (const key of directKeys) {
    const v = params.get(key)
    if (v) defaults[key] = v
  }

  return defaults
}

export default function App() {
  const [step, setStep] = useState(1)
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const ghqUserId = new URLSearchParams(window.location.search).get('ghq_user_id') ?? ''
  const defaults = parseUrlDefaults()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

  function navigate(target: number) {
    setCompleted(prev => new Set([...prev, step]))
    setStep(target)
  }

  function handleContinue() {
    if (step < TOTAL_STEPS) {
      navigate(step + 1)
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return
    setSubmitting(true)
    setError('')
    try {
      const fd = new FormData(formRef.current)
      const res = await fetch(ENDPOINT, { method: 'POST', body: fd })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(`Server responded with status ${res.status}. Please try again.`)
      }
    } catch {
      setError('Network error — please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: colors.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, Inter, sans-serif',
        padding: 24,
      }}>
        <div style={{
          backgroundColor: colors.card,
          border: `1px solid ${colors.border}`,
          borderRadius: 16,
          padding: '60px 48px',
          textAlign: 'center',
          maxWidth: 520,
          width: '100%',
        }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>✓</div>
          <h1 style={{ color: colors.gold, fontSize: 28, fontWeight: 700, margin: '0 0 12px' }}>
            Onboarding Complete!
          </h1>
          <p style={{ color: colors.textSecondary, fontSize: 16, lineHeight: 1.6, margin: 0 }}>
            Your information has been submitted successfully. The GHQ team will review
            your details and reach out shortly to finalize your account setup.
          </p>
        </div>
      </div>
    )
  }

  const isLastStep = step === TOTAL_STEPS

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: colors.bg,
      fontFamily: 'system-ui, -apple-system, Inter, sans-serif',
      color: colors.textPrimary,
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: colors.surface,
        borderBottom: `1px solid ${colors.border}`,
        padding: '16px 40px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}>
        <span style={{
          fontWeight: 800,
          fontSize: 22,
          color: colors.gold,
          letterSpacing: '-0.02em',
          fontFamily: 'system-ui, -apple-system, Inter, sans-serif',
        }}>GHQ</span>
        <span style={{ color: colors.border, fontSize: 20 }}>|</span>
        <span style={{ color: colors.textSecondary, fontSize: 15, fontWeight: 400 }}>
          Account Customizer
        </span>
      </header>

      {/* Main layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '220px 1fr',
        gap: 24,
        maxWidth: 1100,
        margin: '32px auto',
        padding: '0 24px',
        alignItems: 'start',
      }}>
        {/* Sidebar */}
        <SidebarNav current={step} completed={completed} onNavigate={navigate} />

        {/* Form pane */}
        <div style={{
          backgroundColor: colors.card,
          border: `1px solid ${colors.border}`,
          borderRadius: 12,
          overflow: 'hidden',
        }}>
          {/* Progress bar */}
          <ProgressBar current={step} total={TOTAL_STEPS} />

          {/* Step label */}
          <div style={{
            padding: '14px 28px',
            borderBottom: `1px solid ${colors.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span style={{ color: colors.gold, fontWeight: 700, fontSize: 15 }}>
              Step {step}: {STEP_TITLES[step - 1]}
            </span>
            <span style={{ color: colors.textSecondary, fontSize: 13 }}>
              {step} of {TOTAL_STEPS}
            </span>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
            {ghqUserId && (
              <input type="hidden" name="ghq_user_id" value={ghqUserId} />
            )}

            <div style={{ padding: '24px 28px 8px' }}>
              {step === 1 && <Step1BusinessInfo defaults={defaults} />}
              {step === 2 && <Step2PersonalInfo defaults={defaults} />}
              {step === 3 && <Step3Branding />}
              {step === 4 && <Step4SocialMedia />}
              {step === 5 && <Step5Testimonials />}
              {step === 6 && <Step6Experience />}
              {step === 7 && <Step7Calendar />}
            </div>

            {error && (
              <div style={{
                margin: '0 28px',
                padding: '12px 16px',
                backgroundColor: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: 8,
                color: '#f87171',
                fontSize: 14,
              }}>
                {error}
              </div>
            )}

            {/* Action buttons */}
            <div style={{
              padding: '24px 28px 32px',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 12,
            }}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(s => s - 1)}
                  style={{
                    padding: '10px 24px',
                    borderRadius: 8,
                    border: `1px solid ${colors.border}`,
                    backgroundColor: 'transparent',
                    color: colors.textSecondary,
                    fontSize: 14,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  ← Back
                </button>
              )}
              {!isLastStep ? (
                <button
                  type="button"
                  onClick={handleContinue}
                  style={{
                    padding: '10px 28px',
                    borderRadius: 8,
                    border: 'none',
                    backgroundColor: colors.primary,
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'opacity 0.15s',
                  }}
                >
                  Save &amp; Continue →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    padding: '10px 32px',
                    borderRadius: 8,
                    border: 'none',
                    backgroundColor: colors.gold,
                    color: '#0a0c12',
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: submitting ? 'wait' : 'pointer',
                    fontFamily: 'inherit',
                    opacity: submitting ? 0.7 : 1,
                    transition: 'opacity 0.15s',
                  }}
                >
                  {submitting ? 'Submitting…' : 'Submit Onboarding'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
