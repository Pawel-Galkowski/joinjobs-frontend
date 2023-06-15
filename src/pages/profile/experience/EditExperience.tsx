import { useState, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../../../components/spinner/Spinner'
import {
  getCurrentExperience,
  setCurrentExperience
} from '../../../actions/profile'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'

export const EditExperience: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { profile, loading } = useAppSelector((state) => state.profile)
  const { id } = useParams()

  const [formData, setFormData] = useState(profile.experience)

  const [toDateDisabled, toggleDisabled] = useState(false)

  useEffect(() => {
    dispatch(getCurrentExperience(id!))
  }, [])

  const { title, location, company, from, to, current, description } = formData

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onCurrentChange = useCallback(() => {
    setFormData({ ...formData, current: !current })
    toggleDisabled(!toDateDisabled)
  }, [])

  const onSubmit = useCallback(() => {
    dispatch(setCurrentExperience(id!, formData))
  }, [])

  if (loading ?? !profile) {
    return <Spinner />
  }

  return (
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
              onChange={onCurrentChange}
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
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </div>
  )
}
