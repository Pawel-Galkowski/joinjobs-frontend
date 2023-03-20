import { useState } from 'react';
import { connect } from 'react-redux';
import { addCompany } from '../../actions/form';

interface CreateCompanyData {
  company: string
  nip: string
}

const initialData: CreateCompanyData = {
  company: '',
  nip: '',
}

const CreateCompany = () => {
  const [formData, setFormData] = useState<CreateCompanyData>(initialData)

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const onSubmit = () => addCompany(formData)

  return (
    <div className="form-box">
      <h1>Create your company profile</h1>
      <form className="form" id="createCompanyForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Company name"
          name="company"
          value={formData.company}
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="nip"
          placeholder="NIP"
          value={formData.nip}
          onChange={onChange}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  )
}

export default connect(null, { addCompany })(CreateCompany)
