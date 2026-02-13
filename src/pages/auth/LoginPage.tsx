import React, { useState } from 'react'
import { Box, Container, TextField, Button, Typography, Link, Alert as MuiAlert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement login action
    try {
      // await dispatch(loginUser(formData))
      // navigate('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Login failed')
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="sm">
        <Box sx={{ py: 8 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 700, textAlign: 'center' }}>
            Login
          </Typography>

          {error && <MuiAlert severity="error" sx={{ mb: 2 }}>{error}</MuiAlert>}

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />
            <Button type="submit" variant="contained" size="large">
              Login
            </Button>
          </Box>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link
                component="button"
                type="button"
                onClick={() => navigate('/register')}
                sx={{ cursor: 'pointer' }}
              >
                Register here
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <Link
                component="button"
                type="button"
                onClick={() => navigate('/recovery')}
                sx={{ cursor: 'pointer' }}
              >
                Forgot password?
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default LoginPage
