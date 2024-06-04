import { NavLink } from "react-router-dom";
import { FaRegPlusSquare, FaUnlock } from "react-icons/fa";
const Navbar = () => {
    const navLinks = <>
        <NavLink className='mr-6 font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>Home</NavLink>
        <NavLink className='mr-6 font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>Watch Demo</NavLink>
        <NavLink className='mr-6 font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>DashBoard</NavLink>
    </>
    return (
        <div className="navbar bg-transparent z-10 fixed lg:px-[250px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 gap-y-2 rounded-box w-52">
                        <NavLink className='font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>Home</NavLink>
                        <NavLink className='font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>Watch Demo</NavLink>
                        <NavLink className='font-bold text-white hover:text-[#26AE61] hover:transition-all hover:text-sm'>DashBoard</NavLink>
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
                <NavLink to='/signin' className='lg:mr-6 text-white flex gap-2 hover:text-[#26AE61] hover:transition-all items-center'>
                    <FaUnlock />
                    <p className="font-bold">Sign In</p>
                </NavLink>
                <NavLink to='/signup' className='lg:mr-6 text-white flex gap-2 hover:text-[#26AE61] hover:transition-all items-center'>
                    <FaRegPlusSquare />
                    <p className="font-bold">Sign Up</p>
                </NavLink>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;