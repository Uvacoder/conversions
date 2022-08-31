export const getCountryFromLocale = (
  locale: string,
  countries: {
    [i in string]: string;
  }
): string => {
  if (window) {
    const country =
      locale.length > 2 ? locale.substring(3, 5) : locale.toUpperCase();
    return countries[country] || 'RUB';
  }
  return 'RUB';
};

export const formatNumberByCurrency = (number: number, currency: string) => {
  const outputOptions = {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };
  const numberFormat = new Intl.NumberFormat(
    window.navigator.language,
    outputOptions
  );
  return numberFormat.format(number);
};

export const formatNumber = (number: number) => {
  const outputOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  };
  const numberFormat = new Intl.NumberFormat(
    window.navigator.language,
    outputOptions
  );
  return numberFormat.format(number);
};
