import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import setAlert from '../../actions/setAlert'
import { register } from '../../actions/auth'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'
import { type AuthProps } from '../../reducers/auth/types'

type RoleType = 'user' | 'admin'

interface RegisterData {
  name: string
  email: string
  password: string
  password2: string
  role: RoleType
}

const initialData: RegisterData = {
  name: '',
  email: '',
  password: '',
  password2: '',
  role: 'user' as RoleType
}

const Register: React.FC = () => {
  const { isAuthenticated }: AuthProps = useAppSelector((state) => state.auth)
  const dispatch: AppDispatch = useAppDispatch()
  const [formData, setFormData] = useState<RegisterData>(initialData)

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const onSubmit = () => {
    if (formData.password === formData.password2) {
      dispatch(register(formData))
    } else {
      setAlert('Passwords do not match', 'danger')
    }
  }

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div className='center-box'>
      <div className='flex-box'>
        <div className='additionalBG'>&nbsp;</div>
        <div className='user bg-dark'>
          <div className='form-wrap'>
            <div className='tabs-content'>
              <h3>Register Form</h3>
              <div id='register-tab-content' className='active'>
                <form
                  className='register-form'
                  onSubmit={onSubmit}
                  method='post'
                >
                  <div className='input-box'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='input'
                        placeholder='Full Name'
                        name='name'
                        value={formData.name}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='email'
                        className='input'
                        placeholder='Email Address'
                        name='email'
                        value={formData.email}
                        onChange={onChange}
                        required
                      />
                      <small>Gravatar is supported on this page.</small>
                    </div>
                    <div className='form-group'>
                      <input
                        type='password'
                        className='input'
                        placeholder='Password'
                        name='password'
                        minLength={6}
                        value={formData.password}
                        onChange={onChange}
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
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                  <input type='submit' className='button' value='Login' />
                </form>
                <div className='help-action'>
                  <p className='forgot'>
                    {'Already have an account? '}
                    <Link to='/login'>
                      <i className='fas fa-arrow-right' />
                      {' Sign In '}
                      <i className='fas fa-arrow-left' />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
