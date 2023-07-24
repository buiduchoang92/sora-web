import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { emphasize, styled } from '@mui/material/styles'

export default function Profile() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    // padding: theme.spacing(2, 2),
    color: theme.palette.text.secondary,
  }))
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffffffcc',
          padding: 2,
        }}
      >
        <Grid container spacing={2} direction='row' justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Item>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Typography component='h1' variant='h5'>
                Name User
              </Typography>
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Typography component='h1' variant='h5'>
                Setting
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
