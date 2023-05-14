import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
//import Signup from "../user/signup/signup";
import "./component.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container-fullwidth bg-dark fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand-color">
          <h2>Western Union</h2>
        </div>
        {/* <a class="navbar-brand" href="#">Western Union</a> */}
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        {/* <div id="navbarNavAltMarkup"> */}
        <div className="navbar-nav">
          <div class="dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-list"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "#ffff00" }}
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>

            {/* <i class="dropdown-toggle bi bi-list" 
  type="button" data-bs-toggle="dropdown" aria-expanded="false">
  </i> */}

            <ul class="dropdown-menu dropdown-menu-lg-end">
              <li>
                <Link to="/signup" class="dropdown-item">
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login" class="dropdown-item">
                  Login
                </Link>
              </li>
              {/* <li><a class="dropdown-item" href="#">dropdown</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
