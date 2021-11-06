import React from "react";
import Header from "../../components/header/header";
import HeroSection from "../../components/heroSection/heroSection";
import BusinessSolution from "../../components/businessSolution/businessSolution";
import TechnologicalEra from "../../components/technologicalEra/technologicalEra";
import AsselerationProcess from "../../components/accelerationProcess/accelerationProcess";
import OurPlan from "../../components/ourPlan/ourPlan";
import Footer from "../../components/footer/footer";
import PremiumCard from "../../components/premiumAccount/PremiumCard";
import StarterAccount from "../../components/StarterAccount/StarterAccount";
import BasicAccount from "../../components/basicAccount/BasicAccount";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BusinessSolution />
      <TechnologicalEra />
      <AsselerationProcess />
      <OurPlan />
      <div className="container mob-flex-col d-flex flex-column flex-sm-row align-items-center">
        <div className="popup-width col-12 mob-w-full col-sm-4 ">
          <StarterAccount />
        </div>
        <div className="popup-width col-12 mob-w-full col-sm-4">
          <PremiumCard />
        </div>
        <div className="col-12 mob-w-full col-sm-4">
          <BasicAccount />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
