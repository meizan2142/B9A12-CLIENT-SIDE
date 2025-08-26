import Footer from "../../Shared/Footer";
import DashNav from "../DashNav/DashNav";
import Sidebar from "../Sidebar/Sidebar";
const DashBoard = () => {
    return (
        <div>
            <div>
                <DashNav></DashNav>
            </div>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashBoard;