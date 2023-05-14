import { takeEvery, put, call } from "redux-saga/effects";
import { SIGNUP_USER } from "../constant";

const URL = `http://localhost:3500/user`;

function* postApi(userData) {
  let data = yield fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
  return data;
}

function* fetchUsers(action) {
  //user response
  const userRespose = yield call(postApi, action.data);
  // const userRespose = "1234";
  console.log(action.data);
 // yield put({ type: SIGNUP_USER, users: action.data });
  console.log(" signup saga call", userRespose);
  return userRespose;
}

export default function* userSignupSaga() {
  yield takeEvery(SIGNUP_USER, fetchUsers);
}
