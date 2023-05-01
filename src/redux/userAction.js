import { SignUp_User_List, User_List, LogIn_User_List } from "./constant";
export const userList =  () => {
    //let data = "hello"
  return {
    type: User_List,
    data: "vidya"
  };
};

export const userSignUp =  () => {
  //let data = "hello"
return {
  type: SignUp_User_List, 
};
};

export const userLogIn =  (data) => {

return {
  type: LogIn_User_List, 
  data
};
};


// export const setuserList = (data) => {
//   //let data = "hello"
//   console.log("set action")
// return {
//   type: SETUser_List,
//   data
// };
// };