import { Dispatch } from 'redux'

import { GUEST_FAIL, GUEST_LOADING, GUEST_SUCCESS, GuestDispatchType, GuestType } from './guestActionTypes'
import apiUsers from '../../../services/instanceApiService'

export const GetAllGuests = () => {
  return async (dispatch: Dispatch<GuestDispatchType>) => {
    try {
      dispatch({
        type: GUEST_LOADING,
      })

      const res: Array<GuestType> = await apiUsers.get(`${process.env.REACT_APP_API_KEY}/profile`)
      dispatch({
        type: GUEST_SUCCESS,
        payload: res,
      })
    } catch (error) {
      dispatch({
        type: GUEST_FAIL,
      })
    }
  }
}
