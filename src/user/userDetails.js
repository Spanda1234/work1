import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; //import { signup } from "../redux/authSlice";
import user from "../db/db.json";
import login from "./login";
import Signup from "./signup";
import ImageUploading from "react-images-uploading";

const UserDetails = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [genderData, setGenderData] = useState("");
  const [id, setId] = useState("");
  const [issuedate, setIssuedate] = useState("");
  const [expdate, setExpdate] = useState("");
  const [files, setFiles] = useState("");
  const [imageList, setimageList] = useState("");

  console.log(user);
  useEffect(() => {
    userDetail();
  }, []);

  // const userImage= ()=>{
  //   {imageList.map((index) => {
  //     const imageUrl = `http://localhost:3500/user/${index.image.data_url}`
  //   })}
  //   };

  const userDetail = () => {
    const users = user.user;
    //const userid = parseInt(localStorage.getItem("userId"));
    const userid = parseInt(sessionStorage.getItem("userId"));

    for (let i = 0; i < users.length; i++) {
      // console.log(users[i].name)
      if (users[i].id === userid) {
        //console.log(users[i].name)
        setName(users[i].name);
        setAddress(users[i].address);
        setEmail(users[i].email);
        setGenderData(users[i].gender.gender);
        setDob(users[i].dob);
        setPhone(users[i].phone);
        setId(users[i].id_no);
        setIssuedate(users[i].issue_date);
        setExpdate(users[i].exp_date);
        setFiles(users[i].image);
      }
    }
  };

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center", marginTop: 10 }}> User Details</h1>
      </header>

      <div style={{ marginTop: 20 }}>
        <div style={styles.container}>
          <div style={styles.details}>
            <div style={{ marginTop: 5 }}>
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <label style={{ fontSize: "20px" }}> Name : </label>
                  </div>
                  <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                    <span>{name}</span>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <label style={{ fontSize: "20px" }}> Address : </label>
                  </div>
                  <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                    <span>{address}</span>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <label style={{ fontSize: "20px" }}> Email : </label>
                  </div>
                  <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                    <span>{email}</span>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <label style={{ fontSize: "20px" }}>Date of Birth : </label>
                  </div>
                  <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                    <span>{dob}</span>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <label style={{ fontSize: "20px" }}>Phone Number : </label>
                  </div>
                  <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                    <span>{phone}</span>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <label style={{ fontSize: "20px" }}>Gender : </label>
                  </div>
                  <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                    <span>{genderData}</span>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <label style={{ fontSize: "20px" }}>ID details :- </label>
                </div>

                <div style={{ display: "flex", marginLeft: 20 }}>
                  <div>
                    <label style={{ fontSize: "18px" }}>ID No. : </label>
                  </div>
                  <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                    <span>{id}</span>
                  </div>
                </div>

                <div style={{ display: "flex", marginLeft: 20 }}>
                  <div>
                    <label style={{ fontSize: "18px" }}>Issue Date : </label>
                  </div>
                  <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                    <span>{issuedate}</span>
                  </div>
                </div>

                <div style={{ display: "flex", marginLeft: 20 }}>
                  <div>
                    <label style={{ fontSize: "18px" }}>Expiry Date : </label>
                  </div>
                  <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                    <span>{expdate}</span>
                  </div>
                </div>

                <div style={styles.content}>
                  <div className="card col">
                    <img
                      style={{
                        height: "10vw",
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                      }}
                      src={files}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

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
    width: 600,
    height: 700,
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
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  content: {
    // marginTop: '30px',
    width: 150,
    height: 150,
    padding: 20,
    position: "relative",
    borderRadius: 10,
    // backgroundColor:'grey'
  },
  details: {
    display: "block",
    margin: "40px 50px 0px 150px",
    padding: 20,
    position: "absolute",
    textAlign: "center",
    marginTop: 20,

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

export default UserDetails;
