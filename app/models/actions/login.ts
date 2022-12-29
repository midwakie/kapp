// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ILoginResponse } from '../api/login';

export interface ILoginRequestState {
  type: string;
  payload: ILoginRequestData;
}

export interface ILoginRequestData {
  email: string;
  mobileNo: string;
  password: string;
  roleType: string;
}

export interface ILoginResponseState {
  type: string;
  payload: ILoginResponse;
}
