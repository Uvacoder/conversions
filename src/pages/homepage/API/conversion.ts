import makeRequest from '@API';

const config = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_API_KEY,
  },
};

type CurrenciesListType = {
  response: { fiats: { [i in string]: { currency_name: string } } };
};
export const getCurrenciesList = () => {
  return makeRequest<CurrenciesListType>({
    url: {
      baseUrl: 'https://currencyscoop.p.rapidapi.com',
      path: 'currencies',
    },
    headers: {
      ...config.headers,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_API_CURRENCYSCOOP_HOST,
    },
  });
};

export const convertFromCurrency = (params: {
  to: string;
  from: string;
  amount: number;
}) => {
  return makeRequest<{ new_amount: number }>({
    url: {
      baseUrl: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1',
      path: 'convertcurrency',
    },
    headers: {
      ...config.headers,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_API_NINJAS_HOST,
    },
    params: { have: params.from, want: params.to, amount: params.amount },
  });
};
