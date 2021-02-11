import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { BaseLayout } from '../components/layouts/BaseLayout'
import { RecordsPage } from '../pages/RecordsPage'
import { PrivateRoutesProps } from '../types/components.types'

export const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ user }) => (
  <BaseLayout>
    <Switch>
      <Route exact path="/records">
        <RecordsPage user={user} />
      </Route>
      <Redirect from="*" to="/records" />
    </Switch>
  </BaseLayout>
)
