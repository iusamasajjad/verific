import React from "react";
import Button from "@material-ui/core/Button";

const HeroSection = () => {
  return (
    <div className="d-flex">
      <div className="col-12 d-flex text-center text-sm-start align-items-center hero-bg-img ">
        <div className="container  d-flex ">
          <div className="mob-w-full col-12 col-sm-6">
            <p className="text-md text-light">Advanced Platform</p>
            <h1 className="text-xlg fw-bold text-light ">Take your Business to the Next Level</h1>
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
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
