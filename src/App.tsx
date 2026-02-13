import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Alert } from './components'
import AppRoutes from './pages/routing/AppRoutes'
import { useAppDispatch } from './hooks'
import { authActions } from './store/slices/authSlice'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Load user from token on app initialization
    const token = localStorage.getItem('token')
    if (token) {
      // TODO: Implement loadUser action to verify token
      // dispatch(loadUser())
    }
  }, [dispatch])

  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <AppRoutes />
        </Box>
        <Alert />
      </Box>
    </Router>
  )
}

export default App
