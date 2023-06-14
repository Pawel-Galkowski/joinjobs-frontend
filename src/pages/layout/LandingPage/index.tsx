import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../../hooks'
import { type AuthProps } from '../../../reducers/auth/types'
import { Box, Typography } from '@mui/material'
import { darkOverlayStyles, landingInnerStyles, landingStyles } from './styles'
import { Button } from '../../../components'

export const LandingPage: React.FC = () => {
  const { isAuthenticated }: AuthProps = useAppSelector(({ auth }) => auth)

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return (
    <Box sx={landingStyles}>
      <Box sx={darkOverlayStyles}>
        <Box >
          <Box sx={landingInnerStyles}>
            <Typography variant='h2'>Welcome to #JoinJobs</Typography>
            <Typography variant='body1'>
              {'Create a profile or portfolio, share posts and find '}
              <u>your dream job</u>
            </Typography>
            <Box>
              <Button link='/register' color='primary'>Sign Up</Button>
              <Button link='/login' color='secondary'>Login</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
