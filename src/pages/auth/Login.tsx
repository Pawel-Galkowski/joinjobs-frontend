import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

interface LoginData {
  email: string
  password: string
}

const initialData: LoginData = {
  email: '',
  password: '',
}

function Login ({ isAuthenticated }: any) {
  const [formData, setFormData] = useState(initialData)

  const onchange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const onSubmit = () => login(formData)

  return isAuthenticated
? (
    <Navigate to="/dashboard" />
  )
: (
    <div className="center-box">
      <div className="flex-box">
        <div className="additionalBG">&nbsp;</div>
        <div className="user bg-dark">
          <div className="form-wrap">
            <div className="tabs-content">
              <div id="login-tab-content" className="active">
                <form className="login-form" onSubmit={onSubmit} method="post">
                  <div className="input-box">
                    <input
                      type="email"
                      className="input"
                      id="user_login"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={onchange}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="input"
                      id="user_pass"
                      name="password"
                      value={formData.password}
                      onChange={onchange}
                      required
                    />
                  </div>
                  <input type="submit" className="button" value="Login" />
                </form>
                <div className="help-action">
                  <p>&nbsp;</p>
                  <p className="forgot">
                    {'Do not have account yet? '}
                    <Link to="/register">
                      <i className="fas fa-arrow-right" />
                      {' Sign Up '}
                      <i className="fas fa-arrow-left" />
                    </Link>
                  </p>
                  <p className="forgot">
                    <Link to="/recovery">
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                      {' Forgot your password?'}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login)
