import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getCompanyForms } from '../../actions/form'
import CompanyForms from './CompanyForms'
import Spinner from '../../components/spinner/Spinner'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { type FormType, type FormProps } from '../../reducers/form/types'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'

const CompanyForm: React.FC = () => {
  const { user }: AuthProps = useAppSelector((state) => state.auth)
  const { forms, loading }: FormProps = useAppSelector((state) => state.forms)
  const { company } = useParams()
  const dispatch: AppDispatch = useAppDispatch()

  if (!company) {
    return <Navigate to='/dashboard' />
  }

  if (!!loading || !forms || !user) {
    return <Spinner />
  }

  useEffect(() => {
    dispatch(getCompanyForms(company))
  }, [getCompanyForms])

  return (
    <div className='paddingSection'>
      {forms[0].admins?.includes(user._id) ? (
        <div className='mobile-center'>
          <Link
            to={`/api/forms/create/${company}`}
            className='btn btn-primary'
          >
            Create new form
          </Link>
        </div>
      ) : (
        <div />
      )}
      <div className='marginTop-2'>
        <h2>Actually forms:</h2>
        {!forms.length ? (
          <h2>No forms available</h2>
        ) : (
          forms.map((form: FormType) => (
            <CompanyForms key={form._id} form={form} />
          ))
        )}
      </div>
    </div>
  )
}

export default CompanyForm
