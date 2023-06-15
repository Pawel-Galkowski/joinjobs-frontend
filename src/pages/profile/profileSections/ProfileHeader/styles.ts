import { svgIconClasses, type SxProps, type Theme } from '@mui/material'

export const leadStyles: SxProps<Theme> = (theme: Theme) => ({
  fontSize: theme.spacing(2.5),
  marginBottom: theme.spacing(2),
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
})

export const topProfileHeader: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  background: theme.palette.secondary.light
})

export const profileInformationStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  flexGrow: '2',
  flex: '2'
})

export const iconsStyles: SxProps<Theme> = (theme: Theme) => ({
  [`.${svgIconClasses.root}`]: {
    fill: theme.palette.common.white,
    margin: theme.spacing(0, 1),
    '&:hover': {
      fill: theme.palette.primary.dark
    }
  }
})

export const profileSkillsStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  alignItems: 'stretch',
  flexGrow: 1,
  flex: 1,
  textAlign: 'left'
})

export const skillsTypographyStyles: SxProps<Theme> = (theme: Theme) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: theme.spacing(0.25, 0)
})
