import React from 'react'
import { Alert as MuiAlert, AlertTitle, Stack } from '@mui/material'
import { useAppDispatch, useAlerts } from '../../hooks'
import { alertActions } from '../../store/slices/alertSlice'

export const AlertContainer: React.FC = () => {
  const alerts = useAlerts()
  const dispatch = useAppDispatch()

  return (
    <Stack
      sx={{
        position: 'fixed',
        top: 20,
        right: 20,
        maxWidth: 400,
        zIndex: 10000
      }}
      spacing={2}
    >
      {alerts.map((alert) => (
        <MuiAlert
          key={alert.id}
          severity={alert.type}
          onClose={() => {
            dispatch(alertActions.removeAlert(alert.id))
          }}
        >
          {alert.message}
        </MuiAlert>
      ))}
    </Stack>
  )
}

export default AlertContainer
