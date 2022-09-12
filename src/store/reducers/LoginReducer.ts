import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LoginDispatchType,
  LoginDetailType,
} from '../actions/Login/LoginActionTypes'

// ----------------------------------------------------------------------

interface DefaultInitial {
  loading: boolean
  loginInfo: LoginDetailType
}

const defaultState: DefaultInitial = {
  loading: false,
  loginInfo: { status: '', token_access_jwt: '',token_refresh_jwt:'', email: '' },
}

const loginReducer = (state: DefaultInitial = defaultState, action: LoginDispatchType): DefaultInitial => {
  console.log(action, 'action')
  switch (action.type) {
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      }
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginInfo: action.payload,
      }
    default:
      return state
  }
}

export default loginReducer
