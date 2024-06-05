import { Helmet } from "react-helmet";
import Hero from "../Home/Components/Hero";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TaskMaster -- Home</title>
            </Helmet>
            <div>
                <Hero></Hero>
            </div>
        </div>
    );
};

export default Home;