/* eslint-disable react-hooks/rules-of-hooks */
import ApiConfig from 'app/config/api-config';
import { AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';

export const refreshAuthToken = async (): Promise<string> => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const refreshHeaders = { Authorization: `Bearer ${refreshToken}` };
    const refreshResponse = await fetch(
      ApiConfig.BASE_URL + ApiConfig.REFRESH_TOKEN,
      { headers: refreshHeaders },
    );
    const refreshData = await refreshResponse.json();
    if (refreshData.data.authToken) {
      const authToken = refreshData.data.authToken;
      if (authToken) {
        await AsyncStorage.setItem('authToken', authToken);
        return authToken;
      }
    }
    throw new Error('Unable to refresh token');
  } catch (error) {
    const dispatch = useDispatch();
    dispatch(loginActions.logOut());
    throw error;
  }
};
