/* Redux saga class
 * logins the user into the app
 * requires email.
 */
import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import * as loginActions from 'app/store/actions/loginActions';
import * as loadingActions from 'app/store/actions/loadingActions';
import { ILoginResponse } from 'app/models/api/login';
import logoutUser from 'app/services/logoutUser';

// Our worker Saga that logins the user
export default function* logOutAsync() {
  yield put(loadingActions.enableLoader());
  //how to call api
  yield call(logoutUser);

  yield put(loadingActions.disableLoader());

  // no need to call navigate as this is handled by redux store with SwitchNavigator
  //yield call(navigationActions.navigateToHome);
}
