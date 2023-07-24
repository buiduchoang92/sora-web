import { Link } from 'react-router-dom'
import { useState, useMemo, useEffect } from 'react'
import { PaletteMode } from '@mui/material'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

import Routers2 from './Routesv2'

import { ColorModeContext } from './core/theme/color-context'
import customTheme, { getDesignTokens, getThemedComponents } from './core/theme/customTheme'
import TodoMsgNavbar from './components/layout/Navbar/NavBar'
// import { GetAllGuests } from './store/actions/Guest/GuestAction'
// import { Dispatch } from 'redux'
// import { GuestDispatchType } from './store/actions/Guest/guestActionTypes'
// import { useDispatch } from 'react-redux'

const App = () => {
  // const dispatch: Dispatch<GuestDispatchType> = useDispatch()
  // useEffect(() => {
  //   dispatch<any>(GetAllGuests())
  // }, [])
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode])
  const [mode, setMode] = useState<PaletteMode>('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )
  const theme = responsiveFontSizes(createTheme(customTheme(mode)))
  // const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <div className='App'>
          <TodoMsgNavbar />
          <Routers2 />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
