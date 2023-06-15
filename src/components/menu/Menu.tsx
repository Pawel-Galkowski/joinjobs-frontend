import { useEffect, useState } from 'react'
import { getCurrentProfile } from '../../actions/profile'
import { type ArrowType } from './types'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type ProfileType } from '../../reducers/profile/types'
import { type AuthProps } from '../../reducers/auth/types'
import { Button } from '../button'
import { AccountCircleIcon, ChatIcon, MenuBookIcon, SchoolIcon, ViewColumnIcon, WorkHistoryIcon } from '../../utils/icons'
import { Box, Typography } from '@mui/material'

const Menu: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const profile: ProfileType = useAppSelector(({ profile }) => profile.profile)
  const auth: AuthProps = useAppSelector(({ auth }) => auth)
  const [arrow, setArrow] = useState<ArrowType>('<')

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [])

  if (auth?.loading || !auth?.user || !auth?.isAuthenticated) {
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
              id='sidenavAccordion'>
              <div className='sidenav-menu'>
                <Box className='nav'>
                  <section className='sidenav-menu-heading'>Profile</section>
                  {profile && (
                    <Button
                      link='/edit-profile'
                      textPlacement='center'
                      icon={<AccountCircleIcon />}
                      iconPlacement='start'>
                      Edit Profile
                    </Button>
                  )}
                  <Button
                    link='/education'
                    textPlacement='center'
                    icon={<SchoolIcon />}
                    iconPlacement='start'>
                    Add Education
                  </Button>
                  <Button
                    link='/experience'
                    textPlacement='center'
                    icon={<WorkHistoryIcon />}
                    iconPlacement='start'>
                    Add Experience
                  </Button>
                  <section className='sidenav-menu-heading'>Interface</section>
                  <Button
                    icon={<ViewColumnIcon />}
                    iconPlacement='start'
                    link='/profiles'>
                    Developers
                  </Button>
                  <Button
                    icon={<ChatIcon />}
                    iconPlacement='start'
                    link='/posts'>
                    Posts
                  </Button>
                  <section className='sidenav-menu-heading'>
                    Recruitment
                  </section>
                  <Button
                    icon={<MenuBookIcon />}
                    iconPlacement='start'
                    link='/forms'>
                    Companies
                  </Button>
                </Box>
                <Box className='menu-bottom'>
                  <Typography variant='inherit'>Logged in as:</Typography>
                  {auth.user?.name}
                </Box>
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
