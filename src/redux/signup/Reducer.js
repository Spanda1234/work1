import { SIGNUP_USER } from "../constant";

const initialState = {
  user: {
    id: Date.now(),
    name: "",
    email: "",
    password: "",
    address: "",
    dob: "",
    phone: "",
    gender: "",
    id_no: "",
    issue_date: "",
    exp_date: "",
    image: "",
  },
  error: null,
  loading: false,
};

export const usersPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      console.log("reducer",action.type)
      return {
        ...state,
        user: action.users,
        loading: false,
        
      };

    default:
      return state;
  }
};
