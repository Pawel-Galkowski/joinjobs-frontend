import { Box, Typography } from '@mui/material'
import { useAppSelector } from '../../../hooks'
import type { ProfileType } from '../../../reducers/profile/types'
import {
  iconsStyles,
  leadStyles,
  profileInformationStyles,
  profileSkillsStyles,
  skillsTypographyStyles,
  topProfileHeader
} from './styles'
import { Button, Spinner } from '../../../components'
import {
  CheckIcon,
  FacebookIcon,
  InstagramIcon,
  LanguageIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon
} from '../../../utils/icons'
import { v4 as uuid } from 'uuid'

export const ProfileHeader: React.FC = () => {
  const {
    status,
    skills,
    company,
    location,
    website,
    socialMedia,
    user,
    profileImg
  }: ProfileType = useAppSelector(({ profile }) => profile.profile)

  if (!user) {
    return <Spinner />
  }

  return (
    <Box sx={topProfileHeader}>
      <Box sx={profileInformationStyles}>
        <img
          className='round-img'
          src={profileImg || user.avatar}
          alt='avatar'
        />
        <Typography variant='h2'>{user.name}</Typography>
        <Typography variant='body1'>
          {`${status} ${company && `at ${company}`}`}
        </Typography>
        <Typography sx={leadStyles}>{location}</Typography>
        <Box sx={iconsStyles}>
          {website && (
            <Button variant='text' link={website}>
              <LanguageIcon />
            </Button>
          )}
          {socialMedia?.twitter && (
            <Button variant='text' link={socialMedia.twitter}>
              <TwitterIcon />
            </Button>
          )}
          {socialMedia?.facebook && (
            <Button variant='text' link={socialMedia.facebook}>
              <FacebookIcon />
            </Button>
          )}
          {socialMedia?.linkedin && (
            <Button variant='text' link={socialMedia.linkedin}>
              <LinkedInIcon />
            </Button>
          )}
          {socialMedia?.youtube && (
            <Button variant='text' link={socialMedia.youtube}>
              <YouTubeIcon />
            </Button>
          )}
          {socialMedia?.instagram && (
            <Button variant='text' link={socialMedia.instagram}>
              <InstagramIcon />
            </Button>
          )}
        </Box>
      </Box>
      <Box sx={profileSkillsStyles}>
        <Typography variant='h3'>Skill Set</Typography>
        {skills?.map((skill: string) => (
          <Typography key={uuid()} variant='body1' sx={skillsTypographyStyles}>
            <CheckIcon /> {skill}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}
