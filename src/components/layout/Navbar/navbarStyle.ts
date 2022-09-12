import { makeStyles } from 'tss-react/mui'

const drawerWidth = 240
const useStyles = makeStyles({ name: 'HeaderBar' })((theme) => ({
  appBar: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor: `${theme.palette.common.white} !important`,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px) !important`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  is_sticky: {
    boxShadow: '0 2px 24px 0 rgb(0 0 0 / 15%) !important',
    backgroundColor: `#ffffffcc !important`,
    backdropFilter: 'saturate(200%) blur(1.875rem)',
    animation: '500ms ease-in-out 0s normal none 1 running fadeInDown',
  },
  menuButton: {
    // marginRight: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(1.5, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
  },
  content: {
    // flexGrow: 1,
    // paddingTop: theme.spacing(3),
  },
}))

export default useStyles
