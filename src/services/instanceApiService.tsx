import { CustomerType } from '../store/actions/Customer/CustomerActionTypes'
import { LoginSuccessResponseType } from '../store/actions/Login/LoginActionTypes'
import { RegisterSuccessResponseType } from '../sections/auth/register/RegisterForm'
import ApiServices from './apiServices'

type LoginProps = {
  email: string
  password: string
  remember: boolean
}
const apiUsers = new ApiServices()

export default apiUsers

class CustomerServices extends ApiServices {
  private flagSend
  constructor(flagSend: boolean) {
    super()
    this.flagSend = flagSend
  }
  registerUser(url: string, input: CustomerType) {
    return new Promise<RegisterSuccessResponseType>((resolve, reject) => {
      this.axiosClient
        .post(url, input)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  }
  postLogin(url: string, input: LoginProps) {
    return new Promise<LoginSuccessResponseType>((resolve, reject) => {
      this.axiosClient
        .post(url, input)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  }
  logout(url: string) {
    return new Promise<string>((resolve, reject) => {
      this.axiosClient
        .post(url)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  }
  request(url: string, init: any) {
    this.axiosClient.interceptors.request.use((config) => {
      config.headers = {
        ...config.headers,
        Authorization: init.headers.Authorization,
      }
      // config.params = { email: 'hoangbui+4@gmail.com' }
      console.log('Start request with', config)
      return config
    })
    return new Promise<any>((resolve, reject) => {
      this.axiosClient
        .get(url)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  checkAndRefreshAccessToken(
    url: string,
    { token_access_jwt, token_refresh_jwt }: { token_access_jwt: string; token_refresh_jwt: string },
  ) {
    this.axiosClient.interceptors.request.use((config) => {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token_access_jwt}`,
      }
      return config
    })
    this.axiosClient.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        const config = error.config
        console.log(error.response, 'before pass')
        if (error.response && error.response.status === 401 && !config._retry) {
          config._retry = true
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token_refresh_jwt}`,
          }
          console.log(config, 'pass refresh')
          // try {
          //   let res = await this.axiosClient.get(url)
          //   if (res.data.access_token) {
          //     this.axiosClient(config)
          //     return res.data.access_token
          //   }
          // } catch (err) {
          //   return Promise.reject(err)
          // }
        }
        return Promise.reject(error)
      },
    )
    return new Promise<any>((resole, reject) => {
      this.axiosClient
        .get(url)
        .then((res) => {
          resole(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export const customerServices = new CustomerServices(true)
