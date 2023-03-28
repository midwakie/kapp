/* eslint-disable @typescript-eslint/no-unused-vars */
import * as types from 'app/store/actions/types';
import { IResetPasswordState } from 'app/models/reducers/resetPassword';
import createReducer from 'app/lib/createReducer';
const initialState: IResetPasswordState = {
  payload: null,
  status: 0,
};

export const resetPasswordReducer = createReducer(initialState, {
  [types.RESET_PASSWORD_REQUEST](state: IResetPasswordState) {
    return { ...state, payload: null, status: 0 };
  },
  [types.RESET_PASSWORD_SUCCESS](state: IResetPasswordState, action: any) {
    return { ...state, payload: action.payload, status: 200 };
  },
  [types.RESET_PASSWORD_FAILURE](state: IResetPasswordState, action: any) {
    return { ...state, payload: null, status: action.error };
  },
});
