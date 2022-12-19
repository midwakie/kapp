import axios from 'axios';
import ApiConfig from '../config/api-config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: ApiConfig.BASE_URL,
});

axiosInstance.interceptors.response.use(
  response => response,
  error =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    ),
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
  return response.data;
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

  return response.data;
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
  return response.data;
}
