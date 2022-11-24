export interface ILoginRequestState {
  type: String;
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
  type: String;
  response: IResponse;
}
