// material
import { Box, Checkbox, Theme } from '@mui/material'
//
import Iconify from '../Iconify'

// ----------------------------------------------------------------------

interface IconColorProps {
  sx: object
  other: any
}

function IconColor({ sx, ...other }: IconColorProps) {
  return (
    <Box
      sx={{
        width: 20,
        height: 20,
        display: 'flex',
        borderRadius: '50%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'currentColor',
        transition: (theme) =>
          theme.transitions.create('all', {
            duration: theme.transitions.duration.shortest,
          }),
        ...sx,
      }}
      {...other}
    >
      <Iconify icon='eva:checkmark-fill' />
    </Box>
  )
}
interface ColorManyPicker {
  colors: string[]
  onChecked: Function
  sx: object
  name?: string
  other?: any
}
export default function ColorManyPicker({ colors, onChecked, sx, ...other }: ColorManyPicker) {
  return (
    <Box sx={sx}>
      {colors.map((color) => {
        const isWhite = color === '#FFFFFF' || color === 'white'

        return (
          <Checkbox
            key={color}
            size='small'
            value={color}
            color='default'
            checked={onChecked(color)}
            icon={
              <IconColor
                sx={{
                  ...(isWhite && {
                    border: (theme: Theme) => `solid 1px ${theme.palette.divider}`,
                  }),
                }}
                {...(other as any)}
              />
            }
            checkedIcon={
              <IconColor
                sx={{
                  transform: 'scale(1.4)',
                  '&:before': {
                    opacity: 0.48,
                    width: '100%',
                    content: "''",
                    height: '100%',
                    borderRadius: '50%',
                    position: 'absolute',
                    boxShadow: '4px 4px 8px 0 currentColor',
                  },
                  '& svg': { width: 12, height: 12, color: 'common.white' },
                  ...(isWhite && {
                    border: (theme: Theme) => `solid 1px ${theme.palette.divider}`,
                    //   boxShadow: (theme: Theme) => `4px 4px 8px 0 ${theme.palette.grey[500_24]}`,
                    boxShadow: (theme: Theme) => `4px 4px 8px 0 ${theme.palette.grey[900]}`,
                    '& svg': { width: 12, height: 12, color: 'common.black' },
                  }),
                }}
                {...(other as any)}
              />
            }
            sx={{
              color,
              '&:hover': { opacity: 0.72 },
            }}
            {...other}
          />
        )
      })}
    </Box>
  )
}
