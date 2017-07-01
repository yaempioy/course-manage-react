import React from 'react'
import { Route, Router, Redirect } from 'react-router'
import App from '../App'
import Login from '../containers/Login'

export default store =>
  <Router>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
  </Router>
