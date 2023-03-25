import { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import Spinner from '../../components/spinner/Spinner'
import { getForm } from '../../actions/form'
import FormResponse from './FormResponse'

const SingleFormResponse: React.FC<any> = ({
  auth: { loading },
  forms: { form },
  match
}) => {
  useEffect(() => {
    getForm(match.params.company, match.params.id)
  }, [getForm, match])
  return !!loading || !form ? (
    <Spinner />
  ) : (
    <div className='paddingSection'>
      <h1>Responses to form </h1>
      <div>
        <hr />
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

      <div>
        <hr />
        <h2>Responses:</h2>
        {form?.responses?.map((formItem: any) => (
          <Fragment key={formItem._id}>
            {formItem._id === match.params.response && (
              <FormResponse form={formItem} match={match} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  forms: state.forms
})

export default connect(mapStateToProps, { getForm })(SingleFormResponse)
