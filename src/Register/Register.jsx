import { Helmet } from "react-helmet";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Register = () => {
    return (
        <div>
            <Helmet>
                <title>TaskMaster -- Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="hero">
                        <div className="hero-content">
                            <div className="card shrink-0  shadow-2xl bg-base-100 h-[750px] w-[500px] p-5">
                                <div className="text-black text-2xl mt-4 font-bold grid grid-cols-2 items-center">
                                    <p className="mr-16">SIGN UP</p>
                                    <NavLink to='/'>
                                        <div className="text-xs text-info flex justify-end items-center gap-1 mr-10">
                                            <FaLongArrowAltLeft />
                                            <p>Back to Home</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <form className="card-body space-y-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Photo URL</span>
                                        </label>
                                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Select The Role</span>
                                        </label>
                                        <select name="role" className="select select-bordered w-full rounded-md p-2 border text-black">
                                            <option value="Onsite">Worker</option>
                                            <option value="Remote">TaskCreator</option>
                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <button className="btn  mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold border-none bg-transparent">Sign Up</button>
                                    </div>
                                    <p className="font-bold text-black">Have already an account ? <Link to='/signin' className="text-info">SignIn here</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;