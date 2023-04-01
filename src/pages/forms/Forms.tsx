import { useEffect } from 'react'
import { Spinner } from '../../components'
import { getCompanies } from '../../actions/form'
import CompanyItem from './CompanyItem'
import CreateCompany from './CreateCompany'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type FormType, type FormProps } from '../../reducers/form/types'

const Forms: React.FC = () => {
  const { forms, loading }: FormProps = useAppSelector((state) => state.forms)
  const dispatch: AppDispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCompanies())
  }, [getCompanies])

  if (loading || !forms) {
    return <Spinner />
  }

  return (
    <div className='paddingSection'>
      <h1 className='large text-primary'>Companies</h1>
      <p className='lead'>
        <i className='fas fa-user' />
        {' Welcome to the companies section'}
      </p>
      <CreateCompany />
      <h2 className='formsMainText'>All actually registered companies:</h2>
      <div className='forms'>
        {forms.length ? (
          forms.map((form: FormType) => (
            <CompanyItem key={form._id}/>
          ))
        ) : (
          <h2>No companies available</h2>
        )}
      </div>
    </div>
  )
}

export default Forms
