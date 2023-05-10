import { useState, useCallback } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { postLogin } from '../../../actions/auth'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { type LoginData, initialData } from './types'
import { Input, Button } from '../../../components'
import { Box } from '@mui/material'

const Login: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const isAuthenticated = useAppSelector((state) => state.auth?.isAuthenticated)
  const [formData] = useState<LoginData>(initialData)

  const { email, password }: LoginData = formData

  const onSubmit = useCallback(() => {
    dispatch(postLogin({ email, password }))
  }, [])

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return (
    <Box className='center-box'>
      <Box className='flex-box'>
        <Box className='additionalBG'>&nbsp;</Box>
        <Box className='user bg-dark'>
          <Box className='form-wrap'>
            <Box className='tabs-content'>
              <Box id='login-tab-content' className='active'>
                <form className='login-form'>
                  <Box className='input-box'>
                    <Input
                      value={email}
                      placeholder='Email Address'
                      type='email'
                      required
                    />
                    <Input
                      value={password}
                      placeholder='Password'
                      type='password'
                      required
                    />
                  </Box>
                  <Button>Login</Button>
                  <input
                    type='button'
                    className='button'
                    value='Login'
                    onClick={onSubmit}
                  />
                </form>
                <Box className='help-action'>
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
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
