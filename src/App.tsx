import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Menu, Navbar } from './components'
import ApplicationRoutes from './pages/routing/routes'
import { loadUser } from './actions/auth'
import './stylesheets/App.css'
import './stylesheets/menuLayout/style.scss'
import './stylesheets/mainLayout/App.scss'
import './stylesheets/authLayout/auth.scss'
import './stylesheets/formsLayout/forms.scss'
import { store } from './store'

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <div className='rowLayout'>
        <Menu />
        <ApplicationRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
