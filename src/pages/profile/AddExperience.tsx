import { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addExperience } from '../../actions/profile';
import { Spinner } from '../../components';
import { type ExperienceSchema } from '../../types';

interface AddExperienceData {
  loading?: boolean
  history?: any
}

const initialData: ExperienceSchema = {
  title: '',
  company: '',
  location: '',
  from: '',
  to: '',
  current: false,
  description: '',
}

const AddExperience: React.FC<AddExperienceData> = ({ history, loading }) => {
  const [formData, setFormData] = useState<ExperienceSchema>(initialData)
  const [toDateDisabled, toggleDisabled] = useState<boolean>(false)
  const { title, company, location, from, to, current, description } = formData

  const onCurrentChange = useCallback(() => {
    setFormData((prevValue) => ({
      ...prevValue,
      current: !prevValue.current
    }))
    toggleDisabled((prevValue) => !prevValue)
  }, [])

  const onChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [target.name]: target.value
      });
    },
    []
  )

  return loading
? (
    <Spinner />
  )
: (
    <div className="paddingSection">
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch" />
        {'Add any developer/programming positions that you had in the past'}
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={() => addExperience(formData, history)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              value={current.toString()}
              checked={current}
              onChange={onCurrentChange}
            />
            {' Current Job'}
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={toDateDisabled}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols={30}
            rows={5}
            placeholder="Job Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default connect(null, { addExperience })(AddExperience)
