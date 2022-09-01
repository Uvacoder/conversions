import { renderHook } from '@testing-library/react-hooks';
import useConversionForm from './useConversionForm';

const fiats = {
  RU: 'RUB',
  EN: 'USD',
};
const mockResponse = {
  data: {
    response: {
      fiats,
    },
  },
};
const mockFn = async () => await Promise.resolve(mockResponse);

jest.mock('../API/countries.ts', () => ({
  getCountriesToCurrencyMapping: async () => await Promise.resolve(fiats),
}));
jest.mock('../API/conversion.ts', () => ({
  convertFromCurrency: async () => await mockFn(),
  getCurrenciesList: async () => await mockFn(),
}));

describe('useConversionForm Hook', () => {
  it('initial state and first data fetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useConversionForm());

    await waitForNextUpdate();

    expect(result.current.currencies).toEqual(fiats);
  });
});
