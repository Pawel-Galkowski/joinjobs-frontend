import { useEffect, Fragment } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getCompanyForms } from '../../actions/form'
import CompanyFormsSimple from './SingleCompanyForm'
import Spinner from '../../components/spinner/Spinner'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'
import { type FormTableType, type FormProps } from '../../reducers/form/types'

const SimpleForm: React.FC = () => {
  const auth: AuthProps = useAppSelector((state) => state.auth)
  const { form, loading }: FormProps = useAppSelector((state) => state.forms)
  const { company, id } = useParams()
  const dispatch: AppDispatch = useAppDispatch()

  if (!company || !id) {
    return <Navigate to='/dashboard' />
  }

  useEffect(() => {
    dispatch(getCompanyForms(company))
  }, [getCompanyForms])

  if (!!loading || !form || !auth.user) {
    return <Spinner />
  }

  return (
    <div className='paddingSection'>
      <Link to={`/api/forms/${company}`} className='btn btn-light'>
        Back to forms
      </Link>
      {!form.formTable ?? !form.formTable?.length ? (
        <h2>Form not available</h2>
      ) : (
        form.formTable.map((item: FormTableType) => (
          <Fragment key={item._id}>
            {item._id === id ? (
              <CompanyFormsSimple
                formBody={item.body}
                company={company}
                _id={item._id}
                />
            ) : null}
          </Fragment>
        ))
      )}
    </div>
  )
}

export default SimpleForm
