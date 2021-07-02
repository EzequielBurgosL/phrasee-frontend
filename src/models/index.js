import * as yup from 'yup';
import { REGEX } from '../utils/constants';
import { getDomain, getDomainName } from '../utils/helpers';

export const form = {
  inputs: [
    {
      label: 'Username',
      name: 'username',
      size: 'large',
      type: 'text'
    },
    {
      label: 'Password',
      name: 'password',
      size: 'large',
      type: 'password'
    }
  ]
};

export const formSchema = yup.object().shape({
  username: yup.string()
    .required()
    .matches(REGEX.EMAIL, 'username must be an email address only')
    .test('domain-name-length', 'Domain name is too long', function (value) {
      const domainName = getDomainName(value);

      if (domainName.length > 128) {
        return this.createError({ message: 'Domain name is too long' });
      } else {
        return value;
      }
    })
    .test('domain-length', 'Domain is too long', function (value) {
      const domain = getDomain(value);

      if (domain.length > 6) {
        return this.createError({ message: 'Domain is too long' });
      } else {
        return value;
      }
    }),
  password: yup.string()
    .required()
    .matches(REGEX.ALPHANUMERIC, 'password must be alphanumeric only')
    .min(8)
    .max(128)
    .matches(REGEX.AT_LEAST_ONE_NUMBER, 'password must have at least one number')
    .matches(REGEX.AT_LEAST_ONE_CAPITAL_LETTER, 'password must have at least one capital letter')
});