import { fork } from 'redux-saga/effects'
import * as AuthSagas from '../sagas/Auth.saga'
import * as UserSagas from '../sagas/User.saga'
import * as CoureSagas from '../sagas/Course.saga'

export default function * () {
  yield * [
    fork(AuthSagas.watchAuthAsync),
    fork(AuthSagas.watchGetAuthProfileAsync),
    fork(UserSagas.watchUpdateUserAsync),
    fork(CoureSagas.watchFetchCoursesCreateCourseAsync),
    fork(CoureSagas.watchCreateCourseAsync)
  ]
}
