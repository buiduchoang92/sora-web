import { useMemo } from 'react'
// material
import { CssBaseline } from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
  Theme,
  ThemeOptions,
} from '@mui/material/styles'
import { ComponentsOverrides } from '@mui/material/styles/overrides'
import { Components } from '@mui/material/styles/components'
//
import palette from './palette'
import typography from './typography'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: { children: any }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
    }),
    [],
  )

  const theme = createTheme(themeOptions)
  theme.components = Object.assign(componentsOverride(theme))
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
