import { USER_SET, USER_UNSET } from "../constant";

const initialState = {
  id: null,
  token: null,
};

export const usersGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      console.log("user tokenset reducer", action.type);
      return {
        id: action.token.id,
        token: action.token,
        ...state
      };

    case USER_UNSET:
      console.log("user tokenunset reducer", action.type);
      return {
        id: null,
        token: null,
      };

    default:
      return state;
  }
};
