/* eslint-disable @typescript-eslint/no-unused-vars */
import ApiConfig from 'app/config/api-config';
import { ILoginRequestData } from 'app/models/actions/login';
import { callPostApi } from './client';

export default async function loginUser(payload: ILoginRequestData) {
  return callPostApi(ApiConfig.LOGIN, {}, payload);
}
