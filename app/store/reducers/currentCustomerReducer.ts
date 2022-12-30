/* eslint-disable @typescript-eslint/no-unused-vars */

import createReducer from 'app/lib/createReducer';
import {
  ICurrentCustomerRequestState,
  ICurrentCustomerState,
} from 'app/models/actions/currentCustomer';
import { ICurrentCustomer } from 'app/models/reducers/currentCustomer';
import * as types from 'app/store/actions/types';

const initialState: ICurrentCustomer = {
  role: 'guest',
  email: '',
  mobileNo: '',
  email_verified: false,
  mobile_verified: false,
};

export const currentCustomerReducer = createReducer(initialState, {
  [types.SET_SELECTED_ROLE](
    state: ICurrentCustomer,
    action: ICurrentCustomerRequestState,
  ) {
    return { ...state, role: action.payload };
  },
  [types.SET_EMAIL](
    state: ICurrentCustomer,
    action: ICurrentCustomerRequestState,
  ) {
    return { ...state, email: action.payload };
  },
  [types.SET_MOBILE_NO](
    state: ICurrentCustomer,
    action: ICurrentCustomerRequestState,
  ) {
    return { ...state, mobileNo: action.payload };
  },
  [types.SET_EMAIL_VERIFIED](
    state: ICurrentCustomer,
    action: ICurrentCustomerRequestState,
  ) {
    return { ...state, email_verified: action.payload };
  },
  [types.SET_MOBILE_VERIFIED](
    state: ICurrentCustomer,
    action: ICurrentCustomerRequestState,
  ) {
    return { ...state, mobile_verified: action.payload };
  },
});
