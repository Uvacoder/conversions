const SelectCurrency = ({
  value,
  onChange,
  type = 'from',
  options,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  type: string;
  options: { [name in string]: string };
}) => {
  return (
    <select
      value={value}
      className="w-full p-2 border border-stone-200 rounded-lg"
      onChange={onChange}
      name={type}
    >
      {Object.entries(options).map(([code, currency]) => (
        <option key={code} value={code}>{`${code} - ${currency}`}</option>
      ))}
    </select>
  );
};

export default SelectCurrency;
