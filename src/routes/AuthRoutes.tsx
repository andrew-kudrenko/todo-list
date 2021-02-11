import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

export const AuthRoutes: React.FC = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Redirect from="*" to="/login" />
  </Switch>
)
