import { Input as MUIInput } from '@mui/material'
import { type Props } from './types'
import { useCallback } from 'react'

export const Input: React.FC<Props> = ({
  value,
  type,
  placeholder,
  required = false,
  disabled = false
}) => {
  const onchange = useCallback(() => {}, [])

  return (
    <MUIInput
      type={type}
      placeholder={placeholder}
      sx={{}}
      name={value}
      value={value}
      onChange={onchange}
      disabled={!!disabled}
      required={!!required}
    />
  )
}
