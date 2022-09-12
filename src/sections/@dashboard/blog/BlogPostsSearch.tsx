// @mui
import { styled } from '@mui/material/styles'
import { Autocomplete, InputAdornment, Popper, TextField } from '@mui/material'
// components
import Iconify from '../../../components/Iconify'

// ----------------------------------------------------------------------

const PopperStyle = styled((props) => <Popper open placement="bottom-start" {...props} />)({
  width: '280px !important',
})

// ----------------------------------------------------------------------

interface BlogPostsSearchProps {
  posts: Post[]
}

interface Post {
  id: string
  cover: string
  title: string
  createdAt: Date
  view: number
  comment: number
  share: number
  favorite: number
  author: {
    name: string
    avatarUrl: string
  }
}

export default function BlogPostsSearch({ posts }: BlogPostsSearchProps) {
  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      PopperComponent={PopperStyle}
      options={posts}
      getOptionLabel={(post) => post.title}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search post..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  )
}
