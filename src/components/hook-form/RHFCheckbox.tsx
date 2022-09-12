// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

// ----------------------------------------------------------------------

interface RHFCheckboxProps {
  name: string
  label: string
}

export function RHFCheckbox({ name, ...other }: RHFCheckboxProps) {
  const { control } = useFormContext()

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      {...(other as any)}
    />
  )
}

// ----------------------------------------------------------------------

interface RHFMultiCheckboxProps {
  name: string
  options: OptionsProps[]
}
interface OptionsProps {
  value: any
  label: any
}

export function RHFMultiCheckbox({ name, options, ...other }: RHFMultiCheckboxProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onSelected = (option: OptionsProps) =>
          field.value.includes(option) ? field.value.filter((value: any) => value !== option) : [...field.value, option]

        return (
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={field.value.includes(option.value)}
                    onChange={() => field.onChange(onSelected(option.value))}
                  />
                }
                label={option.label}
                {...(other as any)}
              />
            ))}
          </FormGroup>
        )
      }}
    />
  )
}
