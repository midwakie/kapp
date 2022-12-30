/* eslint-disable @typescript-eslint/no-unused-vars */
/* Redux saga class
 * registers the user into the app
 * requires email or mobile number, roleType, password
 */
import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as otpRequestActions from 'app/store/actions/otpRequestActions';
import * as loadingActions from 'app/store/actions/loadingActions';
import NavigationService from 'app/navigation/NavigationService';
import { IOtpResponse } from 'app/models/api/otpRequest';
import otpRequest from 'app/services/otpRequest';
import { IOtpRequestState } from 'app/models/actions/otpRequest';

// Our worker Saga that registers the user
export default function* otpRequestAsync(data: IOtpRequestState) {
  yield put(loadingActions.enableLoader());
  //Fix this after backend is fixed
  delete data?.payload?.mobileNo;
  const response: IOtpResponse = yield call(otpRequest, data.payload);
  if (response.status && response.status === 200) {
    yield put(otpRequestActions.onOtpRequestResponse(response));
    yield put(loadingActions.disableLoader());
    if (data?.payload?.isResend) {
      setTimeout(() => {
        Alert.alert('Kutubi', response.data.message);
      }, 200);
    }
  } else {
    yield put(otpRequestActions.otpRequestFailed(response));
    yield put(loadingActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Kutubi', response.data.message);
    }, 200);
  }
}
