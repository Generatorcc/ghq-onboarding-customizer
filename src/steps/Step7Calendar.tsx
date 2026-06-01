import { colors, inputStyle, sectionHeadingStyle } from '../data/styles'
import FormField from '../components/FormField'

export default function Step7Calendar() {
  return (
    <div>
      <h3 style={sectionHeadingStyle}>Calendar Setup</h3>
      <p style={{ color: colors.textSecondary, fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
        Provide your personal calendar booking link so clients can schedule time with you directly.
        Skip this field if you'll be using the GHQ calendar system.
      </p>
      <FormField label="Your Personal Calendar Booking Link">
        <input
          type="url"
          name="calendar_integration"
          placeholder="Paste your Calendly, Acuity, or other scheduling link here (skip if using GHQ calendar)"
          style={inputStyle}
        />
      </FormField>
    </div>
  )
}
