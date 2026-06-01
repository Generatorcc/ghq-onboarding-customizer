import { inputStyle } from '../data/styles'
import FormField from '../components/FormField'

export default function Step4SocialMedia() {
  const fields: { label: string; name: string; placeholder: string }[] = [
    { label: 'Facebook URL', name: 'social_facebook', placeholder: 'https://facebook.com/yourpage' },
    { label: 'Instagram URL', name: 'social_instagram', placeholder: 'https://instagram.com/yourhandle' },
    { label: 'X (Twitter) URL', name: 'social_twitter', placeholder: 'https://x.com/yourhandle' },
    { label: 'LinkedIn URL', name: 'social_linkedin', placeholder: 'https://linkedin.com/in/yourprofile' },
    { label: 'TikTok URL', name: 'social_tiktok', placeholder: 'https://tiktok.com/@yourhandle' },
    { label: 'Google My Business URL', name: 'social_gmb', placeholder: 'https://maps.google.com/...' },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
      {fields.map(f => (
        <FormField key={f.name} label={f.label}>
          <input type="url" name={f.name} placeholder={f.placeholder} style={inputStyle} />
        </FormField>
      ))}
    </div>
  )
}
