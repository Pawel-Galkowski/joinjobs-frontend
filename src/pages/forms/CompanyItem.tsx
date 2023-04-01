import { Link } from 'react-router-dom'
import { Spinner } from '../../components'
import { removeCompany } from '../../actions/form'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { type FormProps } from '../../reducers/form/types'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'
import { useCallback } from 'react'

const CompanyItem: React.FC = () => {
  const { user }: AuthProps = useAppSelector((state) => state.auth)
  const { form, loading }: FormProps = useAppSelector((state) => state.forms)
  const dispatch: AppDispatch = useAppDispatch()

  if (loading || !user || !form) {
    return <Spinner />
  }

  const handleRemoveCompany = useCallback(() => {
    dispatch(removeCompany(form._id))
  }, [])

  return (
    <div className='formItem bg-white'>
      <div>
        <Link to={`/api/forms/${form._id}`}>
          <i className='far fa-building fa-3x' />
          <h4>{form.company}</h4>
        </Link>
      </div>
      <div>
        <h4>
          {'Available forms: '}
          <Link to={`/api/forms/${form._id}`}>
            {form.formTable?.length}
            <br />
            Check all positions
          </Link>
        </h4>
      </div>
      <div>
        {(form.admins.includes(user._id) || user.role === 'admin') && (
          <button
            onClick={handleRemoveCompany}
            type='button'
            className='btn btn-danger'
          >
            Remove &nbsp;
            <i className='fas fa-trash-alt' />
          </button>
        )}
      </div>
    </div>
  )
}

export default CompanyItem
