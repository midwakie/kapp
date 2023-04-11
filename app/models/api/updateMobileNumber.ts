/* eslint-disable @typescript-eslint/no-unused-vars */
import ApiConfig from '../../config/api-config';
import { Alert, AsyncStorage } from 'react-native';
import { refreshAuthToken } from './refreshToken';
import { QueryClient } from 'react-query';
import NavigationService from '../../navigation/NavigationService';

export const updateMobileNumber = async (
  newMobileNumber: any,
  queryClient: QueryClient,
) => {
  const authToken = await AsyncStorage.getItem('authToken');
  const headers = {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({ mobileNo: newMobileNumber });
  const response = await fetch(ApiConfig.BASE_URL + ApiConfig.USER, {
    method: 'PUT',
    headers,
    body,
  });
  const updatedUserDetails = await response.json();
  setTimeout(() => {
    Alert.alert('Kutubi', updatedUserDetails.message);
  }, 200);
  if (updatedUserDetails.status === 200) {
    Alert.alert('Kutubi', updatedUserDetails.message);
    NavigationService.navigate('AccountDetail');
    queryClient.invalidateQueries('userDetails');
  }
  return updatedUserDetails;
};
