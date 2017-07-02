import { fork } from 'redux-saga/effects'
import * as AuthSagas from '../sagas/Auth.saga'

export default function * () {
  yield * [fork(AuthSagas.watchAuthAsync)]
}
