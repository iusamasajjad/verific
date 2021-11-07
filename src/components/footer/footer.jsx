import React from "react";
import logo from "../../assets/images/verific-logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-blue">
        <div className="d-flex flex-column flex-sm-row py-4 text-align-center justify-content-between align-items-center container">
          <div>
            <img src={logo}
            alt="logo"></img>
          </div>
          <div className="py-3 py-sm-1">
            <span className="text-sm text-white popin">
              © 2021 Verific. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
