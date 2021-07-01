import { ADD_USER_DATA } from "../actions/types";

const defaultState = {
  patients: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      return { ...state, patients: action.payload };
    default:
      return defaultState;
  }
};

export default reducer;