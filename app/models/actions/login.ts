export interface ILoginRequestState {
  type: string;
  email: string;
}

interface IResponse {
  didToken: string;
  id: string;
  token: string;
  email: string;
  issuer: string;
  identity_id: string;
}

export interface ILoginResponseState {
  type: string;
  response: IResponse;
}
