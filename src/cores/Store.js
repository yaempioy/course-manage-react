import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import Sagas from './Saga'
import Reducers from './Reducer'
import { getReduxDevTool } from './tools/developer.tool'
export default (initialState = {}, history) => {
  // Create final store and subscribe router in devtools

  const devTools = getReduxDevTool()
  const reduxSaga = createSagaMiddleware()
  const router = routerMiddleware(history)

  let middleware = compose(
    applyMiddleware(router),
    applyMiddleware(reduxSaga),
    devTools
  )

  const store = middleware(createStore)(Reducers, initialState)
  if (module.hot) {
    module.hot.accept('./Reducer', () => {
      const nextRootReducer = require('./Reducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  reduxSaga.run(Sagas)

  return store
}
