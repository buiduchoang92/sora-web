import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import apiUsers from '../services/instanceApiService'

export default function CreateUser() {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({})

  const handleChange = (event: any) => {
    const name: string = event.target.name
    const value: string = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    apiUsers.post(`${process.env.REACT_APP_API_KEY}/save`, inputs).then(() => {
      navigate('/')
    })
  }
  return (
    <div>
      <h1>Create user</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing='10'>
          <tbody>
            <tr>
              <th>
                <label>UserName: </label>
              </th>
              <td>
                <input type='text' name='user_name' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>YourName: </label>
              </th>
              <td>
                <input type='text' name='your_name' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Address: </label>
              </th>
              <td>
                <input type='text' name='address' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Telephone: </label>
              </th>
              <td>
                <input type='text' name='telephone' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td align='right'>
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
