import { takeEvery, put, call } from "redux-saga/effects";
import { SIGNUP_USER, USER_SET } from "../constant";

const URL = `http://localhost:3500/user`;

function* postApi() {
  let data = yield fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
  return data;
}

function* fetchUsers(action) {
  //user response
  const userRespose = yield call(postApi, action.token);
  // const userRespose = "1234";
  console.log(action.token);
 // yield put({ type: SIGNUP_USER, users: action.data });
  console.log(" signup saga call", userRespose);
  return userRespose;
}

export default function* userGetSaga() {
  yield takeEvery(USER_SET, fetchUsers);
}
