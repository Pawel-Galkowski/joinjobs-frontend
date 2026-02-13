// Color utilities and palette
export const colors = {
  primary: '#1976d2',
  primaryLight: '#42a5f5',
  primaryDark: '#1565c0',
  secondary: '#dc004e',
  secondaryLight: '#f73378',
  secondaryDark: '#9a0036',
  success: '#4caf50',
  successLight: '#81c784',
  successDark: '#388e3c',
  warning: '#ff9800',
  warningLight: '#ffb74d',
  warningDark: '#f57c00',
  error: '#f44336',
  errorLight: '#ef5350',
  errorDark: '#d32f2f',
  info: '#2196f3',
  infoLight: '#64b5f6',
  infoDark: '#1976d2',
  background: '#f5f5f5',
  white: '#ffffff',
  black: '#000000',
  gray50: '#fafafa',
  gray100: '#f5f5f5',
  gray200: '#eeeeee',
  gray300: '#e0e0e0',
  gray400: '#bdbdbd',
  gray500: '#9e9e9e',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121'
}

export const getColorByStatus = (status: string): string => {
  const statusColorMap: Record<string, string> = {
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    pending: colors.warning,
    active: colors.success,
    inactive: colors.gray500,
    draft: colors.gray400
  }

  return statusColorMap[status.toLowerCase()] || colors.primary
}

export const getColorByRole = (role: string): string => {
  const roleColorMap: Record<string, string> = {
    admin: colors.error,
    user: colors.primary,
    moderator: colors.warning,
    guest: colors.gray500
  }

  return roleColorMap[role.toLowerCase()] || colors.primary
}
