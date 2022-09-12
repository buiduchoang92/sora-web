// react
import React from 'react'
// react-router-dom
import { Link as RouterLink, useLocation } from 'react-router-dom'
// @mui
import { styled } from '@mui/material/styles'
import { Card, Link, Container, Typography } from '@mui/material'
// hooks
import useResponsive from '../hooks/useResponsive'
// components
import Page from '../components/Page'
import Logo from '../components/Logo'
import Snack from '../components/transition/Snack'
// sections
import { LoginForm } from '../sections/auth/login'
import AuthSocial from '../sections/auth/AuthSocial'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}))

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}))

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}))

// ----------------------------------------------------------------------
interface CustomizedState {
  status_code: number
  message: string
}

export default function Login() {
  const location = useLocation()

  const [open, setOpen] = React.useState(false)

  const smUp = useResponsive('up', 'sm', '', '')

  const mdUp = useResponsive('up', 'md', '', '')

  const state = location.state as CustomizedState // Type Casting, then you can get the params passed via router

  const { status_code, message } = state || {}

  React.useEffect(() => {
    if (status_code && status_code === 200) {
      setOpen(true)
    }
  }, [])

  return (
    <Page title="Login" meta="">
      <RootStyle>
        <HeaderStyle>
          <Logo disabledLink={true} sx={'auto'} />

          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Don’t have an account? {''}
              <Link variant="subtitle2" component={RouterLink} to="/register">
                Get started
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/static/illustrations/illustration_login.png" alt="login" />
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Sign in to Sora Web side
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter your details below.</Typography>

            <AuthSocial />

            <LoginForm />

            {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?{' '}
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  Get started
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
      {open && <Snack message={message} variant="success" />}
    </Page>
  )
}
