import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getCompanyForms } from '../../../actions/form'
import { CompanyForms } from '..'
import Spinner from '../../../components/spinner/Spinner'
import { useAppSelector, useAppDispatch } from '../../../hooks'
import { type FormType, type FormProps } from '../../../reducers/form/types'
import { type AppDispatch } from '../../../store'
import { type AuthProps } from '../../../reducers/auth/types'
import { Box, Typography } from '@mui/material'
import { Button } from '../../../components'
import { paddingSectionStyles, topMarginStyles } from './styles'

export const CompanyForm: React.FC = () => {
  const { user }: AuthProps = useAppSelector(({ auth }) => auth)
  const { forms, loading }: FormProps = useAppSelector(({ forms }) => forms)
  const { company } = useParams()
  const dispatch: AppDispatch = useAppDispatch()

  if (!company) {
    return <Navigate to='/dashboard' />
  }

  if (!!loading || !forms || !user) {
    return <Spinner />
  }

  useEffect(() => {
    dispatch(getCompanyForms(company))
  }, [getCompanyForms])

  return (
    <Box sx={paddingSectionStyles}>
      {forms[0].admins?.includes(user._id) && (
        <Button link={`/api/forms/create/${company}`} color='primary'>
          Create new form
        </Button>
      )}
      <Box sx={topMarginStyles}>
        <Typography variant='h2'>Forms:</Typography>
        {!forms.length ? (
          <Typography variant='h2'>No forms available</Typography>
        ) : (
          forms.map((form: FormType) => (
            <CompanyForms key={form._id} form={form} />
          ))
        )}
      </Box>
    </Box>
  )
}
