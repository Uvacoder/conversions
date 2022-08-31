import makeRequest from './makeRequest';

const config = {
  url: {
    baseUrl: import.meta.env.VITE_CURRENCY_API_URL,
  },
  headers: { apikey: import.meta.env.VITE_CURRENCY_API_KEY },
};

export const getCurrenciesList = () => {
  return makeRequest({ ...config, url: { ...config.url, path: 'list' } });
};

export const convertFromCurrency = (params: {
  to: string;
  from: string;
  amount: number;
}) => {
  return makeRequest({
    ...config,
    url: { ...config.url, path: 'convert' },
    params,
  });
};
