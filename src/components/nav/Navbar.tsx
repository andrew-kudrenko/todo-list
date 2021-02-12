import React from 'react'
import { NavbarProps } from '../../types/components.types'

export const Navbar: React.FC<NavbarProps> = ({ logout }) => (
  <header className="navbar">
    <div className="container d-flex justify-space-between">
      <div className="navbar-logo">
        <div className="navbar-logo__img" />
        <span className="navbar-logo__title h4">{'TodoList'}</span>
      </div>
      <div className="navbar__logout cursor-pointer" onClick={logout}>
        {'Выход'}
      </div>
    </div>
  </header>
)
