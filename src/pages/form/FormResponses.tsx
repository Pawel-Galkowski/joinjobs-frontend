import { useEffect, Fragment } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner'
import { getForm } from '../../actions/form'
import { getProfiles } from '../../actions/profile'
import FormResponse from './FormResponse'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'
import { type FormProps } from '../../reducers/form/types'

const FormResponses: React.FC = () => {
  const { loading }: AuthProps = useAppSelector((state) => state.auth)
  const { form }: FormProps = useAppSelector((state) => state.forms)
  const { company, id } = useParams()
  const dispatch: AppDispatch = useAppDispatch()

  if (!company || !id) {
    return <Navigate to='/dashboard' />
  }

  useEffect(() => {
    dispatch(getForm(company, id))
    dispatch(getProfiles())
  }, [getForm, getProfiles])

  if (loading ?? !form) {
    return <Spinner />
  }

  return (
    <div className='paddingSection'>
      <Link to={`/api/forms/${company}`} className='btn btn-light'>
        Back to forms
      </Link>
      <div className='marginTop-2'>
        <h1>Responses to form </h1>
        <div>
          <hr />
          <br />
          <h2>Questions:</h2>
          <div className='sectionLeftPadding'>
            <ol>
              {form.formTable?.[0].questions.map((ask: any, index: any) => (
                <Fragment key={index}>
                  <li>{ask}</li>
                </Fragment>
              ))}
            </ol>
          </div>
        </div>
        <div className='sectionLeftPadding'>
          <hr />
          <br />
          <h2>Responses:</h2>
          {form.formTable?.[0].responses?.length ? (
            form.formTable?.[0].responses.map((formItem: any) => (
              <FormResponse
                key={formItem._id}
                form={formItem}
              />
            ))
          ) : (
            <h3>No responses available</h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default FormResponses
