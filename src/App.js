import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./component/navbar";
//import Login from "./user/login";
import Signup from "./user/signup/signup";
import Home from "./component/home";
import LoginRedux from "./user/login/login_redux";
import "./App.css";
import Footer from "./component/footer";
import UserDetails from "./user/userdetails/userDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/login" element={<LoginRedux />} />
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
      </div>

      <Footer />
      <ToastContainer position="top-center" autoClose={1000} />
    </BrowserRouter>
  );
}

export default App;
