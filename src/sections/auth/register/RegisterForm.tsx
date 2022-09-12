import React from 'react'
import * as Yup from 'yup'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// @mui
import { Stack, IconButton, InputAdornment, MenuItem } from '@mui/material'
import { LoadingButton } from '@mui/lab'
// components
import Iconify from '../../../components/Iconify'
import { FormProvider, RHFTextField } from '../../../components/hook-form'
import RHFSelect from '../../../components/hook-form/RHFSelect'
import { customerServices } from '../../../services/instanceApiService'

// type
import { CustomerType } from '../../../store/actions/Customer/CustomerActionTypes'
// constant
import { storeID, addressID } from '../../../components/shared/helpers/constant'

// ----------------------------------------------------------------------
export interface RegisterSuccessResponseType {
  status_code: number
  results: any
}
export default function RegisterForm() {
  const navigate = useNavigate()

  const qs = require('qs')
  const [showPassword, setShowPassword] = useState(false)

  const RegisterSchema = Yup.object().shape({
    first_name: Yup.string().required('First name required'),
    last_name: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    storeID: Yup.number().required('Store is required'),
    addressID: Yup.number().required('Address is required'),
  })

  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
    active: 1,
  }

  const methods = useForm<CustomerType>({
    mode: 'onSubmit',
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  const onSubmit = async (data: CustomerType) => {
    try {
      const responseResult: RegisterSuccessResponseType = await customerServices.registerUser(
        `${process.env.REACT_APP_API_KEY}/register-user`,
        qs.stringify(data),
      )
      console.log(responseResult, 'responseResult')
      if (responseResult.status_code === 200) {
        navigate('/login', { replace: true, state: { status_code: 200, message: 'you have successfully registered!' } })
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="first_name" label="First name" />
          <RHFTextField name="last_name" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFSelect name="storeID" label="Store" options={storeID} defaultValue="" />
          <RHFSelect name="addressID" label="Address" options={addressID} defaultValue="" />
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  )
}
