import { renderHook } from '@testing-library/react-hooks';
import useConversionForm from './useConversionForm';

const fiats = {
  RU: 'USD',
  EUR: 'EU',
};
const mockFn = async () =>
  await Promise.resolve({
    data: {
      response: {
        fiats,
      },
    },
  });

jest.mock('../API/countries.ts', () => ({
  getCountriesToCurrencyMapping: async () =>
    await Promise.resolve({ RU: 'RUB', EU: 'EUR' }),
}));
jest.mock('../API/conversion.ts', () => ({
  convertFromCurrency: async () => await mockFn(),
  getCurrenciesList: async () =>
    await Promise.resolve({
      data: {
        response: {
          fiats,
        },
      },
    }),
}));

describe('useConversionForm Hook', () => {
  it('initial state and first data fetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useConversionForm());

    await waitForNextUpdate();

    expect(result.current.currencies).toEqual(fiats);
  });
});
