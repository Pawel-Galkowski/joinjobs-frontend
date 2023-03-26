import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components'
import ApplicationRoutes from './pages/routing/routes'
import { loadUser } from './actions/auth'
import './stylesheets/App.css'
import './stylesheets/menuLayout/style.css'
import './stylesheets/mainLayout/app.css'
import './stylesheets/authLayout/auth.css'
import './stylesheets/formsLayout/forms.css'
import { useAppDispatch } from './hooks'
import { type AppDispatch } from './store'

const App: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <div className='rowLayout'>
        {/* <Menu /> */}
        <ApplicationRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
