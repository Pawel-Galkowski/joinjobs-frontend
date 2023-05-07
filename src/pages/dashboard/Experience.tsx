import { Fragment, useCallback } from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { deleteExperience } from '../../actions/profile'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { Spinner } from '../../components'
import { type ExperienceProps } from '../../reducers/profile/types'

const Experience: React.FC = () => {
  const { experience, loading } = useAppSelector((state) => state.profile.profile)
  const dispatch: AppDispatch = useAppDispatch()
  const submitOperation = useCallback((id: string) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove that experience?')) {
      dispatch(deleteExperience(id))
    }
  }, [])

  const experiences = experience.map((exp: ExperienceProps) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.location}</td>
      <td>{exp.title}</td>
      <td className='hide-md'>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> {'- '}
        {!exp.to ? 'Now' : <Moment format='YYYY/MM/DD'>{exp.to}</Moment>}
      </td>
      <td>
        <Link
          to={{ pathname: `/edit-experience/${exp._id!}` }}
          className='btn btn-light'
        >
          <i className='far fa-edit fa-2x' />
        </Link>
      </td>
      <td>
        <i
          className='far fa-window-close fa-2x'
          onClick={() => { exp._id && submitOperation(exp._id) }}
        />
      </td>
    </tr>
  ))

  const experiences2 = experience.map((exp: ExperienceProps) => (
    <Fragment key={exp._id}>
      <tr>
        <th>Company</th>
        <td>{exp.company}</td>
      </tr>
      <tr>
        <th>Location</th>
        <td>
          <Moment format='YYYY/MM/DD'>{exp.from}</Moment> {'- '}
          {!exp.to ? 'Now' : <Moment format='YYYY/MM/DD'>{exp.to}</Moment>}
        </td>
      </tr>
      <tr>
        <th>Edit</th>
        <td>
          <Link
            to={{ pathname: `/edit-experience/${exp._id!}` }}
            className='btn btn-light'
          >
            <i className='far fa-edit fa-2x' />
          </Link>
        </td>
      </tr>
      <tr className='strong-bottom'>
        <th>Remove</th>
        <td>
          <i
            className='far fa-window-close fa-2x'
            onClick={() => { submitOperation(exp._id!) }}
          />
        </td>
      </tr>
    </Fragment>
  ))

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <h2>Experience Credentials</h2>
      <table className='information-table bigScreen'>
        <thead>
          <tr>
            <th>Company</th>
            <th>Location</th>
            <th>Title</th>
            <th className='hide-md'>Years</th>
            <th colSpan={2}>{null}</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
      <table className='information-table mobileScreen'>
        <tbody>{experiences2}</tbody>
      </table>
    </>
  )
}

export default Experience
