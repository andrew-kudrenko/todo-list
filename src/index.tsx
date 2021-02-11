import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import './scss/index.scss'
import { App } from './components/app/App'

const app: React.ReactElement = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))

serviceWorker.unregister()
