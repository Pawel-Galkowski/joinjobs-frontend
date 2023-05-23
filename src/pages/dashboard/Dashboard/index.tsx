import { useEffect, useCallback } from 'react'
import Spinner from '../../../components/spinner/Spinner'
import { getCurrentProfile, deleteAccount } from '../../../actions/profile'
import { Education } from '../Education'
import { Experience } from '../Experience'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { Box, Typography } from '@mui/material'
import { Button } from '../../../components'
import {
  leadStyles,
  paddingSectionStyles,
  removeUserStyles,
  tableCenterStyles
} from './styles'
import { PersonIcon, PersonRemoveIcon } from '../../../utils/icons'

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const auth = useAppSelector(({ auth }) => auth)
  const { profile, loading } = useAppSelector(({ profile }) => profile)

  useEffect(() => {
    dispatch(getCurrentProfile())
  }, [])

  const submitOperation = useCallback(() => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove your account?')) {
      dispatch(deleteAccount())
    }
  }, [])

  if (loading && !auth?.loading) {
    return <Spinner />
  }

  return (
    <Box sx={paddingSectionStyles}>
      <Typography variant='h2'>Dashboard</Typography>
      <Typography sx={leadStyles}>
        <PersonIcon />
        Welcome {auth.user?.name}
      </Typography>
      {profile ? (
        <>
          <Box sx={tableCenterStyles}>
            <Experience />
            <Education />
          </Box>
          <Box sx={removeUserStyles}>
            <Button
              onClick={submitOperation}
              textPlacement='center'
              color='error'
              icon={<PersonRemoveIcon />}
              iconPlacement='start'>
              Delete My Account
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography variant='body2'>
            You have not setup a profile yet, please add some informations
          </Typography>
          <Button internalLink='/create-profile' textPlacement='center'>
            Create profile
          </Button>
        </>
      )}
    </Box>
  )
}

export default Dashboard
