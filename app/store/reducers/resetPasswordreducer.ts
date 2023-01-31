/* eslint-disable @typescript-eslint/no-unused-vars */
import * as types from 'app/store/actions/types';
import { IResetPasswordState } from 'app/models/reducers/resetPassword';

const initialState: IResetPasswordState = {
  payload: null,
  status: 0,
};

export default function resetPasswordReducer(
  state: IResetPasswordState = initialState,
  action: any,
) {
  switch (action.type) {
    case types.RESET_PASSWORD_REQUEST:
      return { ...state, payload: null, status: 0 };
    case types.RESET_PASSWORD_SUCCESS:
      return { ...state, payload: action.payload, status: 200 };
    case types.RESET_PASSWORD_FAILURE:
      return { ...state, payload: null, status: action.error };
    default:
      return state;
  }
}
