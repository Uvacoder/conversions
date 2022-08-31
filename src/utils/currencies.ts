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
