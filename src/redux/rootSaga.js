import { all } from "redux-saga/effects";
import userLoginSaga from "./login/saga";
//import userSaga from "./saga";
import userSignupSaga from "./signup/Saga";
import userGetSaga from "./userDetails/Saga";

export default function* rootSaga() {
  yield all([userLoginSaga(), userSignupSaga(), userGetSaga()]);
}
