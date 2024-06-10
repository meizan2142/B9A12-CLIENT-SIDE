import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
const Root = () => {
    const loacation = useLocation()
    const noHeaderFooter = loacation.pathname.includes('signin')
    const noHeaderFoot2 = loacation.pathname.includes('signup')
    const noHeaderFoot3 = loacation.pathname.includes('dashboard')
    return (
        <div>
            <div>
                {noHeaderFooter || <Navbar></Navbar> && noHeaderFoot2 || <Navbar></Navbar> && noHeaderFoot3 || <Navbar></Navbar>}
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                {noHeaderFooter || <Footer></Footer> && noHeaderFoot2 || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Root;