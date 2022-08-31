import makeRequest from './makeRequest';

const config = {
  url: {
    baseUrl: import.meta.env.VITE_CURRENCY_API_URL,
  },
};

export const getCurrenciesList = () => {
  return makeRequest({
    ...config,
    headers: { apikey: import.meta.env.VITE_CURRENCY_API_KEY },
    url: { ...config.url, path: 'list' },
  });
};

export const convertFromCurrency = (params: {
  to: string;
  from: string;
  amount: number;
}) => {
  return makeRequest({
    url: {
      baseUrl: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1',
      path: 'convertcurrency',
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_API_NINJAS_HOST,
    },
    params: { have: params.from, want: params.to, amount: params.amount },
  });
};
