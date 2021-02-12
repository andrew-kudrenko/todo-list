import React from 'react'
import { BaseLayoutProps } from '../../types/components.types'
import { Navbar } from '../nav/Navbar'

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children, logout }) => (
  <div className="app">
    <div className="app__navbar">
      <Navbar logout={logout} />
    </div>
    <main className="app__main">
      <div className="container">{children}</div>
    </main>
  </div>
)
