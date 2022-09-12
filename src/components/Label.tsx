// @mui
import { alpha, styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { ReactNode } from 'react'

// ----------------------------------------------------------------------
type InputProps = {
  color: Label['color']
  variant: 'filled' | 'outlined' | 'ghost'
}

const RootStyle = styled('span', {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'variant' && prop !== 'sx',
})<InputProps>(({ color, variant, theme }) => {
  const isLight = theme.palette.mode === 'light'

  const styleFilled = (color: Label['color']) => ({
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main,
  })

  const styleOutlined = (color: Label['color']) => ({
    color: theme.palette[color].main,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette[color].main}`,
  })

  const styleGhost = (color: Label['color']) => ({
    color: theme.palette[color][isLight ? 'dark' : 'light'],
    backgroundColor: alpha(theme.palette[color].main, 0.16),
  })

  return {
    height: 22,
    minWidth: 22,
    lineHeight: 0,
    borderRadius: 6,
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    color: theme.palette.grey[800],
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,
    ...(color !== 'primary'
      ? {
          ...(variant === 'filled' && { ...styleFilled(color) }),
          ...(variant === 'outlined' && { ...styleOutlined(color) }),
          ...(variant === 'ghost' && { ...styleGhost(color) }),
        }
      : {
          ...(variant === 'outlined' && {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            // border: `1px solid ${theme.palette.grey[500_32]}`,
            border: `1px solid ${theme.palette.grey[900]}`,
          }),
          ...(variant === 'ghost' && {
            color: isLight ? theme.palette.text.secondary : theme.palette.common.white,
            // backgroundColor: theme.palette.grey[500_16],
            border: `1px solid ${theme.palette.grey[700]}`,
          }),
        }),
  }
})
// ----------------------------------------------------------------------

interface Label {
  children: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
  variant: 'filled' | 'outlined' | 'ghost'
  sx: any
}

export default function Label({ children, color, variant, startIcon, endIcon, sx }: Label) {
  const style = {
    width: 16,
    height: 16,
    '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
  }

  return (
    <RootStyle
      color={color}
      variant={variant}
      sx={{
        ...(startIcon && { pl: 0.75 }),
        ...(endIcon && { pr: 0.75 }),
        ...sx,
      }}
    >
      {startIcon && <Box sx={{ mr: 0.75, ...style }}>{startIcon}</Box>}

      {children}

      {endIcon && <Box sx={{ ml: 0.75, ...style }}>{endIcon}</Box>}
    </RootStyle>
  )
}
