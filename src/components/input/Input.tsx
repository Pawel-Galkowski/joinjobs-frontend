import { Input as MUIInput } from '@mui/material'
import { type Props } from './types'

export const Input: React.FC<Props> = ({
  value,
  type,
  placeholder,
  required = false,
  disabled = false,
  onChange
}) => (
  <MUIInput
    type={type}
    placeholder={placeholder}
    sx={{}}
    name={value}
    value={value}
    onChange={onChange}
    disabled={!!disabled}
    required={!!required}
  />
)
