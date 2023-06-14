import { Box, Typography } from '@mui/material'
import { useAppSelector } from '../../../hooks'
import { type ProfileType } from '../../../reducers/profile/types'
import { profileAboutStyles } from './styles'

export const ProfileAbout: React.FC = () => {
  const { user, bio }: ProfileType = useAppSelector(
    ({ profile }) => profile.profile
  )

  return (
    <Box sx={profileAboutStyles}>
      {bio && (
        <>
          <Typography variant='h2'>
            {user?.name.trim().split(' ')[0]}&apos;s Bio
          </Typography>
          <Typography variant='body1'>{bio}</Typography>
        </>
      )}
    </Box>
  )
}
