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
        </div>
    );
};

export default Home;