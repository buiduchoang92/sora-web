import React, { useState } from 'react'
import { Link as RouterLink, matchPath, useLocation } from 'react-router-dom'
import { LinkProps as RouterLinkProps } from 'react-router-dom'
// material
import { alpha, useTheme, styled } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui'
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton, ListItem } from '@mui/material'
//
import Iconify from './Iconify'

// ----------------------------------------------------------------------

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const ListItemTextStyle = styled(ListItemText)(({ theme }) => ({
  '& span': { ...theme.typography.body2 },
}))
const useStyles = makeStyles({ name: 'MuiListItem' })((theme) => ({
  root: {
    // ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
  },
}))

interface ListItemLinkProps {
  icon?: React.ReactElement
  primary: string
  to: string
  sx: any
  onClick?: any
  iconify?: boolean
}
function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to, sx, onClick, iconify } = props
  const { classes } = useStyles()
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
      }),
    [to],
  )

  return (
    <li>
      <ListItem button component={renderLink} className={classes.root} sx={sx} onClick={onClick}>
        {icon ? <ListItemIconStyle>{icon}</ListItemIconStyle> : null}
        <ListItemTextStyle primary={primary} />
        {iconify && (
          <Iconify
            icon={iconify ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        )}
      </ListItem>
    </li>
  )
}

// ----------------------------------------------------------------------

interface NavItemProps {
  item: NavProps
  active: any
}

function NavItem({ item, active }: NavItemProps) {
  const theme = useTheme()

  const isActiveRoot = active(item.path)
  const { title, path, icon, info, children } = item

  const [open, setOpen] = useState(isActiveRoot)

  const handleOpen = () => {
    setOpen((prev: boolean) => !prev)
  }

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium',
  }

  if (children) {
    return (
      <>
        <ListItemLink
          to={path}
          primary={title}
          icon={icon}
          onClick={handleOpen}
          sx={{ ...(isActiveRoot && activeRootStyle) }}
          iconify={open}
        />

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {/* {children.map((item) => {
              const { title, path } = item
              const isActiveSub = active(path)

              return (
                <ListItemStyle
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'text.disabled',
                        transition: (theme) => theme.transitions.create('transform'),
                        ...(isActiveSub && {
                          transform: 'scale(2)',
                          bgcolor: 'primary.main',
                        }),
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                </ListItemStyle>
              )
            })} */}
          </List>
        </Collapse>
      </>
    )
  }

  return <ListItemLink to={path} primary={title} icon={icon} sx={{ ...(isActiveRoot && activeRootStyle) }} />
}

interface NavSectionProps {
  navConfig: NavProps[]
}
interface NavProps {
  title: string
  path: string
  icon?: JSX.Element
  info?: string
  children?: ChildrenProps[]
}
interface ChildrenProps {
  title: string
  path: string
}
export default function NavSection({ navConfig, ...other }: NavSectionProps) {
  const { pathname } = useLocation()

  const match = (path: string) => (path ? !!matchPath({ path, end: false }, pathname) : false)

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  )
}
