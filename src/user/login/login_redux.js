import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
//import user from "../db/db.json";
import { getUser } from "../../redux/login/Action";
import "./login.css";

const LoginRedux = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [handleerror, setHandleerror] = useState(0);
  const [success, setSuccess] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // let users = useSelector((state) => state?.usersReducer?.user);
  // console.log("USER", users);

  useEffect(() => {
    //dispatch(getUser(data));
  }, []);

  const signinHandle = (event) => {
    event.preventDefault();

    let isValid = false;

    // users?.forEach((user) => {
    //   if (email.length !== 0 && password.length !== 0) {
    //     if (user.email === email && user.password === password) {
    //       console.log("users", users);
    //       navigate("/userDetails", { state: { data: users } });
    //       toast.success("welcome to wulife");
    //     }
    //   }
    // });
    // toast.error("Invalid credentials");

    // check if user has really entered any value
    if (email.length === 0) {
      setErrorMessages("Please enter email");
    } else if (password.length === 0) {
      setErrorMessages("Please enter password");
    } else {
      let user = {
        email: email,
        password: password,
      };
      dispatch(getUser(user, navigate, setHandleerror));
      // navigate("/userDetails");
      // if (user.email === email && user.password === password) {
      //   console.log("user", user);
      //   isValid = true;
      //   //break;
      // }

      // if (isValid) {
      //   toast.success("welcome to wulife");
      //   navigate("/userDetails");
      // } else {
      //   toast.error("invalid email id or password");
      //   setHandleerror((pre) => pre + 1);
      // }
      console.log(handleerror);
      console.log(email, password);
    }
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center", marginTop: 30 }}> Login </h1>
      </header>

      <form name="loginfrom">
        <div className="login-wrapper" style={{ marginTop: 10 }}>
          <div
            className="login-container"
            //style={styles.container}
          >
            <div className="mb-3">
              <label> Username : </label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="form-control"
                type="text"
                value={email}
                placeholder="Enter Username"
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
                type="password"
                value={password}
                placeholder="Enter Password"
                required="required"
              />
              <span style={{ color: "red" }}>{errorMessages}</span>
            </div>

            {handleerror > 2 ? (
              <ReCAPTCHA
                sitekey="6LcDYb4lAAAAABHaIbKU0T4LWT9--SSPSfHTsqwZ"
                onChange={onChange}
              />
            ) : null}

            <div style={{ marginTop: 20 }}>
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
            </div>

            <button
              //style={styles.loginButton}
              className="btn-login"
              onClick={signinHandle}
            >
              Login
            </button>

            <div className="mb-3" style={{ marginTop: 5 }}>
              <div>
                Dont have an account? <Link to="/signup">Signup here</Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginRedux;
