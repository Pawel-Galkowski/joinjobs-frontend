import { useCallback } from 'react'
import { deleteExperience } from '../../../../actions/profile'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { type AppDispatch } from '../../../../store'
import { Button, Spinner } from '../../../../components'
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box
} from '@mui/material'
import { tableBodyStyles, tableRowStyles } from './styles'
import type { ExperienceData } from './types'
import type {
  ExperienceProps,
  ProfileProps
} from '../../../../reducers/profile/types'
import { DeleteIcon } from '../../../../utils/icons'
import { dateToString } from '../../../../utils/formatDate'

export const Experience: React.FC = () => {
  const profile: ProfileProps = useAppSelector(({ profile }) => profile)
  const dispatch: AppDispatch = useAppDispatch()
  const submitOperation = useCallback((id: string) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove that experience?')) {
      dispatch(deleteExperience(id))
    }
  }, [])

  if (profile?.loading) {
    return <Spinner />
  }

  const rows: ExperienceData[] = []
  profile?.profile?.experience?.forEach((exp: ExperienceProps) => {
    rows.push({
      id: exp._id,
      company: exp.company,
      location: exp.location,
      title: exp.title,
      years: `${dateToString(exp.from).date} - ${exp.to ? dateToString(exp.to).date : 'current'}`
    })
  })

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h2'>Experience Credentials</Typography>
      <TableContainer component={Paper}>
        <Table size='small' aria-label="customized table">
          <TableHead>
            <TableRow sx={tableRowStyles}>
              <TableCell>Company</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Years</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={tableBodyStyles}>
            {rows.map((row: ExperienceData) => (
              <TableRow key={row.id} sx={tableRowStyles}>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.years}</TableCell>
                <TableCell>
                  <Button
                    variant='text'
                    onClick={() => {
                      submitOperation(row.id)
                    }}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
