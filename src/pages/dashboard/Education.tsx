import { Fragment } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { deleteEducation } from '../../actions/profile'
import { useAppDispatch } from '../../hooks'
import { type AppDispatch } from '../../store'

interface Edu {
  _id: number
  school: string
  degree: string
  fieldofstudy: string
  from: string
  to: string
}

const Education: React.FC<any> = ({ education }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const submitOperation = (id: number) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove that experience?')) {
      dispatch(deleteEducation(id))
    }
  }

  const educations = education.map((edu: Edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>{edu.fieldofstudy}</td>
      <td className="hide-md">
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
        {edu.to ? <Moment format="YYYY/MM/DD">{edu.to}</Moment> : 'Now'}
      </td>
      <td>
        <Link
          to={{ pathname: `/edit-education/${edu._id}` }}
          className="btn btn-light"
        >
          <i className="far fa-edit fa-2x" />
        </Link>
      </td>
      <td>
        <i
          className="far fa-window-close fa-2x"
          onClick={() => {
            submitOperation(edu._id)
          }}
        />
      </td>
    </tr>
  ))

  const educations2 = education.map((edu: Edu) => (
    <Fragment key={edu._id}>
      <tr>
        <th>School</th>
        <td>{edu.school}</td>
      </tr>
      <tr>
        <th>Degree</th>
        <td>{edu.degree}</td>
      </tr>
      <tr>
        <th>Edit</th>
        <td>
          <Link
            to={{ pathname: `/edit-education/${edu._id}` }}
            className="btn btn-light"
          >
            <i className="far fa-edit fa-2x" />
          </Link>
        </td>
      </tr>
      <tr className="strong-bottom">
        <th>Remove</th>
        <td>
          <i
            className="far fa-window-close fa-2x"
            onClick={() => {
              submitOperation(edu._id)
            }}
          />
        </td>
      </tr>
    </Fragment>
  ))
  return (
    <>
      <h2 className="me-2">Education Credentials</h2>
      <table className="information-table bigScreen">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th className="hide-md">Field Of Study</th>
            <th>Years</th>
            <th colSpan={2}>{}</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
      <table className="information-table mobileScreen">
        <tbody>{educations2}</tbody>
      </table>
    </>
  )
}

export default connect(null, { deleteEducation })(Education)
