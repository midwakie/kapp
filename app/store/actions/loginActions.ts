/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ILoginResponse } from 'app/models/api/login';
import { ILoginRequestData } from 'app/models/actions/login';

export function requestLogin(payload: ILoginRequestData) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginFailed(payload: ILoginResponse) {
  return {
    type: types.LOGIN_FAILED,
    payload,
  };
}

export function onLoginResponse(payload: ILoginResponse) {
  return {
    type: types.LOGIN_RESPONSE,
    payload,
  };
}

export function enableLoader() {
  return {
    type: types.ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
