import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const NotFoundPage: React.FC = () => {
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
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
            404
          </Typography>
          <Typography variant="h5" color="textSecondary" sx={{ mb: 4 }}>
            Page Not Found
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
            The page you are looking for might have been removed or is temporarily unavailable.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/')}
          >
            Go Home
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default NotFoundPage
