const CurrencyInput = ({
  data: { value },
  handleValueChange,
}: {
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: { value: number; currency: string };
  options: { [name in string]: string };
}) => {
  return (
    <input
      type="number"
      value={value === 0 ? '' : `${value}`}
      onChange={handleValueChange}
      className="currency-input w-full md:flex-row border-stone-200
        items-center rounded-lg border"
      placeholder="Введите валюту..."
    />
  );
};

export default CurrencyInput;
