import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../actions/axios'
import { createProfile, getCurrentProfile } from '../../actions/profile'
import Spinner from '../../components/spinner/Spinner'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'
import { type ProfileProps } from '../../reducers/profile/types'

const EditProfile: React.FC = () => {
  const auth: AuthProps = useAppSelector((state) => state.auth)
  const { profile, loading }: ProfileProps = useAppSelector((state) => state.profile)
  const dispatch: AppDispatch = useAppDispatch()
  const [data, setdata] = useState<any>({
    company: '',
    website: '',
    location: '',
    bio: '',
    status: '',
    githubusername: '',
    youtube: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
    skills: '',
    profileImg: ''
  })

  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    skills,
    profileImg
  } = data

  const [displaySocialInputs, toggleSocialInputs] = useState<boolean>(false)
  const [file, setFile] = useState<any>()
  const [uploadedFile, setUploadedFile] = useState<any>(null)

  useEffect(() => {
    dispatch(getCurrentProfile())
    profile && !loading &&
      setdata({
        company: profile.company,
        website: profile.website,
        location: profile.location,
        bio: profile.bio,
        skills: profile.skills,
        status: profile.status,
        profileImg: profile.profileImg,
        githubusername: profile.githubusername,
        youtube: profile.socialMedia?.youtube,
        twitter: profile.socialMedia?.twitter,
        facebook: profile.socialMedia?.facebook,
        linkedin: profile.socialMedia?.linkedin,
        instagram: profile.socialMedia?.instagram
      })
  }, [])

  const onChange = useCallback((event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }, [])

  const onSubmit = useCallback(() => {
    dispatch(createProfile(data, true))
  }, [])

  const handleFile = useCallback((elem: any) => {
    setFile(elem.target.files[0])
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
      const { fileName, filePath } = res.data
      setdata({ ...data, profileImg: filePath })
      setUploadedFile({ fileName, filePath })
    } catch (err) {
      if (err.response.status > 500) {
        // eslint-disable-next-line no-console
        console.log('There was a problem with the server')
      } else {
        // eslint-disable-next-line no-console
        console.log(err.response.data.msg)
      }
    }
  }

  const handleSocialInputToggle = useCallback(() => {
    toggleSocialInputs((prevValue: boolean) => !prevValue)
  }, [])

  const resolveImage = () => {
    if (uploadedFile?.length > 0) {
      return (
        <img style={{ width: '30%' }} src={uploadedFile.filePath} alt="" />
      )
    }
    if (profileImg?.length > 0) {
      return <img style={{ width: '30%' }} src={profileImg} alt="" />
    }
    return null
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="paddingSection">
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user" /> Let&apos;s get some information to make
        your profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status" value={status} onChange={onChange}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={handleFile}
            />
            <br />
            <button
              type="button"
              className="btn btn-light"
              onClick={() => uploadFile}
            >
              Upload file
            </button>
          </div>
          <div className="row mt-5">{resolveImage()}</div>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">
            City &amp; state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={handleSocialInputToggle}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>
          </>
        )}
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </div>
  )
}

export default EditProfile
