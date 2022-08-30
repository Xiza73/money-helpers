export const locales = {
  PEN: 'pe-PE',
  USD: 'en-US',
  EUR: 'de-DE',
  ARS: 'es-AR',
  BRL: 'pt-BR',
  CLP: 'es-CL',
  COP: 'es-CO',
  UYU: 'es-UY',
  MXN: 'es-MX',
  PYG: 'es-PY',
  BOB: 'es-BO',
  JPY: 'ja-JP',
  VEF: 'es-VE',
  CHF: 'fr-CH',
  GBP: 'en-GB',
  AUD: 'en-AU',
  CAD: 'en-CA',
  NZD: 'en-NZ',
  HKD: 'en-HK',
  SGD: 'en-SG',
  SEK: 'sv-SE',
  DKK: 'da-DK',
  NOK: 'nb-NO',
  PLN: 'pl-PL',
  RUB: 'ru-RU',
  TRY: 'tr-TR',
  INR: 'hi-IN',
  KRW: 'ko-KR',
  TWD: 'zh-TW',
  MYR: 'ms-MY',
  THB: 'th-TH',
  IDR: 'id-ID',
  CNY: 'zh-CN',
  CZK: 'cs-CZ',
  HUF: 'hu-HU',
  ILS: 'he-IL',
  PHP: 'en-PH',
  ZAR: 'en-ZA',
};

export type Separator = ',' | '.';

export type PatterOptions = {
  lenght?: number;
  separator?: Separator;
};

export type CurrencyCode = keyof typeof locales;

export function parse(money: string, separator: Separator = ','): number {
  money = money.replace(/[^0-9,.]/g, '');
  if (separator === '.') {
    money = money.replace(/\./g, '').replace(/,/g, '.');
  } else {
    money = money.replace(/,/g, '');
  }
  return parseFloat(money)
}
export function pattern(
  value: string,
  options: PatterOptions = { lenght: 10, separator: ',' }
) {
  const { lenght, separator } = options;
  const dot = separator === ',' ? '.' : ',';
  const maxLength = lenght! + Math.ceil(lenght! / 3) - 1;

  value = value
    .replace(new RegExp(`[^0-9${dot}]`, 'g'), '') // Remove all non-numeric characters
    .replace(new RegExp(`\\${dot}{2,}`, 'g'), dot) // Replace multiple decimal points with a single decimal point
    .replace(new RegExp(`\\${dot}.*\\${dot}`, 'g'), dot) // Replace trailing decimal point with a single decimal point
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator!); // Insert commas every 3 digits
  value = value.replace(
    new RegExp(`\\${dot}\\d{3,}`, ''),
    dot + value.split(dot)[1]?.slice(0, 2)
  ); // Truncate trailing decimal to 2 digits
  if (value.length > 1 && value[1] !== dot) value = value.replace(/^0+/g, ''); // Remove leading zeros
  if (value.split(dot)[0].length > maxLength) value = value.slice(0, maxLength); // Truncate to max length
  value = value === '' ? '0' : value; // Ensure value is not empty

  return value;
}

export function format(money: number, currency: CurrencyCode = 'USD') {
  return new Intl.NumberFormat(locales[currency], {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(money)
    .toString();
}
