import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeResponse } from '../../actions/form'
import Spinner from '../../components/spinner/Spinner'

interface User {
  _id: number
  role: 'admin' | 'user'
}

interface Form {
  _id: string
  user: User
  answer: any
  file: string
  loading?: boolean
}

interface Params {
  company: string
  id: number
}

interface Match {
  params: Params
}

interface Props {
  form: Form
  profile?: any
  match: Match
}

const FormResponse: React.FC<Props> = ({
  profile,
  match,
  form: { _id, user, answer, file, loading }
}) => {
  const singleProfile = profile?.filter((e: any) => e.user._id === user)[0]

  return !!profile && !!loading ? (
    <Spinner />
  ) : (
    <div className='post bg-white'>
      <div>
        <h1>
          <Link to={`/profile/${user._id}`}>
            {!singleProfile.profileImg ? (
              <i className='fas fa-user-tie fa-4x' />
            ) : (
              <img
                src={singleProfile.profileImg}
                className='round-img'
                alt=''
              />
            )}
          </Link>
        </h1>
      </div>
      <div>
        <h2>{singleProfile?.user.name}</h2>
        <h4>Form responses:</h4>
        <div className='sectionLeftPadding'>
          <ol>
            {answer?.length > 0 ? (
              answer.map((res: any, index: any) => (
                <span key={index}>
                  <li>{res}</li>
                </span>
              ))
            ) : (
              <h2>No forms Available</h2>
            )}
          </ol>
        </div>
        {!!file && (
          <>
            {'My CV: '}
            <a href={file} download>
              {'Download now '}
            </a>
          </>
        )}
        <hr />
        <button
          onClick={() => { removeResponse(match.params.company, match.params.id, _id) }
          }
          type='button'
          className='btn btn-danger marginUpDown-1'
        >
          Remove &nbsp;
          <i className='fas fa-trash-alt' />
        </button>
      </div>
    </div>
  )
}

export default connect(null, { removeResponse })(FormResponse)
