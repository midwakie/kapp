/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import logoutSaga from './logoutSaga';
import registerSaga from './registerSaga';
import otpRequestSaga from './otpRequestSaga';
import otpVerifySaga from './otpVerifySaga';

export default function* watch() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginSaga),
    takeEvery(types.LOG_OUT, logoutSaga),
    takeEvery(types.REGISTER_REQUEST, registerSaga),
    takeEvery(types.OTP_REQUEST, otpRequestSaga),
    takeEvery(types.OTP_VERIFY, otpVerifySaga),
  ]);
}
