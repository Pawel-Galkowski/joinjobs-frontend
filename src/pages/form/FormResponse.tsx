import { Link, Navigate, useParams } from 'react-router-dom'
import { removeResponse } from '../../actions/form'
import Spinner from '../../components/spinner/Spinner'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { type FormTableType, type FormProps } from '../../reducers/form/types'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'
import { useCallback } from 'react'
import { type ProfileType } from '../../reducers/profile/types'

const FormResponse: React.FC<{ form: FormTableType }> = ({ form }) => {
  const { user }: AuthProps = useAppSelector((state) => state.auth)
  const profile: ProfileType = useAppSelector((state) => state.profile.profile)
  const { loading }: FormProps = useAppSelector((state) => state.forms)
  const { company, id } = useParams()
  const dispatch: AppDispatch = useAppDispatch()

  if (!company || !id) {
    return <Navigate to='/dashboard' />
  }

  // const singleProfile = profile.filter((e: any) => e.user._id === user)[0]

  if (!!profile && !!loading) {
    return <Spinner />
  }

  const handleRemoveResponse = useCallback(() => {
    dispatch(removeResponse(company, id, user._id))
  }, [])

  return (
    <div className='post bg-white'>
      <div>
        <h1>
          <Link to={`/profile/${user._id}`}>
            {!profile.profileImg ? (
              <i className='fas fa-user-tie fa-4x' />
            ) : (
              <img
                src={profile.profileImg}
                className='round-img'
                alt=''
              />
            )}
          </Link>
        </h1>
      </div>
      <div>
        <h2>{profile.user?.name}</h2>
        <h4>Form responses:</h4>
        <div className='sectionLeftPadding'>
          <ol>
            {form.responses?.length ? (
              form.responses.map((res: any, index: any) => (
                <span key={index}>
                  <li>{res}</li>
                </span>
              ))
            ) : (
              <h2>No forms Available</h2>
            )}
          </ol>
        </div>
        {!!form.file && (
          <>
            {'My CV: '}
            <a href={form.file} download>
              {'Download now '}
            </a>
          </>
        )}
        <hr />
        <button
          onClick={handleRemoveResponse}
          type='button'
          className='btn btn-danger marginUpDown-1'
        >
          Remove &nbsp;
          <i className='fas fa-trash-alt' />
        </button>
      </div>
    </div>
  )
}

export default FormResponse
