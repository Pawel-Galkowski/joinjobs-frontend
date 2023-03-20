import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';
import {
  getCurrentExperience,
  setCurrentExperience
} from '../../actions/profile';

interface Props {
  profile: any
  match?: any
}

const EditExperience: React.FC<Props> = ({
  profile: { profile, loading },
  match
}) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    company: '',
    from: '',
    to: '',
    current: false,
    description: '',
  })

  const [toDateDisabled, toggleDisabled] = useState(false)

  useEffect(() => {
    getCurrentExperience(match.params.id)
    const dateFrom = !loading && profile.from
    const dateTo = !loading && profile.to
    setFormData({
      title: !loading && profile.title,
      location: !loading && profile.location,
      company: !loading && profile.company,
      from: !loading && dateFrom.substring(0, 10),
      to: !loading && dateTo.substring(0, 10),
      current: !loading && profile.current,
      description: !loading && profile.description
    });
  }, [])

  const { title, location, company, from, to, current, description } = formData

  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault()
    setCurrentExperience(match.params.id, formData)
  }

  return !!loading || !profile
? (
    <Spinner />
  )
: (
    <div className="paddingSection">
      <h1 className="large text-primary"> Change Your experience </h1>
      <p className="lead">
        <i className="fas fa-user"> </i> Let&apos;s get some information to make
        your experience stand out
      </p>
      <small> * = required field </small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* title or Bootcamp"
            name="title"
            value={title}
            required
            onChange={onChange}
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
          <small className="form-text">
            City &amp; state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="company"
            name="company"
            value={company}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4> From Date </h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <h4> To Date </h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={toDateDisabled}
          />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              value={current.toString()}
              checked={current}
              onChange={() => {
                setFormData({ ...formData, current: !current })
                toggleDisabled(!toDateDisabled)
              }}
            />
            Current Job
          </p>
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols={30}
            rows={5}
            placeholder="Program Description"
            value={description}
            onChange={(e: any) => {
              onChange(e)
            }}
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

const mapStateToProps = (state: any) => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentExperience,
  setCurrentExperience
})(EditExperience)
