import { customerServices } from '../../services/instanceApiService'
import createStorage from '../createStoreProvider'

const createTokenProvider = () => {
  const tokenSetting = createStorage('REACT_TOKEN_AUTH', 'localStorage')

  // let _token: { token_access_jwt: string; token_refresh_jwt: string } | null
  let _token: any
  if (tokenSetting.get('REACT_TOKEN_AUTH')) {
    _token = tokenSetting.get('REACT_TOKEN_AUTH')
  }
  /* Implementation */

  const isLoggedIn = () => {
    return !!_token
  }
  const getToken = async () => {
    if (!_token) {
      return null
    }
    try {
      const updatedToken = await customerServices.checkAndRefreshAccessToken(
        `${process.env.REACT_APP_API_KEY}/auth`,
        _token,
      )
      setToken(updatedToken)
    } catch (error) {
      console.log(error)
    }

    return _token && _token.token_access_jwt
  }

  let observers: Array<(isLogged: boolean) => void> = []
  const subscribe = (observer: (isLogged: boolean) => void) => {
    observers.push(observer)
  }

  const unsubscribe = (observer: (isLogged: boolean) => void) => {
    observers = observers.filter((_observer) => _observer !== observer)
  }

  const notify = () => {
    const isLogged = isLoggedIn()
    observers.forEach((observer) => observer(isLogged))
  }

  const setToken = (token: typeof _token) => {
    if (token) {
      tokenSetting.set('REACT_TOKEN_AUTH', token)
    } else {
      tokenSetting.remove('REACT_TOKEN_AUTH')
    }
    _token = token
    notify()
  }
  return {
    getToken,
    isLoggedIn,
    setToken,
    subscribe,
    unsubscribe,
  }
}

export default createTokenProvider
