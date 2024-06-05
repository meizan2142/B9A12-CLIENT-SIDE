import { NavLink } from "react-router-dom";
import { FaGithub, FaRegMessage } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[#282828]">
            <div className="lg:w-[1200px] mx-auto p-10 space-y-7 ">
                <div>
                    <NavLink to='/'>
                        <a className="btn btn-ghost text-sm lg:text-xl">
                            <img src="https://pixelwibes.com/template/my-task/marketing/assets/img/logo/logo.svg" alt="" />
                            <p className="text-white">TaskMaster</p>
                        </a>
                    </NavLink>
                </div>
                <div className="flex justify-around items-center text-white">
                    <div className="mr-8">
                        <h1 className="font-bold text-lg mb-3">For Candidates</h1>
                        <ul className="space-y-4">
                            <li className="text-base text-gray-400">Browse Jobs</li>
                            <li className="text-base text-gray-400">Browse Categories</li>
                            <li className="text-base text-gray-400">Dashboard</li>
                            <li className="text-base text-gray-400">BookMarks</li>
                        </ul>
                    </div>
                    <div className="mr-8">
                        <h1 className="font-bold text-lg mb-3">For Admin</h1>
                        <ul className="space-y-4">
                            <li className="text-base text-gray-400">Browse Candidates</li>
                            <li className="text-base text-gray-400">Admin Dashboard</li>
                            <li className="text-base text-gray-400">Check List</li>
                            <li className="text-base text-gray-400">Blogs</li>
                        </ul>
                    </div>
                    <div className="mr-8">
                        <h1 className="font-bold text-lg mb-3">Other</h1>
                        <ul className="space-y-4">
                            <li className="text-base text-gray-400">Blog</li>
                            <li className="text-base text-gray-400">Task Page</li>
                            <li className="text-base text-gray-400">Contact</li>
                            <li className="text-base text-gray-400">Social Media</li>
                        </ul>
                    </div>
                    <div className="mr-8">
                        <h1 className="font-bold text-lg mb-3">Legal</h1>
                        <ul className="space-y-4">
                            <li className="text-base text-gray-400">Privacy Policy</li>
                            <li className="text-base text-gray-400">Terms of Use</li>
                            <li className="text-base text-gray-400">FAQ</li>
                            <li className="text-base text-gray-400">BookMarks</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg mb-3 flex items-center gap-2 ">
                            <FaRegMessage />
                            <p>Sign Up For a Newsletter</p>
                        </h1>
                        <p className="mb-3 text-base text-gray-400">Weekly breaking news, analysis and  <br /> cutting edge advices on job searching.</p>
                        <div className="space-x-3 space-y-5">
                            <input type="email" placeholder="Enter your email here" className="p-3 bg-transparent border rounded-md" />
                            <button className="bg-[#26AE61] text-white font-bold p-3 rounded-md">Subscribe</button>
                            <div className="flex items-center gap-7">
                                <a href="https://www.facebook.com/" target="_blank"><FaFacebook className="hover:text-[#26AE61] hover:transition-all" /></a>
                                <a href="https://github.com/" target="_blank"><FaGithub className="hover:text-[#26AE61] hover:transition-all" /></a>
                                <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedin className="hover:text-[#26AE61] hover:transition-all" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;