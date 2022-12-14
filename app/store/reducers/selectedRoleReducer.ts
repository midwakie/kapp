/* eslint-disable @typescript-eslint/no-unused-vars */

import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { IRole } from 'app/models/reducers/role';
import { IRoleRequestState } from 'app/models/actions/role';

const initialState: IRole = {
  role: 'guest',
};

export const selectedRoleReducer = createReducer(initialState, {
  [types.SET_SELECTED_ROLE](state: IRole, action: IRoleRequestState) {
    return { ...state, role: action.role };
  },
});
