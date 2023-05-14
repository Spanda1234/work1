import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./component.css";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Western Union Holdings:{" "}
        <a
          className="text-dark"
          href="https://www.westernunion.com/in/en/home.html"
        >
          westernunion.com
        </a>
        <br />
        Inc. All Rights Reserved
      </div>
    </MDBFooter>
  );
};
export default Footer;
