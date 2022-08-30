import makeRequest from './makeRequest';

export const getCurrenciesList = () => {
  return makeRequest({ url: 'list' });
};

export const convertFromCurrency = (params: {
  to: string;
  from: string;
  amount: number;
}) => {
  return makeRequest({ url: 'convert', params });
};
