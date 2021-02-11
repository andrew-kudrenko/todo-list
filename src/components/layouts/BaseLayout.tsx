import React from 'react'
import { Navbar } from '../nav/Navbar'

export const BaseLayout: React.FC = ({ children }) => (
  <div className="app">
    <Navbar />
    <main className="app__main">
      <div className="container">{children}</div>
    </main>
  </div>
)
