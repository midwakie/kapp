/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Reducer actions related with login
 */
import { ICurrentCustomerState } from 'app/models/actions/currentCustomer';
import * as types from './types';

export function setCurrentCustomerRole(payload: string) {
  return {
    type: types.SET_SELECTED_ROLE,
    payload,
  };
}
export function setCurrentCustomerEmail(payload: string) {
  return {
    type: types.SET_EMAIL,
    payload,
  };
}
export function setCurrentCustomerMobileNo(payload: string) {
  return {
    type: types.SET_MOBILE_NO,
    payload,
  };
}
export function setCurrentCustomerEmailVerificationStatus(payload: boolean) {
  return {
    type: types.SET_EMAIL_VERIFIED,
    payload,
  };
}
export function setCurrentCustomerMobileVerificationStatus(payload: boolean) {
  return {
    type: types.SET_MOBILE_VERIFIED,
    payload,
  };
}
