import { useState, useCallback } from 'react'
import { Navigate } from 'react-router-dom'
import { postLogin } from '../../../actions/auth'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { Input, Button, BasicForm } from '../../../components'
import { Box, FormControl, Typography } from '@mui/material'
import { loginFormStyles, actionHelpStyles, forgotStyles } from './styles'
import { ArrowForwardIcon } from '../../../utils/icons'
import { type AuthProps } from '../../../reducers/auth/types'

export const Login: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { isAuthenticated }: AuthProps = useAppSelector(({ auth }) => auth)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmit = useCallback(() => {
    if (email && password) {
      dispatch(postLogin({ email, password }))
    }
  }, [email, password])

  const onEmailChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(target.value)
    },
    []
  )

  const onPasswordChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(target.value)
    },
    []
  )

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return (
    <BasicForm>
      <FormControl sx={loginFormStyles}>
        <Input
          value={email}
          placeholder='Email Address'
          type='email'
          onChange={onEmailChange}
          required
        />
        <Input
          value={password}
          placeholder='Password'
          type='password'
          onChange={onPasswordChange}
          required
        />
        <Button onClick={onSubmit} textPlacement='center'>
          Login
        </Button>
      </FormControl>
      <Box sx={actionHelpStyles}>
        <Typography sx={forgotStyles}>
          Do not have account yet?
          <Button
            link='/register'
            icon={<ArrowForwardIcon />}
            iconPlacement='start'
            variant='text'>
            Sign Up
          </Button>
          <Button
            link='/recovery'
            icon={<ArrowForwardIcon />}
            iconPlacement='start'
            variant='text'>
            Forgot your password?
          </Button>
        </Typography>
      </Box>
    </BasicForm>
  )
}
