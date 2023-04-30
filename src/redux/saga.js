import { takeEvery, put } from "redux-saga/effects";
import { SETUser_List, User_List, SignUp_User_List } from "./constant";
import axios from "axios";

function* getUsers() {
  let data = yield fetch("http://localhost:3500/user");
  data = yield data.json();
  //console.log("api is called", data);
  yield put({
    type: SETUser_List,
    data,
  });

  //console.log("call api here")
}

function* postUsers(action) {
  
  axios
    .post("http://localhost:3500/user", {
      id: action.user.id,
      name: action.user.name,
      email: action.user.email,
      password: action.user.password,
      address: action.user.address,
      dob: action.user.dob,
      phone: action.user.phone,
      gender: action.user.gender,
      id_no: action.user.id_no,
      issue_date: action.user.issue_date,
      exp_date: action.user.exp_date,
      image: action.user.image,
    })
    .then((response) => {
      const user1 = response.data;
      console.log(user1);
    })
    .catch((err) => {
      console.log(err);
    });
}

function* postLoginUsers(action) {
  
    axios
      .post("http://localhost:3500/user", {
        id: action.user.id,
       
        email: action.user.email,
        password: action.user.password,
        
      })
      .then((response) => {
        const user1 = response.data;
        console.log(user1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

// function* testUser(){
//     console.log("call api here")
// }



function* userSaga() {
  yield takeEvery(User_List, getUsers);
  yield takeEvery(SignUp_User_List, postUsers);
}

export default userSaga;
