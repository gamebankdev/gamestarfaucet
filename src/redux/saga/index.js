import { fork, all } from 'redux-saga/effects'
import register from './resister_saga'
export default function* rootSaga() {
  yield all([
    fork(register)
  ])
}