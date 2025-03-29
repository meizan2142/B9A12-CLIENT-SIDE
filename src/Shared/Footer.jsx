import { NavLink } from "react-router-dom";
import { FaGithub, FaRegMessage } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[#282828]">
            <div className="max-w-[1200px] mx-auto p-6 lg:p-10 space-y-7">
                {/* Logo and Navigation */}
                <div className="text-center lg:text-left">
                    <NavLink to="/">
                        <a className="btn btn-ghost flex items-center justify-center lg:justify-start text-sm lg:text-xl space-x-3">
                            <img src="https://pixelwibes.com/template/my-task/marketing/assets/img/logo/logo.svg" alt="TaskMaster Logo" />
                            <p className="text-white">TaskMaster</p>
                        </a>
                    </NavLink>
                </div>
                {/* Main Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 text-white">
                    {/* For Candidates */}
                    <div>
                        <h1 className="font-bold text-lg mb-3">For Candidates</h1>
                        <ul className="space-y-4">
                            <li className="text-base text-gray-400 hover:text-white transition">Browse Jobs</li>
                            <li className="text-base text-gray-400 hover:text-white transition">Browse Categories</li>
                            <li className="text-base text-gray-400 hover:text-white transition">Dashboard</li>
                            <li className="text-base text-gray-400 hover:text-white transition">BookMarks</li>
                        </ul>
                    </div>
                    {/* For Admin */}
                    <div>
                        <h1 className="font-bold text-lg mb-3">For Admin</h1>
                        <ul className="space-y-4">
                            <li className="text-base text-gray-400 hover:text-white transition">Browse Candidates</li>
                            <li className="text-base text-gray-400 hover:text-white transition">Admin Dashboard</li>
                            <li className="text-base text-gray-400 hover:text-white transition">Check List</li>
                            <li className="text-base text-gray-400 hover:text-white transition">Blogs</li>
                        </ul>
                    </div>
                    {/* Other */}
                    <div>
                        <h1 className="font-bold text-lg mb-3">Other</h1>
                        <ul className="space-y-4">
                            <li className="text-base text-gray-400 hover:text-white transition">Blog</li>
                            <li className="text-base text-gray-400 hover:text-white transition">Task Page</li>
                            <li className="text-base text-gray-400 hover:text-white transition">Contact</li>
                            <li className="text-base text-gray-400 hover:text-white transition">Social Media</li>
                        </ul>
                    </div>
                    {/* Legal */}
                    <div>
                        <h1 className="font-bold text-lg mb-3">Legal</h1>
                        <ul className="space-y-4">
                            <li className="text-base text-gray-400 hover:text-white transition">Privacy Policy</li>
                            <li className="text-base text-gray-400 hover:text-white transition">Terms of Use</li>
                            <li className="text-base text-gray-400 hover:text-white transition">FAQ</li>
                            <li className="text-base text-gray-400 hover:text-white transition">BookMarks</li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-4">
                        <h1 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <FaRegMessage />
                            <p>Sign Up For a Newsletter</p>
                        </h1>
                        <p className="mb-3 text-base text-gray-400">
                            Weekly breaking news, analysis, and <br />
                            cutting-edge advice on job searching.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email here"
                                className="p-3 w-full md:w-auto bg-transparent border rounded-md"
                            />
                            <button className="bg-[#26AE61] text-white font-bold px-5 py-3 rounded-md">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex items-center gap-5 justify-center md:justify-start mt-4">
                            <a href="https://www.facebook.com/" target="_blank" className="hover:text-[#26AE61] transition">
                                <FaFacebook />
                            </a>
                            <a href="https://github.com/" target="_blank" className="hover:text-[#26AE61] transition">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/feed/" target="_blank" className="hover:text-[#26AE61] transition">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;