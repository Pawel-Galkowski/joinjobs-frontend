import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeForm } from '../../actions/form'

interface FormTable {
  _id: number
  responses: string[]
  body: {
    title?: string
    body: string
    skills: any
  }
}

interface Props {
  auth?: any
  company: string
  formTable: FormTable
  admins: any
  name: any
}

const CompanyForms: React.FC<Props> = ({
  auth,
  company,
  formTable: { _id, responses, body },
  admins,
  name,
}) => {
  const setUpBody =
    body?.body?.length > 100 ? `${body.body.substring(0, 97)}...` : body.body
  return (
    <div className='formItem bg-white'>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <Link to={`/forms/post/${company}/${_id}`}>
          <h3>Check that position</h3>
        </Link>
        <h1>{body?.title}</h1>
        <h2>
          Skills:
          {body?.skills}
        </h2>
        <div className='marginUpDown-1 hide-sm'>{setUpBody}</div>
        <Link to={`/api/forms/${company}/${_id}`}>
          <h4>Apply for that position</h4>
        </Link>
      </div>
      <div>
        {!admins.includes(auth.user._id) ? null : (
          <>
            <p className='hide-sm'>
              Form responses:
              {responses.length}
            </p>
            <Link to={`/api/forms/res/${company}/${_id}`}>
              <h4>Check responses</h4>
            </Link>
            <button
              onClick={() => removeForm(company, _id)}
              type='button'
              className='btn btn-danger'
            >
              Remove &nbsp;
              <i className='fas fa-trash-alt' />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { removeForm })(CompanyForms)

