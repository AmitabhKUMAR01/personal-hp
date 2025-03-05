import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { apiBaseUrl } from '@/constants';

interface FireAjaxParams {
  method: 'GET' | 'POST' | 'DELETE';
  URL: string;
  data?: Record<string, unknown>;
  header?: AxiosRequestConfig['headers'];
  token?: string;
}

export default function fireAjax({
  method,
  URL,
  data,
  header,
  token,
}: FireAjaxParams): Promise<AxiosResponse> {
  URL = apiBaseUrl + URL;

  let headers: AxiosRequestConfig['headers'] = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers = {
      ...headers,
      Authorization: `bearer ${token}`,
    };
  }

  if (header) {
    headers = header;
  }

  const config: AxiosRequestConfig = {
    headers,
  };

  switch (method) {
    case 'POST':
      return axios
        .post(URL, data, config)
        .then((res) => res)
        .catch((error) => {
          throw error;
        });
    case 'GET':
      return axios
        .get(URL, config)
        .then((res) => res)
        .catch((error) => {
          throw error;
        });
    case 'DELETE':
      return axios
        .delete(URL, config)
        .then((res) => res)
        .catch((error) => {
          throw error;
        });
    default:
      return Promise.reject(new Error('Invalid method'));
  }
}
