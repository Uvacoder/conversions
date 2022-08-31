import axios, { AxiosPromise, AxiosRequestHeaders } from 'axios';

type RequestType = {
  url: { baseUrl: string; path: string; useCORS?: boolean };
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: Object;
  headers?: AxiosRequestHeaders;
};

export default <T>({
  url = { baseUrl: '/', path: '/', useCORS: false },
  method = 'GET',
  params,
  headers,
}: RequestType): AxiosPromise<T> => {
  return axios({
    url: `${url.useCORS ? 'https://cors.eu.org/' : ''}${url.baseUrl}/${
      url.path
    }`,
    params,
    method,
    headers,
  });
};
