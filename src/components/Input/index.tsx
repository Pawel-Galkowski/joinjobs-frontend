import React from 'react'
import { TextField, type TextFieldProps } from '@mui/material'

interface InputProps extends TextFieldProps {
  label?: string
  error?: boolean
  helperText?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error = false,
  helperText = '',
  fullWidth = true,
  variant = 'outlined',
  ...props
}) => {
  return (
    <TextField
      {...props}
      label={label}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      variant={variant}
    />
  )
}

export default Input
