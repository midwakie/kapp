/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Reducer actions related with register
 */
import * as types from './types';
import { IOtpVerifyRequestData } from 'app/models/actions/otpVerify';
import { IOtpVerifyResponse } from 'app/models/api/otpVerify';

export function verifyOtp(payload: IOtpVerifyRequestData) {
  return {
    type: types.OTP_VERIFY,
    payload,
  };
}

export function otpVerificationFailed(payload: IOtpVerifyResponse) {
  return {
    type: types.OTP_VERIFY_FAILED,
    payload,
  };
}

export function onOtpVerificationResponse(payload: IOtpVerifyResponse) {
  return {
    type: types.OTP_VERIFY_RESPONSE,
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
