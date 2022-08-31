import ConversionForm from './components/conversion/ConversionForm';
import useConversionForm from './components/conversion/useConversionForm';

function App() {
  const {
    from,
    to,
    currencies,
    handleValueChange,
    handleCurrencyChange,
    swapCurrencies,
    convertCurrencies,
  } = useConversionForm();

  return (
    <div className="flex flex-col h-full min-h-screen">
      <div className="container mx-auto pt-4 xs:pt-10 flex flex-col gap-4 max-w-[900px] px-2">
        <h1 className="xs:text-3xl text-2xl text-center text-white">
          Конвертация валюты
        </h1>
        <div className="text-center text-stone-200">
          Тестовое задание для Digital Security
        </div>
        <ConversionForm
          swapCurrencies={swapCurrencies}
          handleValueChange={handleValueChange}
          handleCurrencyChange={handleCurrencyChange}
          currency={{
            from,
            to,
          }}
          onSubmit={convertCurrencies}
          options={currencies}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

const Footer = () => {
  return (
    <footer className="mt-auto bg-white px-4 py-2 shadow-lg">
      <div className="container flex flex-col gap-2 items-start mx-auto max-w-[900px] ">
        <div className="text-stone-700">Илья Судаков - @ilyasudakov</div>
        <div className="flex gap-4 text-blue-700 underline text-center">
          <a href="https://github.com/ilyasudakov">Github↗️</a>
          <a href="https://ilyasudakov.vercel.app">Портфолио↗️</a>
        </div>
      </div>
    </footer>
  );
};
