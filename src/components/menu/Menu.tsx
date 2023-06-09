import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Actions } from '../../pages/dashboard/Actions'
import { getCurrentProfile } from '../../actions/profile'
import { type ArrowType } from './types'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type ProfileType } from '../../reducers/profile/types'

const Menu: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const profile: ProfileType = useAppSelector((state) => state.profile.profile)
  const { isAuthenticated, loading, user } = useAppSelector((state) => state.auth)
  const [arrow, setArrow] = useState<ArrowType>('>')

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [])

  if (loading || !user || !isAuthenticated) {
    return null
  }

  const mobileMenu = () => {
    if (arrow === '>') {
      setArrow('<')
      const blockItem: HTMLElement | null = document.getElementById('blockID')
      if (blockItem) {
        blockItem.style.display = 'block'
      }
      const simpleMenuBar: HTMLElement | null =
        document.getElementById('simpleMenuBar')
      if (simpleMenuBar) {
        simpleMenuBar.style.height = '100%'
      }
    } else {
      setArrow('>')
      const blockItem: HTMLElement | null = document.getElementById('blockID')
      if (blockItem) {
        blockItem.style.display = 'none'
      }
    }
  }

  return (
    <>
      <div className='menubar' id='simpleMenuBar'>
        <div className='show' id='blockID'>
          <div id='layoutSidenav_nav'>
            <nav
              className='sidenav accordion sidenav-dark'
              id='sidenavAccordion'
            >
              <div className='sidenav-menu'>
                <div className='nav'>
                  <div className='sidenav-menu-heading'>Profile</div>
                  <Actions profile={profile} />
                  <div className='sidenav-menu-heading'>Interface</div>
                  <Link className='nav-link' to='/profiles'>
                    <div className='nav-link-icon'>
                      <i className='fas fa-columns' />
                    </div>
                    {'Developers '}
                  </Link>
                  <Link className='nav-link' to='/posts'>
                    <div className='nav-link-icon'>
                      <i className='fas fa-book-open' />
                    </div>
                    {'Posts '}
                  </Link>
                  <div className='sidenav-menu-heading'>Recruitment</div>
                  <Link className='nav-link' to='/forms'>
                    <div className='nav-link-icon'>
                      <i className='fas fa-book-open' />
                    </div>
                    {'Companies '}
                  </Link>
                </div>
                <div className='menu-bottom'>
                  <small>
                    {' Logged in as: '}
                    <br />
                  </small>
                  {user?.name}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <input
        type='button'
        id='mobile-button'
        onClick={mobileMenu}
        value={arrow}
      />
    </>
  )
}

export default Menu
