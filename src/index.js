import React from 'react'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import ReactDOM from 'react-dom'
import { createHistory } from 'history'
import Root from './cores/Root'
import Route from './cores/Route'
import Store from './cores/Store'
import registerServiceWorker from './registerServiceWorker'
import './index.scss'

// const BASE_URI = __BASE_URI__

const browserHistory = useRouterHistory(createHistory)({
  basename: '/'
})

const initialState = window.__INITIAL_STATE__
const store = Store(initialState, browserHistory)
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.routing
})
// Now that we have the Redux store, we can create our routes. We provide
// the store to the route definitions so that routes have access to it for
// hooks such as `onEnter`.
const routes = Route(store)

ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
registerServiceWorker()
