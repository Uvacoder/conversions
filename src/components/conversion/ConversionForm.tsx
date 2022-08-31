import { formatNumberByCurrency } from '../../utils';
import Button from '../common/Button';
import CurrencyInput from './CurrencyInput';
import SelectCurrency from './SelectCurrency';
import SwapButton from './SwapButton';

type currencyType = { value: number; currency: string };
const ConversionForm = ({
  swapCurrencies,
  handleValueChange,
  handleCurrencyChange,
  currency: { from, to },
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
    <form className="flex flex-col bg-white px-4 sm:px-10 py-8 rounded-lg items-center gap-2 shadow-lg">
      <div className="flex flex-col gap-2 md:flex-row items-stretch lg:space-between w-full mb-4">
        <div className="w-full md:max-w-[30%]">
          <CurrencyInput
            data={from}
            handleValueChange={handleValueChange}
            handleCurrencyChange={handleCurrencyChange}
            options={options}
          />
        </div>
        <div className="flex flex-col items-center xs:items-stretch xs:flex-row w-full md:max-w-[70%] gap-2">
          <SelectCurrency
            value={from.currency}
            onChange={handleCurrencyChange}
            options={options}
            type="from"
          />
          <SwapButton onSwap={swapCurrencies} />
          <SelectCurrency
            value={to.currency}
            onChange={handleCurrencyChange}
            options={options}
            type="to"
          />
        </div>
      </div>
      {to.value > 0 ? (
        <div className="mr-auto font-bold tracking-wide">{`${formatNumberByCurrency(
          from.value,
          from.currency
        )} ${from.currency} =`}</div>
      ) : null}
      {to.value > 0 ? (
        <div className="mr-auto text-xl font-bold tracking-wide">{`${formatNumberByCurrency(
          to.value,
          to.currency
        )} ${to.currency}`}</div>
      ) : null}
      <div className="mr-auto -mb-1">{`1 ${from.currency} = ${
        to.value !== 0 && from.value !== 0 ? to.value / from.value : 'x'
      } ${to.currency}`}</div>
      <div className="mr-auto">{`1 ${to.currency} = ${
        to.value !== 0 && from.value !== 0 ? from.value / to.value : 'x'
      } ${from.currency}`}</div>
      <Button className="ml-auto" onClick={onSubmit}>
        Конвертировать
      </Button>
    </form>
  );
};

export default ConversionForm;
