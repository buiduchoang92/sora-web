export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export type LoginType = {
  email: string
  password: string
  remember: boolean
}
export type LoginDetailType = {
  status: string
  token_access_jwt: string
  token_refresh_jwt: string
  email: string
}
export type LoginSuccessResponseType = {
  results: LoginDetailType
  status_code: number
}
export interface LoginLoading {
  type: typeof LOGIN_LOADING
}

export interface LoginFail {
  type: typeof LOGIN_FAIL
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
  payload: LoginDetailType
}

export type LoginDispatchType = LoginLoading | LoginFail | LoginSuccess
