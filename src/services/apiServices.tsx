import { AxiosInstance } from 'axios'
import axiosClient from './axiosClient'

import { InputInit } from '../components/shared/helpers/constant'

class ApiServices {
  axiosClient: AxiosInstance
  constructor() {
    this.axiosClient = axiosClient
  }
  get(url: string) {
    return new Promise<any>((resolve, reject) => {
      this.axiosClient
        .get(url)
        .then((res) => {
          resolve(res.data)
        })
        .catch((error: Error) => {
          reject(error)
        })
    })
  }
  post(url: string, input: InputInit) {
    return new Promise<InputInit>((resolve, reject) => {
      this.axiosClient.post(url, input).then((res) => {
        resolve(res.data)
      })
    })
  }
  put(url: string, input: InputInit) {
    return new Promise<InputInit>((resolve, reject) => {
      this.axiosClient.put(url, input).then((res) => {
        resolve(res.data)
      })
    })
  }
  delete(url: string) {
    return new Promise<InputInit>((resolve, reject) => {
      this.axiosClient
        .delete(url)
        .then((res) => {
          resolve(res.data)
        })
        .catch((error: Error) => {
          reject(error)
        })
    })
  }
}
export default ApiServices
