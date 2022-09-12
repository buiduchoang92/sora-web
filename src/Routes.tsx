import { Routes, Route } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import ListUser from './components/ListUser'
import RegisterCustomer from './components/RegisterCustomer'
import SignIn from './components/Login'
import HomePage from './components/HomePage'
import Profile from './components/Profile'

export default function Routers() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="login" element={<SignIn />} />
      <Route path="register-user" element={<RegisterCustomer />} />
      <Route path="profile" element={<Profile />} />
      <Route path="user/list" element={<ListUser />} />
      <Route path="user/create" element={<CreateUser />} />
      <Route path="user/:id/edit" element={<EditUser />} />
    </Routes>
  )
}
