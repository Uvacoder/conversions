import { useCallback, useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';

import { useDebounce } from '@hooks';
import { getCountryFromLocale } from '../utils';
import { convertFromCurrency, getCurrenciesList } from '../API';
import { getCountriesToCurrencyMapping } from '../API/countries';

export default function useConversionForm() {
  const [currencies, setCurrencies] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [fromValue, setFromValue] = useState(0);
  const debouncedValue = useDebounce(fromValue);
  const [fromCurrency, setFromCurrency] = useState('RUB');

  const [toValue, setToValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('EUR');

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Сохранить данные о стране пользователя при загрузке
    function getUserCurrencyData(data: { [i in string]: string }) {
      const locale = window.navigator.language;
      const currency = getCountryFromLocale(locale, data);
      setFromCurrency(currency);
    }
    // Хеш таблица с отображением стран на валюту
    function getUserCountryCurrency() {
      const sessionData = sessionStorage.getItem('countriesToCurrency');
      if (sessionData) {
        return getUserCurrencyData(JSON.parse(sessionData));
      }
      setIsLoading(true);
      return getCountriesToCurrencyMapping()
        .then(({ data }) => {
          sessionStorage.setItem('countriesToCurrency', JSON.stringify(data));
          getUserCurrencyData(data);
        })
        .catch((e: AxiosError) => setError(e.message))
        .finally(() => setIsLoading(false));
    }
    // Список валют
    function getCurrencies() {
      const sessionData = sessionStorage.getItem('currencies');
      if (sessionData) {
        return setCurrencies(JSON.parse(sessionData));
      }
      setIsLoading(true);
      return getCurrenciesList()
        .then(
          ({
            data: {
              response: { fiats },
            },
          }) => {
            sessionStorage.setItem('currencies', JSON.stringify(fiats));
            setCurrencies(fiats);
          }
        )
        .catch((e: AxiosError) => setError(e.message))
        .finally(() => setIsLoading(false));
    }
    ref.current?.focus();
    getUserCountryCurrency();
    getCurrencies();
  }, []);

  useEffect(() => {
    if (debouncedValue === 0 && !isLoading) return;
    convertCurrencies();
  }, [debouncedValue, toCurrency, fromCurrency]);

  const convertCurrencies = () => {
    if (fromValue === 0) return;
    setIsLoading(true);
    return convertFromCurrency({
      to: toCurrency,
      from: fromCurrency,
      amount: fromValue,
    })
      .then(({ data }) =>
        setToValue(Number.parseFloat(data.new_amount.toFixed(2)))
      )
      .catch((e: AxiosError) => setError(e.message))
      .finally(() => setIsLoading(false));
  };

  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
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
    },
    []
  );
  const handleCurrencyChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value, name } = e.target;
      if (name === 'from') {
        return setFromCurrency(value);
      }
      return setToCurrency(value);
    },
    []
  );

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
    error,
    from: { value: fromValue, currency: fromCurrency },
    to: { value: toValue, currency: toCurrency },
    isLoading,
    ref,
  };
}

export type ConversionFormType = typeof useConversionForm;
