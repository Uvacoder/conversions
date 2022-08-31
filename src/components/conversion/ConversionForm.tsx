import { formatNumber, formatNumberByCurrency } from '../../utils';
import Button from '../common/Button';
import CurrencyInput from './CurrencyInput';
import SelectCurrency from './SelectCurrency';
import SwapButton from './SwapButton';
import { ConversionFormType } from './useConversionForm';

type currencyType = { value: number; currency: string };
const ConversionForm = ({
  swapCurrencies,
  handleValueChange,
  handleCurrencyChange,
  currency: { from, to },
  onSubmit,
  options,
}: ConversionFormType) => {
  return (
    <form className="flex flex-col bg-white px-4 sm:px-10 py-8 rounded-lg items-center gap-2 shadow-lg mb-10">
      <div className="flex flex-col gap-2 md:flex-row items-stretch lg:space-between w-full mb-4">
        <div className="w-full md:max-w-[30%]">
          <InputTitle>Сумма</InputTitle>
          <CurrencyInput
            data={from}
            handleValueChange={handleValueChange}
            handleCurrencyChange={handleCurrencyChange}
            options={options}
          />
        </div>
        <div className="flex flex-col items-center xs:items-stretch xs:flex-row w-full md:max-w-[70%] gap-2">
          <div>
            <InputTitle>Из</InputTitle>
            <SelectCurrency
              value={from.currency}
              onChange={handleCurrencyChange}
              options={options}
              type="from"
            />
          </div>
          <SwapButton onSwap={swapCurrencies} />
          <div>
            <InputTitle>В</InputTitle>
            <SelectCurrency
              value={to.currency}
              onChange={handleCurrencyChange}
              options={options}
              type="to"
            />
          </div>
        </div>
      </div>
      {from.value !== 0 && to.value !== 0 ? (
        <ExchangeRatePanel from={from} to={to} options={options} />
      ) : null}
      <ExchangeRateInfoPanel />
      <Button className="ml-auto" onClick={onSubmit}>
        Конвертировать
      </Button>
    </form>
  );
};

export default ConversionForm;

const InputTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-bold mb-1 ml-2">{children}</div>;
};

const ExchangeRatePanel = ({
  from,
  to,
  options,
}: {
  from: currencyType;
  to: currencyType;
  options: ConversionFormType['options'];
}) => {
  return (
    <>
      <div className="mr-auto font-bold text-stone-500 tracking-wide">{`${formatNumberByCurrency(
        from.value,
        from.currency
      )} ${options[from.currency]} =`}</div>

      <div className="mr-auto text-xl font-bold tracking-wide">{`${formatNumberByCurrency(
        to.value,
        to.currency
      )} ${options[to.currency]}`}</div>
      <ExchangeRateCurrency left={from} right={to} />
      <ExchangeRateCurrency left={to} right={from} />
    </>
  );
};

const ExchangeRateCurrency = ({
  left,
  right,
}: {
  left: currencyType;
  right: currencyType;
}) => {
  return (
    <div className="mr-auto">{`1 ${left.currency} = ${
      left.value !== 0 && right.value !== 0
        ? formatNumber(right.value / left.value)
        : 'x'
    } ${right.currency}`}</div>
  );
};

const ExchangeRateInfoPanel = () => {
  return (
    <div className="mr-auto bg-blue-50 px-4 py-2 text-sm rounded-lg">
      Актуальный курс валют от Банка России вы можете{' '}
      <a
        className="text-blue-700"
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.cbr.ru/currency_base/daily/"
      >
        проверить здесь.
      </a>
    </div>
  );
};
