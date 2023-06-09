const ApiConfig = {
  BASE_URL: 'https://api.kutubiapp.com/server/v1/',
  // BASE_URL2:
  //   'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/dummy/json/',
  // BASE_ASSET_URL:
  //   'https://s3.ap-south-1.amazonaws.com/cdn.kutubiapp.com/mobile/dummy/images/',

  BASE_URL2: 'http://192.168.1.13:3000/data/',
  BASE_ASSET_URL: 'http://192.168.1.13:3000/images/',

  // AUTHORIZATION //
  REGISTER: 'auth/register',
  LOGIN: 'auth/login',
  OTP_REQUEST: 'auth/otpRequest',
  OTP_VERIFY: 'auth/otpVerify',
  RESET_PASSWORD: 'auth/resetPassword',
  REFRESH_TOKEN: 'auth/refreshToken',

  // USER //
  USER: 'user/',

  //JSON//
  BOOK: 'books.json',
  My_FEEDS: 'myFeeds.json',
  CHILD_PROFILE: 'childProfile.json',
  BOOK_DETAIL: 'bookDetail.json',
  SHOP: 'shop.json',
  MY_CHANNEL: 'myChannel.json',
  CHANNELS: 'channels.json',
  PARENT: 'parentProfile.json',
  TEACHER_PROFILE: 'teacherProfile.json',
  // TWILIO //
  GET_TOKEN: '/chat/token',
};

export default ApiConfig;
