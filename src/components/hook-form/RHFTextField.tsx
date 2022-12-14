// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { TextField } from '@mui/material'

// ----------------------------------------------------------------------

interface RHFTextFieldProps {
  name: string
  label: string
  type?: string
  InputProps?: any
}
export default function RHFTextField({ name, label, ...other }: RHFTextFieldProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
          label={label}
          {...(other as any)}
        />
      )}
    />
  )
}
