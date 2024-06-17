import HomeSectionHeading from "../SectionHeading/HomeSectionHeading";

const FeaturesSection = () => {
    return (
        <div>
            <HomeSectionHeading
                mainHeading={'OUR FEATURES'}
            ></HomeSectionHeading>
            <div className="mt-10 flex justify-around items-center">
                <div>
                    <div className="w-14 h-14 mx-auto mb-3">
                        <img src="https://i.ibb.co/tCTr3MY/download.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-gray-500">Earn Coins by Completing Tasks</h1>
                    </div>
                </div>
                <div>
                    <div className="w-14 h-14 mx-auto mb-3">
                        <img src="https://i.ibb.co/X8358Gm/download.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-gray-500">Create and Manage Tasks</h1>
                    </div>
                </div>
                <div>
                    <div className="w-14 h-14 mx-auto mb-3">
                        <img src="https://i.ibb.co/2Nwvw9C/images.png" alt="" />
                    </div>
                    <div>
                        <h1 className="text-gray-500">Secure Payments</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;