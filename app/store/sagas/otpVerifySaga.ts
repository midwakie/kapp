/* eslint-disable @typescript-eslint/no-unused-vars */
/* Redux saga class
 * registers the user into the app
 * requires email or mobile number, roleType, password
 */
import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as otpVerifyActions from 'app/store/actions/otpVerifyActions';
import * as currentCustomerActions from 'app/store/actions/currentCustomerActions';
import * as loadingActions from 'app/store/actions/loadingActions';
import { IOtpVerifyRequestState } from 'app/models/actions/otpVerify';
import { IOtpVerifyResponse } from 'app/models/api/otpVerify';
import otpVerify from 'app/services/otpVerify';

// Our worker Saga that registers the user
export default function* otpVerifyAsync(data: IOtpVerifyRequestState) {
  yield put(loadingActions.enableLoader());
  //Fix this after backend is fixed
  delete data?.payload?.mobileNo;
  const response: IOtpVerifyResponse = yield call(otpVerify, data.payload);
  if (response.status && response.status === 200) {
    yield put(otpVerifyActions.onOtpVerificationResponse(response));
    yield put(
      currentCustomerActions.setCurrentCustomerEmailVerificationStatus(true),
    );
    yield put(loadingActions.changeRouteName('Verify Mobile'));
    yield put(loadingActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Kutubi', response.data.message);
    }, 200);
  } else {
    yield put(otpVerifyActions.otpVerificationFailed(response));
    yield put(loadingActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Kutubi', response.data.message);
    }, 200);
  }
}
