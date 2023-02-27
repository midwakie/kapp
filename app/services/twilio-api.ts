/* eslint-disable prettier/prettier */
import axios from 'axios';

export const getToken = ( username ) => {
  console.log('api identity:--------',username);
  return axios.get(`http://192.168.1.14:3001/token/${username}`).then((twilioUser) => twilioUser.data.jwt);
};
