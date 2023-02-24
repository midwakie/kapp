// export action creators
import * as currentCustomerActions from './currentCustomerActions';
import * as loadingActions from './loadingActions';
import * as loginActions from './loginActions';
import * as registerActions from './registerActions';
import * as otpRequestActions from './otpRequestActions';
import * as otpVerifyActions from './otpVerifyActions';
import * as themeActions from './themeActions';
import * as cartActions from './cartActions';

export const ActionCreators = Object.assign(
  {},
  currentCustomerActions,
  loadingActions,
  loginActions,
  registerActions,
  otpRequestActions,
  otpVerifyActions,
  themeActions,
  cartActions,
);
