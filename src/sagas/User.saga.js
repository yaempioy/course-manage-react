import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { updateUser } from '../cores/models/User.model'

import { ACTION_TYPES } from '../actions/User.action'
// Our worker Saga: will perform the async increment task
export function * updateUserAsync ({id, user = {}}) {
  let { response } = yield updateUser(id, user)
  if (response.user) {
    yield put({
      type: ACTION_TYPES.UPDATE_PROFILE_SUCCESS,
      user: response.user
    })
  }
}
// Our watcher Saga: spawn a new addTodoAsync task on each INCREMENT_ASYNC
export function * watchUpdateUserAsync () {
  yield * takeEvery(ACTION_TYPES.UPDATE_PROFILE_REQUEST, updateUserAsync)
}
