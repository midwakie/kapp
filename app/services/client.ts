import axios from 'axios';
import ApiConfig from '../config/api-config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: ApiConfig.BASE_URL,
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.log('Status ===> ' + JSON.stringify(error));
    if (error.response) {
      if (
        error.response.status === 302 ||
        error.response.status === 400 ||
        error.response.status === 422 ||
        error.response.status === 404
      ) {
        return Promise.resolve(error.response);
      } else {
        return Promise.reject(
          (error.response && error.response.data) || 'Something went wrong',
        );
      }
    } else {
      return Promise.reject('Something went wrong');
    }
  },
);

export const callGetApi = async (path: string, headers: any) => {
  const response = await axiosInstance({
    method: 'get',
    url: ApiConfig.BASE_URL + path,
    headers: {
      role: 'Customer',
      'Content-Type': 'application/json',
      ...headers,
    },
  });
  return response;
};

export const callPostApi = async (path: string, headers: any, data: any) => {
  const response = await axiosInstance({
    method: 'post',
    url: ApiConfig.BASE_URL + path,
    data,
    headers: {
      'Content-Type': 'application/json',
      role: 'Customer',
      ...headers,
    },
  });
  console.log('This is response : ' + JSON.stringify(response));
  return response;
};

export async function callPutApi(path: string, headers: any, data: any) {
  console.log(`Headers Update : ${JSON.stringify(headers)}`);
  const response = await axiosInstance({
    method: 'put',
    url: ApiConfig.BASE_URL + path,
    data,
    headers: {
      'Content-Type': 'application/json',
      role: 'Customer',
      ...headers,
    },
  });
  return response;
}
