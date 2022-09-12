import { combineReducers } from 'redux'
import guestReducer from './GuestReducer'
import loginReducer from './LoginReducer'

const RootReducer = combineReducers({
  guest: guestReducer,
  loginInfo: loginReducer,
})

export default RootReducer
