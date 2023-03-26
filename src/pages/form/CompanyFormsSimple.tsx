import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeForm } from '../../actions/form'

interface FormTable {
  _id: number
  body: any
}

interface Props {
  company: string
  formTable: FormTable
  name: any
}

const CompanyForms: React.FC<Props> = ({
  company,
  formTable: { _id, body },
  name
}) => {
  return (
    <div className='formItemBig bg-white'>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <h1>{body?.title}</h1>
        <h2>
          Skills:
          {body?.skills}
        </h2>
        <div className='marginUpDown-1'>{body?.body}</div>
        <Link to={`/api/forms/${company}/${_id}`}>
          <h4>Apply for that position</h4>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { removeForm })(CompanyForms)
