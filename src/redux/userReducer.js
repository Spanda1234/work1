import { SignUp_User_List, SETUser_List, User_List, LogIn_User_List } from "./constant";
export const userDataList = (data = [], action) => {
  switch (action.type) {
    case User_List:
    console.warn("reducer called userList", action);
    return [action.data]
    case SETUser_List:
      console.warn("reducer called userList", action);
      return [...action.data]

      case SignUp_User_List:
        console.warn("reducer called SignUp", action);
        return [...action.data]

        case LogIn_User_List:
        console.warn("reducer called SignUp", action);
        return [...action.data]

    default:
        return data

  }
};
