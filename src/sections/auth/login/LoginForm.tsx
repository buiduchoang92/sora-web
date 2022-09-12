import * as Yup from 'yup'
import { useState } from 'react'
// redux
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
// router dom
import { useNavigate } from 'react-router-dom'
// form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material'
import { LoadingButton } from '@mui/lab'
// components
import Iconify from '../../../components/Iconify'
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form'
import { customerServices } from '../../../services/instanceApiService'
import { LoginAction } from '../../../store/actions/Login/LoginAction'
import { LoginDispatchType, LoginType, LoginSuccessResponseType } from '../../../store/actions/Login/LoginActionTypes'
import { login } from '../createAuthProvider'
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate()

  const qs = require('qs')
  const [showPassword, setShowPassword] = useState(true)

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  const defaultValues = {
    email: '',
    password: '',
    remember: true,
  }

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  const dispatch: Dispatch<LoginDispatchType> = useDispatch()
  const onSubmit = async (data: LoginType) => {
    try {
      const responseResult: LoginSuccessResponseType = await customerServices.postLogin(
        `${process.env.REACT_APP_API_KEY}/login`,
        qs.stringify(data),
      )
      if (responseResult.status_code === 200) {
        dispatch<any>(LoginAction(responseResult.results))
        const { token_access_jwt, token_refresh_jwt } = responseResult.results
        login({ token_access_jwt, token_refresh_jwt })
        navigate('/', { replace: true })
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
    </FormProvider>
  )
}
