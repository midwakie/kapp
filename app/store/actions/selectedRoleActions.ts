/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Reducer actions related with login
 */
import * as types from './types';

export function setSelectedRole(role: string) {
  return {
    type: types.SET_SELECTED_ROLE,
    role,
  };
}
