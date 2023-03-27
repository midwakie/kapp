import { takeLatest, call, put } from 'redux-saga/effects';
import resetPassword from 'app/services/resetPassword';
import * as types from 'app/store/actions/types';
import {
  resetPasswordSuccess,
  resetPasswordFailure,
} from 'app/store/actions/resetPasswordAction';

export default function* resetPasswordSaga(action: any): any {
  try {
    const response = yield call(resetPassword, action.payload);
    yield put(resetPasswordSuccess(response));
  } catch (error) {
    yield put(resetPasswordFailure(error));
  }
}

export function* watchResetPasswordSaga() {
  yield takeLatest(types.RESET_PASSWORD_REQUEST, resetPasswordSaga);
}
