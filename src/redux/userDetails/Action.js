import { USER_SET, USER_UNSET } from "../constant";

export const setUser = (token) => {
  return {
    type: USER_SET,
    token,
  };
};

export const unsetUser = () => {
  return {
    type: USER_UNSET,
  };
};
