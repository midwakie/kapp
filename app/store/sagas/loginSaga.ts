/* Redux saga class
 * logins the user into the app
 * requires email.
 */
import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import loginUser from 'app/services/loginUser';
import * as loginActions from 'app/store/actions/loginActions';
import * as loadingActions from 'app/store/actions/loadingActions';
import { ILoginResponse } from 'app/models/api/login';

// Our worker Saga that logins the user
export default function* loginAsync(data: any) {
  yield put(loadingActions.enableLoader());
  //how to call api
  const response: ILoginResponse = yield call(loginUser, data.email);
  console.log(JSON.stringify(response));

  if (response.id) {
    yield put(loginActions.onLoginResponse(response));
    yield put(loadingActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.loginFailed());
    yield put(loadingActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Kutubi', 'Error');
    }, 200);
  }
}
