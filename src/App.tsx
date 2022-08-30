import { response_test } from './api/temp';
import ConversionForm from './components/conversion/ConversionForm';
import useConversionForm from './components/conversion/useConversionForm';

const RESPONSE = response_test;

function App() {
  const {
    from,
    to,
    handleValueChange,
    handleCurrencyChange,
    swapCurrencies,
    convertCurrencies,
  } = useConversionForm();

  return (
    <div className="container mx-auto py-2 sm:py-10 flex flex-col gap-4 max-w-[900px] px-2">
      <h1 className="text-3xl">Конвертация валюты</h1>
      <div className="flex flex-col bg-stone-800 px-4 py-6 rounded-lg gap-4">
        <ConversionForm
          swapCurrencies={swapCurrencies}
          handleValueChange={handleValueChange}
          handleCurrencyChange={handleCurrencyChange}
          currency={{
            from,
            to,
          }}
          onSubmit={convertCurrencies}
          options={RESPONSE.currencies}
        />
        <div className="mx-auto">{`1 ${from.currency} = ${
          to.value !== 0 ? (to.value / from.value).toFixed(2) : 'x'
        } ${to.currency}`}</div>
      </div>
    </div>
  );
}

export default App;
