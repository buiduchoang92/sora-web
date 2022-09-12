// react
import { useEffect, useState } from 'react'
//
import createTokenProvider from './createTokenProvider'
import { customerServices } from '../../services/instanceApiService'
const createAuthProvider = () => {
  const tokenProvider = createTokenProvider()
  /* Implementation */
  const login: typeof tokenProvider.setToken = (newTokens) => {
    tokenProvider.setToken(newTokens)
  }

  const logout = () => {
    tokenProvider.setToken(null)
  }

  const authFetch = async (input: string, init?: any): Promise<any> => {
    const token = await tokenProvider.getToken()
    // init = init || {}

    // init.headers = {
    //   ...init.headers,
    //   Authorization: `Bearer ${token}`,
    // }
    return await tokenProvider.getToken()
    // return customerServices.request(input, init)
  }

  const useAuth = () => {
    const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn())

    useEffect(() => {
      const listener = (newIsLogged: boolean) => {
        setIsLogged(newIsLogged)
      }

      tokenProvider.subscribe(listener)
      return () => {
        tokenProvider.unsubscribe(listener)
      }
    }, [])

    return [isLogged] as [typeof isLogged]
  }

  return {
    useAuth,
    authFetch,
    login,
    logout,
  }
}

export const { useAuth, authFetch, login, logout } = createAuthProvider()
