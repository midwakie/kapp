/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Reducer actions related with register
 */
import * as types from './types';
import { IOtpResponse } from 'app/models/api/otpRequest';
import { IOtpRequestData } from 'app/models/actions/otpRequest';

export function requestOtp(payload: IOtpRequestData) {
  return {
    type: types.OTP_REQUEST,
    payload,
  };
}

export function otpRequestFailed(payload: IOtpResponse) {
  return {
    type: types.OTP_REQUEST_FAILED,
    payload,
  };
}

export function onOtpRequestResponse(payload: IOtpResponse) {
  return {
    type: types.OTP_REQUEST_RESPONSE,
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
