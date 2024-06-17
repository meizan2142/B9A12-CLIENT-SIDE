import { Helmet } from "react-helmet";
import Hero from "../Home/Components/Hero";
import FeaturesSection from "./HomeSections/FeaturesSection";
import HowItWorksSection from "./HomeSections/HowItWorksSection";
import TopEarnersSection from "./HomeSections/TopEarnersSection";
import TestimonialSection from "./HomeSections/TestimonialSection";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home -- TaskMaster</title>
            </Helmet>
            <div>
                <Hero></Hero>
            </div>
            <div className="mb-32 w-[1200px] mx-auto text-center">
                <FeaturesSection></FeaturesSection>
            </div>
            <div className="mb-32 w-[1200px] mx-auto text-center">
                <HowItWorksSection></HowItWorksSection>
            </div>
            <div className="mb-32 w-[1200px] mx-auto text-center">
                <TopEarnersSection></TopEarnersSection>
            </div>
            <div className="mb-32 w-[1200px] mx-auto text-center">
                <TestimonialSection></TestimonialSection>
            </div>
        </div>
    );
};

export default Home;