import React from 'react'
import { Button as MuiButton, type ButtonProps as MuiButtonProps, CircularProgress } from '@mui/material'

interface ButtonProps extends MuiButtonProps {
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ loading = false, disabled, children, ...props }) => {
  return (
    <MuiButton
      {...props}
      disabled={disabled || loading}
      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : props.startIcon}
    >
      {children}
    </MuiButton>
  )
}

export default Button
