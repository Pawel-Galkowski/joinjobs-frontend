import { useState } from 'react'
import { connect } from 'react-redux'
import { recoveryPassword } from '../../actions/auth'

const ReMailer = () => {
  const [formData, setFormData] = useState<string>('')

  const onchange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(target.value)
  }

  const onSubmit = () => recoveryPassword(formData)

  return (
    <div className='center-box'>
      <div className='flex-box'>
        <div className='additionalBG'>&nbsp;</div>
        <div className='user bg-dark'>
          <div className='form-wrap'>
            <div className='tabs-content'>
              <div id='register-tab-content' className='active'>
                <p className='lead'>
                  <i className='fas fa-user' />
                  {' Write your email to recovery account'}
                </p>
                <form
                  className='register-form'
                  onSubmit={onSubmit}
                  method='post'
                >
                  <div className='form-group'>
                    <input
                      className='input'
                      type='email'
                      placeholder='Email Address'
                      name='email'
                      value={formData}
                      onChange={onchange}
                      required
                    />
                  </div>
                  <input
                    type='submit'
                    className='button-change'
                    value='Change Password'
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

export default connect(null, { recoveryPassword })(ReMailer)
