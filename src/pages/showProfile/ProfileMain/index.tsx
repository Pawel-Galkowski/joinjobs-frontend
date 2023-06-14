import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../../components/spinner/Spinner'
import { getProfileById } from '../../../actions/profile'
import {
  ProfileAbout,
  ProfileExp,
  ProfileEdu,
  ProfileHeader,
  ProfileGithub
} from '..'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import type {
  EducationProps,
  ExperienceProps,
  ProfileProps
} from '../../../reducers/profile/types'
import { type AuthProps } from '../../../reducers/auth/types'
import {
  flexRowStyles,
  knowledgeSectionsStyles,
  paddingSectionStyles,
  profilePageStyles
} from './styles'
import { Box, Typography } from '@mui/material'
import { Button } from '../../../components'

export const ProfileMain: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { isAuthenticated, loading, user }: AuthProps = useAppSelector(
    ({ auth }) => auth
  )
  const profileSelector: ProfileProps = useAppSelector(({ profile }) => profile)
  const { id } = useParams()
  useEffect(() => {
    dispatch(getProfileById(id!))
  }, [])

  if (profileSelector.loading ?? loading ?? !profileSelector.profile) {
    return <Spinner />
  }

  const { profile } = profileSelector

  return (
    <Box sx={paddingSectionStyles}>
      <Box sx={flexRowStyles}>
        <Button link='/profiles' color='secondaryLight'>
          Back to profiles
        </Button>
        {isAuthenticated && user?._id === profile.user?._id && (
          <Button link='/edit-profile'>Edit profile</Button>
        )}
      </Box>
      <Box sx={profilePageStyles}>
        <ProfileHeader />
        <ProfileAbout />
        <Box sx={flexRowStyles}>
          <Box sx={knowledgeSectionsStyles}>
            <Typography variant='h3'>Experience</Typography>
            {profile.experience ? (
              <>
                {profile.experience.map((experience: ExperienceProps) => (
                  <ProfileExp key={experience._id} experience={experience} />
                ))}
              </>
            ) : (
              <Typography variant='h4'>No experience credetials</Typography>
            )}
          </Box>
          <Box sx={knowledgeSectionsStyles}>
            <Typography variant='h3'>Education</Typography>
            {profile.education ? (
              <>
                {profile.education.map((education: EducationProps) => (
                  <ProfileEdu key={education._id} education={education} />
                ))}
              </>
            ) : (
              <Typography variant='h4'>No education credetials</Typography>
            )}
          </Box>
        </Box>
        {profile.githubusername && (
          <ProfileGithub username={profile.githubusername} />
        )}
      </Box>
    </Box>
  )
}
