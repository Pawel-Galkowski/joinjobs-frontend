import { useState, useCallback, type ChangeEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { postLogin } from '../../../actions/auth'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { type LoginData, initialData } from './types'

const Login: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const isAuthenticated = useAppSelector((state) => state.auth?.isAuthenticated)
  const [formData, setFormData] = useState<LoginData>(initialData)

  const { email, password }: LoginData = formData

  const onchange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }, [])

  const onSubmit = useCallback(() => {
    dispatch(postLogin({ email, password }))
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
                      placeholder='Email Address'
                      className='input'
                      id='user_login'
                      name='email'
                      value={email}
                      onChange={onchange}
                      required
                    />
                    <input
                      type='password'
                      placeholder='Password'
                      className='input'
                      id='user_pass'
                      name='password'
                      value={password}
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
