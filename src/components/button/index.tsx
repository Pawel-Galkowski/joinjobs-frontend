import { Button as MUIButton } from '@mui/material'
import { buttonStyles } from './styles'
import { type Props } from './types'

export const Button: React.FC<Props> = ({ color, internalLink, children }) => {
  return (
    <MUIButton
      href={internalLink}
      variant='contained'
      sx={buttonStyles(color)}
    >
      {children}
    </MUIButton>
  )
}
