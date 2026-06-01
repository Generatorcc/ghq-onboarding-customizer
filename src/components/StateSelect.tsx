import { selectStyle } from '../data/styles'
import { US_STATES, CA_PROVINCES } from '../data/options'

interface Props {
  name: string
  id?: string
  value?: string
  onChange?: (v: string) => void
}

export default function StateSelect({ name, id, value, onChange }: Props) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={e => onChange?.(e.target.value)}
      style={selectStyle}
    >
      <option value="" disabled>Select a State or Province</option>
      <optgroup label="United States">
        {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
      </optgroup>
      <optgroup label="Canada">
        {CA_PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
      </optgroup>
    </select>
  )
}
