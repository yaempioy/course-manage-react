import React from 'react'
import { Route, Router } from 'react-router'
import { loggedIn } from './modules/Auth.module'
import App from '../containers/App'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Profile from '../containers/Profile'

const requireAuthentication = (nextState, replace) => {
  if (!loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default store =>
  <Router>
    <Route component={App}>
      <Route onEnter={requireAuthentication}>
        <Route path='/' component={Home} />
        <Route path='/profile' component={Profile} />
      </Route>
    </Route>
    <Route path='/login' component={Login} />
  </Router>
