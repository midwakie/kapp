/* eslint-disable @typescript-eslint/no-unused-vars */
/* Redux saga class
 * logins the user into the app
 * requires email or mobile number, roleType & password.
 */
import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import loginUser from 'app/services/loginUser';
import * as loginActions from 'app/store/actions/loginActions';
import * as currentCustomerActions from 'app/store/actions/currentCustomerActions';
import * as loadingActions from 'app/store/actions/loadingActions';
import * as otpRequestActions from 'app/store/actions/otpRequestActions';
import { ILoginResponse } from 'app/models/api/login';
import { ILoginRequestState } from 'app/models/actions/login';

// Our worker Saga that logins the user
export default function* loginAsync(data: ILoginRequestState) {
  yield put(loadingActions.enableLoader());
  //how to call api
  const response: ILoginResponse = yield call(loginUser, data.payload);
  if (response.status && response.status === 200) {
    yield put(loginActions.onLoginResponse(response));
    yield put(
      currentCustomerActions.setCurrentCustomerEmailVerificationStatus(
        response.data.user.isVerified.email,
      ),
    );
    yield put(
      currentCustomerActions.setCurrentCustomerMobileVerificationStatus(
        response.data.user.isVerified.mobileNo,
      ),
    );
    yield put(loadingActions.disableLoader());
    if (response.data.user.isVerified.email === false) {
      yield put(
        otpRequestActions.requestOtp({
          email: response.data.user.email,
          mobileNo: response.data.user.mobileNo.toString(),
          roleType: response.data.user.roleType,
        }),
      );
    }
  } else {
    yield put(loginActions.loginFailed(response));
    yield put(loadingActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Kutubi', 'Error');
    }, 200);
  }
}
