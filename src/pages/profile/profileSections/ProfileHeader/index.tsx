import { Box, Typography } from '@mui/material'
import { useAppSelector } from '../../../../hooks'
import type { ProfileType } from '../../../../reducers/profile/types'
import {
  iconsStyles,
  leadStyles,
  profileInformationStyles,
  profileSkillsStyles,
  skillsTypographyStyles,
  topProfileHeader
} from './styles'
import { Button, Spinner } from '../../../../components'
import {
  CheckIcon,
  FacebookIcon,
  InstagramIcon,
  LanguageIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon
} from '../../../../utils/icons'
import { v4 as uuid } from 'uuid'

export const ProfileHeader: React.FC = () => {
  const profile: ProfileType = useAppSelector(({ profile }) => profile.profile)

  if (!profile?.user) {
    return <Spinner />
  }

  return (
    <Box sx={topProfileHeader}>
      <Box sx={profileInformationStyles}>
        <img
          className='round-img'
          src={profile?.profileImg || profile?.user.avatar}
          alt='avatar'
        />
        <Typography variant='h2'>{profile?.user.name}</Typography>
        <Typography variant='body1'>
          {`${profile?.status} ${profile?.company && `at ${profile.company}`}`}
        </Typography>
        <Typography sx={leadStyles}>{profile?.location}</Typography>
        <Box sx={iconsStyles}>
          {profile?.website && (
            <Button variant='text' link={profile.website}>
              <LanguageIcon />
            </Button>
          )}
          {profile?.socialMedia?.twitter && (
            <Button variant='text' link={profile.socialMedia.twitter}>
              <TwitterIcon />
            </Button>
          )}
          {profile?.socialMedia?.facebook && (
            <Button variant='text' link={profile.socialMedia.facebook}>
              <FacebookIcon />
            </Button>
          )}
          {profile?.socialMedia?.linkedin && (
            <Button variant='text' link={profile.socialMedia.linkedin}>
              <LinkedInIcon />
            </Button>
          )}
          {profile?.socialMedia?.youtube && (
            <Button variant='text' link={profile.socialMedia.youtube}>
              <YouTubeIcon />
            </Button>
          )}
          {profile?.socialMedia?.instagram && (
            <Button variant='text' link={profile.socialMedia.instagram}>
              <InstagramIcon />
            </Button>
          )}
        </Box>
      </Box>
      <Box sx={profileSkillsStyles}>
        <Typography variant='h3'>Skill Set</Typography>
        {profile?.skills?.map((skill: string) => (
          <Typography key={uuid()} variant='body1' sx={skillsTypographyStyles}>
            <CheckIcon /> {skill}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}
