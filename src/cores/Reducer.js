import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AuthReducer from '../reducers/Auth.reducer'
import CourseReducer from '../reducers/Course.reducer'
export default combineReducers({
  course: CourseReducer,
  authentication: AuthReducer,
  routing: routerReducer
})
