import { NavLink} from "react-router-dom";

import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const DashNav = () => {
    const {user} = useContext(AuthContext);
    const {displayName} = user;
    return (
        <div className="navbar flex justify-between ">
            <Helmet>
                <title>DashBoard -- TaskMaster</title>
            </Helmet>
            <NavLink to='/'>
                <a className="btn btn-ghost bg-black text-sm lg:text-xl">
                    <img src="https://pixelwibes.com/template/my-task/marketing/assets/img/logo/logo.svg" alt="" />
                    <p className="text-white ">TaskMaster</p>
                </a>
            </NavLink>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-3 shadow bg-base-100 rounded-box w-52">
                        <li className="font-bold ">{displayName}</li>
                        <li className="font-bold">Available Coin</li>
                    </ul>
                </div>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DashNav;