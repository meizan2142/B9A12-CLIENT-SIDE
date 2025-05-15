import { NavLink } from "react-router-dom";
import { FaCoins, FaBars } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [newUser, setNewUser] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user?.email}`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    }, [user?.email])

    const navLinks = <>
        {
            user ?
                <div className="flex">
                    <NavLink to='/' className='mr-6 font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>Home</NavLink>
                    <NavLink to='dashboard' className='mr-6 font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>DashBoard</NavLink>
                </div>
                :
                <div className="flex">
                    <NavLink to='/' className='mr-6 font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>Home</NavLink>
                    <a className='font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm mr-6' href="https://www.youtube.com/" target="_blank">Watch Demo</a>
                </div>
        }
    </>

    return (
        <div className={`navbar z-10 fixed lg:px-[250px] h-16 ${scrollPosition > 600 ? 'bg-[#282828]' : 'bg-transparent'}`}>
            {/* Mobile View (small devices) */}
            <div className="flex items-center justify-between w-full lg:hidden">
                {/* Menu Icon (Left side on mobile) */}
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white">
                        <FaBars className="h-5 w-5" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 gap-y-2 rounded-box w-52">
                        <div className="grid gap-2">
                            {
                                user ?
                                    <>
                                        <NavLink className='font-bold text-white hover:text-[#26AE61]'>Home</NavLink>
                                        <NavLink to='/dashboard' className='font-bold text-white hover:text-[#26AE61]'>DashBoard</NavLink>
                                    </>
                                    :
                                    <>
                                        <NavLink className='font-bold text-white hover:text-[#26AE61]'>Home</NavLink>
                                        <a className='font-bold text-white hover:text-[#26AE61]' href="https://www.youtube.com/" target="_blank">Watch Demo</a>
                                    </>
                            }
                        </div>
                    </ul>
                </div>

                {/* Logo (Center on mobile) */}
                <div className="flex-1 flex justify-center">
                    <NavLink to='/' className="btn btn-ghost text-sm lg:text-xl bg-none">
                        <img src="https://pixelwibes.com/template/my-task/marketing/assets/img/logo/logo.svg" alt="Logo" className="h-8" />
                        <p className="text-white">TaskMaster</p>
                    </NavLink>
                </div>

                {/* Avatar (Right side on mobile) */}
                <div className="flex items-center">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="rounded-full w-8 h-8">
                                    <img src={user.photoURL} className="rounded-full w-8 h-8" alt="User" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-4">
                                <p className="font-bold">{user.displayName}</p>
                                <p className="font-bold">{user.email}</p>
                                <NavLink className="font-bold" onClick={logOut}>LogOut</NavLink>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <NavLink to='/signin' className='text-white'>
                                <p className="font-bold text-sm">Sign In</p>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>

            {/* Desktop View (large devices) */}
            {/* Desktop View (large devices) */}
            <div className="hidden lg:flex w-full justify-between items-center">
                {/* Logo (Left side on desktop) */}
                <div className="flex items-center">
                    <NavLink to='/' className="btn btn-ghost text-xl bg-none">
                        <img src="https://pixelwibes.com/template/my-task/marketing/assets/img/logo/logo.svg" alt="Logo" className="h-8" />
                        <p className="text-white ml-2">TaskMaster</p>
                    </NavLink>
                </div>

                {/* Navigation Links (Center on desktop) */}
                <div className="flex-1 flex justify-center">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* Avatar and Coins (Right side on desktop) */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center">
                            {(newUser.role === "TaskCreator" || newUser.role === "Worker") && (
                                <div className="flex items-center gap-2 border border-white p-2 rounded-2xl" data-tooltip-id="coins-tooltip">
                                    <FaCoins className="text-yellow-500" />
                                    <p className="text-white">{newUser.coins}</p>
                                    <Tooltip id="coins-tooltip" content="Coins" />
                                </div>
                            )}
                            <div className="dropdown dropdown-end" data-tooltip-id="profile-tooltip">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="rounded-full w-10 h-10">
                                        <img src={user.photoURL} className="rounded-full w-10 h-10" alt="User" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-4">
                                    <p className="font-bold">{user.displayName}</p>
                                    <p className="font-bold">{user.email}</p>
                                    <NavLink className="font-bold" onClick={logOut}>LogOut</NavLink>
                                </ul>
                                <Tooltip id="profile-tooltip" content="User Profile" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <NavLink to='/signin' className='text-white hover:text-[#26AE61]'>
                                <p className="font-bold">Sign In</p>
                            </NavLink>
                            <NavLink to='/signup' className='text-white hover:text-[#26AE61]'>
                                <p className="font-bold">Sign Up</p>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;