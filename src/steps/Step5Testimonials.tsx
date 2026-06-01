import { colors, inputStyle } from '../data/styles'
import FormField from '../components/FormField'
import DragDropZone from '../components/DragDropZone'

function TestimonialBlock({ n }: { n: number }) {
  return (
    <div style={{
      borderBottom: n < 3 ? `1px solid rgba(255,255,255,0.06)` : 'none',
      paddingBottom: n < 3 ? 24 : 0,
      marginBottom: n < 3 ? 8 : 0,
    }}>
      <h4 style={{ color: colors.gold, fontWeight: 600, fontSize: 14, marginBottom: 16, marginTop: 0 }}>
        Testimonial {n}
      </h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <FormField label="Client Name">
          <input type="text" name={`testimonial_${n}_name`}
            placeholder={['Jane Smith','Mark Johnson','Emily White'][n-1]}
            style={inputStyle} />
        </FormField>
        <FormField label="Client Picture" helper="Suggested: 200×200px">
          <DragDropZone name={`testimonial_${n}_pic`} accept="image/*" hint="200×200px" />
        </FormField>
        <FormField label="Statement" style={{ gridColumn: '1 / -1' }}>
          <textarea name={`testimonial_${n}_statement`}
            placeholder={[
              'This company is fantastic!',
              "I couldn't be happier with the results.",
              'Five stars! Highly recommend.',
            ][n-1]}
            style={{ ...inputStyle, minHeight: 90, resize: 'vertical' }}
          />
        </FormField>
      </div>
    </div>
  )
}

export default function Step5Testimonials() {
  return (
    <div>
      <p style={{ color: colors.textSecondary, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
        Others' experience is far stronger than your assurance. You can and should have as many as possible,
        but let's get you started with three of your best.
      </p>
      <TestimonialBlock n={1} />
      <TestimonialBlock n={2} />
      <TestimonialBlock n={3} />
    </div>
  )
}
