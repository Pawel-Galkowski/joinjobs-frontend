import { useCallback, useState } from 'react'
import { recoveryPassword } from '../../../actions/auth'
import { useAppDispatch } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { BasicForm, Button, Input } from '../../../components'
import { Box, FormControl, Typography } from '@mui/material'
import { formGroupStyles, leadStyles } from './styles'
import { PersonIcon } from '../../../utils/icons'

export const Recovery = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const [email, setEmail] = useState<string>('')

  const onChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(target.value)
    },
    []
  )

  const onSubmit = useCallback(() => {
    email && dispatch(recoveryPassword(email))
  }, [email])

  return (
    <BasicForm>
      <Typography sx={leadStyles}>
        <PersonIcon />
        Write your email to confirm account
      </Typography>
      <FormControl>
        <Box sx={formGroupStyles}>
          <Input
            value={email}
            placeholder='Email Address'
            type='email'
            onChange={onChange}
            required
          />
        </Box>
        <Button onClick={onSubmit} textPlacement='center'>
          Account Recovery
        </Button>
      </FormControl>
    </BasicForm>
  )
}
