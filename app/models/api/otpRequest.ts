export interface IOtpResponse {
  status: number;
  data: IOtpResponseData;
}

export interface IOtpResponseData {
  message: string;
}
