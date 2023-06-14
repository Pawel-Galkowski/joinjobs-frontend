import { Typography } from '@mui/material'
import { WarningIcon } from '../../utils/icons'

export const NotFound: React.FC = () => (
  <>
    <Typography variant='h1'>
      <WarningIcon />
      Page Not Found
    </Typography>
    <Typography variant='subtitle1'>Sorry, this page that not exist</Typography>
  </>
)
