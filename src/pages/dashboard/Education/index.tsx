import { useCallback, useEffect } from 'react'
import { deleteEducation } from '../../../actions/profile'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { type AppDispatch } from '../../../store'
import { Button, Spinner } from '../../../components'
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@mui/material'
import type { EducationData, EducationType } from './types'
import { tableRowStyles, tableStyles } from './styles'

export const Education: React.FC = () => {
  const { education, loading } = useAppSelector(
    ({ profile }) => profile.profile
  )
  const dispatch: AppDispatch = useAppDispatch()

  const submitOperation = useCallback((id: string) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove that experience?')) {
      dispatch(deleteEducation(id))
    }
  }, [])

  if (loading) {
    return <Spinner />
  }

  const rows: EducationData[] = []
  useEffect(() => {
    education?.forEach((edu: EducationType) => {
      const readyData: EducationData = {
        id: edu._id,
        degree: edu.degree,
        field: edu.fieldofstudy,
        years: `${edu.from} - ${edu.to || 'current'}`,
        school: edu.school
      }
      rows.push(readyData)
    })
  }, [education])

  return (
    <>
      <Typography variant='h2'>Education Credentials</Typography>
      <TableContainer component={Paper}>
        <Table sx={tableStyles} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>School</TableCell>
              <TableCell align='right'>Degree</TableCell>
              <TableCell align='right'>Field Of Study</TableCell>
              <TableCell align='right'>Years</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: EducationData) => (
              <TableRow
                key={row.id}
                sx={tableRowStyles}>
                <TableCell align='right'>{row.school}</TableCell>
                <TableCell align='right'>{row.degree}</TableCell>
                <TableCell align='right'>{row.field}</TableCell>
                <TableCell align='right'>{row.years}</TableCell>
                <TableCell align='right'>
                  <Button onClick={() => { submitOperation(row.id) }}>X</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
