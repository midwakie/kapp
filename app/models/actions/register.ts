/* eslint-disable @typescript-eslint/no-unused-vars */
import { IRegisterResponse } from '../api/register';

/**
 * Register
 */
export interface IRegisterRequestState {
  type: string;
  payload: IRegisterRequestData;
}
/**
 * Register Request Data
 */
export interface IRegisterRequestData {
  /**
   * city
   */
  city: string;
  /**
   * country
   */
  country: string;
  /**
   * email
   */
  email: string;
  firstName: string;
  lastName: string;
  /**
   * mobileNo
   */
  mobileNo: string;
  /**
   * password
   */
  password: string;
  /**
   * roleType
   */
  roleType: RoleType;
  /**
   * schoolLocation
   */
  schoolLocation: string;
  /**
   * schoolName
   */
  schoolName: string;
}

export interface IRegisterResponseState {
  status: number;
  payload: IRegisterResponse;
}

/**
 * roleType
 */
export enum RoleType {
  Parent = 'Parent',
  Student = 'Student',
  Teacher = 'Teacher',
  Guest = 'Guest',
}
