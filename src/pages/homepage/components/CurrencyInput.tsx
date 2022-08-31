import { memo } from 'react';

const CurrencyInput = ({
  data: { value },
  handleValueChange,
  _ref = null,
}: {
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: { value: number; currency: string };
  _ref?: React.RefObject<HTMLInputElement> | null;
}) => {
  return (
    <input
      type="number"
      ref={_ref}
      value={value === 0 ? '' : `${value}`}
      onChange={handleValueChange}
      className="currency-input w-full md:flex-row border-stone-200
        items-center rounded-lg border appearance-none"
      placeholder="Введите валюту..."
    />
  );
};

export default memo(CurrencyInput);
