import HomeSectionHeading from "../SectionHeading/HomeSectionHeading";
import TestimonialSlider from "./TestimonialSlider";

const TestimonialSection = () => {
    return (
        <div>
            <HomeSectionHeading
                mainHeading={'TESTIMONIAL'}
                description={'The testimonial section features reviews and endorsements from satisfied customers or clients, providing social proof and credibility to the product or service.'}
            ></HomeSectionHeading>
            <div>
                <TestimonialSlider></TestimonialSlider>
            </div>
        </div>
    );
};

export default TestimonialSection;