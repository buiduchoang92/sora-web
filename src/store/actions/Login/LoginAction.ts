import { Dispatch } from 'redux'

import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, LoginDispatchType, LoginDetailType } from './LoginActionTypes'

// ----------------------------------------------------------------------

export const LoginAction = (data: LoginDetailType) => {
  return async (dispatch: Dispatch<LoginDispatchType>) => {
    try {
      dispatch({
        type: LOGIN_LOADING,
      })
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
      })
    }
  }
}
