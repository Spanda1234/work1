import { LOGIN_ERROR, LOGIN_REQUESTING, LOGIN_SUCCESS } from "../constant";

const initialState = {
  requesting: false,
  successful: false,
  user: [],
  loading: false,
  error: null,
};

export function usersReducer(state = initialState, action) {
  console.log("login reducer",action.type)
  switch (action.type) {
    case LOGIN_REQUESTING:
      return {
        requesting: true,
        successful: false,
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        successful: true,
        user: action.user,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
