import { Edit_Image, Remove_Image, Upload_Image } from "./constant";

export const upload_Image = (data) => {
    console.log("action is called upload_image", data);
    return {
      type: Upload_Image,
      data: data,
    };
  };
  export const remove_Image = (data) => {
    console.log("action is called remove_image", data);
    return {
      type: Remove_Image,
      data: data,
    };
  };
