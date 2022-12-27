/* eslint-disable @typescript-eslint/no-unused-vars */
/* Register Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IOtpState } from 'app/models/reducers/otpRequest';
import {
  IOtpRequestState,
  IOtpResponseState,
} from 'app/models/actions/otpRequest';
const initialState: IOtpState = {
  status: 0,
  payload: {},
};

export const otpRequestReducer = createReducer(initialState, {
  [types.OTP_REQUEST](state: IOtpState, action: IOtpRequestState) {
    return {
      ...state,
      payload: action.payload,
    };
  },
  [types.OTP_REQUEST_LOADING_ENDED](state: IOtpState) {
    return { ...state };
  },
  [types.OTP_REQUEST_RESPONSE](state: IOtpState, action: IOtpResponseState) {
    return {
      ...state,
      status: action.payload.status,
      payload: action.payload.data,
    };
  },
  [types.REGISTER_FAILED](state: IOtpState, action: IOtpResponseState) {
    return {
      ...state,
      status: action.payload.status,
      payload: action.payload.data,
    };
  },
});
