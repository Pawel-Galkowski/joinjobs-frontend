import { useCallback, useState } from 'react'
import { changePassword } from '../../actions/auth'
import setAlert from '../../actions/setAlert'
import { useAppDispatch } from '../../hooks'
import { type AppDispatch } from '../../store'

interface ChangePasswordData {
  email: string
  password: string
  password2: string
}

const initialData: ChangePasswordData = {
  email: '',
  password: '',
  password2: ''
}

const ChangePassword: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [formData, setFormData] = useState<ChangePasswordData>(initialData)

  const onchange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const onSubmit = useCallback(() => {
    if (formData.password !== formData.password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      dispatch(changePassword(
        formData.email,
        formData.password,
        window.location.href.replace(/([^]+)recovery\//g, '')
      ))
    }
  }, [])

  return (
    <div className='center-box'>
      <div className='flex-box'>
        <div className='additionalBG'>&nbsp;</div>
        <div className='user bg-dark'>
          <div className='form-wrap'>
            <div className='tabs-content'>
              <div id='register-tab-content' className='active'>
                <form
                  className='register-form'
                  onSubmit={onSubmit}
                  method='post'
                >
                  <div className='input-box'>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='input'
                        placeholder='Email Address'
                        name='email'
                        value={formData.email}
                        onChange={onchange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='password'
                        className='input'
                        placeholder='Password'
                        name='password'
                        minLength={6}
                        value={formData.password}
                        onChange={onchange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='password'
                        className='input'
                        placeholder='Confirm Password'
                        name='password2'
                        minLength={6}
                        value={formData.password2}
                        onChange={onchange}
                        required
                      />
                    </div>
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

export default ChangePassword
