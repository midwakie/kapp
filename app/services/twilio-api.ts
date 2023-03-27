/* eslint-disable prettier/prettier */
import axios from 'axios';
import ApiConfig from 'app/config/api-config';


export const getToken = ( username ) => {
  return axios.get(`${ApiConfig.BASE_URL}${ApiConfig.GET_TOKEN}?identity=${username}`).then((response) => {
    return response.data.data.jwt;
  })
  .catch((error) => {
    console.error('Error getting token:', error);
    return null;
  });
};
