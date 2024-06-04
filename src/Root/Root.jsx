import Hero from "../Home/Components/Hero";
import Navbar from "../Shared/Navbar";

const Root = () => {
    return (
        <div>
            {/*  className="lg:w-[1200px] mx-auto" */}
            <div className=""> 
                <Navbar></Navbar>
            </div>
            <div>
                <Hero></Hero>
            </div>
        </div>
    );
};

export default Root;