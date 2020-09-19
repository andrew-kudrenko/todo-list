import React from 'react' 
import ReactDOM from 'react-dom' 
import './index.scss'
import { App } from './App' 
import * as serviceWorker from './serviceWorker' 

const app: React.ReactElement = 
  <React.StrictMode>
    <App />
  </React.StrictMode>

ReactDOM.render(app, document.getElementById('root')) 

serviceWorker.unregister() 
