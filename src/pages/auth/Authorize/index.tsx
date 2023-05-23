import { useCallback, useState } from 'react'
import { authorize } from '../../../actions/auth'
import { useAppDispatch } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { BasicForm, Button, Input } from '../../../components'
import { FormControl, Typography } from '@mui/material'
import { PersonIcon } from '../../../utils/icons'
import { leadStyles } from './styles'

export const Authorize: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [email, setEmail] = useState<string>('')

  const onChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(target.value)
    },
    []
  )

  const onSubmit = useCallback(() => {
    dispatch(
      authorize({
        email,
        token: window.location.href.replace(/([^]+)confirmation\//g, '')
      })
    )
  }, [])

  return (
    <BasicForm>
      <Typography sx={leadStyles}>
        <PersonIcon />
        Write your email to confirm account
      </Typography>
      <FormControl className='register-form'>
        <Input
          value={email}
          placeholder='Email Address'
          type='email'
          onChange={onChange}
          required
        />
        <Button onClick={onSubmit} textPlacement='center'>
          Verify
        </Button>
      </FormControl>
    </BasicForm>
  )
}
