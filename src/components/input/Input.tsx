import { Input as MUIInput } from '@mui/material'
import { type Props } from './types'
import setAlert from '../../actions/setAlert'

export const Input: React.FC<Props> = ({
  value,
  type,
  placeholder,
  required = false,
  disabled = false,
  onChange,
  name,
  isErrored = false,
  minLength,
  maxLength
}) => {
  if (maxLength && value?.length > maxLength) {
    setAlert(`Length limit reached (limit: ${maxLength})`, 'warning')
    isErrored = true
  }

  if (minLength && value?.length < minLength) {
    setAlert(`Minimal length not reached (min: ${minLength})`, 'warning')
    isErrored = true
  }

  return (
    <MUIInput
      type={type}
      placeholder={placeholder}
      sx={{}}
      name={name}
      error={isErrored}
      value={value}
      onChange={onChange}
      disabled={!!disabled}
      required={!!required}
    />
  )
}
