import { Helmet } from "react-helmet";
import Hero from "../Home/Components/Hero";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home -- TaskMaster</title>
            </Helmet>
            <div>
                <Hero></Hero>
            </div>
            {/* <div className="mb-32 lg:w-[1200px] lg:mx-auto text-center">
                <FeaturesSection></FeaturesSection>
            </div> */}
            {/* <div className="mb-32 lg:w-[1200px] lg:mx-auto text-center">
                <HowItWorksSection></HowItWorksSection>
            </div> */}
            {/* <div className="mb-32 lg:w-[1200px] lg:mx-auto text-center">
                <TopEarnersSection></TopEarnersSection>
            </div>
            <div className="mb-32 lg:w-[1200px] lg:mx-auto text-center">
                <TestimonialSection></TestimonialSection>
            </div> */}
        </div>
    );
};

export default Home;