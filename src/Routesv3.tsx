import { Routes, Route, useRoutes, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/Page404'
import LogoOnlyLayout from './layouts/LogoOnlyLayout'
export default function RoutesV3() {
  return useRoutes([
    {
      path: '/home-page',
      element: <HomePage />,
      children: [
        // { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      // element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/home-page/" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}
