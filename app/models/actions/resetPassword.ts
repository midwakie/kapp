// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IResetPasswordResponse } from '../api/resetPassword';

export interface IResetPasswordRequestState {
  type: string;
  payload: IResetPasswordRequestData;
}

export interface IResetPasswordRequestData {
  email: string;
  mobileNo?: string;
  password: string;
  roleType: string;
}

export interface IResetPasswordResponseState {
  type: string;
  payload: IResetPasswordResponse;
}
