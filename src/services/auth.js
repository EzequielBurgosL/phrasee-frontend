import { getUserFromDb } from "./api";
import { STATUS_CODES } from "../utils/constants";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  async login(data, callback) {
    const result = await getUserFromDb(data);

    if (result.status === STATUS_CODES.SUCCESSFUL) {
      this.authenticated = true;
      callback();
    }

    return result;
  }

  logout(callback) {
    this.authenticated = false;

    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
};

export default new Auth();