import {
  GUEST_FAIL,
  GUEST_LOADING,
  GUEST_SUCCESS,
  GuestDispatchType,
  GuestType,
} from '../actions/Guest/guestActionTypes'

interface DefaultInitial {
  loading: boolean
  guest: Array<GuestType>
}

const defaultState: DefaultInitial = {
  loading: false,
  guest: []
}

const guestReducer = (state: DefaultInitial = defaultState, action: GuestDispatchType): DefaultInitial => {
  switch (action.type) {
    case GUEST_FAIL:
      return {
        ...state,
        loading: false,
      }
    case GUEST_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        guest: action.payload,
      }
    default:
      return state
  }
}

export default guestReducer
