export const REGEX = {
  ALPHANUMERIC: /^[a-zA-Z0-9_]*$/,
  EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  AT_LEAST_ONE_NUMBER: /.*[0-9].*/,
  AT_LEAST_ONE_CAPITAL_LETTER: /(?=.*[A-Z])/
};

export const STATUS_CODES = {
  SUCCESSFUL: 200,
  UNSUCCESSFUL: 401
};

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];