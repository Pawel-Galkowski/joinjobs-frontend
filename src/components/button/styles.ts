import type { SxProps } from '@mui/material'
import { type ColorTypes, getValidColor } from '../utils'

export const buttonStyles = (color?: ColorTypes): SxProps => ({
  background: getValidColor(color ?? 'primary')
})
