import { Fragment, useCallback, useEffect } from 'react'
import { deleteExperience } from '../../../actions/profile'
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
import { tableRowStyles, tableStyles } from './styles'
import type { ExperienceData, ExperienceType } from './types'

export const Experience: React.FC = () => {
  const { experience, loading } = useAppSelector(
    ({ profile }) => profile.profile
  )
  const dispatch: AppDispatch = useAppDispatch()
  const submitOperation = useCallback((id: string) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Do you really want to remove that experience?')) {
      dispatch(deleteExperience(id))
    }
  }, [])

  if (loading) {
    return <Spinner />
  }

  const rows: ExperienceData[] = []
  useEffect(() => {
    experience?.forEach((exp: ExperienceType) => {
      const readyData: ExperienceData = {
        id: exp._id,
        company: exp.company,
        location: exp.location,
        title: exp.title,
        years: `${exp.from} - ${exp.to || 'current'}`
      }
      rows.push(readyData)
    })
  }, [experience])

  return (
    <>
      <Typography variant='h2'>Experience Credentials</Typography>
      <TableContainer component={Paper}>
        <Table sx={tableStyles} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Company</TableCell>
              <TableCell align='right'>Location</TableCell>
              <TableCell align='right'>Title</TableCell>
              <TableCell align='right'>Years</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: ExperienceData) => (
              <TableRow key={row.id} sx={tableRowStyles}>
                <TableCell align='right'>{row.company}</TableCell>
                <TableCell align='right'>{row.location}</TableCell>
                <TableCell align='right'>{row.title}</TableCell>
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
