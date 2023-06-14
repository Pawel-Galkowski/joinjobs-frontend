import type { Theme, SxProps } from '@mui/material'

export const centerBoxStyles: SxProps = {
  width: '100%',
  height: '100%'
}

export const flexBoxStyles: SxProps = {
  display: 'flex',
  margin: 'auto',
  width: '100%',
  height: '100%'
}

export const additionalBGStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'block',
  flex: 1,
  backgroundImage: `url('${window.location.origin}/images/authIMG.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  height: '100%',
  maxWidth: '45%',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})

export const userStyles: SxProps<Theme> = (theme: Theme) => ({
  position: 'relative',
  zIndex: 0,
  float: 'none',
  margin: '0 auto',
  paddingTop: theme.spacing(5),
  width: '100%',
  maxWidth: '450px',
  height: '100%',
  overflow: 'auto',
  background: `linear-gradient(70deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: 'none',
  borderRadius: 0,
  borderTop: `${theme.spacing(0.125)} solid ${theme.palette.action.focus}`,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100vw'
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: 0,
    float: 'left',
    height: theme.spacing(62),
    boxShadow: `${theme.spacing(0.375, 0, 9, 0.75)} rgba(56, 75, 99, 0.61)`,
    borderRadius: theme.spacing(0, 1.25, 1.25, 0),
    border: 0
  },
  [theme.breakpoints.up('lg')]: {
    height: theme.spacing(70)
  }
})

export const formWrapStyles: SxProps = {
  width: '100%',
  //   margin: '2em auto 0',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  verticalAlign: 'middle'
}

export const tabsContentStyles: SxProps<Theme> = (theme: Theme) => ({
  padding: theme.spacing(3, 5),
  textAlign: 'left',
  width: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  verticalAlign: 'middle'
})

export const tabContentStyles: SxProps = {
  display: 'flex',
  verticalAlign: 'middle',
  justifyContent: 'space-around',
  alignContent: 'space-between',
  height: '80%'
}
