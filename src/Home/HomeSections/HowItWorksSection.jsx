import HomeSectionHeading from "../SectionHeading/HomeSectionHeading";

const HowItWorksSection = () => {
    return (
        <div>
            <HomeSectionHeading
                mainHeading={'HOW IT WORKS'}
            ></HomeSectionHeading>
            <div className="mt-5">
                <p className="text-gray-500">Three main Steps are given below:</p>
            </div>
            <ul className="timeline timeline-vertical mt-5 mr-14 lg:mr-0">
                <li>
                    <div className="timeline-start">1</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box flex items-center gap-2">
                        <img className="w-5 h-5" src="https://i.ibb.co/PWBrV5C/register-icon-2048x2048-m490ylf1.png" alt="" />
                        Register
                    </div>
                    <hr />
                </li>
                <li>
                    <div className="timeline-start">2</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box flex items-center gap-2">
                        <img className="w-5 h-5" src="https://i.ibb.co/w64XfjF/task-32.png" alt="" />
                        Complete Tasks
                    </div>
                    <hr />
                </li>
                <li>
                    <div className="timeline-start">3</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box flex items-center gap-2">
                        <img className="w-5 h-5" src="https://i.ibb.co/5rW57cW/earn-reward-points-icon-style-vector.jpg" alt="" />
                        Earn Rewards
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default HowItWorksSection;