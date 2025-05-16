import { Helmet } from "react-helmet";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect } from "react";
import SocialLogIn from "../Social/SocialLogIn";
const Login = () => {
    const { signIn, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const User = { email, password }
        console.log(User);
        signIn(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location?.state : '/')
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        if (user) {
            navigate(location.state)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <Helmet>
                <title>Sign In -- TaskMaster</title>
            </Helmet>
            <div className="hero min-h-screen w-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content w-full px-2 xs:px-4 sm:px-6">
                    <div className="w-full max-w-md mx-auto">
                        <div className="card shrink-0 shadow-2xl bg-base-100 w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:w-[500px] lg:h-auto min-h-[450px] p-4 sm:p-5 md:p-6">
                            <div className="text-black text-xl sm:text-2xl mt-2 sm:mt-4 font-bold flex justify-between items-center">
                                <p>SIGN IN</p>
                                <NavLink to='/'>
                                    <div className="text-xs text-info flex items-center gap-1">
                                        <FaLongArrowAltLeft />
                                        <span className="">Back to Home</span>
                                    </div>
                                </NavLink>
                            </div>
                            <form onSubmit={handleLogin} className="card-body p-0 sm:p-2 space-y-2 sm:space-y-3">
                                <div className="form-control">
                                    <label className="label py-1">
                                        <span className="label-text font-bold text-sm sm:text-base">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered text-black text-sm sm:text-base"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label py-1">
                                        <span className="label-text font-bold text-sm sm:text-base">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered text-black text-sm sm:text-base"
                                        required
                                    />
                                </div>
                                <button
                                    className="btn mt-2 sm:mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold border-none text-sm sm:text-base">
                                    Sign In
                                </button>
                                <SocialLogIn />
                                <p className="font-bold text-black text-xs sm:text-sm text-center">
                                    New to Here? <Link to='/signup' className="text-info">SignUp here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;