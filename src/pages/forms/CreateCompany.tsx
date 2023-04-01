import { useCallback, useState } from 'react'
import { addCompany } from '../../actions/form'
import { useAppDispatch } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type CompanyDataType } from '../../reducers/form/types'

const initialData: CompanyDataType = {
  company: '',
  nip: ''
}

const CreateCompany = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [formData, setFormData] = useState<CompanyDataType>(initialData)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleCompanyAdd = useCallback(() => {
    dispatch(addCompany(formData))
  }, [])

  return (
    <div className='form-box'>
      <h1>Create your company profile</h1>
      <form className='form' id='createCompanyForm' onSubmit={handleCompanyAdd}>
        <input
          type='text'
          placeholder='Company name'
          name='company'
          value={formData.company}
          onChange={onChange}
          required
        />
        <input
          type='text'
          name='nip'
          placeholder='NIP'
          value={formData.nip}
          onChange={onChange}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  )
}

export default CreateCompany
