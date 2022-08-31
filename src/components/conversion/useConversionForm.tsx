import { useEffect, useState } from 'react';
import { convertFromCurrency, getCurrenciesList } from '../../api';
import { getCountriesToCurrencyMapping } from '../../api/countries';
import { useDebounce } from '../../hooks';
import { getCountryFromLocale } from '../../utils';

export default function useConversionForm() {
  const [currencies, setCurrencies] = useState({});
  const [fromValue, setFromValue] = useState(0);
  const debouncedValue = useDebounce(fromValue);
  const [fromCurrency, setFromCurrency] = useState('RUB');

  const [toValue, setToValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('EUR');

  useEffect(() => {
    function getUserCurrencyData(data: { [i in string]: string }) {
      const locale = window.navigator.language;
      const currency = getCountryFromLocale(locale, data);
      setFromCurrency(currency);
    }
    function getUserCountryCurrency() {
      console.log('fetching countries to currencies list');
      const sessionData = sessionStorage.getItem('countriesToCurrency');
      if (sessionData) {
        return getUserCurrencyData(JSON.parse(sessionData));
      }
      return getCountriesToCurrencyMapping().then(({ data }) => {
        sessionStorage.setItem('countriesToCurrency', JSON.stringify(data));
        getUserCurrencyData(data);
      });
    }
    function getCurrencies() {
      console.log('fetching currencies');
      const sessionData = sessionStorage.getItem('currencies');
      if (sessionData) {
        return setCurrencies(JSON.parse(sessionData));
      }
      return getCurrenciesList().then(({ data: { currencies } }) => {
        sessionStorage.setItem('currencies', JSON.stringify(currencies));
        setCurrencies(currencies);
      });
    }
    getUserCountryCurrency();
    getCurrencies();
  }, []);

  useEffect(() => {
    if (debouncedValue === 0) return;
    console.log('converting currencies - debounced');
    convertCurrencies();
  }, [debouncedValue, toCurrency, fromCurrency]);

  const convertCurrencies = () => {
    if (fromValue === 0) return;
    return convertFromCurrency({
      to: toCurrency,
      from: fromCurrency,
      amount: fromValue,
    }).then(({ data }) => {
      setToValue(Number.parseFloat(Number.parseFloat(data.result).toFixed(2)));
    });
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    try {
      const numberValue =
        value === '' || Number.isNaN(value)
          ? 0
          : Number.parseFloat(Number.parseFloat(value).toFixed(2));
      return setFromValue(numberValue);
    } catch {
      return;
    }
  };
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    if (name === 'from') {
      return setFromCurrency(value);
    }
    return setToCurrency(value);
  };

  const swapCurrencies = () => {
    const from = { fromCurrency };
    setFromCurrency(toCurrency);
    setToCurrency(from.fromCurrency);
  };

  return {
    handleValueChange,
    swapCurrencies,
    convertCurrencies,
    handleCurrencyChange,
    currencies,
    from: { value: fromValue, currency: fromCurrency },
    to: { value: toValue, currency: toCurrency },
  };
}

type currencyType = { value: number; currency: string };
export type ConversionFormType = {
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: () => void;
  swapCurrencies: () => void;
  currency: {
    from: currencyType;
    to: currencyType;
  };
  options: { [name in string]: string };
};
