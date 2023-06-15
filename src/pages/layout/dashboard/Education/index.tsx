import { useCallback } from 'react'
import { deleteEducation } from '../../../../actions/profile'
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
import type { EducationData } from './types'
import { tableBodyStyles, tableRowStyles } from './styles'
import type {
  EducationProps,
  ProfileProps
} from '../../../../reducers/profile/types'
import { DeleteIcon } from '../../../../utils/icons'
import { dateToString } from '../../../../utils/formatDate'

export const Education: React.FC = () => {
  const profile: ProfileProps = useAppSelector(({ profile }) => profile)
  const dispatch: AppDispatch = useAppDispatch()

  const submitOperation = useCallback((id: string) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove that experience?')) {
      dispatch(deleteEducation(id))
    }
  }, [])

  if (profile?.loading) {
    return <Spinner />
  }

  const rows: EducationData[] = []
  profile?.profile?.education?.forEach((edu: EducationProps) => {
    rows.push({
      id: edu._id,
      degree: edu.degree,
      field: edu.fieldofstudy,
      years: `${dateToString(edu.from).date} - ${edu.to ? dateToString(edu.to).date : 'current'}`,
      school: edu.school
    })
  })

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h2'>Education Credentials</Typography>
      <TableContainer component={Paper}>
        <Table size='small' aria-label="customized table">
          <TableHead>
            <TableRow sx={tableRowStyles}>
              <TableCell>School</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>Field Of Study</TableCell>
              <TableCell>Years</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={tableBodyStyles}>
            {rows.map((row: EducationData) => (
              <TableRow key={row.id} sx={tableRowStyles}>
                <TableCell>{row.school}</TableCell>
                <TableCell>{row.degree}</TableCell>
                <TableCell>{row.field}</TableCell>
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
