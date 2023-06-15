import { buttonBaseClasses, tableCellClasses, type SxProps, type Theme, tableRowClasses } from '@mui/material'

export const tableRowStyles: SxProps<Theme> = (theme: Theme) => ({
  [`.${tableCellClasses.root}`]: {
    textAlign: 'left',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    textTransform: 'capitalize'
  },
  [`.${tableCellClasses.body}`]: {
    border: `${theme.spacing(0.125)} solid ${theme.palette.common.black}`
  },
  [`.${tableCellClasses.head}`]: {
    color: theme.palette.secondary.light,
    border: 0
  },
  [`.${buttonBaseClasses.root}`]: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto'
  }
})

export const tableBodyStyles: SxProps<Theme> = (theme: Theme) => ({
  [`.${tableCellClasses.root}`]: {
    textTransform: 'capitalize'
  },
  [`.${tableRowClasses.root}:nth-child(even)`]: {
    background: theme.palette.secondary.light
  },
  [`.${tableRowClasses.root}:nth-child(odd)`]: {
    background: theme.palette.common.white
  }
})
