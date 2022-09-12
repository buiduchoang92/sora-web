import { Dispatch } from 'redux'

import {
  CUSTOMER_FAIL,
  CUSTOMER_LOADING,
  CUSTOMER_SUCCESS,
  CUSTOMER_POST_SUCCESS,
  CustomerDispatchType,
  CustomerType,
} from './CustomerActionTypes'
import apiUsers, { customerServices } from '../../../services/instanceApiService'

export const GetAllCustomers = () => {
  return async (dispatch: Dispatch<CustomerDispatchType>) => {
    try {
      dispatch({
        type: CUSTOMER_LOADING,
      })

      const res: Array<CustomerType> = await apiUsers.get(`${process.env.REACT_APP_API_KEY}/profile`)
      dispatch({
        type: CUSTOMER_SUCCESS,
        payload: res,
      })
    } catch (error) {
      dispatch({
        type: CUSTOMER_FAIL,
      })
    }
  }
}
export const RegisterCustomer = () => {
  const customer = {
    storeID: 1,
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    addressID: 1,
    active: 1,
    password: 'string',
    username: 'string',
  }
  return async (dispatch: Dispatch<CustomerDispatchType>) => {
    try {
      dispatch({
        type: CUSTOMER_LOADING,
      })
      const data = await customerServices.registerUser(`${process.env.REACT_APP_API_KEY}/register-user`, customer)
      // dispatch({
      //   type: CUSTOMER_POST_SUCCESS,
      //   payload: data,
      // })
    } catch (error) {
      dispatch({
        type: CUSTOMER_FAIL,
      })
    }
  }
}
