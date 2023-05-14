import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
//import user from "../db/db.json";
//import ImageUploading from "react-images-uploading";
//import * as fs from "fs";
//import { saveAs } from 'file-saver';
//import axios from "axios";
import { postUser } from "../../redux/signup/Action";
import "./signup.css";

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
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesOrignal, setImagesOrignal] = useState([]);
  const [errorMessages, setErrorMessages] = useState("");
  const maxNumber = 5;
  let imageList;

  // this function is used to navigate from one component to another programmatically
  // userNavigate() returns a function reference
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const user1 = {
  //   name: "test",
  //   email: "test@wu.com",
  //   address: "pune",
  //   phone: 1234,
  // };

  useEffect(() => {
    //console.log("user" ,user)
    //dispatch(postUser(user));
  }, []);

  const handleGenderChange = ({ target }) => {
    setGenderData({ ...genderData, [target.name]: target.value });
  };

  // const handleChange = (imageList, addUpdateIndex) => {
  //   // data for submit
  //   console.log(imageList, addUpdateIndex);
  //   setFiles(imageList);
  // };

  const handleImageRemove = (img) => {
    console.log(img, images);
    setImages((oldState) => oldState.filter((item) => item !== img));
    images.map((im) => console.log(im.img));
    // const filterIndex = images.indexOf(img);
    // if (filterIndex > -1) {
    //   images.splice(filterIndex, 1);
    //   setImages(images.filter((img, i) => i !== img));
    // }
  };

  const onImageChange = (event, imageList, addUpdateIndex) => {
    if (event.target.files && event.target.files[0]) {
      console.log(URL.createObjectURL(event.target.files[0]));
      console.log(event.target.files[0]);
      console.log(event.target.files[0].name);
      imageList = URL.createObjectURL(event.target.files[0]);
      //imageList = `C:\\Users\\323982\\Downloads\\${event.target.files[0].name}`;
      console.log(imageList, addUpdateIndex);
      // const _images = images.push(imageList)
      setImages([...images, imageList]);
      setImagesOrignal([...imagesOrignal, event.target.files[0]]);
    }
  };

  const signuphsndle = async (e) => {
    e.preventDefault();
    console.log(email, password);
    // console.log(user.user);
    // const users = user.user;
    // console.log(users);

    // check if user has really entered any value
    if (name.length === 0) {
      setErrorMessages("please enter name");
      //toast.error("please enter name");
    } else if (address.length === 0) {
      setErrorMessages("please enter address");
      //toast.error("please enter address");
    } else if (email.length === 0) {
      setErrorMessages("please enter email");
      //toast.error("please enter email");
    } else if (password.length === 0) {
      setErrorMessages("please enter password");
      //toast.error("please enter password");
    } else if (confirmPassword.length === 0) {
      setErrorMessages("please confirm password");
      //toast.error("please confirm password");
    } else if (password !== confirmPassword) {
      setErrorMessages("password does not match");
      //toast.error("password does not match");
    } else if (dob.length === 0) {
      setErrorMessages("please enter date of birth");
      //toast.error("please enter date of birth");
    } else if (phone.length === 0) {
      setErrorMessages("please enter phone number");
      //toast.error("phone number should be 10 digit");
    } else if (id.length === 0) {
      setErrorMessages("please enter ID number");
      //toast.error("please enter ID number");
    } else if (issuedate.length === 0) {
      setErrorMessages("please enter issue date");
      //toast.error("please enter issue date");
    } else if (expdate.length === 0) {
      setErrorMessages("please enter expiry date");
      //toast.error("please enter expiry date");
    } else {
      let user = {
        //id: Date.now(),
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
        image: images,
        imagesOrignal: imagesOrignal,
      };
      dispatch(postUser(user));
      toast.success("successfully registered new user");
      // navigate to the singin page
      navigate("/login");
    }
  };

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center", marginTop: 10 }}> Signup</h1>
      </header>

      <form name="signupfrom">
        <div className="signup-wrapper" style={{ marginTop: 10 }}>
          <div
            className="signup-container"
            //style={styles.container}
          >
            <div className="mb-3" style={{ marginTop: 5 }}>
              <label>Name : </label>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="form-control"
                value={name}
                type="text"
                placeholder="Enter Your Name"
                required="required"
              />
              <span style={{ color: "red" }}>{errorMessages}</span>
              {/* {errorMessages!=''?<span>{errorMessages =''}</span>:null} */}
              {/* {errorMessages===name?<span>{}</span>:null} */}
            </div>

            <div className="mb-3">
              <label>Address : </label>
              <input
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
                className="form-control"
                type="text"
                value={address}
                placeholder="Enter Full Address"
                required="required"
              />
              <span style={{ color: "red" }}>{errorMessages}</span>
            </div>

            <div className="mb-3">
              <label>Email: </label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="form-control"
                type="email"
                value={email}
                placeholder="Enter Email"
                required="required"
              />
              <span style={{ color: "red" }}>{errorMessages}</span>
            </div>

            <div className="mb-3">
              <label>Password : </label>
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="form-control"
                value={password}
                type="password"
                placeholder="Enter Password"
                required="required"
              />
              <span style={{ color: "red" }}>{errorMessages}</span>
            </div>

            <div className="mb-3">
              <label>Confirm Password : </label>
              <input
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                className="form-control"
                type="password"
                value={confirmPassword}
                placeholder="Enter Password"
                required="required"
              />
              <span style={{ color: "red" }}>{errorMessages}</span>
            </div>

            <div className="mb-3">
              <label>Date of Birth : </label>
              <input
                onChange={(event) => {
                  setDob(event.target.value);
                }}
                className="form-control"
                type="date"
                value={dob}
                required="required"
              />
              <span style={{ color: "red" }}>{errorMessages}</span>
            </div>

            <div className="mb-3">
              <label>Phone Number : </label>
              <input
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                className="form-control"
                type="number"
                value={phone}
                placeholder="Enter Phone Number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                minlength={10}
                maxLength={10}
                required="required"
              />
              <span style={{ color: "red" }}>{errorMessages}</span>
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
                  value={id}
                  placeholder="Your vaild ID Number"
                  aria-label="Your vaild ID Number"
                  aria-describedby="basic-addon1"
                  required="required"
                />
                <span style={{ color: "red" }}>{errorMessages}</span>
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
                  value={issuedate}
                  placeholder="Your vaild ID Issue Date"
                  aria-label="Your vaild ID Issue Date"
                  aria-describedby="basic-addon1"
                  required="required"
                />
                <span style={{ color: "red" }}>{errorMessages}</span>
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
                  value={expdate}
                  placeholder="Your vaild ID Expiry Date"
                  aria-label="Your vaild ID Expiry Date"
                  aria-describedby="basic-addon1"
                  required="required"
                />
                <span style={{ color: "red" }}>{errorMessages}</span>
              </div>
            </div>

            <div className="mb-3">
              <div>
                <input
                  type="file"
                  multiple="multiple"
                  maxNumber={maxNumber}
                  onChange={onImageChange}
                  className="filetype"
                  dataURLKey="blob"
                  disabled={images?.length > 4}
                  //value={images}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {images.length > 0 &&
                    images?.map((image, index) => (
                      <div key={index} className="image-item">
                        <img
                          alt="preview image"
                          //src={image}
                          src={image}
                          maxNumber="5"
                          //alt=""
                          width="70"
                          height="50"
                          className="flex-container"
                          style={{
                            marginTop: 5,
                            marginLeft: 3,
                          }}
                        />
                        <div className="image-item__btn-wrapper">
                          {/* <div>
                              <button
                                //onClick={() => onImageUpdate(index)}
                                className="btn btn-warning"
                                style={{
                                  marginTop: 5,

                                  borderRadius: 5,
                                  width: "80%",
                                  height: 28,
                                  marginLeft: 3,
                                  fontSize: "12px",
                                }}
                              >
                                Update
                              </button>
                            </div> */}
                          <div>
                            <button
                              onClick={() => handleImageRemove(image)}
                              className="btn btn-danger"
                              style={{
                                marginTop: 5,
                                borderRadius: 5,
                                width: "80%",
                                height: 28,
                                marginLeft: 3,
                                fontSize: "11px",
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

              {/* <ImageUploading
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
                              marginLeft: 3,
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
                                  marginLeft: 3,
                                  fontSize: "12px",
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
                                  marginLeft: 3,
                                  fontSize: "11px",
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
              </ImageUploading> */}
              {/* <input
                  onChange={(e) => {
                    e.preventDefault();
                    setFiles(e.target.files)
                  }}
                  type="file"
                  class="form-control"
                  placeholder="Your vaild ID Issue Date"
                  aria-label="Your vaild ID Issue Date"
                  aria-describedby="basic-addon1"
                /> */}
              {/* <button
                      //onClick={onImageUpload}
                      className="btn btn-primary"
                      style={{
                        marginTop: 5,
                        position: "relative",
                        borderRadius: 5,
                        width: "30",
                        height: 30,
                      }}
                      //{...dragProps}
                    >
                      Upload Your ID
                    </button> */}
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
              //style={styles.submitButton}
              className="btn-signup"
              onClick={signuphsndle}
            >
              Submit
            </button>

            <div className="mb-3" style={{ marginTop: 5 }}>
              <div>
                Already have an account? <Link to="/login">Login here</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
