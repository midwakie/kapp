/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import logoutSaga from './logoutSaga';

export default function* watch() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginSaga),
    takeEvery(types.LOG_OUT, logoutSaga),
  ]);
}
