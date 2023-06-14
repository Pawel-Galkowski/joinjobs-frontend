import { Button as MUIButton } from '@mui/material'
import { buttonStyles } from './styles'
import { type Props } from './types'

export const Button: React.FC<Props> = ({
  color,
  variant,
  link,
  children,
  icon,
  iconPlacement,
  textPlacement,
  onClick
}) => {
  return (
    <MUIButton
      href={link}
      variant={variant ?? 'contained'}
      startIcon={iconPlacement === 'start' && icon}
      endIcon={iconPlacement === 'end' && icon}
      onClick={onClick}
      sx={buttonStyles({ color, variant, textPlacement })}>
      {children}
    </MUIButton>
  )
}
