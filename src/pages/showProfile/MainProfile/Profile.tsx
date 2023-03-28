import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../../../components/spinner/Spinner'
import ProfileTop from '../ProfileHeader/ProfileTop'
import { getProfileById } from '../../../actions/profile'
import ProfileAbout from '../About/ProfileAbout'
import ProfileExperience from '../Experience/ProfileExp'
import ProfileEducation from '../Education/ProfileEdu'
import ProfileGithub from '../Github/ProfileGithub'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import type { EducationProps, ExperienceProps } from '../../../reducers/profile/types'

const Profile: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { isAuthenticated, loading, user } = useAppSelector((state) => state.auth)
  const { profile } = useAppSelector((state) => state.profile)
  const { id } = useParams()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    dispatch(getProfileById(id!))
  }, [])

  if (profile.loading) {
    return <Spinner />
  }

  return (
    <div className='paddingSection'>
      {profile === null || profile === undefined ? (
        <Spinner />
      ) : (
        <div>
          <div className='profileButtons'>
            <Link to='/profiles' className='btn btn-light'>
              Back to profiles
            </Link>
            { isAuthenticated &&
              !loading &&
              user?._id === profile.user?._id && (
                <Link to='/edit-profile' className='btn btn-dark'>
                  Edit profile
                </Link>
            )}
          </div>
          <div className='profile-page'>
            <ProfileTop />
            <ProfileAbout />
            <div className='flex-row'>
              <div className='profile-exp bg-white p2'>
                <h2 className='text-primary'>Experience</h2>
                {profile.experience?.length ? (
                  <>
                    {profile.experience.map((experience: ExperienceProps) => (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                  </>
                ) : (
                  <h4>No experience credetials</h4>
                )}
              </div>
              <div className='profile-edu bg-white p-2'>
                <h2 className='text-primary'>Education</h2>
                {profile.education?.length ? (
                  <>
                    {profile.education.map((education: EducationProps) => (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    ))}
                  </>
                ) : (
                  <h4>No education credetials</h4>
                )}
              </div>
            </div>
            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
