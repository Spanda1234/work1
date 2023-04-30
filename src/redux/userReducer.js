import { SETUser_List, User_List } from "./constant";
export const userDataList = (data = [], action) => {
  switch (action.type) {
    case User_List:
    console.warn("reducer called userList", action);
    return [action.data]
    case SETUser_List:
      console.warn("reducer called userList", action);
      return [...action.data]
    default:
        return data

  }
};
