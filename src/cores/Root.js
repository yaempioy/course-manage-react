import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from '../App'
import Login from '../containers/Login'

const Root = ({ history, routes, store }) =>
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired
}

export default Root
