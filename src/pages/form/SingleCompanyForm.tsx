import { Link } from 'react-router-dom'
import type { FormBodyType } from '../../reducers/form/types'

interface SingleCompanyFormProps {
  formBody: FormBodyType
  company: string
  _id: string
}

const SingleCompanyForm: React.FC<SingleCompanyFormProps> = ({ formBody, company, _id }) => (
    <div className='formItemBig bg-white'>
      {/* <div>
        <h3>{formBody.title}</h3>
      </div> */}
      <div>
        <h1>{formBody.title}</h1>
        <h2>
          Skills:
          {formBody.skills}
        </h2>
        {/* <div className='marginUpDown-1'>{body?.body}</div> */}
        <Link to={`/api/forms/${company}/${_id}`}>
          <h4>Apply for that position</h4>
        </Link>
      </div>
    </div>
)

export default SingleCompanyForm
