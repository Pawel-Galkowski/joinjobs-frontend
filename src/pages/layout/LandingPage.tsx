import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LandingPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
            Welcome to JoinJobs
          </Typography>
          <Typography variant="h5" color="textSecondary" sx={{ mb: 4 }}>
            Connect with professionals, share your profile, and discover opportunities
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/profiles')}
            >
              View Profiles
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/register')}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default LandingPage
