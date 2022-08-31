import { useEffect, useState } from 'react';
import { convertFromCurrency } from '../../api';
import { getCountriesToCurrencyMapping } from '../../api/countries';
import useDebounce from '../../hooks/useDebounce';

export default function useConversionForm() {
  const [currencies, setCurrencies] = useState([]);
  const [fromValue, setFromValue] = useState(0);
  const debouncedValue = useDebounce(fromValue);
  const [fromCurrency, setFromCurrency] = useState('RUB');

  const [toValue, setToValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('USD');

  useEffect(() => {
    console.log('fetching currencies list');
    getCountriesToCurrencyMapping().then(({ data }) => {
      console.log(data);
      // setCurrencies(currencies);
    });
  }, []);

  useEffect(() => {
    console.log('converting currencies - debounced');
    // convertCurrencies()
  }, [debouncedValue]);

  const convertCurrencies = () => {
    console.log('converting currencies');
    // return convertFromCurrency({
    //   to: toCurrency,
    //   from: fromCurrency,
    //   amount: fromValue,
    // }).then(({ data }) => {
    //   setToValue(Number.parseFloat(Number.parseFloat(data.result).toFixed(2)));
    // });
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
    const from = { fromValue, fromCurrency };
    setFromValue(toValue);
    setFromCurrency(toCurrency);
    setToCurrency(from.fromCurrency);
    setToValue(toValue !== 0 ? from.fromValue : 0);
  };

  return {
    handleValueChange,
    swapCurrencies,
    convertCurrencies,
    handleCurrencyChange,
    from: { value: fromValue, currency: fromCurrency },
    to: { value: toValue, currency: toCurrency },
  };
}
