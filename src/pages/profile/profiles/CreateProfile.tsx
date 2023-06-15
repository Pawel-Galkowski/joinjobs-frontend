import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../../actions/axios'
import { createProfile } from '../../../actions/profile'
import { Spinner } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type ProfileType } from '../../../reducers/profile/types'
import { profileInitialData } from '../../../reducers/profile/Profile'
import { type AppDispatch } from '../../../store'

export const CreateProfile: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const auth = useAppSelector((state) => state.auth)
  const [data, setData] = useState<ProfileType>(profileInitialData)
  const [displaySocialInputs, toggleSocialInputs] = useState<boolean>(false)

  const onChange = useCallback(
    ({
      target
    }: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >) => {
      setData({
        ...data,
        [target.name]: target.value
      })
    },
    []
  )

  const [file, setFile] = useState<any>()
  const [uploadedFile, setUploadedFile] = useState<any>({})

  const handleFile = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFile(target.files)
  }

  const createProfileAction = useCallback(() => {
    dispatch(createProfile(data))
  }, [])

  const uploadFile = async () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('user', auth.user._id)
    try {
      const res = await axios.post('/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setData({ ...data, profileImg: res.data.filePath })
      setUploadedFile(res.data)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.response.data.msg)
    }
  }

  if (auth.loading) {
    return <Spinner />
  }

  return (
    <div className='paddingSection'>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' />
        {' Let&apos;s get some information to make your profile stand out'}
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={createProfileAction}>
        <div className='form-group'>
          <select name='status' value={data.status} onChange={onChange}>
            <option value='0'>* Select Professional Status</option>
            <option value='Developer'>Developer</option>
            <option value='Junior Developer'>Junior Developer</option>
            <option value='Senior Developer'>Senior Developer</option>
            <option value='Manager'>Manager</option>
            <option value='Student or Learning'>Student or Learning</option>
            <option value='Instructor'>Instructor or Teacher</option>
            <option value='Intern'>Intern</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className='form-group'>
          <div className='custom-file'>
            <input
              type='file'
              className='custom-file-input'
              id='customFile'
              onChange={handleFile}
            />
            <br />
            <button
              type='button'
              className='btn btn-light'
              onClick={() => uploadFile}
            >
              Upload file
            </button>
          </div>
          {uploadedFile && (
            <div className='row mt-5'>
              <img style={{ width: '30%' }} src={uploadedFile.filePath} alt='' />
            </div>
          )}
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Company'
            name='company'
            value={data.company}
            onChange={onChange}
          />
          <small className='form-text'>
            Could be your own company or one you work for
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Website'
            name='website'
            value={data.website}
            onChange={onChange}
          />
          <small className='form-text'>
            Could be your own or a company website
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={data.location}
            onChange={onChange}
          />
          <small className='form-text'>
            City &amp; state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Skills'
            name='skills'
            value={data.skills}
            onChange={onChange}
          />
          <small className='form-text'>
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Github Username'
            name='githubusername'
            value={data.githubusername}
            onChange={onChange}
          />
          <small className='form-text'>
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={data.bio}
            onChange={onChange}
          />
          <small className='form-text'>Tell us a little about yourself</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => {
              toggleSocialInputs((prevValue) => !prevValue)
            }}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={data.socialMedia.twitter}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={data.socialMedia.facebook}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={data.socialMedia.youtube}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={data.socialMedia.linkedin}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={data.socialMedia.instagram}
                onChange={onChange}
              />
            </div>
          </>
        )}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </div>
  )
}
