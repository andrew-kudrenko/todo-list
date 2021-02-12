import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { AuthRoutesProps } from '../types/components.types'

export const AuthRoutes: React.FC<AuthRoutesProps> = props => (
  <Switch>
    <Route exact path="/login">
      <LoginPage {...props} />
    </Route>
    <Route exact path="/register">
      <RegisterPage {...props} />
    </Route>
    <Redirect from="*" to="/login" />
  </Switch>
)
