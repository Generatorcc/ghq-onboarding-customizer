import { inputStyle, selectStyle, sectionHeadingStyle } from '../data/styles'
import { TIMEZONES, INDUSTRIES } from '../data/options'
import FormField from '../components/FormField'
import StateSelect from '../components/StateSelect'
import CountrySelect from '../components/CountrySelect'

interface Props {
  defaults: Record<string, string>
}

export default function Step1BusinessInfo({ defaults }: Props) {
  return (
    <div>
      <h3 style={sectionHeadingStyle}>Business Details</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <FormField label="Business Name" style={{ gridColumn: '1 / -1' }}>
          <input type="text" name="contact.company_name" placeholder="Your Company LLC"
            defaultValue={defaults['contact.company_name']} style={inputStyle} />
        </FormField>
        <FormField label="Business Email">
          <input type="email" name="business_email" placeholder="contact@yourcompany.com" style={inputStyle} />
        </FormField>
        <FormField label="Phone Number">
          <input type="tel" name="business_phone" placeholder="(555) 123-4567" style={inputStyle} />
        </FormField>
        <FormField label="Website URL" style={{ gridColumn: '1 / -1' }}>
          <input type="url" name="contact.website" placeholder="https://www.yourcompany.com" style={inputStyle} />
        </FormField>
      </div>

      <h3 style={sectionHeadingStyle}>Business Address</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <FormField label="Street Address" style={{ gridColumn: '1 / -1' }}>
          <input type="text" name="business_address" placeholder="123 Main St"
            defaultValue={defaults['business_address']} style={inputStyle} />
        </FormField>
        <FormField label="City">
          <input type="text" name="business_city" placeholder="Anytown"
            defaultValue={defaults['business_city']} style={inputStyle} />
        </FormField>
        <FormField label="State / Province">
          <StateSelect name="business_state" id="business_state" value={defaults['business_state']} />
        </FormField>
        <FormField label="Zip / Postal Code">
          <input type="text" name="business_postal_code" placeholder="90210"
            defaultValue={defaults['business_postal_code']} style={inputStyle} />
        </FormField>
        <FormField label="Country">
          <CountrySelect name="business_country" id="business_country" value={defaults['business_country']} />
        </FormField>
      </div>

      <h3 style={sectionHeadingStyle}>Location Settings</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <FormField label="Time Zone">
          <select name="location_timezone" style={selectStyle}>
            <option value="" disabled>Select a time zone</option>
            {TIMEZONES.map(group => (
              <optgroup key={group.group} label={group.group}>
                {group.options.map(tz => (
                  <option key={tz} value={tz}>{tz}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </FormField>
        <FormField label="Locale">
          <input type="text" name="locale" placeholder="en-US" style={inputStyle} />
        </FormField>
      </div>

      <h3 style={sectionHeadingStyle}>Legal &amp; Industry</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
        <FormField label="EIN or Tax ID">
          <input type="text" name="ein" placeholder="XX-XXXXXXX" style={inputStyle} />
        </FormField>
        <FormField label="Company Registration Number">
          <input type="text" name="company_registration_number" placeholder="Optional" style={inputStyle} />
        </FormField>
        <FormField label="Industry" style={{ gridColumn: '1 / -1' }}>
          <select name="industry" style={selectStyle}>
            <option value="" disabled>Select your industry</option>
            {INDUSTRIES.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </FormField>
      </div>
    </div>
  )
}
