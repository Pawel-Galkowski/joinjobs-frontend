import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const ProfileDetailPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 700 }}>
          Profile Detail
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Profile detail page is under development
        </Typography>
      </Container>
    </Box>
  )
}

export default ProfileDetailPage
