import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthLayout } from '../components/auth/AuthLayout'
import { AuthRoutesProps } from '../types/components.types'
import { onChange } from '../utils/events.utils'

export const LoginPage: React.FC<AuthRoutesProps> = ({ login }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <AuthLayout>
      <div className="icon-rounded">
        <i className="fa"></i>
      </div>
      <label htmlFor="login" className="label">
        {'Email'}
      </label>
      <input
        id="login"
        value={email}
        onChange={onChange(setEmail)}
        type="email"
        className="text-field w-100"
      />

      <label htmlFor="password" className="label">
        {'Password'}
      </label>
      <input
        id="password"
        value={password}
        onChange={onChange(setPassword)}
        type="password"
        className="text-field w-100"
      />
      <button
        className="btn bg-primary text-white w-100"
        onClick={login?.bind(null, email, password)}
      >
        {'Войти'}
      </button>
      <div className="w-100 d-flex justify-flex-end">
        <NavLink className="h6 text-primary" to="/register">
          {'Ещё нет аккаунта?'}
        </NavLink>
      </div>
    </AuthLayout>
  )
}
