/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { ILoading } from 'app/models/reducers/loading';

const initialState: ILoading = {
  isLoading: false,
  initialRouteName: 'Select Role',
};

export const loadingReducer = createReducer(initialState, {
  [types.ENABLE_LOADER](state: ILoading) {
    return { ...state, isLoading: true };
  },
  [types.DISABLE_LOADER](state: ILoading) {
    return { ...state, isLoading: false };
  },
  [types.CHANGE_ROUTE_NAME](state: ILoading, action: any) {
    return { ...state, initialRouteName: action.payload };
  },
});
