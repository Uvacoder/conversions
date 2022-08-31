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
    <div className="container mx-auto py-4 sm:py-10 flex flex-col gap-4 max-w-[900px] px-2">
      <h1 className="sm:text-3xl text-2xl text-center text-white tracking-wider">
        Конвертация валюты
      </h1>
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
    </div>
  );
}

export default App;
