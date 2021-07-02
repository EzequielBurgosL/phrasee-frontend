import { getUserData } from "../../../services/api";
import { ADD_USER_DATA, HYDRATE_USER_DATA } from "./types";

export const addUserData = (data) => ({
  type: ADD_USER_DATA,
  payload: data
});

export const hydrateUserData = (token) => async (dispatch) => {
  const response = await getUserData(token);
  const patients = response.data?.patients || []

  dispatch({
    type: HYDRATE_USER_DATA,
    payload: patients
  });
};