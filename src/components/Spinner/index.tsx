import React from 'react'
import { Box, CircularProgress, type CircularProgressProps } from '@mui/material'

interface SpinnerProps extends CircularProgressProps {
  fullPage?: boolean
}

export const Spinner: React.FC<SpinnerProps> = ({ fullPage = false, ...props }) => {
  if (fullPage) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <CircularProgress {...props} />
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }}>
      <CircularProgress {...props} />
    </Box>
  )
}

export default Spinner
