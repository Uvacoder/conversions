import SelectCurrency from './SelectCurrency';

const CurrencyForm = ({
  data: { value, currency },
  handleValueChange,
  handleCurrencyChange,
  type = 'from',
  options,
}: {
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: { value: number; currency: string };
  type: 'from' | 'to';
  options: { [name in string]: string };
}) => {
  const isFromCurrency = type === 'from';
  return (
    <FormItem>
      <div className="text-stone-300 px-3 py-1 text-xl">
        {isFromCurrency ? 'Из' : 'В'}
      </div>
      <div
        className="flex flex-col md:flex-row 
      items-center bg-black rounded-lg border border-stone-500 z-100 relative"
      >
        <input
          type="number"
          name={type}
          value={isFromCurrency ? `${value}` : value === 0 ? '' : value}
          onChange={handleValueChange}
          className="currency-input pr-[280px]"
          placeholder={
            isFromCurrency ? 'Введите валюту...' : 'Тут будет результат...'
          }
          disabled={!isFromCurrency}
        />
        <SelectCurrency
          value={currency}
          onChange={handleCurrencyChange}
          name={type}
          options={options}
        />
      </div>
    </FormItem>
  );
};

const FormItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col w-full max-w-1/2 ">{children}</div>;
};

export default CurrencyForm;
