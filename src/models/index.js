import * as yup from 'yup';
import { REGEX } from '../utils/constants';

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
    // .matches(/(?<=@)(.*){0,5}(?=.)/, 'more than 5 characters')
    .matches(REGEX.EMAIL, 'username must be an email address only'),
  password: yup.string()
    .required()
    .matches(REGEX.ALPHANUMERIC, 'password must be alphanumeric only')
    .min(8)
    .max(128)
    .matches(REGEX.AT_LEAST_ONE_NUMBER, 'password must have at least one number')
    .matches(REGEX.AT_LEAST_ONE_CAPITAL_LETTER, 'password must have at least one capital letter')
});