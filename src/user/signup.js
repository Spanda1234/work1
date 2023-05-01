import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp, upload_Image } from "../redux/imageAction";
import user from "../db/db.json";
import ImageUploading from "react-images-uploading";
import * as fs from "fs";
// import { saveAs } from 'file-saver';
import axios from "axios";
import { User_List } from "../redux/constant";
import { userList, userSignUp } from "../redux/userAction";
// import {writeJsonFile} from 'write-json-file';
//import fs from 'fs';
// const fs = require('fs')

const Signup = () => {
  // get user inputs
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [genderData, setGenderData] = useState("");
  const [id, setId] = useState("");
  const [issuedate, setIssuedate] = useState("");
  const [expdate, setExpdate] = useState("");
  const [files, setFiles] = useState("");
  const maxNumber = 5;

  // this function is used to navigate from one component to another programmatically
  // userNavigate() returns a function reference
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const result = useSelector((state) => state.userData);
  // console.log("redux data for upload image", result);

  // const user1 = {
  //   name: "test",
  //   email: "test@wu.com",
  //   address: "pune",
  //   phone: 1234,
  // };

  const handleGenderChange = ({ target }) => {
    setGenderData({ ...genderData, [target.name]: target.value });
  };

  //const handleChange = (event) => {};

  const handleChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setFiles(imageList);
  };

  // function handleUpload() {
  //   console.log("start")
  //   console.log(files)

  //   //fs.writeFileSync('../db/img',files,(err)=>{console.log(err)})
  //   const ImageData = new FormData();
  //   if (files.length <= 5) {
  //     for (let i = 0; i < files.length; i++) {
  //       ImageData.set("images", files);
  //     }
  //   } else if (files.length > 5) {
  //     console.log("only 5 image will be upload");
  //   } else {
  //     axios
  //       .post(`http://localhost:3500/user/${id}`, {
  //         files,
  //       })
  //       .then((Response) => {
  //         const result = Response.data;
  //       })
  //       .catch((error) => {
  //         console.log("error");
  //       });
  //   }
  //   console.log(files);
  // }

  const signuphsndle = async () => {
    console.log(email, password);
    console.log(user.user);
    const users = user.user;
    console.log(users);

    // check if user has really entered any value
    if (name.length === 0) {
      toast.error("please enter name");
    } else if (address.length === 0) {
      toast.error("please enter address");
    } else if (email.length === 0) {
      toast.error("please enter email");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else if (confirmPassword.length === 0) {
      toast.error("please confirm password");
    } else if (password !== confirmPassword) {
      toast.error("password does not match");
    } else if (dob.length == 0) {
      toast.error("please enter date of birth");
    } else if (phone.length >= 10) {
      toast.error("phone number should be 10 digit");
    } else if (id.length === 0) {
      toast.error("please enter ID number");
    } else if (issuedate.length === 0) {
      toast.error("please enter issue date");
    } else if (expdate.length === 0) {
      toast.error("please enter expiry date");
    } else {
      dispatch({
        type: "SignUp_User_List",
        user: {
          id: Date.now(),
          name: name,
          email: email,
          password: password,
          address: address,
          dob: dob,
          phone: phone,
          gender: genderData,
          id_no: id,
          issue_date: issuedate,
          exp_date: expdate,
          image: files,
        },
      });
      toast.success("successfully registered new user");
      // navigate to the singin page
      navigate("/");
      
    }

    //  //writeJsonFile('../db/db.json', users);

    // Write data in 'Output.txt' .
    // fs.writeFile('./db/db.json', users, (err) => {

    //     // In case of a error throw err.
    //     if (err) throw err;
    // })
    var file = new File([users], "../db/db.json");
    //saveAs("../db/db.json");

    // await fs.writeFileSync('../db/db.json', JSON.stringify(users), (err) => {
    //   if (err) console.log('Error writing file:', err);})
  };

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center", marginTop: 10 }}> Signup</h1>
      </header>

      <form name="signupfrom">
        <div style={{ marginTop: 10 }}>
          <div style={styles.container}>
            <div className="mb-3" style={{ marginTop: 5 }}>
              <label>Name : </label>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="form-control"
                type="text"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="mb-3">
              <label>Address : </label>
              <input
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
                className="form-control"
                type="text"
                placeholder="Enter Full Address"
                required
              />
            </div>

            <div className="mb-3">
              <label>Email: </label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="form-control"
                type="email"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="mb-3">
              <label>Password : </label>
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="form-control"
                type="password"
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="mb-3">
              <label>Confirm Password : </label>
              <input
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                className="form-control"
                type="password"
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="mb-3">
              <label>Date of Birth : </label>
              <input
                onChange={(event) => {
                  setDob(event.target.value);
                }}
                className="form-control"
                type="date"
              />
            </div>

            <div className="mb-3">
              <label>Phone Number : </label>
              <input
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                className="form-control"
                type="number"
                placeholder="Enter Phone Number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>

            <div className="mb-3">
              <label for="gender"> Gender : </label>
              <input
                style={{ marginRight: 5 }}
                type="radio"
                id="defaultRadio"
                name="gender"
                value="Male"
                checked={genderData.gender === "Male"}
                onChange={handleGenderChange}
              />
              Male
              <input
                style={{ marginRight: 5 }}
                type="radio"
                id="defaultRadio"
                name="gender"
                value="Female"
                checked={genderData.gender === "Female"}
                onChange={handleGenderChange}
              />
              Female
              <br />
            </div>

            <div className="mb-3">
              <label>ID details : </label>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  ID No.
                </span>
                <input
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Your vaild ID Number"
                  aria-label="Your vaild ID Number"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Issue Date
                </span>
                <input
                  onChange={(event) => {
                    setIssuedate(event.target.value);
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Your vaild ID Issue Date"
                  aria-label="Your vaild ID Issue Date"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Expiry Date
                </span>
                <input
                  onChange={(event) => {
                    setExpdate(event.target.value);
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Your vaild ID Expiry Date"
                  aria-label="Your vaild ID Expiry Date"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="mb-3">
              <ImageUploading
                multiple
                value={files}
                onChange={handleChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <button
                      onClick={onImageUpload}
                      className="btn btn-primary"
                      style={{
                        marginTop: 5,
                        position: "relative",
                        borderRadius: 5,
                        width: "30",
                        height: 30,
                      }}
                      {...dragProps}
                    >
                      Upload Your ID
                    </button>
                    &nbsp;
                    <button
                      onClick={onImageRemoveAll}
                      className="btn btn-danger"
                      style={{
                        marginTop: 5,
                        position: "relative",
                        borderRadius: 5,
                        width: "30",
                        height: 30,
                      }}
                    >
                      Remove all
                    </button>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img
                            src={image["data_url"]}
                            alt=""
                            width="70"
                            className="flex-container"
                            style={{
                              marginTop: 5,
                              marginLeft:3
                              
                            }}
                          />
                          

                          <div className="image-item__btn-wrapper">
                            <div>
                              <button
                                onClick={() => onImageUpdate(index)}
                                className="btn btn-warning"
                                style={{
                                  marginTop: 5,

                                  borderRadius: 5,
                                  width: "80%",
                                  height: 28,
                                  marginLeft:3,
                                  fontSize:"12px"
                                }}
                              >
                                Update
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={() => onImageRemove(index)}
                                className="btn btn-danger"
                                style={{
                                  marginTop: 5,
                                  borderRadius: 5,
                                  width: "80%",
                                  height: 28,
                                  marginLeft:3,
                                  fontSize:"11px"
                                   
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ImageUploading>
            </div>

            {/* <div className="mb-3">
              <input
                className="form-control"
                type="file"
                multiple
                onChange={(event) => {
                  setFiles(event.target.files[0]);
                }}
              />
              <button
                onClick={handleUpload}
                // () => dispatch(upload_Image(handleUpload))
                className="btn btn-primary"
                title="Upload_image"
                style={{
                  marginTop: 5,
                  position: "relative",
                  borderRadius: 5,
                  width: "30",
                  height: 30,
                }}
              >
                Upload Your ID
              </button>
            </div> */}

            <button
              style={styles.submitButton}
              className="btn btn"
              onClick={signuphsndle}
            >
              {/* {signuphsndle} */}
              Submit
            </button>

            {/* <button
              style={styles.submitButton}
              className="btn btn"
              onClick={() => dispatch(userList())}
            >
              UserList
            </button> */}

            <div className="mb-3" style={{ marginTop: 5 }}>
              <div>
                Already have an account? <Link to="/">Login here</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
      <footer>
        &copy;2023 Western Union Holdings,
        <br />
        Inc. All Rights Reserved
      </footer>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    height: 1050,
    padding: 10,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9"
  },
  submitButton: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#000",
    color: "yellow",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};

export default Signup;
