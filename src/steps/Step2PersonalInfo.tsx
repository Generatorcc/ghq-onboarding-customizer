import { inputStyle, sectionHeadingStyle } from '../data/styles'
import FormField from '../components/FormField'
import StateSelect from '../components/StateSelect'
import CountrySelect from '../components/CountrySelect'
import DragDropZone from '../components/DragDropZone'

interface Props {
  defaults: Record<string, string>
}

export default function Step2PersonalInfo({ defaults }: Props) {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <FormField label="First Name">
          <input type="text" name="contact.first_name" placeholder="John"
            defaultValue={defaults['contact.first_name']} style={inputStyle} />
        </FormField>
        <FormField label="Last Name">
          <input type="text" name="contact.last_name" placeholder="Doe"
            defaultValue={defaults['contact.last_name']} style={inputStyle} />
        </FormField>
        <FormField label="Email Address">
          <input type="email" name="contact.email" placeholder="john.doe@email.com"
            defaultValue={defaults['contact.email']} style={inputStyle} />
        </FormField>
        <FormField label="Phone Number">
          <input type="tel" name="contact.phone" placeholder="(555) 867-5309" style={inputStyle} />
        </FormField>
        <FormField label="Date of Birth">
          <input type="date" name="date_of_birth" style={inputStyle} />
        </FormField>
        <FormField label="Profile Picture" helper="Suggested: 200×200px">
          <DragDropZone name="profile_pic" accept="image/*" hint="200×200px" />
        </FormField>
      </div>

      <h3 style={sectionHeadingStyle}>Physical Address</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <FormField label="Street Address" style={{ gridColumn: '1 / -1' }}>
          <input type="text" name="contact.address1" placeholder="456 Personal Ave" style={inputStyle} />
        </FormField>
        <FormField label="City">
          <input type="text" name="contact.city" placeholder="Hometown" style={inputStyle} />
        </FormField>
        <FormField label="State / Province">
          <StateSelect name="contact.state" id="contact_state" />
        </FormField>
        <FormField label="Zip / Postal Code">
          <input type="text" name="contact.postal_code" placeholder="33101" style={inputStyle} />
        </FormField>
        <FormField label="Country">
          <CountrySelect name="contact.country" id="contact_country" />
        </FormField>
      </div>
    </div>
  )
}
