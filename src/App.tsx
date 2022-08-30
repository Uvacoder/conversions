import { useEffect, useState } from 'react';
import { ReactComponent as SwapIcon } from './assets/swap-horizontal.svg';
import { response_test } from './api/temp.js';

const RESPONSE = response_test;

function App() {
  const [fromValue, setFromValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('RUB');

  const [toValue, setToValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('USD');

  useEffect(() => {
    console.log(window.navigator.language);
  }, [fromValue, fromCurrency, toValue, toCurrency]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    try {
      const numberValue =
        value === ''
          ? 0
          : Number.parseFloat(Number.parseFloat(value).toFixed(2));
      if (name === 'from') {
        return setFromValue(numberValue);
      }
      return setToValue(numberValue);
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
    setToValue(from.fromValue);
  };

  const onSubmit = () => {
    setToValue(fromValue);
  };

  return (
    <div className="container mx-auto py-2 sm:py-10 flex flex-col gap-4 max-w-[900px]">
      <h1 className="text-3xl">Конвертация валюты</h1>
      <div className="bg-stone-800 px-4 py-6 rounded-lg">
        <form className="flex flex-col items-center gap-4">
          <div className="flex items-center space-between w-full">
            <FormItem>
              <input
                type="number"
                name="from"
                value={`${fromValue}`}
                onChange={handleValueChange}
                className="currency-input pr-[280px]"
                placeholder="Введите валюту..."
              />
              <SelectCurrency
                value={fromCurrency}
                onChange={handleCurrencyChange}
                name="from"
              />
            </FormItem>
            <SwapButton onSwap={swapCurrencies} />
            <FormItem>
              <input
                className="currency-input"
                type="number"
                name="to"
                value={toValue}
                onChange={handleValueChange}
                placeholder="Тут будет результат..."
                disabled
              />
              <SelectCurrency
                value={toCurrency}
                onChange={handleCurrencyChange}
                name="to"
              />
            </FormItem>
          </div>
          <button
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              onSubmit();
            }}
            className="bg-emerald-600 px-4 py-2 rounded-lg text-xl"
          >
            Конвертировать
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

const SelectCurrency = ({
  value,
  onChange,
  name = 'from',
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}) => {
  useEffect(() => {
    console.log(value);
  });
  return (
    <select
      value={value}
      className="absolute right-[15px] max-w-[150px] p-2 border border-stone-700 rounded-lg"
      onChange={onChange}
      name={name}
    >
      {Object.entries(RESPONSE.currencies).map(([code, currency]) => (
        <option key={code} value={code}>{`${code}: ${currency}`}</option>
      ))}
    </select>
  );
};

const FormItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center w-full max-w-1/2 bg-black rounded-lg border border-stone-500 z-100">
      {children}
    </div>
  );
};

const SwapButton = ({ onSwap }: { onSwap: () => void }) => {
  return (
    <div
      className="bg-stone-800 border border-stone-600 p-2 rounded-lg -mx-2 z-10 cursor-pointer"
      onClick={onSwap}
    >
      <SwapIcon width={25} height={25} />
    </div>
  );
};
