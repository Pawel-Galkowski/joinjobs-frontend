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

interface BasicFormProps {
  children: JSX.Element
}

export const BasicForm: React.FC<BasicFormProps> = ({ children }) => (
  <Box sx={centerBoxStyles}>
    <Box sx={flexBoxStyles}>
      <Box sx={additionalBGStyles}>&nbsp;</Box>
      <Box sx={userStyles}>
        <Box sx={formWrapStyles}>
          <Box sx={tabsContentStyles}>
            <Box sx={tabContentStyles}>{children}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
)
