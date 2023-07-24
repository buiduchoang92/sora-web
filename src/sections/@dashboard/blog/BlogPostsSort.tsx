// material
import { MenuItem, TextField } from '@mui/material'

// ----------------------------------------------------------------------

interface BlogPostsSortProps {
  options: Option[]
  onSort: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
interface Option {
  value: string
  label: string
}

export default function BlogPostsSort({ options, onSort }: BlogPostsSortProps) {
  return (
    <TextField select size='small' value='latest' onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}
