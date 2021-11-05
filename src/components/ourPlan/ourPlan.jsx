import React from "react";
import account_img from "../../assets/images/Acounts.png";

const OurPlan = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex text-center justify-content-center">
          <div className="my-5">
            <div className="d-flex justify-content-center">
              <div className="horizental-line bg-blue"></div>
            </div>
            <div>
              <p className="text-lg text-blue fw-bold">Our Plans</p>
            </div>
            <div className="d-flex text-center justify-content-center">
              <p className="text-gray text-xsm col-12 mob-w-full col-sm-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img className="w-75" src={account_img}
          alt="account"></img>
        </div>
      </div>
    </>
  );
};

export default OurPlan;
