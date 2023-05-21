import type { PaletteOptions } from '@mui/material'

export const colorsPalete: PaletteOptions = {
  primary: {
    main: '#17a2b8',
    dark: '#343a40'
  },
  secondary: {
    main: '#ccc',
    light: '#f4f4f4',
    dark: '#87929e',
    contrastText: '#000'
  },
  text: {
    primary: '#000'
  },
  error: {
    main: '#dc3545'
  },
  success: {
    main: '#28a745'
  },
  divider: '#697481',
  background: {
    default: '#212529',
    paper: '#2d515c'
  },
  common: {
    white: '#fff',
    black: '#000'
  },
  action: {
    hover: '#2d515c',
    focus: '#4fc1b7'
  }
}

// old pallete
// export const colorsPalete = {
//   primary: '#17a2b8',
//   dark: '#343a40',
//   light: '#f4f4f4',
//   danger: '#dc3545',
//   success: '#28a745',
//   aditionalGray: '#ccc',
//   lightGray: '#87929e',
//   borderGray: '#697481',
//   white: '#fff'
//   backgroudColor: #212529;
//   darkColor: #343a40;
// }
