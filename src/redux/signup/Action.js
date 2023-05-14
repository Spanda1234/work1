import { SIGNUP_USER } from "../constant";

export const postUser = (data) => {
  return {
    type: SIGNUP_USER,
    data,
    
  };
};
