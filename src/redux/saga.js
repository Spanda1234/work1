import { takeEvery, put } from "redux-saga/effects";
import {
  SETUser_List,
  User_List,
  SignUp_User_List,
  LogIn_User_List,
  Details_User_List,
} from "./constant";
import axios from "axios";
import { toast } from "react-toastify";

const URL = `http://localhost:3500/user`





// function* getUsers() {
//   let data = yield fetch("http://localhost:3500/user");
//   data = yield data.json();
//   //console.log("api is called", data);
//   yield put({
//     type: SETUser_List,
//     data,
//   });

//   //console.log("call api here")
// }

function* postUsers(action) {
  axios
    .post("http://localhost:3500/user", {
      id: action?.user?.id,
      name: action?.user?.name,
      email: action?.user?.email,
      password: action?.user?.password,
      address: action?.user?.address,
      dob: action?.user?.dob,
      phone: action?.user?.phone,
      gender: action?.user?.gender,
      id_no: action?.user?.id_no,
      issue_date: action?.user?.issue_date,
      exp_date: action?.user?.exp_date,
      image: action?.user?.image,
      imagesOrignal: action?.user?.imagesOrignal,
    })
    .then((response) => {
      const user1 = response.data;
      console.log(user1);
    })
    .catch((err) => {
      console.log(err);
    });
  //let user = yield user.json();
}

function* postLoginUsers(action) {
  axios
    .get("http://localhost:3500/user", {
      // id: action.user.id,
      email: action?.user?.email,
      password: action?.user?.password,
    })
    .then((response) => {
      const user1 = response.data;
      let isValid = false;
      console.log(user1);
      console.log(action?.user?.email, action?.user?.password);

      
      isValid = true;
      // for (let i = 0; i < user1.length; i++) {
      //   if (
      //     user1[i].email === action.user.email &&
      //     user1[i].password === action.user.password
      //   ) {
      //     // console.log(email, password);
      //     //setSuccess(true);
      //     //localStorage.setItem("userId", user1[i].id);
      //     sessionStorage.setItem("userId", user1[i].id);
      //     isValid = true;
      //     //   toast.success("welcome to wulife");
      //     // navigate("/userDetails");
      //     break;
      //   }
      // }
      // if (isValid) {
      //   toast.success("welcome to wulife");
      //   action?.navigate("/userDetails");
      // } else {
      //   toast.error("invalid email id or password");
      //   action?.sethandleerror((pre) => pre + 1);
      // }
    })
    .catch((err) => {
      console.log(err);
    });
  //let user = yield user.json();
}


//userDetails saga
function* getUsers(action) {
  axios
    .get("http://localhost:3500/user", {
      
      name: action?.user?.name,
      email: action?.user?.email,
      password: action?.user?.password,
      address: action?.user?.address,
      dob: action?.user?.dob,
      phone: action?.user?.phone,
      gender: action?.user?.gender,
      id_no: action?.user?.id_no,
      issue_date: action?.user?.issue_date,
      exp_date: action?.user?.exp_date,
      image: action?.user?.image,
      imagesOrignal: action?.user?.imagesOrignal,
    })
    .then((response) => {
      const user1 = response.data;
      console.log(user1);
    })
    .catch((err) => {
      console.log(err);
    });
  let user = yield user.json();
}

function* userSaga() {
  //yield takeEvery(User_List, getUsers);
  yield takeEvery(SignUp_User_List, postUsers);
  yield takeEvery(LogIn_User_List, postLoginUsers);
  yield takeEvery(Details_User_List, getUsers);
}

export default userSaga;
