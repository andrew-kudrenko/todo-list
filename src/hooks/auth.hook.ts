import { useEffect, useState } from 'react'
import fire from 'firebase'
import { Nullable } from '../types/utility.types'
import firebase from '../utils/firebase.utils'
import { useLocalStorage } from './local-storage.hook'

export function useAuth(autoLogin: boolean = true) {
  const [user, setUser] = useState<Nullable<fire.auth.UserCredential>>(null)

  const [storedEmail, setStoredEmail] = useLocalStorage<Nullable<string>>(
    'emailForSignIn',
    null
  )
  const [storedPassword, setStoredPassword] = useLocalStorage<Nullable<string>>(
    'passwordForSignIn',
    null
  )

  const [loginError, setLoginError] = useState<Nullable<string>>(null)
  const [loginLoading, setLoginLoading] = useState(false)

  const [registerError, setRegisterError] = useState<Nullable<string>>(null)
  const [registerLoading, setRegisterLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (autoLogin && storedEmail && storedPassword) {
        await login(storedEmail, storedPassword)
      }
    })()
  }, [])

  function setStoredValues(
    email: Nullable<string>,
    password: Nullable<string>
  ) {
    setStoredEmail(email)
    setStoredPassword(password)
  }

  function clearErrors() {
    setRegisterError(null)
    setLoginError(null)
  }

  async function login(email: string, password: string) {
    try {
      setLoginLoading(true)

      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

      setUser(user)
      clearErrors()
      setStoredValues(email, password)
    } catch (e) {
      setLoginError(e.message)
    } finally {
      setLoginLoading(false)
    }
  }

  async function register(email: string, password: string) {
    try {
      setRegisterLoading(true)

      await firebase.auth().createUserWithEmailAndPassword(email, password)
      await login(email, password)

      setUser(user)
      clearErrors()
      setStoredValues(email, password)
    } catch (e) {
      setRegisterError(e)
    } finally {
      setRegisterLoading(false)
    }
  }

  async function logout() {
    await firebase.auth().signOut()
    setUser(null)
    setStoredValues(null, null)
  }

  return {
    login,
    register,
    logout,
    loginError,
    registerError,
    loginLoading,
    registerLoading,
    user: user?.user,
  }
}
