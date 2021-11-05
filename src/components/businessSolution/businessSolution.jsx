import React from "react";
import boost_img from "../../assets/images/boost.png";
import high_quality_img from "../../assets/images/quality.png";

const BusinessSolution = () => {
  return (
    <div className="mt-5 pt-5 container">
      <div className="mob-flex-col mob-items-center d-flex flex-column flex-sm-row">
        <div className="mob-w-full col-12 col-sm-8">
          <div className="d-flex">
            <div>
              <div className="vertical-line bg-blue"></div>
            </div>
            <div className="mt-1 mt-sm-3 ms-4 ">
              <div>
                <p className="text-lg text-blue fw-bold">
                  The best business solution for you
                </p>
              </div>
              <div>
                <p className="text-gray mob-w-full text-xsm col-12 col-sm-9 pt-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row">
            <div>
              <div className="d-flex align-items-center">
                <div>
                  <img src={boost_img}
                  alt="boost"></img>
                </div>

                <div>
                  <p className="text-xsm text-blue fw-bold">
                    Scale Your Activity
                  </p>
                  <div className="horizental-line bg-blue"></div>
                </div>
              </div>
              <div className="d-flex justify-content-center ps-5">
                <p className="text-xsm text-gray col-12 col-sm-9">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <div>
                  <img src={high_quality_img}
                  alt="high-quality"></img>
                </div>

                <div>
                  <p className="text-xsm text-blue fw-bold">High Quality</p>
                  <div className="horizental-line bg-blue"></div>
                </div>
              </div>
              <div className="d-flex justify-content-center ps-5">
                <p className="text-xsm text-gray col-12 col-sm-9">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex align-items-center">
          <div className="business-img"></div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolution;
