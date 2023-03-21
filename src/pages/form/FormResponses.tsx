import { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner'
import { getForm } from '../../actions/form'
import { getProfiles } from '../../actions/profile'
import FormResponse from './FormResponse'

interface Params {
  company: string
  id: number
}

interface Match {
  params: Params
}

interface Profiles {
  profiles: any
}

interface Auth {
  loading?: boolean
}

interface Forms {
  form: any
}

interface Props {
  auth: Auth
  profile: Profiles
  forms: Forms
  match?: Match
}

const FormResponses: React.FC<Props> = ({
  auth: { loading },
  profile: { profiles },
  forms: { form },
  match
}) => {
  useEffect(() => {
    match && getForm(match.params.company, match.params.id)
    getProfiles()
  }, [getForm, match, getProfiles])

  return !!loading || !form || !match ? (
    <Spinner />
  ) : (
    <div className='paddingSection'>
      <Link to={`/api/forms/${match.params.company}`} className='btn btn-light'>
        Back to forms
      </Link>
      <div className='marginTop-2'>
        <h1>Responses to form </h1>
        <div>
          <hr />
          <br />
          <h2>Questions:</h2>
          <div className='sectionLeftPadding'>
            <ol>
              {form?.questions?.map((ask: any, index: any) => (
                <Fragment key={index}>
                  <li>{ask}</li>
                </Fragment>
              ))}
            </ol>
          </div>
        </div>
        <div className='sectionLeftPadding'>
          <hr />
          <br />
          <h2>Responses:</h2>
          {form?.responses?.length > 0 ? (
            form.responses.map((formItem: any) => (
              <FormResponse
                key={formItem._id}
                form={formItem}
                match={match}
                profile={profiles}
              />
            ))
          ) : (
            <h3>No responses available</h3>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  forms: state.forms,
  profile: state.profile
})

export default connect(mapStateToProps, { getForm, getProfiles })(FormResponses)
