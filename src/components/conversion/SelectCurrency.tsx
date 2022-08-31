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
      className="md:absolute md:right-[15px] mt-1 mb-3 md:my-0 w-full max-w-[250px]
      md:max-w-[150px] p-2 border border-stone-200 rounded-lg"
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
