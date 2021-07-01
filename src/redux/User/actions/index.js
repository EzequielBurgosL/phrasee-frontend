import { ADD_USER_DATA } from "./types";

export const addUserData = (data) => ({
  type: ADD_USER_DATA,
  payload: data,
});