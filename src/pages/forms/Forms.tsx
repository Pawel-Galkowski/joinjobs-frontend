import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spinner } from '../../components';
import { getCompanies } from '../../actions/form';
import CompanyItem from './CompanyItem';
import CreateCompany from './CreateCompany';
import { type FormSchema } from '../../types';

interface FormsData {
  forms: {
    forms: FormSchema[]
    loading: boolean
  }
}

const Forms = ({ forms }: FormsData) => {
  useEffect(() => {
    getCompanies()
  }, [getCompanies])

  return forms.loading || !forms
? (
    <Spinner />
  )
: (
    <div className="paddingSection">
      <h1 className="large text-primary">Companies</h1>
      <p className="lead">
        <i className="fas fa-user" />
        {' Welcome to the companies section'}
      </p>
      <CreateCompany />
      <h2 className="formsMainText">All actually registered companies:</h2>
      <div className="forms">
        {forms.forms
? (
          forms.forms.map((form: any) => (
            <CompanyItem key={form._id} forms={form} />
          ))
        )
: (
          <h2>No companies available</h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ forms }: any) => ({ forms })

export default connect(mapStateToProps, { getCompanies })(Forms)
