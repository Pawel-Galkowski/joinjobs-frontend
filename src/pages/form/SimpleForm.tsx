import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCompanyForms } from '../../actions/form';
import CompanyFormsSimple from './CompanyFormsSimple';
import Spinner from '../../components/spinner/Spinner';

interface Params {
  id: number
  company: string
}

interface MatchProps {
  params: Params
}

interface FormProps {
  forms: any
  loading: any
}

interface Props {
  auth: any
  match: MatchProps
  forms: FormProps
}

const SimpleForm: React.FC<Props> = ({
  auth,
  forms: { forms, loading },
  match
}) => {
  useEffect(() => {
    getCompanyForms(match.params.company)
  }, [getCompanyForms, match])

  return !!loading || !forms || !auth.user
? (
    <Spinner />
  )
: (
    <div className="paddingSection">
      <Link to={`/api/forms/${match.params.company}`} className="btn btn-light">
        Back to forms
      </Link>
      {!forms.formTable || forms.formTable.length < 1
? (
        <h2>Form not available</h2>
      )
: (
        forms.formTable.map((form: any) => (
          <Fragment key={form._id}>
            {form._id === match.params.id
? (
              <CompanyFormsSimple
                formTable={form}
                company={match.params.company}
                name={forms.company}
              />
            )
: null}
          </Fragment>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  forms: state.forms,
  auth: state.auth
});

export default connect(mapStateToProps, { getCompanyForms })(SimpleForm)
