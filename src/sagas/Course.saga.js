import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { createCourse } from '../cores/models/Course.model'

import { ACTION_TYPES } from '../actions/Course.action'
// Our worker Saga: will perform the async increment task
export function * createCourseAsync ({course = {}}) {
  console.log(course)
  let { response } = yield createCourse(course)
  if (response.course) {
    yield put({type: ACTION_TYPES.CREATE_COURSE_SUCCESS, course: response.course})
  }
}
// Our watcher Saga: spawn a new addTodoAsync task on each INCREMENT_ASYNC
export function * watchCreateCourseAsync () {
  yield * takeEvery(ACTION_TYPES.CREATE_COURSE_REQUEST, createCourseAsync)
}
