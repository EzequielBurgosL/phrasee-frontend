import { monthNames } from "./constants";

export const sort = (object, prop) => {
  return object.sort((a, b) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0));
};

export const isoStringToDatetime = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const montName = monthNames[month];
  const day = date.getDate();

  return `${day} ${montName} ${year}`;
};

export const getDomainName = (emailAddress) => {
  const array = emailAddress.split('@');
  const domainName = array[1].split('.')[0] || '';

  return domainName;
}

export const getDomain = (emailAddress) => {
  const array = emailAddress.split('@');
  const domain = array[1].split('.')[1] || '';

  return domain;
}