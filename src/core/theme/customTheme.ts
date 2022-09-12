import { PaletteMode } from '@mui/material'
import '@mui/material/styles/createPalette'
import { amber, grey, blue, common, pink, blueGrey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Theme } from '@mui/material'
import darkScrollbar from '@mui/material/darkScrollbar'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mobile: true // adds the `mobile` breakpoint
    tablet: true
    laptop: true
    desktop: true
  }
}
const defaultTheme = createTheme()

const customTheme = (mode: PaletteMode) => ({
  palette: {
    mode: mode as PaletteMode,
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      ...defaultTheme.breakpoints.values,
      mobile: 320,
      tabled: 768,
      laptop: 1024,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          color: 'darkred',
          backgroundColor: grey[50],
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: grey[50],
        },
        root: {
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 1000ms',
          boxShadow: 'none',
        },
      },
    },
  },
})

const palette = {
  light: {
    primary: {
      main: '#2196F3',
      light: '#E3F2FD',
      dark: '#1E88E5',
      200: '#90CAF9',
      800: '1565C0',
    },
  },
  dark: {
    primary: {
      dark: '#081229',
    },
  },
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: palette.light.primary.main,
            light: palette.light.primary.light,
            dark: palette.light.primary.dark,
          },

          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: pink,
          divider: pink[700],
          background: {
            default: blueGrey[900],
            paper: blueGrey[900],
          },
          text: {
            primary: '#fff',
            secondary: '#fff',
          },
        }),
  },
  typography: {
    fontFamily: ['Oswald', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    body1: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
  },
})

export const getThemedComponents = (mode: PaletteMode) => ({
  components: {
    ...(mode === 'light'
      ? {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: grey[800],
              },
            },
          },
          MuiLink: {
            variant: 'h3',
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 0,
                color: common.white,
                fontFamily: "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: 20,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              },
            },
            variants: [
              {
                props: { variant: 'contained' },
                style: {
                  fontFamily: "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
                },
              },
              {
                props: { variant: 'outlined' },
                style: {
                  color: palette.light.primary.main,
                },
              },
              {
                props: { variant: 'primary', color: 'primary' },
                style: {
                  border: '4px dashed blue',
                },
              },
            ],
          },
          MuiList: {
            styleOverrides: {
              root: {},
            },
          },
          MuiMenuItem: {
            styleOverrides: {
              root: {
                color: common.white,
                alignItems: 'stretch',
                fontFamily: "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
              },
            },
          },
          MuiAccordion: {
            styleOverrides: {
              root: {
                color: common.white,
                fontFamily: "Oswald, Roboto, 'Helvetica Neue', Arial, sans-serif",
              },
            },
          },
        }
      : {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: blue[800],
              },
            },
          },
        }),
  },
})
export default customTheme
