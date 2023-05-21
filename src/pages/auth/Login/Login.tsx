import { useState, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { postLogin } from '../../../actions/auth'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { type LoginData, initialData } from './types'
import { Input, Button } from '../../../components'
import { Box, FormControl, Typography } from '@mui/material'
import {
  additionalBGStyles,
  centerBoxStyles,
  userStyles,
  flexBoxStyles,
  formWrapStyles,
  tabsContentStyles,
  tabContentStyles,
  loginFormStyles,
  actionHelpStyles,
  forgotStyles
} from './styles'
import { ArrowForwardIcon } from '../../../utils/icons'

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
    <Box sx={centerBoxStyles}>
      <Box sx={flexBoxStyles}>
        <Box sx={additionalBGStyles}>&nbsp;</Box>
        <Box sx={userStyles}>
          <Box sx={formWrapStyles}>
            <Box sx={tabsContentStyles}>
              <Box sx={tabContentStyles}>
                <FormControl sx={loginFormStyles}>
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
                  <Button onClick={onSubmit} textPlacement='center'>Login</Button>
                </FormControl>
                <Box sx={actionHelpStyles}>
                  <Typography sx={forgotStyles}>
                    {'Do not have account yet? '}
                    <Button
                      internalLink='/register'
                      icon={<ArrowForwardIcon />}
                      iconPlacement='start'
                      variant='text'>
                      Sign Up
                    </Button>
                    <Button
                      internalLink='/recovery'
                      icon={<ArrowForwardIcon />}
                      iconPlacement='start'
                      variant='text'>
                      Forgot your password?
                    </Button>
                  </Typography>
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
