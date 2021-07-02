import { monthNames } from "./constants";

export const sortArrayOfObjects = (object = {}, prop = '') => {
  if (!object || typeof object !== 'object') {
    throw new Error('param object must be of type object');
  } else if (!prop || typeof prop !== 'string') {
    throw new Error('param prop must be of type string');
  }

  return object.sort(
    (a, b) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0)
  );
};

export const isoStringToDatetime = (isoString = '') => {
  if (!isoString || typeof isoString !== 'string') {
    throw new Error('param isoString must be of type string');
  }

  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const montName = monthNames[month];
  const day = date.getDate();

  return `${day} ${montName} ${year}`;
};

export const getDomainName = (emailAddress) => {
  if (!emailAddress || typeof emailAddress !== 'string') {
    throw new Error('param emailAddress must be of type string');
  }

  const array = emailAddress.split('@');
  const domainName = array[1].split('.')[0] || '';

  return domainName;
}

export const getDomain = (emailAddress) => {
  if (!emailAddress || typeof emailAddress !== 'string') {
    throw new Error('param emailAddress must be of type string');
  }

  const array = emailAddress.split('@');
  const domain = array[1].split('.')[1] || '';

  return domain;
}