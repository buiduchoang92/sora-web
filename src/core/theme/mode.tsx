import { useState, useMemo } from 'react'
import { PaletteMode } from '@mui/material'

const ModeCustom = () => {
  const [mode, setMode] = useState<PaletteMode>('light')
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )
}
export default ModeCustom
