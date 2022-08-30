const SelectCurrency = ({
  value,
  onChange,
  name = 'from',
  options,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  options: { [name in string]: string };
}) => {
  return (
    <select
      value={value}
      className="absolute right-[15px] max-w-[150px] p-2 border border-stone-700 rounded-lg"
      onChange={onChange}
      name={name}
    >
      {Object.entries(options).map(([code, currency]) => (
        <option key={code} value={code}>{`${code}: ${currency}`}</option>
      ))}
    </select>
  );
};

export default SelectCurrency;
