import React from 'react'

export const Layout: React.FC = ({ children }) =>
  <div className="app">
    <header className="app__header">
      <div className="container">
        <div className="app__header-logo">
          <div className="app__header-logo__img" />
          <span className="app__header-logo__title">
            TodoList
          </span>
        </div>
      </div>
    </header>
    <main className="app__main">
      <div className="container">
        {children}
      </div>
    </main>
  </div>