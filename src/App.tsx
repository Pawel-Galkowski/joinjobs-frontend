import { useEffect, type FC } from 'react'
// import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components'
import ApplicationRoutes from './pages/routing/routes'
import { loadUser } from './actions/auth'
import './stylesheets/App.scss'
import './stylesheets/menuLayout/style.scss'
import './stylesheets/mainLayout/App.scss'
import './stylesheets/authLayout/auth.scss'
import './stylesheets/formsLayout/forms.scss'
import { store } from './store'

const App: FC = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    store.dispatch(loadUser())
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
