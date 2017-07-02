import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { postAuthentication } from '../cores/models/Auth.model'
import { login, loggedIn } from '../cores/modules/Auth.module'
import { ACTION_TYPES } from '../actions/LoginAction'
// Our worker Saga: will perform the async increment task
export function * authAsync ({ username, password }) {
  let { response } = yield postAuthentication(username, password)
  if (response.token) {
    login(response.token)
    yield put({
      type: ACTION_TYPES.AUTHENTICATION_SUCCESS,
      user: response.user,
      authentication: loggedIn()
    })
  } else {
    yield put({
      type: ACTION_TYPES.AUTHENTICATION_FAILED,
      errorMessage: response.message
    })
  }
}
// Our watcher Saga: spawn a new addTodoAsync task on each INCREMENT_ASYNC
export function * watchAuthAsync () {
  yield * takeEvery(ACTION_TYPES.AUTHENTICATION_REQUEST, authAsync)
}
