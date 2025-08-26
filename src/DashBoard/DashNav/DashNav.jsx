import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import WorkerMenu from "../DashRoutes/WorkerRoutes/WorkerMenu/WorkerMenu";
import TaskCreatorMenu from "../DashRoutes/TaskCreatorRoutes/TaskCreatorMenu/TaskCreatorMenu";
import AdminMenu from "../DashRoutes/AdminRoutes/AdminMenu/AdminMenu";
const DashNav = () => {
    const { user } = useContext(AuthContext);
    const { displayName, photoURL } = user;
    const [newUser, setNewUser] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user.email}`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    }, [])
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
            <Helmet>
                <title>DashBoard -- TaskMaster</title>
            </Helmet>

            {/* Left side - Logo */}
            <div className="flex-1">
                <NavLink to='/' className="btn btn-ghost p-0 sm:p-2">
                    <div className="flex items-center">
                        <img
                            src="https://pixelwibes.com/template/my-task/marketing/assets/img/logo/logo.svg"
                            alt="TaskMaster Logo"
                            className="h-8 w-auto sm:h-10"
                        />
                        <p className="text-black text-sm sm:text-lg ml-2">TaskMaster</p>
                    </div>
                </NavLink>
            </div>

            {/* Right side - Desktop items (hidden on mobile) */}
            <div className="hidden lg:flex navbar-end space-x-4">
                {/* Notification */}
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>

                {/* Profile dropdown */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="User Profile" src={photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
                        <div className="p-2 space-y-2">
                            <li className="font-bold">{displayName}</li>
                            <li className="font-bold">{newUser.role}</li>
                            {(newUser.role === "TaskCreator" || newUser.role === "Worker") && (
                                <li className="font-bold">Available Coin: {newUser.coins}</li>
                            )}
                        </div>
                    </ul>
                </div>
            </div>

            {/* Mobile menu button (hidden on desktop) */}
            <div className="lg:hidden navbar-end">
                <div className="dropdown dropdown-end">
                    {/* Mobile menu toggle */}
                    <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                </div>
            </div>

            {/* Mobile drawer */}
            <div className="drawer drawer-end lg:hidden">
                <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side z-50">
                    <label htmlFor="mobile-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* User profile in mobile menu */}
                        <div className="flex items-center p-4 mb-4">
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={photoURL} alt="User Profile" />
                                </div>
                            </div>
                            <div className="ml-3">
                                <p className="font-bold">{displayName}</p>
                                <p className="text-sm">{newUser.role}</p>
                                {(newUser.role === "TaskCreator" || newUser.role === "Worker") && (
                                    <p className="text-sm">Coins: {newUser.coins}</p>
                                )}
                            </div>
                        </div>

                        {/* Mobile menu items */}
                        <div className="divider"></div>
                        {newUser.role === 'Worker' && <WorkerMenu mobile />}
                        {newUser.role === 'TaskCreator' && <TaskCreatorMenu mobile />}
                        {newUser.role === 'Admin' && <AdminMenu mobile />}

                        {/* Notification in mobile menu */}
                        <div className="divider"></div>
                        <button className="btn btn-ghost justify-start">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                                <span className="ml-2">Notifications</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashNav;