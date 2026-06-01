import { colors, inputStyle } from '../data/styles'
import FormField from '../components/FormField'
import DragDropZone from '../components/DragDropZone'

export default function Step3Branding() {
  return (
    <div>
      <p style={{ color: colors.textSecondary, fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
        Set your brand colors for your website, funnels, forms, surveys, and email. You may request your
        skin be updated to your brand-specific colors for a one-time fee of $50. Many clients love this
        feature for consistent brand alignment across everything.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 24px' }}>
        <FormField label="Primary Color">
          <input type="color" name="brand_color_main" defaultValue="#6366f1"
            style={{ ...inputStyle, height: 44, padding: '2px 6px', cursor: 'pointer' }} />
        </FormField>
        <FormField label="Secondary Color">
          <input type="color" name="brand_color_cta" defaultValue="#f0c040"
            style={{ ...inputStyle, height: 44, padding: '2px 6px', cursor: 'pointer' }} />
        </FormField>
        <FormField label="Tertiary Color">
          <input type="color" name="brand_color_tertiary" defaultValue="#d9d9d9"
            style={{ ...inputStyle, height: 44, padding: '2px 6px', cursor: 'pointer' }} />
        </FormField>
      </div>

      <FormField label="Primary Logo (Rectangular)" helper="Recommended: 400×100px">
        <DragDropZone name="logo_primary" accept="image/*" hint="400×100px" />
      </FormField>

      <FormField label="Secondary Logo (Square / Icon)" helper="Recommended: 200×200px">
        <DragDropZone name="logo_secondary" accept="image/*" hint="200×200px" />
      </FormField>

      <FormField label="Favicon" helper="Recommended: 32×32px — .ico or .png">
        <DragDropZone name="favicon" accept="image/*,.ico" hint="32×32px" />
      </FormField>

      <FormField label="General Media (Images, PDFs, etc.)">
        <DragDropZone name="media_upload[]" multiple accept="image/*,application/pdf" hint="Multiple files allowed" />
      </FormField>
    </div>
  )
}
