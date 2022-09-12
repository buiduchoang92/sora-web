import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react'
// @mui
import { Box } from '@mui/material'

// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, title = '', meta, ...other }: { children: any; meta: any; title: string }, ref) => (
    <>
      <Helmet>
        <title>{`${title} | Minimal-UI`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  ),
)

export default Page
