import { useState } from 'react';
import { connect } from 'react-redux';
import { changePassword } from '../../actions/auth';
import setAlert from '../../actions/setAlert';

interface ChangePasswordData {
  email: string
  password: string
  password2: string
}

const initialData: ChangePasswordData = {
  email: '',
  password: '',
  password2: '',
}

function ChangePassword () {
  const [formData, setFormData] = useState<ChangePasswordData>(initialData)

  const onchange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const onSubmit = () =>
    formData.password === formData.password2
      ? changePassword(
        formData.email,
        formData.password,
        window.location.href.replace(/([^]+)recovery\//g, '')
      )
      : setAlert('Passwords do not match', 'danger');

  return (
    <div className="center-box">
      <div className="flex-box">
        <div className="additionalBG">&nbsp;</div>
        <div className="user bg-dark">
          <div className="form-wrap">
            <div className="tabs-content">
              <div id="register-tab-content" className="active">
                <form
                  className="register-form"
                  onSubmit={onSubmit}
                  method="post"
                >
                  <div className="input-box">
                    <div className="form-group">
                      <input
                        type="email"
                        className="input"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={onchange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        name="password"
                        minLength={6}
                        value={formData.password}
                        onChange={onchange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="input"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength={6}
                        value={formData.password2}
                        onChange={onchange}
                        required
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="button-change"
                    value="Change Password"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { changePassword })(ChangePassword)
