import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner } from '../../components';
import { removeCompany } from '../../actions/form';
import { type FormSchema } from '../../types';

interface CompanyItemData {
  auth: any
  forms: FormSchema
}

const CompanyItem = ({ auth, forms }: CompanyItemData) =>
  forms.loading || !auth.user
? (
    <Spinner />
  )
: (
    <div className="formItem bg-white">
      <div>
        <Link to={`/api/forms/${forms._id}`}>
          <i className="far fa-building fa-3x" />
          <h4>{forms.company}</h4>
        </Link>
      </div>
      <div>
        <h4>
          {'Available forms: '}
          <Link to={`/api/forms/${forms._id}`}>
            {forms.formTable.length}
            <br />
            Check all positions
          </Link>
        </h4>
      </div>
      <div>
        {(forms.admins.includes(auth.user._id) ||
          auth.user.role === 'admin') && (
          <button
            onClick={() => removeCompany(forms._id)}
            type="button"
            className="btn btn-danger"
          >
            Remove &nbsp;
            <i className="fas fa-trash-alt" />
          </button>
        )}
      </div>
    </div>
  )

const mapStateToProps = ({ auth }: any) => ({ auth })

export default connect(mapStateToProps, { removeCompany })(CompanyItem)
