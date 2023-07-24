import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from '@mui/material'
import Paper from '@mui/material/Paper'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SettingsIcon from '@mui/icons-material/Settings'
import InfoIcon from '@mui/icons-material/Info'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { emphasize, styled } from '@mui/material/styles'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Chip from '@mui/material/Chip'
import HomeIcon from '@mui/icons-material/Home'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import clsx from 'clsx'
import { useTheme } from '@mui/material/styles'

import useStyles from './navbarStyle'

export default function TodoMsgNavbar() {
  const { classes, cx } = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [sticky, setSticky] = useState('')
  const location = useLocation()
  useEffect(() => {
    console.log(window.location.pathname, 'location')
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])
  const isSticky = () => {
    const scrollTop = window.scrollY
    const headerOffset = document.querySelector('header')?.clientHeight
    if (headerOffset) {
      const stickyClass = scrollTop >= headerOffset + 10 ? 'is-sticky' : ''
      setSticky(stickyClass)
    }
  }
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const HeaderBar = () => {
    return (
      <AppBar
        position='fixed'
        className={cx(
          {
            [classes.appBarShift]: open,
          },
          sticky ? classes.is_sticky : '',
        )}
      >
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Grid item xs={1} sm={1}>
            <Toolbar>
              <BottomNavigation
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                sx={{
                  '& .MuiBottomNavigationAction-root, .Mui-selected, svg': {
                    color: '#007A78',
                  },
                  backgroundColor: 'initial',
                  height: 'auto',
                  minWidth: 'auto',
                  padding: 0,
                }}
                className={clsx(classes.menuButton, { [classes.hide]: open })}
              >
                <BottomNavigationAction icon={<MenuIcon />} />
              </BottomNavigation>
            </Toolbar>
          </Grid>
          <Grid item xs={4} sm={9}>
            <CustomizedBreadcrumbs location={location} />
          </Grid>
          <Grid item xs={2} sm={2}>
            <SimpleBottomNavigation location={location} />
          </Grid>
        </Grid>
      </AppBar>
    )
  }

  const SiderBar = () => {
    return (
      <Drawer
        variant='permanent'
        className={clsx(
          classes.drawer,
          {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          },
          { [classes.hide]: !open },
        )}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key='Board' component={Link} to='/'>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Board' />
          </ListItem>
          <ListItem button key='Settings' component={Link} to='/settings'>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
          <ListItem button key='About' component={Link} to='/about'>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
          <Typography>Account Pages</Typography>
          <ListItem button key='Profile' component={Link} to='/profile'>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
          <ListItem button key='Sign Up' component={Link} to='/register-user'>
            <ListItemIcon>
              <RocketLaunchIcon />
            </ListItemIcon>
            <ListItemText primary='Sign Up' />
          </ListItem>
          <ListItem button key='Sign In' component={Link} to='/login'>
            <ListItemIcon>
              <LockOpenIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary='Sign In' />
          </ListItem>
          <ListItem button key='Signout'>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary='Sign out' />
          </ListItem>
        </List>
      </Drawer>
    )
  }
  function SimpleBottomNavigation({ ...props }) {
    const [valueBtnNav, setValueBtnNav] = React.useState(props?.location.pathname)
    return (
      <Box sx={{ width: 'auto' }}>
        <BottomNavigation
          showLabels
          value={valueBtnNav}
          onChange={(event, newValue) => {
            setValueBtnNav(newValue)
          }}
          sx={{
            '& .MuiBottomNavigationAction-root, .Mui-selected, svg': {
              minWidth: 'auto',
              padding: 0,
            },
            backgroundColor: 'initial',
            height: 'auto',
          }}
        >
          <BottomNavigationAction icon={<RestoreIcon />} />
          <BottomNavigationAction icon={<FavoriteIcon />} />
          <BottomNavigationAction icon={<LocationOnIcon />} />
          <BottomNavigationAction value='/login' component={Link} to='/login' icon={<AccountCircleIcon />} />
          <BottomNavigationAction icon={<SettingsIcon />} />
        </BottomNavigation>
      </Box>
    )
  }
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800]
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    }
  }) as typeof Chip // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

  function CustomizedBreadcrumbs({ ...props }) {
    function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
      event.preventDefault()
      console.info('You clicked a breadcrumb.')
    }
    const replacePathname = props?.location?.pathname.replace(/\/{1}/, '')
    return (
      <div role='presentation' onClick={handleClick}>
        <Breadcrumbs aria-label='breadcrumb'>
          <StyledBreadcrumb component={Link} to='/' label='Home' icon={<HomeIcon fontSize='small' />} />
          {props?.location?.pathname && props?.location?.pathname !== '/' && (
            <StyledBreadcrumb component={Link} to='/login' label={replacePathname} />
          )}
        </Breadcrumbs>
      </div>
    )
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))
  return (
    <>
      <Grid container spacing={2} direction='row' justifyContent='space-between' alignItems='center'>
        <Grid item xs={2} md={2} sm={10}>
          <Item>
            <SiderBar />
          </Item>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Item>
            <HeaderBar />
          </Item>
        </Grid>
      </Grid>
    </>
  )
}
