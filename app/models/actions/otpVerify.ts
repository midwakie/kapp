// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IOtpVerifyResponse } from '../api/otpVerify';

export interface IOtpVerifyRequestState {
  type: string;
  payload: IOtpVerifyRequestData;
}

export interface IOtpVerifyRequestData {
  email: string;
  mobileNo?: string;
  roleType: string;
  otp: string;
}

export interface IOtpVerifyResponseState {
  type: string;
  payload: IOtpVerifyResponse;
}
