import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Menu, Navbar } from './components'
import ApplicationRoutes from './pages/routing/routes'
import { loadUser } from './actions/auth'
import { useAppDispatch } from './hooks'
import { type AppDispatch } from './store'
import { Box } from '@mui/material'
import { appStyles, mainStyles } from './styles'

const App: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <BrowserRouter>
      <Box sx={appStyles}>
        <Navbar />
        <Box sx={mainStyles}>
          <Menu />
          <ApplicationRoutes />
        </Box>
      </Box>
    </BrowserRouter>
  )
}

export default App
