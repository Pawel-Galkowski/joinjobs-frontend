import { Button } from '../../../components'
import {
  AccountCircleIcon,
  SchoolIcon,
  WorkHistoryIcon
} from '../../../utils/icons'
import { Box } from '@mui/material'
import { dashButtonsStyles } from './styles'

export const Actions: React.FC<{
  profile: any
}> = ({ profile }) => (
  <Box sx={dashButtonsStyles}>
    {profile && (
      <Button
        internalLink='/edit-profile'
        textPlacement='center'
        icon={<AccountCircleIcon />}
        iconPlacement='start'>
        Edit Profile
      </Button>
    )}
    <Button
      internalLink='/education'
      textPlacement='center'
      icon={<SchoolIcon />}
      iconPlacement='start'>
      Add Education
    </Button>
    <Button
      internalLink='/experience'
      textPlacement='center'
      icon={<WorkHistoryIcon />}
      iconPlacement='start'>
      Add Experience
    </Button>
  </Box>
)
