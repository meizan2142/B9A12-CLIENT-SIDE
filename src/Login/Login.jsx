import { Helmet } from "react-helmet";
import {  FaLongArrowAltLeft } from "react-icons/fa";
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
    }, [])
    return (
        <div>
            <Helmet>
                <title>Sign In -- TaskMaster</title>
            </Helmet>
            <div className="hero min-h-screen w-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="hero">
                        <div className="hero-content">
                            <div className="card shrink-0  shadow-2xl bg-base-100 lg:h-[500px] lg:w-[500px] p-5">
                                <div className="text-black text-2xl mt-4 font-bold grid grid-cols-2 items-center">
                                    <p className="mr-16">SIGN IN</p>
                                    <NavLink to='/'>
                                        <div className="text-xs text-info flex justify-end items-center gap-1 mr-10">
                                            <FaLongArrowAltLeft />
                                            <p>Back to Home</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <form onSubmit={handleLogin} className="card-body space-y-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="Password" className="input input-bordered text-black" required />
                                    </div>
                                    <SocialLogIn></SocialLogIn>
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