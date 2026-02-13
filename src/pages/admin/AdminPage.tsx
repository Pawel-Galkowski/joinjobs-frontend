import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const AdminPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 700 }}>
          Admin Panel
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Admin panel is under development
        </Typography>
      </Container>
    </Box>
  )
}

export default AdminPage
