import { useState, useCallback } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { postLogin } from '../../actions/auth'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { type AppDispatch } from '../../store'

interface LoginData {
  email: string
  password: string
}

const initialData: LoginData = {
  email: '',
  password: ''
}

const Login: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const isAuthenticated = useAppSelector((state) => state.auth?.isAuthenticated)
  const [formData, setFormData] = useState<LoginData>(initialData)

  const onchange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const onSubmit = useCallback(() => {
    dispatch(postLogin({ email: formData.email, password: formData.password }))
  }, [])

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
              <div id='login-tab-content' className='active'>
                <form className='login-form'>
                  <div className='input-box'>
                    <input
                      type='email'
                      className='input'
                      id='user_login'
                      placeholder='Email Address'
                      name='email'
                      value={formData.email}
                      onChange={onchange}
                      required
                    />
                    <input
                      type='password'
                      placeholder='Password'
                      className='input'
                      id='user_pass'
                      name='password'
                      value={formData.password}
                      onChange={onchange}
                      required
                    />
                  </div>
                  <input
                    type='button'
                    className='button'
                    value='Login'
                    onClick={onSubmit}
                  />
                </form>
                <div className='help-action'>
                  <p>&nbsp;</p>
                  <p className='forgot'>
                    {'Do not have account yet? '}
                    <Link to='/register'>
                      <i className='fas fa-arrow-right' />
                      {' Sign Up '}
                      <i className='fas fa-arrow-left' />
                    </Link>
                  </p>
                  <p className='forgot'>
                    <Link to='/recovery'>
                      <i className='fas fa-arrow-right' aria-hidden='true' />
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
  )
}

export default Login
