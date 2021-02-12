import React from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { PrivateRoutes } from '../../routes/PrivateRoutes'
import { AuthRoutes } from '../../routes/AuthRoutes'
import { LoadingPage } from '../../pages/LoadingPage'

export const App: React.FC = () => {
  const { user, ...auth } = useAuth()

  const { loginLoading, registerLoading } = auth

  const isLoading = loginLoading || registerLoading

  return isLoading ? (
    <LoadingPage />
  ) : user ? (
    <PrivateRoutes user={user} {...auth} />
  ) : (
    <AuthRoutes {...auth} />
  )
}
