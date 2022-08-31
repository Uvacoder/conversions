import axios, { AxiosRequestHeaders } from 'axios';

export default ({
  url = { baseUrl: '/', path: '/', useCORS: false },
  method = 'GET',
  params,
  headers,
}: {
  url: { baseUrl: string; path: string; useCORS?: boolean };
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: Object;
  headers?: AxiosRequestHeaders;
}) => {
  return axios({
    url: `${url.useCORS ? 'https://cors.eu.org/' : ''}${url.baseUrl}/${
      url.path
    }`,
    params,
    method,
    headers,
  });
};
