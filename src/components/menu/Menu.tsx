import { type FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ProfileActions from '../../pages/dashboard/DashboardActions'
import { getCurrentProfile } from '../../actions/profile'
import { type Props, type ArrowType } from './types'

const Menu: FC<Props> = ({
  auth: { isAuthenticated, loading, user },
  profile: { profile }
}) => {
  const [arrow, setArrow] = useState<ArrowType>('>')

  useEffect(() => {
    getCurrentProfile()
  }, [])

  if (loading || !user || !isAuthenticated) return null

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
                  <ProfileActions profile={profile} />
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

const mapStateToProps = ({ auth, profile }: any) => ({
  auth,
  profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Menu)
