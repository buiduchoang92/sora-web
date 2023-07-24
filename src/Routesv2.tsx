import { Navigate, useRoutes } from 'react-router-dom'
// layouts
import DashboardLayout from './layouts/dashboard'
import LogoOnlyLayout from './layouts/LogoOnlyLayout'
//
import { Login, Register, Products, DashboardApp, Cart, NotFound, Profile, Blog } from './pages/index'

// ----------------------------------------------------------------------

export default function RouterV2() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'cart', element: <Cart /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to='/dashboard/app' /> },
        { path: '/', element: <Navigate to='/dashboard/' /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'profile', element: <Profile /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to='/404' /> },
      ],
    },
    { path: '*', element: <Navigate to='/404' replace /> },
  ])
}
