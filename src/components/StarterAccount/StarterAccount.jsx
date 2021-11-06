import React from "react";
import tick_img from "../../assets/images/tick.png";
import Button from "@material-ui/core/Button";
import cross_img from "../../assets/images/icon-cross.png";

const StarterAccount = () => {
  return (
    <div>
      <div className="container cursor-pointer">
        <div className="my-3 box-shadow">
          <div className="bg-blue border-curve py-2">
            <div>
              <p className="text-md text-white text-center">
                Starter <br />
                (1 Account Only){" "}
              </p>
            </div>
          </div>
          <div className="border-blue bg-white">
            <div className="text-center">
              <p className="text-xlg fw-bolder">$5.0</p>
            </div>
            <div>
              <div className="d-flex">
                <div className="px-2">
                  <img src={tick_img} alt=""></img>
                </div>
                <div>
                  <p className="text-sm text-gray">10000 PNVC</p>
                </div>
              </div>
              <div className="horizental-full-line bg-gray"></div>
            </div>
            <div className="pt-3">
              <div className="d-flex">
                <div className="px-2">
                  <img src={tick_img} alt=""></img>
                </div>
                <div>
                  <p className="text-sm text-gray">10000 EVC</p>
                </div>
              </div>
              <div className="horizental-full-line bg-gray"></div>
            </div>
            <div className="pt-3">
              <div className="d-flex">
                <div className="px-2">
                  <img src={cross_img} alt=""></img>
                </div>
                <div>
                  <p className="text-sm text-gray">Multiple Accounts</p>
                </div>
              </div>
              <div className="horizental-full-line bg-gray"></div>
            </div>
            <div className="pt-3">
              <div className="d-flex">
                <div className="px-2">
                  <img src={cross_img} alt=""></img>
                </div>
                <div>
                  <p className="text-sm text-gray">
                    Free Verification Included
                  </p>
                </div>
              </div>
              <div className="horizental-full-line bg-gray"></div>
            </div>
            <div className="pt-3"></div>
            <div className="d-flex justify-content-center py-2">
              <Button
                variant="contained"
                className="text-capitalize primary-button text-light bg-blue"
              >
                Get Started
              </Button>
            </div>
            <div className="mt-3 pattern-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterAccount;
