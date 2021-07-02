import { getUserData } from './api';
import { STATUS_CODES } from '../utils/constants';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage
} from './storage';

class Auth {
  constructor() {
    this.authenticated = false;
    this.authKey = 'auth_token';
  }

  async login(payload) {
    const result = await getUserData(payload);

    if (result.status === STATUS_CODES.SUCCESSFUL) {
      const token = result.data?.token || '';

      setLocalStorage(this.authKey, token);
      this.authenticated = true; // move into redux
    }

    return result;
  }

  logout(callback) {
    removeLocalStorage(this.authKey);
    this.authenticated = false; // move into redux

    callback();
  }

  isAuthenticated() {
    // This should call backend service to verificate token.
    const token = getLocalStorage(this.authKey);

    return token;
  }
};

export default new Auth();