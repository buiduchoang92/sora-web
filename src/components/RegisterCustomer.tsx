import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { DevTool } from '@hookform/devtools'
import { TextField, Checkbox } from '@mui/material'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import { CustomerType } from '../store/actions/Customer/CustomerActionTypes'
import yup from '../core/function/yupGlobal'

const schema = yup.object().shape({
  username: yup.string().required('Required'),
  email: yup.string().required('Required').email('Email invalid'),
  password: yup.string().required('Required'),
})

export default function RegisterCustomer() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CustomerType>({ mode: 'onSubmit', resolver: yupResolver(schema) })
  const onSubmit = async (data: CustomerType) => {
    console.log(data)
  }
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <Controller
    //     render={({ field, formState }) => (
    //       <TextField {...field} label="password" error={!!formState.errors?.password} />
    //     )}
    //     name="password"
    //     control={control}
    //     defaultValue=""
    //   />
    //   <Controller
    //     render={({ field, formState }) => <TextField {...field} label="email" error={!!formState.errors?.email} />}
    //     name="email"
    //     control={control}
    //     defaultValue=""
    //   />
    //   <Controller
    //     render={({ field, formState }) => (
    //       <TextField {...field} label="username" error={!!formState.errors?.username} />
    //     )}
    //     name="username"
    //     control={control}
    //     defaultValue=""
    //   />
    //   {errors.username && <p className="error">{errors.username?.message}</p>}
    //   <input type="submit" />
    //   <DevTool control={control} />
    // </form>
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon sx={{ bgcolor: 'secondary.main' }} />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id='email' label='Email Address' name='email' autoComplete='email' />
            </Grid>
            <Grid item xs={12}>
              <Controller
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label='password'
                    error={!!errors?.password}
                    helperText={errors?.password?.message}
                  />
                )}
                name='password'
                control={control}
                defaultValue=''
              />
              {/* {errors.password && <p className="error">{errors.password?.message}</p>} */}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <DevTool control={control} />
    </Container>
  )
}
