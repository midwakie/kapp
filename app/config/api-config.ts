const ApiConfig = {
  BASE_URL: 'https://api.kutubiapp.com/server/v1/',
  BASE_URL2:
    'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/dummy/json/',
  BASE_ASSET_URL:
    'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/dummy/images/',

  // AUTHORIZATION //
  REGISTER: 'auth/register',
  LOGIN: 'auth/login',
  OTP_REQUEST: 'auth/otpRequest',
  OTP_VERIFY: 'auth/otpVerify',
  RESET_PASSWORD: 'auth/resetPassword',

  // USER //
  FETCH_USER_DETAILS: '/user/fetchUserDetails',

  //JSON//
  BOOK: 'books.json',
  My_FEEDS: 'myFeeds.json',
  CHILD_PROFILE: 'childProfile.json',
  BOOK_DETAIL: 'bookDetail.json',
};

export default ApiConfig;
