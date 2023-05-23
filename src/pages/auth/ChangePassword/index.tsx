import { useCallback, useState } from 'react'
import { changePassword } from '../../../actions/auth'
import setAlert from '../../../actions/setAlert'
import { useAppDispatch } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { BasicForm, Button, Input } from '../../../components'
import { Box, FormControl } from '@mui/material'
import { formGroupStyles } from './styles'

export const ChangePassword: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [password, setPassword] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')
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
  const onEmailChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(target.value)
    },
    []
  )

  const onSubmit = useCallback(() => {
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      dispatch(
        changePassword(
          email,
          password,
          window.location.href.replace(/([^]+)recovery\//g, '')
        )
      )
    }
  }, [])

  return (
    <BasicForm>
      <FormControl>
        <Box sx={formGroupStyles}>
          <Input
            value={email}
            placeholder='Email Address'
            type='email'
            onChange={onEmailChange}
            required
          />
        </Box>
        <Box sx={formGroupStyles}>
          <Input
            value={password}
            placeholder='Password'
            type='password'
            minLength={6}
            onChange={onPasswordChange}
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
          Change Password
        </Button>
      </FormControl>
    </BasicForm>
  )
}
