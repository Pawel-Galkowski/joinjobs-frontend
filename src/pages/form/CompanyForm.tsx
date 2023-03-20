import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCompanyForms } from '../../actions/form'
import CompanyForms from './CompanyForms'
import Spinner from '../../components/spinner/Spinner'

interface Params {
  company: string
  id: number
}

interface Match {
  params: Params
}

interface Forms {
  forms: any
  loading?: boolean
}

interface Props {
  auth: any
  forms: Forms
  match: Match
}

const CompanyForm: React.FC<Props> = ({
  auth,
  forms: { forms, loading },
  match,
}) => {
  useEffect(() => {
    getCompanyForms(match.params.company)
  }, [getCompanyForms, match])

  return !!loading || !forms || !auth.user ? (
    <Spinner />
  ) : (
    <div className='paddingSection'>
      {forms?.admins?.includes(auth.user._id) ? (
        <div className='mobile-center'>
          <Link
            to={`/api/forms/create/${match.params.company}`}
            className='btn btn-primary'
          >
            Create new form
          </Link>
        </div>
      ) : (
        <div />
      )}
      <div className='marginTop-2'>
        <h2>Actually forms:</h2>
        {!forms.formTable || forms.formTable.length < 1 ? (
          <h2>No forms available</h2>
        ) : (
          forms.formTable.map((form: any) => (
            <CompanyForms
              key={form._id}
              formTable={form}
              company={match.params.company}
              admins={forms.admins}
              name={forms.company}
            />
          ))
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  forms: state.forms,
  auth: state.auth,
})

export default connect(mapStateToProps, { getCompanyForms })(CompanyForm)

