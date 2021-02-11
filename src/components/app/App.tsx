import React from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { PrivateRoutes } from '../../routes/PrivateRoutes'
import { AuthRoutes } from '../../routes/AuthRoutes'

export const App: React.FC = () => {
  const { user } = useAuth()

  return user ? <PrivateRoutes user={user} /> : <AuthRoutes />
}
