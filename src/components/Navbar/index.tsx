import React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { useNavigate } from 'react-router-dom'
import { useAuth, useAppDispatch } from '../../hooks'
import { authActions } from '../../store/slices/authSlice'

export const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const auth = useAuth()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(authActions.logout())
    handleMenuClose()
    navigate('/')
  }

  const menuItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { label: 'Profiles', icon: <PersonIcon />, path: '/profiles' },
    { label: 'Posts', icon: <WorkIcon />, path: '/posts' },
    { label: 'Forms', icon: <AssignmentIcon />, path: '/forms' }
  ]

  const adminMenuItems = [
    { label: 'Admin Panel', icon: <DashboardIcon />, path: '/admin' }
  ]

  const navItems = auth.isAuthenticated ? menuItems : []
  if (auth.isAdmin) {
    navItems.push(...adminMenuItems)
  }

  const renderMenuItems = (items: typeof menuItems) => (
    <List>
      {items.map((item) => (
        <ListItem
          key={item.path}
          onClick={() => {
            navigate(item.path)
            setDrawerOpen(false)
          }}
          sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.08)' } }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  )

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {auth.isAuthenticated && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
            JoinJobs
          </Typography>

          {auth.isAuthenticated ? (
            <>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, mr: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    color="inherit"
                    onClick={() => navigate(item.path)}
                    startIcon={item.icon}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              <IconButton
                size="large"
                onClick={handleMenuOpen}
                color="inherit"
                sx={{ ml: 2 }}
              >
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
                  {auth.user?.name?.charAt(0).toUpperCase() || 'U'}
                </Avatar>
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem disabled>
                  <Typography variant="body2">{auth.user?.name}</Typography>
                </MenuItem>
                <MenuItem onClick={() => {
                  navigate('/profile')
                  handleMenuClose()
                }}>
                  <PersonIcon sx={{ mr: 1 }} />
                  My Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ gap: 1, display: 'flex' }}>
              <Button color="inherit" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate('/register')}
              >
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {renderMenuItems(navItems)}
      </Drawer>
    </>
  )
}

export default Navbar
