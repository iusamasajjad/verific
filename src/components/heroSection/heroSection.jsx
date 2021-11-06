import React from "react";
import Button from "@material-ui/core/Button";
import men_img from "../../assets/images/hero-men.png";

const HeroSection = () => {
  return (
    <div className="d-flex">
      <div className="col-12 d-flex  text-center text-sm-start align-items-center hero-bg-img ">
        <div className="container  d-flex justify-content-between">
          <div className="mob-w-full col-12 col-sm-6">
            <p className="text-md text-light">Advanced Platform</p>
            <h1 className="text-xlg fw-bold text-light ">
              Take your Business to the Next Level
            </h1>
            <p className="text-light ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat,
            </p>
            <Button
              variant="contained"
              className="text-capitalize primary-button text-light text-blue bg-white"
            >
              Check Now
            </Button>
          </div>
          <div className="col-6 d-none d-sm-block mob-d-none position-relative   d-flex justify-content-end">
            <div className="col-9 position-absolute end-0">
              <img className="w-100" src={men_img}
              alt="hero"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
