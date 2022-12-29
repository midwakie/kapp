export interface ILoginResponse {
  status: number;
  data: ILoginResponseData;
}
export interface ILoginResponseData {
  message: string;
  token: Token;
  user: User;
}

export interface Token {
  authToken: string;
  refreshToken: string;
}

export interface User {
  email: string;
  image: string;
  isVerified: IsVerified;
  mobileNo: number;
  name: string;
  roleType: string;
}

export interface IsVerified {
  email: boolean;
  mobileNo: boolean;
}
