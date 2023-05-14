import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
//import user from "../db/db.json";
import "./details.css";

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

  const dispatch = useDispatch();
  let data = useSelector((state) => state.usersGetReducer?.token);
  console.log("data in main component", data);

  useEffect(() => {
    userDetail();
  }, []);

  const userDetail = () => {
    //     const users = user.user;
    const userid = localStorage.getItem("token");
    //     const userid = parseInt(sessionStorage.getItem("userId"));

    //for (let i = 0; i < users.length; i++) {
    // console.log(users[i].name)
    // if (users[i].id === userid) {
    //   //console.log(users[i].name)
    //   setName(users[i].name);
    //   setAddress(users[i].address);
    //   setEmail(users[i].email);
    //   setGenderData(users[i].gender.gender);
    //   setDob(users[i].dob);
    //   setPhone(users[i].phone);
    //   setId(users[i].id_no);
    //   setIssuedate(users[i].issue_date);
    //   setExpdate(users[i].exp_date);
    //    setFiles(users[i].image);
    //   //setFiles(URL.createObjectURL(users[i].imagesOrignal));

    // }}
  };

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center", marginTop: 10 }}> User Details</h1>
      </header>

      <div className="user-wrapper" style={{ marginTop: 20 }}>
        <div
          className="user-container"
          //style={styles.container}
        >
          <div
            className="details"
            //style={styles.details}
          >
            <div>
              <div>
                <label style={{ fontSize: "20px" }}> Name : </label>
              </div>
              <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                <span>{name}</span>
              </div>
            </div>

            <div>
              <div>
                <label style={{ fontSize: "20px" }}> Address : </label>
              </div>
              <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                <span>{address}</span>
              </div>
            </div>

            <div>
              <div>
                <label style={{ fontSize: "20px" }}> Email : </label>
              </div>
              <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                <span>{email}</span>
              </div>
            </div>

            <div>
              <div>
                <label style={{ fontSize: "20px" }}>Date of Birth : </label>
              </div>
              <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                <span>{dob}</span>
              </div>
            </div>

            <div>
              <div>
                <label style={{ fontSize: "20px" }}>Phone Number : </label>
              </div>
              <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                <span>{phone}</span>
              </div>
            </div>

            <div>
              <div>
                <label style={{ fontSize: "20px" }}>Gender : </label>
              </div>
              <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                <span>{genderData}</span>
              </div>
            </div>

            <div>
              <label style={{ fontSize: "20px" }}>ID details :- </label>
            </div>

            <div style={{ marginLeft: 20 }}>
              <div>
                <label style={{ fontSize: "18px" }}>ID No. : </label>
              </div>
              <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                <span>{id}</span>
              </div>
            </div>

            <div style={{ marginLeft: 20 }}>
              <div>
                <label style={{ fontSize: "18px" }}>Issue Date : </label>
              </div>
              <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                <span>{issuedate}</span>
              </div>
            </div>

            <div style={{ marginLeft: 20 }}>
              <div>
                <label style={{ fontSize: "18px" }}>Expiry Date : </label>
              </div>
              <div style={{ marginLeft: "30px", marginTop: "5px" }}>
                <span>{expdate}</span>
              </div>
            </div>

            <div
              className="content"
              //style={styles.content}
            >
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

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
