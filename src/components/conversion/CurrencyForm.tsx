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
      <input
        type="number"
        name={type}
        value={value === 0 ? '' : `${value}`}
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
    </FormItem>
  );
};

const FormItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-col w-full max-w-1/2 md:flex-row border-stone-300
     items-center rounded-lg border z-100 relative"
    >
      {children}
    </div>
  );
};

export default CurrencyForm;
