/* eslint-disable @typescript-eslint/no-unused-vars */
import { ILoginResponse } from 'app/models/api/login';

export default async function loginUser(email: string) {
  console.log(`Request Email : ${email}`);
  const response: ILoginResponse = {
    id: 'didToken',
    issuer: '',
    email,
    token: 'json.Token',
    identity_id: 'json.IdentityId',
  };
  return response;
}
