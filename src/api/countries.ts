import makeRequest from './makeRequest';

export const getCountriesToCurrencyMapping = () => {
  return makeRequest({
    url: {
      baseUrl: 'http://country.io',
      path: 'currency.json',
      useCORS: true,
    },
  });
};
