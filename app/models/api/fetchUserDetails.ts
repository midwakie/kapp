/* eslint-disable @typescript-eslint/no-unused-vars */
import ApiConfig from 'app/config/api-config';
import { Alert, AsyncStorage } from 'react-native';
import { refreshAuthToken } from './refreshToken';
import NavigationService from 'app/navigation/NavigationService';

export const fetchUserDetails = async () => {
  let authToken = await AsyncStorage.getItem('authToken');
  const headers = { Authorization: `Bearer ${authToken}` };
  let response = await fetch(ApiConfig.BASE_URL + ApiConfig.USER, { headers });
  if (response.status === 403) {
    authToken = await refreshAuthToken();
    headers.Authorization = `Bearer ${authToken}`;
    response = await fetch(ApiConfig.BASE_URL + ApiConfig.USER, {
      headers,
    });
  }
  const userDetails = await response.json();
  return userDetails;
};
