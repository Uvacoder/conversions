import makeRequest from '@API';

export const getCountriesToCurrencyMapping = () => {
  return makeRequest<{ [i in string]: string }>({
    url: {
      baseUrl: 'http://country.io',
      path: 'currency.json',
      useCORS: true,
    },
  });
};
