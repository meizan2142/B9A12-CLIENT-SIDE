import { NavLink } from "react-router-dom";
import { FaCoins, FaRegPlusSquare, FaUnlock } from "react-icons/fa";
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
                <div>
                    <NavLink to='/' className='mr-6 font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>Home</NavLink>
                    <NavLink to='dashboard' className='mr-6 font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>DashBoard</NavLink>
                </div>
                :
                <div>
                    <NavLink to='/' className='mr-6 font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>Home</NavLink>
                    <a className='font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm mr-6' href="https://www.youtube.com/" target="_blank">Watch Demo</a>
                </div>
        }
    </>
    return (
        <div className={`navbar z-10 fixed lg:px-[250px] lg:h-20 h-24 ${scrollPosition > 600 ? 'bg-black': 'bg-transparent'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 gap-y-2 rounded-box w-52">
                        <div>
                            {
                                user ?
                                    <div className="grid gap-2">
                                        <NavLink className='font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>Home</NavLink>
                                        <NavLink to='/dashboard' className='font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>DashBoard</NavLink>
                                    </div>
                                    :
                                    <div className="grid gap-2">
                                        <NavLink className='font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>Home</NavLink>
                                        <a className='font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm' href="https://www.youtube.com/" target="_blank">Watch Demo</a>
                                    </div>
                            }
                        </div>
                    </ul>
                </div>
                <NavLink to='/'>
                    <a className="btn btn-ghost text-sm lg:text-xl">
                        <img src="https://pixelwibes.com/template/my-task/marketing/assets/img/logo/logo.svg" alt="" />
                        <p className="text-white">TaskMaster</p>
                    </a>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-1">
                {
                    user ?
                        <div className="flex items-center">
                            {
                                newUser.role === "TaskCreator" || newUser.role === "Worker" ? <div className=" mr-5 flex items-center gap-3 border border-white p-2 rounded-2xl" data-tooltip-id="my-tooltip" data-tooltip-content="Coins">
                                    <FaCoins className="text-yellow-500" />
                                    <p className="text-white">{newUser.coins}</p>
                                    <Tooltip id="my-tooltip" />
                                </div>
                                    :
                                    <></>
                            }
                            <div className="dropdown dropdown-end" data-tooltip-id="my-tooltip" data-tooltip-content="User Profile">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="rounded-full w-10 h-10">
                                        <img src={user.photoURL} className="rounded-full w-10 h-10" alt="" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 space-y-4 ">
                                    <p className="font-bold">{user.displayName}</p>
                                    <p className="font-bold">{user.email}</p>
                                    <NavLink className="font-bold" onClick={logOut}>LogOut</NavLink>
                                </ul>
                                <Tooltip id="my-tooltip" />
                            </div>
                        </div>
                        :
                        <div className="flex">
                            <NavLink to='/signin' className='lg:mr-6 text-white flex gap-2 hover:text-[#26AE61] hover:transition-all items-center'>
                                <FaUnlock />
                                <p className="font-bold">Sign In</p>
                            </NavLink>
                            <NavLink to='/signup' className='lg:mr-6 text-white flex gap-2 hover:text-[#26AE61] hover:transition-all items-center'>
                                <FaRegPlusSquare />
                                <p className="font-bold">Sign Up</p>
                            </NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;