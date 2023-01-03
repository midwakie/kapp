// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IOtpResponse } from '../api/otpRequest';

export interface IOtpRequestState {
  type: string;
  payload: IOtpRequestData;
}

export interface IOtpRequestData {
  email: string;
  mobileNo?: string;
  roleType: string;
  isResend?: boolean;
}

export interface IOtpResponseState {
  type: string;
  payload: IOtpResponse;
}
