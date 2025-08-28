'use client'
import React, { useMemo, useState } from 'react'

import { useRouter } from 'next/navigation'

import { Box, Button, Typography } from '@mui/material'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import RHFTextField from '../hook-form/RHFTextField'
import FormProvider from '../hook-form/FormProvider'

// Validation schema using Yup
const NewUserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required').min(4, 'Password must be at least 4 characters')
})

const AuthLoginForm = () => {
  const router = useRouter()
  const [email] = useState('demo@minimals.cc')
  const [password] = useState('demo1234')

  // Memoize default values
  const defaultValues = useMemo(
    () => ({
      email,
      password
    }),
    [email, password]
  )

  // Initialize useForm with validation resolver and default values
  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues
  })

  // Destructure methods to get handleSubmit
  const {
    handleSubmit,
    formState: { errors }
  } = methods

  // Submit function
  const onSubmit = (values: { email: string; password: string }) => {
    const payload = {
      email: values.email,
      password: values.password
    }

    router.push('/dashboard/home')
    console.log('Form submitted:', payload)
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ padding: '30px', maxWidth: '450px', width: '100%' }}>
          <Typography variant='h4' gutterBottom>
            Sign In
          </Typography>

          {/* Email Input */}
          <RHFTextField
            fullWidth
            name='email'
            label='Email address'
            variant='outlined'
            margin='normal'
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ marginTop: '24px' }}
          />

          {/* Password Input */}
          <RHFTextField
            fullWidth
            name='password'
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{ marginTop: '24px' }}
          />

          {/* Login Button */}
          <Button fullWidth variant='contained' color='primary' type='submit' sx={{ marginTop: '24px' }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </FormProvider>
  )
}

export default AuthLoginForm
