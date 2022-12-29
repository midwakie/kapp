/* eslint-disable @typescript-eslint/no-unused-vars */
/* Register Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { IOtpVerifyState } from 'app/models/reducers/otpVerify';
import {
  IOtpVerifyRequestState,
  IOtpVerifyResponseState,
} from 'app/models/actions/otpVerify';
const initialState: IOtpVerifyState = {
  status: 0,
  payload: {},
};

export const otpVerifyReducer = createReducer(initialState, {
  [types.OTP_VERIFY](state: IOtpVerifyState, action: IOtpVerifyRequestState) {
    return {
      ...state,
      payload: action.payload,
    };
  },
  [types.OTP_VERIFY_LOADING_ENDED](state: IOtpVerifyState) {
    return { ...state };
  },
  [types.OTP_VERIFY_RESPONSE](
    state: IOtpVerifyState,
    action: IOtpVerifyResponseState,
  ) {
    return {
      ...state,
      status: action.payload.status,
      payload: action.payload.data,
    };
  },
  [types.OTP_VERIFY_FAILED](
    state: IOtpVerifyState,
    action: IOtpVerifyResponseState,
  ) {
    return {
      ...state,
      status: action.payload.status,
      payload: action.payload.data,
    };
  },
});
