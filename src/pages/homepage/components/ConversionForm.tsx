import Button from '@components/common/Button';
import ErrorInfoPanel from '@components/common/InfoPanel/ErrorPanel';

import { formatNumber, formatNumberByCurrency } from '../utils';
import CurrencyInput from './CurrencyInput';
import SelectCurrency from './SelectCurrency';
import SwapButton from './SwapButton';

import useConversionForm, {
  ConversionFormType,
} from '../hooks/useConversionForm';
import BasicPanel from '@components/common/InfoPanel/BasicPanel';
import LoadingPanel from '@components/common/InfoPanel/LoadingPanel';

const ConversionForm = ({
  from,
  to,
  handleValueChange,
  handleCurrencyChange,
  error,
  currencies,
  isLoading,
  swapCurrencies,
  convertCurrencies,
  _ref,
}: conversionFormPropsType) => {
  return (
    <form className="flex flex-col bg-white px-4 sm:px-10 py-8 rounded-lg items-center gap-2 shadow-2xl mb-4">
      <div className="flex flex-col gap-2 md:flex-row items-stretch lg:space-between w-full mb-4">
        <div className="w-full md:max-w-[30%]">
          <InputTitle>Сумма</InputTitle>
          <CurrencyInput
            data={from}
            handleValueChange={handleValueChange}
            _ref={_ref}
          />
        </div>
        <div className="flex flex-col items-stretch 3xs:items-stretch 3xs:flex-row w-full md:max-w-[70%] gap-2">
          <div>
            <InputTitle>Из</InputTitle>
            <SelectCurrency
              value={from.currency}
              onChange={handleCurrencyChange}
              options={currencies}
              type="from"
            />
          </div>
          <SwapButton onSwap={swapCurrencies} />
          <div>
            <InputTitle>В</InputTitle>
            <SelectCurrency
              value={to.currency}
              onChange={handleCurrencyChange}
              options={currencies}
              type="to"
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <LoadingPanel />
      ) : from.value !== 0 && to.value !== 0 ? (
        <ExchangeRatePanel from={from} to={to} options={currencies} />
      ) : null}
      {error !== '' && (
        <ErrorInfoPanel>{`Произошла ошибка: ${error}`}</ErrorInfoPanel>
      )}
      <BasicPanel>
        Актуальный курс валют от Банка России вы можете{' '}
        <a
          className="text-blue-700"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.cbr.ru/currency_base/daily/"
        >
          проверить здесь.
        </a>
      </BasicPanel>
      <Button className="ml-auto" onClick={convertCurrencies}>
        Конвертировать
      </Button>
    </form>
  );
};

type conversionFormPropsType = ReturnType<typeof useConversionForm>;
const conversionWrapper =
  (Component: React.FC<conversionFormPropsType>) => (props: any) => {
    const formData = useConversionForm();
    return <Component {...props} {...formData} />;
  };
export default conversionWrapper(ConversionForm);

const InputTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-bold mb-1 ml-2">{children}</div>;
};

type ExchangeRatePanelType = {
  from: ConversionFormType['from'];
  to: ConversionFormType['to'];
  options: ConversionFormType['currencies'];
};
const ExchangeRatePanel = ({ from, to, options }: ExchangeRatePanelType) => {
  return (
    <>
      <div className="mr-auto font-bold text-stone-500 tracking-wide">{`${formatNumberByCurrency(
        from.value,
        from.currency
      )} ${options[from.currency].currency_name} =`}</div>
      <div className="mr-auto text-xl font-bold tracking-wide">{`${formatNumberByCurrency(
        to.value,
        to.currency
      )} ${options[to.currency].currency_name}`}</div>
      <ExchangeRateCurrency left={from} right={to} />
      <ExchangeRateCurrency left={to} right={from} />
    </>
  );
};

type ExchangeRateCurrencyType = {
  left: ConversionFormType['from'];
  right: ConversionFormType['to'];
};
const ExchangeRateCurrency = ({ left, right }: ExchangeRateCurrencyType) => {
  return (
    <div className="mr-auto">{`1 ${left.currency} = ${
      left.value !== 0 && right.value !== 0
        ? formatNumber(right.value / left.value)
        : 'x'
    } ${right.currency}`}</div>
  );
};
