import { Edit_Image, Remove_Image, Upload_Image, sign } from "./constant";

export const userData = (data = [], action) => {
  switch (action.type) {
    case Upload_Image:
    console.warn("reducer called upload_image", action);
    return [action.data, ...data]

    case Remove_Image:
      console.warn("reducer called remove_image", action);
      // data.length= data.length? data.length-1:[]
      const remainingImages= data.filter((item)=>item.id!==action.data)
      return [...remainingImages]
      
    default:
        return data

  }
};
