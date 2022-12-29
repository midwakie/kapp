/* eslint-disable @typescript-eslint/no-unused-vars */
/* Register Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IRegisterState } from 'app/models/reducers/register';
import {
  IRegisterRequestState,
  IRegisterResponseState,
} from 'app/models/actions/register';
const initialState: IRegisterState = {
  status: 0,
  payload: {},
};

export const registerReducer = createReducer(initialState, {
  [types.REGISTER_REQUEST](
    state: IRegisterState,
    action: IRegisterRequestState,
  ) {
    return {
      ...state,
      payload: action.payload,
    };
  },
  [types.REGISTER_LOADING_ENDED](state: IRegisterState) {
    return { ...state };
  },
  [types.REGISTER_RESPONSE](
    state: IRegisterState,
    action: IRegisterResponseState,
  ) {
    return {
      ...state,
      status: action.payload.status,
      payload: action.payload.data,
    };
  },
  [types.REGISTER_FAILED](
    state: IRegisterState,
    action: IRegisterResponseState,
  ) {
    return {
      ...state,
      status: action.payload.status,
      payload: action.payload.data,
    };
  },
});
