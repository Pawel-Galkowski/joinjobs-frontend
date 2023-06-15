import { Box, Typography } from '@mui/material'
import { useAppSelector } from '../../../../hooks'
import { type ProfileType } from '../../../../reducers/profile/types'
import { profileAboutStyles } from './styles'

export const ProfileAbout: React.FC = () => {
  const profile: ProfileType = useAppSelector(
    ({ profile }) => profile.profile
  )

  return (
    <Box sx={profileAboutStyles}>
      {profile?.bio && (
        <>
          <Typography variant='h2'>
            {profile?.user?.name.trim().split(' ')[0]}&apos;s Bio
          </Typography>
          <Typography variant='body1'>{profile.bio}</Typography>
        </>
      )}
    </Box>
  )
}
