import Footer from "../../Shared/Footer";
import DashNav from "../DashNav/DashNav";
import WorkerSection from "../DashRoutes/WorkerSection";
const DashBoard = () => {
    return (
        <div>
            <div>
                <DashNav></DashNav>
            </div>
            <div>
                <WorkerSection></WorkerSection>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashBoard;