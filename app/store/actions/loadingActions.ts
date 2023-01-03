/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Reducer actions related with login
 */
import * as types from './types';

export function enableLoader() {
  return {
    type: types.ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.DISABLE_LOADER,
  };
}

export function changeRouteName(payload: string) {
  return {
    type: types.CHANGE_ROUTE_NAME,
    payload,
  };
}
