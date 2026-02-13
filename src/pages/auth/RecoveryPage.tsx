import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const RecoveryPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="sm">
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
            Password Recovery
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Recovery page is under development
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default RecoveryPage
