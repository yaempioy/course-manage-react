import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

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
