import React, { useCallback } from 'react'
// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material'

// ----------------------------------------------------------------------

interface RHFMultiSelectProps {
  name: string
  label?: string
  options: OptionsProps[]
  defaultValue?: string
}

interface OptionsProps {
  value: number
  label: any
}

export default function RHFSelect({ name, options, defaultValue, label, ...other }: RHFMultiSelectProps) {
  const { control } = useFormContext()
  const labelID = `${name}-label`
  return (
    <FormControl variant='standard' fullWidth>
      <InputLabel id={labelID}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <Select {...field} checked={field.value} {...(other as any)} labelId={labelID}>
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {error && <FormHelperText error={!!error}>{error.message}</FormHelperText>}
            </>
          )
        }}
      />
    </FormControl>
  )
}
