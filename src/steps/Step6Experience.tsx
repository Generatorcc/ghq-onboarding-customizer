import { colors, inputStyle, sectionHeadingStyle } from '../data/styles'
import FormField from '../components/FormField'

export default function Step6Experience() {
  return (
    <div>
      <FormField label="Short Bio">
        <textarea name="short_bio" placeholder="Write a brief professional bio..."
          style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }} />
      </FormField>

      <h3 style={{ ...sectionHeadingStyle, color: colors.gold }}>Top 3 Products / Services</h3>

      {[
        { name: 'product_1', placeholder: 'e.g., Life Insurance' },
        { name: 'product_2', placeholder: 'e.g., Financial Planning' },
        { name: 'product_3', placeholder: 'e.g., Retirement Solutions' },
      ].map((f, i) => (
        <FormField key={f.name} label={`Product / Service ${i + 1}`}>
          <input type="text" name={f.name} placeholder={f.placeholder} style={inputStyle} />
        </FormField>
      ))}
    </div>
  )
}
