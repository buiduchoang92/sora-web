import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import apiUsers from '../services/instanceApiService'
import { InputInit } from './shared/helpers/constant'

export default function EditUser() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [inputs, setInputs] = useState<InputInit>({
    user_name: '',
    your_name: '',
    address: '',
    telephone: '',
  })

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    try {
      const dataUser = await apiUsers.get(`${process.env.REACT_APP_API_KEY}/${id}`)
      setInputs(dataUser)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (event: any) => {
    const name: string = event.target.name
    const value: string = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    apiUsers.put(`${process.env.REACT_APP_API_KEY}${id}/edit`, inputs)
    navigate('/')
  }
  return (
    <div>
      <h1>Edit user</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing='10'>
          <tbody>
            <tr>
              <th>
                <label>UserName: </label>
              </th>
              <td>
                <input value={inputs.user_name} type='text' name='name' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>YourName: </label>
              </th>
              <td>
                <input value={inputs.your_name} type='text' name='email' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Address: </label>
              </th>
              <td>
                <input value={inputs.address} type='text' name='mobile' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Telephone: </label>
              </th>
              <td>
                <input value={inputs.telephone} type='text' name='mobile' onChange={handleChange} />
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
