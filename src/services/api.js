import axios from 'axios';
import { STATUS_CODES } from '../utils/constants';

const USER_ENDPOINT = 'https://run.mocky.io/v3/3669c83a-9ba1-4424-b08f-a8ef6d699966';

export const getUser = async (payload) => {
  const response = await axios.post(USER_ENDPOINT, payload);

  if (response.status === STATUS_CODES.SUCCESSFUL) {
    return {
      data: response.data,
      message: response.statusText,
      status: response.status
    };
  } else if (response.status === STATUS_CODES.UNSUCCESSFUL) {
    return {
      data: response.data,
      message: 'user email or password is incorrect',
      status: response.status
    };
  }
};