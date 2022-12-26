/* eslint-disable @typescript-eslint/no-unused-vars */
import { IRegisterRequestData } from 'app/models/actions/register';
import { callPostApi } from './client';
import ApiConfig from 'app/config/api-config';

export default async function registerUser(payload: IRegisterRequestData) {
  return callPostApi(ApiConfig.REGISTER, {}, payload);
}
