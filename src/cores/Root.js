import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from '../App'
import Login from '../containers/Login'

const Root = ({ store }) =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
    </Router>
  </Provider>

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
