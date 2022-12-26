/* eslint-disable @typescript-eslint/no-unused-vars */
/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { ILoginState } from 'app/models/reducers/login';
import {
  ILoginRequestState,
  ILoginResponseState,
} from 'app/models/actions/login';
const initialState: ILoginState = {
  isLoggedIn: false,
  payload: {},
  status: 0,
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: ILoginState, action: ILoginRequestState) {
    return {
      ...state,
      payload: action.payload,
    };
  },
  [types.LOGIN_LOADING_ENDED](state: ILoginState) {
    return { ...state };
  },
  [types.LOGIN_RESPONSE](state: ILoginState, action: ILoginResponseState) {
    return {
      ...state,
      isLoggedIn: true,
      payload: action.payload.data,
      status: action.payload.status,
    };
  },
  [types.LOGIN_FAILED](state: ILoginState, action: ILoginResponseState) {
    return {
      ...state,
      payload: action.payload.data,
      status: action.payload.status,
      isLoggedIn: false,
    };
  },
  [types.LOG_OUT](state: ILoginState) {
    return initialState;
  },
});
