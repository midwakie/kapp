const ApiConfig = {
  BASE_URL: 'https://api.kutubiapp.com/server/v1/',

  // AUTHORIZATION //
  REGISTER: 'auth/register',
  LOGIN: 'auth/login',
  OTP_REQUEST: 'auth/otpRequest',
  OTP_VERIFY: 'auth/otpVerify',
  RESET_PASSWORD: 'auth/resetPassword',

  // USER //
  FETCH_USER_DETAILS: '/user/fetchUserDetails',
};

export default ApiConfig;
