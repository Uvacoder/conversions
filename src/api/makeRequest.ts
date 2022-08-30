import axios from 'axios';

export default ({
  url = '/',
  method = 'GET',
  params,
}: {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: Object;
}) => {
  return axios({
    url: `${import.meta.env.VITE_API_URL}/${url}`,
    params,
    method,
    headers: { apikey: import.meta.env.VITE_API_KEY },
  });
};
