import { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addEducation } from '../../actions/profile'
import { Spinner } from '../../components'
import { type EducationSchema } from '../../types'

interface AddEducationData {
  loading?: boolean
  history?: any
}

const initialData: EducationSchema = {
  school: '',
  degree: '',
  fieldofstudy: '',
  from: '',
  to: '',
  current: false,
  description: ''
}

const AddEducation: React.FC<AddEducationData> = ({ loading, history }) => {
  const [formData, setFormData] = useState<EducationSchema>(initialData)

  const [toDateDisabled, toggleDisabled] = useState(false)

  const onChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const onCurrentChange = useCallback(() => {
    setFormData((prevValue) => ({
      ...prevValue,
      current: !prevValue.current
    }))
    toggleDisabled((prevValue) => !prevValue)
  }, [])

  return loading ? (
    <Spinner />
  ) : (
    <div className='paddingSection'>
      <h1 className='large text-primary'>Add Your Education</h1>
      <p className='lead'>
        <i className='fas fa-graduation-cap' />
        {' Add any school, bootcamp, etc that you have attended'}
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={() => { addEducation(formData, history) }}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* School or Bootcamp'
            name='school'
            value={formData.school}
            required
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Degree or Certificate'
            name='degree'
            value={formData.degree}
            required
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Field Of Study'
            name='fieldofstudy'
            value={formData.fieldofstudy}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input
            type='date'
            name='from'
            value={formData.from}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              value={formData.current.toString()}
              checked={formData.current}
              onChange={onCurrentChange}
            />
            {' Current School or Bootcamp'}
          </p>
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            type='date'
            name='to'
            value={formData.to}
            onChange={onChange}
            disabled={toDateDisabled}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols={30}
            rows={5}
            placeholder='Program Description'
            value={formData.description}
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

export default connect(null, { addEducation })(AddEducation)
