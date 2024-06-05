import { Helmet } from "react-helmet";
import { FaGoogle, FaLongArrowAltLeft } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Login = () => {
    return (
        <div>
            <Helmet>
                <title>TaskMaster -- Sign In</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="hero">
                        <div className="hero-content">
                            <div className="card shrink-0  shadow-2xl bg-base-100 h-[500px] w-[500px] p-5">
                                <div className="text-black text-2xl mt-4 font-bold grid grid-cols-2 items-center">
                                    <p className="mr-16">SIGN IN</p>
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
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" placeholder="Password" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <button className="btn  mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold border-none bg-transparent">Sign In</button>
                                        <button className="btn  mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold border-none bg-transparent">Sign In With<FaGoogle /> </button>
                                    </div>
                                    <p className="font-bold text-black">New to Here ? <Link to='/signup' className="text-info">SignUp  here</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;