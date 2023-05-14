import { LOGIN_REQUESTING } from "../constant";

export const getUser = (data, navigate, setHandleerror) => {
  return {
    type: LOGIN_REQUESTING,
    data,
    navigate,
    setHandleerror,
  };
};
