import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./component/navbar";
//import Login from "./user/login";
import Login from "./user/login_redux";
import Signup from "./user/signup";
import Home from "./user/home";
import UserDetails from "./user/userDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userDetails" element={<UserDetails />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={1000} />
    </BrowserRouter>
  );
}

export default App;
