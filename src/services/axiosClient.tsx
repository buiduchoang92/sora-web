import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    'content-type': 'application/x-www-form-urlencoded',
  },
  paramsSerializer: (params) => queryString.stringify(params),
  validateStatus: (status) => {
    return status >= 200 && status < 300 // default
  },
})

axiosClient.interceptors.request.use(
  async (config) => {
    return config
  },
  (error: Error) => {
    return new Promise<Error>((reject) => reject(error))
  },
)
axios.interceptors.response.use(
  async (response) => {
    return response
  },
  (error: Error) => {
    return new Promise<Error>((reject) => reject(error))
  },
)
export default axiosClient
