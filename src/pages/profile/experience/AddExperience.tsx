import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { addExperience } from '../../../actions/profile'
import { Spinner } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { type ExperienceProps } from '../../../reducers/profile/types'
// import { type ExperienceProps } from '../../reducers/profile/types'

const initialData: Partial<ExperienceProps> = {
  current: true,
  title: '',
  company: '',
  location: '',
  description: ''
}

export const AddExperience: React.FC = () => {
  const { loading } = useAppSelector((state) => state.profile)
  const [formData, setFormData] = useState<Partial<ExperienceProps>>(initialData)
  const { title, company, location, from, to, current, description } = formData

  const dispatch: AppDispatch = useAppDispatch()

  const onCurrentChange = useCallback(() => {
    setFormData((prevValue) => ({
      ...prevValue,
      current: !prevValue.current
      // to: prevValue.current ? undefined : prevValue.to
    }))
  }, [])

  const onChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [target.name]: target.value
      })
    },
    []
  )

  const onFormSubmit = useCallback(() => {
    dispatch(addExperience(formData))
  }, [])

  if (loading) {
    <Spinner />
  }

  return (
    <div className='paddingSection'>
      <h1 className='large text-primary'>Add An Experience</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' />
        {'Add any developer/programming positions that you had in the past'}
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={onFormSubmit}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Job Title'
            name='title'
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Company'
            name='company'
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input
            type='date'
            name='from'
            value={from?.toString()}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              onChange={onCurrentChange}
            />
            {' Current Job'}
          </p>
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            type='date'
            name='to'
            value={to?.toString()}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols={30}
            rows={5}
            placeholder='Job Description'
            value={description}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </div>
  )
}
