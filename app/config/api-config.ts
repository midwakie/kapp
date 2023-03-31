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
  REFRESH_TOKEN: 'auth/refreshToken',

  // USER //
  FETCH_USER_DETAILS: 'user/',
  UPDATE_MOBILE: 'user/updateMobile',

  //JSON//
  BOOK: 'books.json',
  My_FEEDS: 'myFeeds.json',
  CHILD_PROFILE: 'childProfile.json',
  BOOK_DETAIL: 'bookDetail.json',
  SHOP: 'shop.json',
  MY_CHANNEL: 'myChannel.json',
  // TWILIO //
  GET_TOKEN: '/chat/token',
};

export default ApiConfig;
