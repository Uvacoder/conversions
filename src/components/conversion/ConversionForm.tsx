import Button from '../common/Button';
import CurrencyForm from './CurrencyForm';
import SwapButton from './SwapButton';

type currencyType = { value: number; currency: string };
const ConversionForm = ({
  swapCurrencies,
  handleValueChange,
  handleCurrencyChange,
  currency,
  onSubmit,
  options,
}: {
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: () => void;
  swapCurrencies: () => void;
  currency: {
    from: currencyType;
    to: currencyType;
  };
  options: { [name in string]: string };
}) => {
  return (
    <form className="flex flex-col items-center gap-4">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center lg:space-between w-full">
        <CurrencyForm
          data={currency.from}
          handleValueChange={handleValueChange}
          handleCurrencyChange={handleCurrencyChange}
          type="from"
          options={options}
        />
        <SwapButton onSwap={swapCurrencies} />
        <CurrencyForm
          data={currency.to}
          handleValueChange={handleValueChange}
          handleCurrencyChange={handleCurrencyChange}
          type="to"
          options={options}
        />
      </div>
      <Button onClick={onSubmit}>Конвертировать</Button>
    </form>
  );
};

export default ConversionForm;
