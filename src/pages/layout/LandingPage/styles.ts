import type { SxProps, Theme } from '@mui/material'

export const landingStyles: SxProps = {
  backgroundImage: `url('${window.location.origin}/images/showcase.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%'
}

export const landingInnerStyles: SxProps<Theme> = (theme) => ({
  color: theme.palette.common.white,
  height: '100vh',
  width: '80%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
})

export const darkOverlayStyles: SxProps = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
}
