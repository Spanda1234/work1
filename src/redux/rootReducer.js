import { combineReducers } from "redux";
import { usersReducer } from "./login/reducer";
import { usersPostReducer } from "./signup/Reducer";
import { usersGetReducer } from "./userDetails/Reducer";

export default combineReducers({
  usersReducer,
  usersPostReducer,
  usersGetReducer,
});
