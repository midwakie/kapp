/* eslint-disable @typescript-eslint/no-unused-vars */
import { callPostApi } from './client';
import ApiConfig from 'app/config/api-config';
import { IOtpRequestData } from 'app/models/actions/otpRequest';

export default async function otpRequest(payload: IOtpRequestData) {
  return callPostApi(ApiConfig.OTP_REQUEST, {}, payload);
}
