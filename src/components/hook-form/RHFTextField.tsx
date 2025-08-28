import React from 'react'

import { useFormContext, Controller } from 'react-hook-form'
import type { TextFieldProps } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'

interface RHFTextFieldProps extends Omit<TextFieldProps, 'name'> {
  name: string
  helperText?: React.ReactNode
}

const RHFTextField: React.FC<RHFTextFieldProps> = ({ name, helperText, ...other }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <CustomTextField
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
        />
      )}
    />
  )
}

export default RHFTextField
