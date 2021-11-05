import React from "react";
import one_img from "../../assets/images/01.png";
import two_img from "../../assets/images/02.png";
import target_img from "../../assets/images/Target.png";

const AccelerationProcess = () => {
  return (
    <div className="mt-5 pt-5 container">
      <div className="d-flex flex-column mob-flex-col flex-sm-row">
        <div className="col-12 col-sm-3 mob-w-full d-flex justify-content-center">
          <div>
            <img
              className="d-flex justify-content-center"
              src={target_img}
              alt="target"
            ></img>
          </div>
        </div>
        <div className="col-12 col-sm-9 mob-w-full">
          <div className="d-flex">
            <div>
              <div className="vertical-line bg-blue"></div>
            </div>
            <div className="mt-3 ms-4 ">
              <div>
                <p className="text-lg text-blue fw-bold">
                  Acceleration Process to Grow Your Business
                </p>
              </div>
              <div>
                <p className="text-gray text-xsm col-9 pt-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mob-flex-col flex-sm-row">
            <div>
              <div className="d-flex align-items-center">
                <div>
                  <img src={one_img}
                  alt="one.png"></img>
                  <div className="horizental-line2 bg-pink"></div>
                </div>

                <div>
                  <p className="text-md text-dark-gray ms-4 ps-2 my-2">
                    Market Research
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center ps-5">
                <p className="text-xsm text-gray col-10">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magn
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <div>
                  <img src={two_img}
                  alt="twopng"></img>
                  <div className="horizental-line2 bg-pink"></div>
                </div>

                <div>
                  <p className="text-md text-dark-gray ms-4 ps-1 my-2">
                    Market Research
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center ps-5">
                <p className="text-xsm text-gray col-10">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magn
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccelerationProcess;
