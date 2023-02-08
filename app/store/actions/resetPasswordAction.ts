/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Reducer actions related with login
 */
import * as types from './types';
import { IResetPasswordResponse } from 'app/models/api/resetPassword';
import { IResetPasswordRequestData } from 'app/models/actions/resetPassword';

export function requestResetPassword(payload: IResetPasswordRequestData) {
  return {
    type: types.RESET_PASSWORD_REQUEST,
    payload,
  };
}
export function resetPasswordSuccess(payload: any) {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
    payload,
  };
}
export function resetPasswordFailure(error: any) {
  return {
    type: types.RESET_PASSWORD_FAILURE,
    error,
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
