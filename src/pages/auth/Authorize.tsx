import { useState } from 'react';
import { connect } from 'react-redux';
import { authorize } from '../../actions/auth';
import Alert from '../../components/alert/Alert';

function Authorize () {
  const [formData, setFormData] = useState<string>('');

  const onchange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(target.value)
  }

  const onSubmit = () =>
    authorize({
      email: formData,
      token: window.location.href.replace(/([^]+)confirmation\//g, ''),
    })

  return (
    <div className="center-box">
      <div className="flex-box">
        <div className="additionalBG">&nbsp;</div>
        <div className="user bg-dark">
          <div className="form-wrap">
            <div className="tabs-content">
              <Alert />
              <div id="register-tab-content" className="active">
                <p className="lead">
                  <i className="fas fa-user" />
                  {' Write your email to confirm account'}
                </p>
                <form className="register-form" onSubmit={onSubmit}>
                  <div className="form-group">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={formData}
                      onChange={onchange}
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    className="button-change"
                    value="Verify"
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

export default connect(null, { authorize })(Authorize)
