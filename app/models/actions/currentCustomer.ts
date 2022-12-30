export interface ICurrentCustomerState {
  role: string;
  email_verified: boolean;
  mobile_verified: boolean;
}

export interface ICurrentCustomerRequestState {
  type: string;
  payload: any;
}
