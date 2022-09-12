import { faker } from '@faker-js/faker'
// @mui
import { useTheme } from '@mui/material/styles'
import { Grid, Container, Typography } from '@mui/material'
// components
import Page from '../components/Page'
import Iconify from '../components/Iconify'
// sections
import {
  AppTasks,
  //   AppNewsUpdate,
  //   AppOrderTimeline,
  //   AppCurrentVisits,
  //   AppWebsiteVisits,
  //   AppTrafficBySite,
  //   AppWidgetSummary,
  //   AppCurrentSubject,
  //   AppConversionRates,
} from '../sections/@dashboard/app'

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard" meta="">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}
