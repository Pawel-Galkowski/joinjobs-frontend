import { Box } from '@mui/material'
import {
  additionalBGStyles,
  centerBoxStyles,
  userStyles,
  flexBoxStyles,
  formWrapStyles,
  tabsContentStyles,
  tabContentStyles
} from './styles'
import Alert from '../alert/Alert'

interface BasicFormProps {
  children: JSX.Element | JSX.Element[]
}

export const BasicForm: React.FC<BasicFormProps> = ({ children }) => (
  <Box sx={centerBoxStyles}>
    <Box sx={flexBoxStyles}>
      <Box sx={additionalBGStyles}>&nbsp;</Box>
      <Box sx={userStyles}>
        <Box sx={formWrapStyles}>
          <Box sx={tabsContentStyles}>
            <Alert />
            <Box sx={tabContentStyles}>{children}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
)
