import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN_REQUESTING, LOGIN_SUCCESS } from "../constant";
import { toast } from "react-toastify";
import { setUser } from "../userDetails/Action";

const URL = `http://localhost:3500/user`;

function getApi(data) {
  let email = data.email;
  let password = data.password;
  let signinResponse = fetch(URL + `?email=${email}&password=${password}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
  console.log(signinResponse);
  return signinResponse;
}

function* fetchUsers(action) {
  let token = yield call(getApi, action?.data);
  console.log(action.data);
  console.log("login saga call", token);
  console.log("length", token.length);
  //const signinResponse = yield call(getApi, action?.data);
  // console.log(action.data);
  // console.log("login saga call", signinResponse);
  // console.log("length", signinResponse.length);
  // if (
  //   signinResponse?.length !== 0 &&
  //   signinResponse[0]?.email === action?.data?.email &&
  //   signinResponse[0]?.password === action?.data?.password
  // ) {
  //   yield put({ type: LOGIN_SUCCESS, users: signinResponse });
  //   action.navigate("/userDetails");
  // } else {
  //   toast.error("invalid email id or password");
  //   action.setHandleerror((pre) => pre + 1);
  // }

  // return signinResponse;

  if (
    token?.length !== 0 &&
    token[0]?.email === action?.data?.email &&
    token[0]?.password === action?.data?.password
  ) {
    yield put({ type: LOGIN_SUCCESS, users: setUser(token) });
    localStorage.setItem("token", JSON.stringify({ id: token[0]?.id }));
    action.navigate("/userDetails");
  } else {
    toast.error("invalid email id or password");
    action.setHandleerror((pre) => pre + 1);
  }
  return token;
}

function* userLoginSaga() {
  yield takeEvery(LOGIN_REQUESTING, fetchUsers);
}

export default userLoginSaga;
