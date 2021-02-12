import React from 'react'

export const AuthLayout: React.FC = ({ children }) => {
  return (
    <div className="auth-page">
      <div className="auth-page__image"></div>
      <div className="auth-page__main">
        <div className="form">{children}</div>
      </div>
    </div>
  )
}
