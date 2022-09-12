// routes
import RouterV2 from './Routesv2'
import RoutesV3 from './Routesv3'
// theme
import ThemeProvider from './theme'
// components
import ScrollToTop from './components/scrollToTop'
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart'
import { useAuth } from './sections/auth/createAuthProvider'
import { SnackbarProvider } from 'notistack'

// ----------------------------------------------------------------------

export default function App2() {
  const [logged] = useAuth()
  return (
    <ThemeProvider>
      <SnackbarProvider maxSnack={1}>
        <ScrollToTop />
        <BaseOptionChartStyle />
        {logged ? <RouterV2 /> : <RoutesV3 />}
      </SnackbarProvider>
    </ThemeProvider>
  )
}
