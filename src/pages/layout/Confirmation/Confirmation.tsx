import { useCallback, useState } from 'react'
import { authorize } from '../../../actions/auth'
import { useAppDispatch } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { BasicForm, Button } from '../../../components'
import { Box, FormControl, Input, Typography } from '@mui/material'
import { PersonIcon } from '../../../utils/icons'
import { leadStyles, formGroupStyles } from './styles'

export const Confirmation: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [token, setToken] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const onEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value)
  }

  const onTokenChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setToken(target.value)
  }

  const onSubmit = useCallback(() => {
    dispatch(authorize({ token, email }))
  }, [])

  return (
    <>
      <Typography variant='h1'>Sign In</Typography>
      <BasicForm>
        <Typography sx={leadStyles}>
          <PersonIcon />
          Sign Into Your Account
        </Typography>
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
              value={token}
              placeholder='Password'
              type='password'
              onChange={onTokenChange}
              required
            />
          </Box>
          <Button onClick={onSubmit} textPlacement='center'>
            Login
          </Button>
        </FormControl>
      </BasicForm>
      <p className='my-1'>
        {'Don&apos;t have an account? '}
        <Button link='/register' variant='text'>
          Sign Up
        </Button>
      </p>
    </>
  )
}
