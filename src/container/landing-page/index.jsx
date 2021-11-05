import React from 'react'
import Header from '../../components/header/header';
import HeroSection from '../../components/heroSection/heroSection';
import BusinessSolution from '../../components/businessSolution/businessSolution';
import TechnologicalEra from '../../components/technologicalEra/technologicalEra';
import AsselerationProcess from '../../components/accelerationProcess/accelerationProcess';
import OurPlan from '../../components/ourPlan/ourPlan';
import Footer from '../../components/footer/footer';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <BusinessSolution />
            <TechnologicalEra />
            <AsselerationProcess />
            <OurPlan />
            <Footer />
        </div>
    )
}

export default LandingPage;
