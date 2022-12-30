/* eslint-disable @typescript-eslint/no-unused-vars */
/* Redux saga class
 * registers the user into the app
 * requires email or mobile number, roleType, password
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as registerActions from 'app/store/actions/registerActions';
import * as otpRequestActions from 'app/store/actions/otpRequestActions';
import * as currentCustomerActions from 'app/store/actions/currentCustomerActions';
import * as loadingActions from 'app/store/actions/loadingActions';
import { IRegisterResponse } from 'app/models/api/register';
import registerUser from 'app/services/registerUser';
import { IRegisterRequestState } from 'app/models/actions/register';
import { IOtpRequestData } from 'app/models/actions/otpRequest';

// Our worker Saga that registers the user
export default function* registerAsync(data: IRegisterRequestState) {
  yield put(loadingActions.enableLoader());
  //how to call api
  const response: IRegisterResponse = yield call(registerUser, data.payload);
  if (response.status && response.status === 200) {
    yield put(registerActions.onRegisterResponse(response));
    setTimeout(() => {
      Alert.alert('Kutubi', response.data.message);
    }, 200);
    yield put(
      currentCustomerActions.setCurrentCustomerEmail(data.payload.email),
    );
    yield put(
      currentCustomerActions.setCurrentCustomerMobileNo(data.payload.mobileNo),
    );
    let otpRequestData: IOtpRequestData = {
      email: data.payload.email,
      mobileNo: data.payload.mobileNo,
      roleType: data.payload.roleType,
    };
    yield put(otpRequestActions.requestOtp(otpRequestData));
    yield put(loadingActions.changeRouteName('Verify Email'));
  } else {
    yield put(registerActions.registerFailed(response));
    yield put(loadingActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Kutubi', response.data.message);
    }, 200);
  }
}
