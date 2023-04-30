import { SETUser_List, User_List } from "./constant";
export const userList =  () => {
    //let data = "hello"
  return {
    type: User_List,
    data: "vidya"
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