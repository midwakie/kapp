/* eslint-disable @typescript-eslint/no-unused-vars */
import ApiConfig from 'app/config/api-config';
import { IResetPasswordRequestData } from 'app/models/actions/resetPassword';
import { callPutApi } from './client';

export default async function resetPassword(
  payload: IResetPasswordRequestData,
) {
  return callPutApi(ApiConfig.RESET_PASSWORD, {}, payload);
}
