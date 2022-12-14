import { Navigate, useRoutes, Route } from 'react-router-dom'
// layouts
import DashboardLayout from './layouts/dashboard'
import LogoOnlyLayout from './layouts/LogoOnlyLayout'
//
import Blog from './pages/Blog'
// import User from './pages/User'
import Login from './pages/Login'
import NotFound from './pages/Page404'
import PageProfile from './pages/Profile'
// import Register from './pages/Register'
import Products from './pages/Products'
import DashboardApp from './pages/DashboardApp'
import Cart from './pages/Cart'

// ----------------------------------------------------------------------

export default function RouterV2() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        // { path: 'user', element: <User /> },
        { path: 'cart', element: <Cart /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '/', element: <Navigate to="/dashboard/" /> },
        { path: 'login', element: <Login /> },
        // { path: 'register', element: <Register /> },
        { path: 'profile', element: <PageProfile /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}
