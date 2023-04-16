import { createTheme } from '@mui/material'
import { colorsPalete } from './colors'

export const defaultScalingFactor = 8

const theme = createTheme({
  spacing: defaultScalingFactor,
  palette: { ...colorsPalete },
  typography: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 12
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440
    }
  }
})

export default theme
