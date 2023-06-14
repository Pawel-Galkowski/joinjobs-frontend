import { Box, Typography } from '@mui/material'
import type { ProfileType } from '../../reducers/profile/types'
import { profileStyles } from './styles'

export const UsersItem: React.FC<{ profile: Partial<ProfileType> }> = ({
  profile: { name, avatar }
}) => (
  <Box sx={profileStyles}>
    <img src={avatar} alt='avatar' className='round-img' />
    <Typography variant='h4'>{name}</Typography>
  </Box>
)
