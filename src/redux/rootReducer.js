import { combineReducers } from "redux";
import { userData } from "./imageReducer";
import {userDataList } from './userReducer'

export default combineReducers({
  userData,
  userDataList
});
