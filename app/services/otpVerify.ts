/* eslint-disable @typescript-eslint/no-unused-vars */
import { callPostApi } from './client';
import ApiConfig from 'app/config/api-config';
import { IOtpVerifyRequestData } from 'app/models/actions/otpVerify';

export default async function otpVerify(payload: IOtpVerifyRequestData) {
  return callPostApi(ApiConfig.OTP_VERIFY, {}, payload);
}
