import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthLayout } from '../components/auth/AuthLayout'
import { AuthRoutesProps } from '../types/components.types'
import { onChange } from '../utils/events.utils'

export const RegisterPage: React.FC<AuthRoutesProps> = ({ register }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')

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
      <label htmlFor="password-conf" className="label">
        {'Password again'}
      </label>
      <input
        id="password-conf"
        value={repeatedPassword}
        onChange={onChange(setRepeatedPassword)}
        type="password"
        className="text-field w-100"
      />
      <button
        disabled={password !== repeatedPassword}
        className="btn bg-primary text-white w-100"
        onClick={register?.bind(null, email, password)}
      >
        {'Зарегистрироваться'}
      </button>
      <div className="w-100 d-flex justify-flex-end">
        <NavLink className="h6 text-primary" to="/login">
          {'Уже есть аккаунт?'}
        </NavLink>
      </div>
    </AuthLayout>
  )
}
