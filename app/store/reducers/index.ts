/*
 * combines all th existing reducers
 */
import * as currentCustomerReducer from './currentCustomerReducer';
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as registerReducer from './registerReducer';
import * as otpRequestReducer from './otpRequestReducer';
import * as otpVerifyReducer from './otpVerifyReducer';
import * as themeReducer from './themeReducer';
import * as cartReducer from './cartReducer';
export default Object.assign(
  currentCustomerReducer,
  loadingReducer,
  loginReducer,
  registerReducer,
  otpRequestReducer,
  otpVerifyReducer,
  themeReducer,
  cartReducer,
);
