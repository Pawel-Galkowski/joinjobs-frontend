import { useCallback, useState } from 'react'
import { Navigate } from 'react-router-dom'
import setAlert from '../../../actions/setAlert'
import { register } from '../../../actions/auth'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { type AuthProps } from '../../../reducers/auth/types'
import { BasicForm, Button, Input } from '../../../components'
import { Box, FormControl, Typography } from '@mui/material'
import { ArrowForwardIcon } from '../../../utils/icons'
import { forgotStyles, actionHelpStyles, formGroupStyles } from './styles'

export const Register: React.FC = () => {
  const { isAuthenticated }: AuthProps = useAppSelector(({ auth }) => auth)
  const dispatch: AppDispatch = useAppDispatch()
  const [password, setPassword] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const onPasswordChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(target.value)
    },
    []
  )
  const onPassword2Change = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setPassword2(target.value)
    },
    []
  )
  const onNameChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setName(target.value)
    },
    []
  )
  const onEmailChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(target.value)
    },
    []
  )

  const onSubmit = useCallback(() => {
    if (password === password2) {
      dispatch(
        register({
          password,
          name,
          email
        })
      )
    } else {
      setAlert('Passwords do not match', 'danger')
    }
  }, [])

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return (
    <BasicForm>
      <Typography variant='h3'>Register Form</Typography>
      <FormControl>
        <Box sx={formGroupStyles}>
          <Input
            value={name}
            placeholder='Full Name'
            type='text'
            onChange={onNameChange}
            required
          />
        </Box>
        <Box sx={formGroupStyles}>
          <Input
            value={email}
            placeholder='Email Address'
            type='email'
            onChange={onEmailChange}
            required
          />
          <small>Gravatar is supported on this page.</small>
        </Box>
        <Box sx={formGroupStyles}>
          <Input
            value={password}
            placeholder='Password'
            type='password'
            onChange={onPasswordChange}
            minLength={6}
            required
          />
        </Box>
        <Box sx={formGroupStyles}>
          <Input
            value={password2}
            placeholder='Confirm Password'
            type='password'
            onChange={onPassword2Change}
            minLength={6}
            required
          />
        </Box>
        <Button onClick={onSubmit} textPlacement='center'>
          Login
        </Button>
      </FormControl>
      <Box sx={actionHelpStyles}>
        <Typography sx={forgotStyles}>
          Already have an account?
          <Button
            link='/login'
            icon={<ArrowForwardIcon />}
            iconPlacement='start'
            color='secondary'
            variant='text'>
            Sign In
          </Button>
        </Typography>
      </Box>
    </BasicForm>
  )
}
