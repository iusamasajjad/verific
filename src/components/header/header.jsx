import React from "react";
import { useState } from "react";
import logo from "../../assets/images/verific-logo.png";
import arrow from "../../assets/images/arrow-down.png";
import Button from "@material-ui/core/Button";
import menu_img from "../../assets/images/menu-white.png";
import cross_img from "../../assets/images/cross.png";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <>
      <div className="d-flex d-none d-sm-block main-header container">
        <div className="z-10 position-absolute start-0 end-0 top-0 mt-5">
          <div className="d-flex  container align-items-center">
            <div className="col-3">
              <img src={logo}
              alt="logo" />
            </div>
            <div className="main-nav col-5">
              <nav>
                <ul className="d-flex">
                  <li className="fw-normal hover cursor-pointer border-bottom fs-5 text-light">
                    Home
                  </li>
                  <div className="d-flex">
                    <li className="ms-4 hover cursor-pointer fw-normal fs-5 text-light">
                      Services
                    </li>
                    <img className="cursor-pointer" src={arrow}
                    alt="arrow"></img>
                  </div>
                  <li className="ms-4 hover cursor-pointer fw-normal fs-5 text-light">
                    Pricing
                  </li>
                  <li className="cursor-pointer hover ms-4 fw-normal fs-5 text-light">
                    support@verific.io
                  </li>
                </ul>
              </nav>
            </div>
            <div className="d-flex align-items-center justify-content-end col-4 text-align-center">
              <div className="me-2">
                <Button className="text-capitalize text-sm text-dark-blue">
                  Login
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  className="text-capitalize primary-button text-light bg-blue"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== hamburger ==================== */}

      <div>
        <div className="bg-blue position-relative">
          <div className="d-flex px-3 hamburgar py-3 justify-content-between align-items-center d-block d-sm-none">
            <div>
              <img
                onClick={() => {
                  sideNav ? setSideNav(false) : setSideNav(true);
                }}
                src={menu_img}
                alt="bars"
              ></img>
            </div>
            <div>
              <img src={logo}
              alt="logo"></img>
            </div>
          </div>

          {sideNav && (
            <div className="main-nav bg-blue z-10 top-0 bottom-0 w-100 position-fixed">
              <div>
                <div className="d-flex justify-content-end px-2 py-2">
                  <img onClick={() => setSideNav(false)} src={cross_img}
                  alt="cross"></img>
                </div>
                <nav className="d-flex justify-content-center text-center">
                  <ul className="p-0">
                    <li className="mt-3 fw-normal text-light">Home</li>
                    <div>
                      <li className="mt-2 fw-normal text-light">Services</li>
                    </div>
                    <li className="mt-2 fw-normal text-light">Pricing</li>
                    <li className="mt-2 fw-normal  text-light">
                      support@verific.io
                    </li>
                  </ul>
                </nav>
                <div className="d-flex mt-3 align-items-center justify-content-center text-align-center">
                  <div>
                    <div className="d-flex justify-content-center">
                      <Button className="text-capitalize text-sm text-white">
                        Login
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        className="text-capitalize primary-button text-light bg-blue"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
