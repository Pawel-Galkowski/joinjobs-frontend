import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Menu, Navbar } from './components'
import ApplicationRoutes from './pages/routing/routes'
import { loadUser } from './actions/auth'
// import './stylesheets/App.css'
// import './stylesheets/menuLayout/style.css'
// import './stylesheets/mainLayout/app.css'
// import './stylesheets/authLayout/auth.css'
// import './stylesheets/formsLayout/forms.css'
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
    <Box sx={appStyles}>
      <BrowserRouter>
        <Navbar />
        <Box sx={mainStyles}>
          <Menu />
          <ApplicationRoutes />
        </Box>
      </BrowserRouter>
    </Box>
  )
}

export default App
