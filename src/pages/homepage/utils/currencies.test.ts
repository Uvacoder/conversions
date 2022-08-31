import { formatNumberByCurrency, formatNumber, getCountryFromLocale } from './';

describe('homepage/utils/currencies', () => {
  test('formatNumber', () => {
    expect(formatNumber(123)).toEqual('123');
    expect(formatNumber(123.3129)).toEqual('123.313');
  });
  test('formatNumberByCurrency', () => {
    expect(formatNumberByCurrency(123.2344, 'RUB')).toEqual(`RUB 123.23`);
    expect(formatNumberByCurrency(123.2344, 'USD')).toEqual(`$123.23`);
  });
  test('getCountryFromLocale', () => {
    expect(getCountryFromLocale('en', { EN: 'USD' })).toEqual('USD');
    expect(getCountryFromLocale('en', { notexistent: 'USD' })).toEqual('RUB');
  });
});
