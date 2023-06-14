import type { SxProps, Theme } from '@mui/material'

export const tableStyles: SxProps<Theme> = (theme: Theme) => ({
  minWidth: theme.spacing(80)
})

export const tableRowStyles: SxProps = {
  '&:last-child td, &:last-child th': {
    border: 0
  }
}
