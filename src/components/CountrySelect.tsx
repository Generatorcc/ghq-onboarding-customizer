import { selectStyle } from '../data/styles'
import { COUNTRIES } from '../data/options'

interface Props {
  name: string
  id?: string
  value?: string
  onChange?: (v: string) => void
}

export default function CountrySelect({ name, id, value, onChange }: Props) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={e => onChange?.(e.target.value)}
      style={selectStyle}
    >
      <option value="" disabled>Select a country</option>
      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
    </select>
  )
}
