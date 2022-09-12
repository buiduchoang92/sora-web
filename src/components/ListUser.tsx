import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import apiUsers from '../services/instanceApiService'
import { InputInit } from './shared/helpers/constant'
import { RootStore } from '../store'
import { GuestType } from '../store/actions/Guest/guestActionTypes'

export default function ListUser() {
  const [users, setUsers] = useState<Array<InputInit>>([])
  const [guests, setGuests] = useState<Array<GuestType>>([])
  const guestFromStore: Array<GuestType> = useSelector((state: RootStore) => state.guest.guest)
  useEffect(() => {
    setGuests(guestFromStore);
    // getUsers()
  }, [guests])
  const getUsers = async () => {
    try {
      const dataUsers: Array<InputInit> = await apiUsers.get(`${process.env.REACT_APP_API_KEY}/profile`)
      setUsers(dataUsers)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteUser = async (id: string | undefined) => {
    try {
      await apiUsers.delete(`${process.env.REACT_APP_API_KEY}/${id}/delete`)
      getUsers()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>List Users</h1>
      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>YourName</th>
            <th>Telephone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {guests &&
            guests.map((guest, key) => (
              <tr key={key}>
                <td>{guest.user_name}</td>
                <td>{guest.your_name}</td>
                <td>{guest.telephone}</td>
                <td>{guest.address}</td>
                <td>
                  <Link to={`user/${guest.user_name}/edit`} style={{ marginRight: '10px' }}>
                    Edit
                  </Link>
                  <button onClick={() => deleteUser(guest.user_name)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    
  )
}
