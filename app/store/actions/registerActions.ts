/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Reducer actions related with register
 */
import * as types from './types';
import { IRegisterResponse } from 'app/models/api/register';
import { IRegisterRequestData } from 'app/models/actions/register';

export function requestRegister(payload: IRegisterRequestData) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}

export function registerFailed(payload: IRegisterResponse) {
  return {
    type: types.REGISTER_FAILED,
    payload,
  };
}

export function onRegisterResponse(payload: IRegisterResponse) {
  return {
    type: types.REGISTER_RESPONSE,
    payload,
  };
}

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
