import { useEffect, Fragment } from 'react'
import Spinner from '../../components/spinner/Spinner'
import { getForm } from '../../actions/form'
import FormResponse from './FormResponse'
import { useParams, Navigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'
import { type FormProps } from '../../reducers/form/types'

const SingleFormResponse: React.FC = () => {
  const auth: AuthProps = useAppSelector((state) => state.auth)
  const { form, loading }: FormProps = useAppSelector((state) => state.forms.form)
  const { company, id, response } = useParams()
  const dispatch: AppDispatch = useAppDispatch()

  if (!company || !id || !response) {
    return <Navigate to='/dashboard' />
  }

  useEffect(() => {
    dispatch(getForm(company, id))
  }, [getForm])

  if (!!auth.loading || !form || loading) {
    return <Spinner />
  }

  return (
    <div className='paddingSection'>
      <h1>Responses to form </h1>
      <div>
        <hr />
        <h2>Questions:</h2>
        <div className='sectionLeftPadding'>
          <ol>
            {form.formTable?.[0].questions.map((question: string, index: number) => (
              <Fragment key={index}>
                <li>{question}</li>
              </Fragment>
            ))}
          </ol>
        </div>
      </div>

      <div>
        <hr />
        <h2>Responses:</h2>
        {form.formTable?.[0].responses.map((formItem: any) => (
          <Fragment key={formItem._id}>
            {formItem._id === response && (
              <FormResponse form={formItem} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default SingleFormResponse
