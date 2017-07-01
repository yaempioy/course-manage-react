import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AuthReducer from '../reducers/Login.reducer'
export default combineReducers({
  authentication: AuthReducer,
  routing: routerReducer
})
