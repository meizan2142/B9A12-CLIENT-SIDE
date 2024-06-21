import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import {  FaLongArrowAltLeft } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogIn from "../Social/SocialLogIn";
const Register = () => {
    const { createUser, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        const newUser = { name, email, password, role }
        console.log(newUser);
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                // setUser(res.user)
                navigate(location?.state ? location?.state : '/')
                if (res.user) {
                    fetch(`${import.meta.env.VITE_API_URL}/newuser`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            if (data.insertedId) {
                                Swal.fire({
                                    title: 'Success',
                                    text: 'Registered and stored user on MongoDB Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'OK'
                                })                                
                            }
                        })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        if (user) {
            navigate(location.state)
        }
    }, [])
    return (
        <div>
            <Helmet>
                <title>Sign Up -- TaskMaster</title>
            </Helmet>
            <div className="hero lg:min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="hero">
                        <div className="hero-content">
                            <div className="card shrink-0  shadow-2xl bg-base-100 lg:h-[810px] lg:w-[500px] p-10">
                                <div className="text-black text-2xl mt-4 font-bold grid grid-cols-2 items-center">
                                    <p className="mr-16">SIGN UP</p>
                                    <NavLink to='/'>
                                        <div className="text-xs text-info flex justify-end items-center gap-1 mr-10">
                                            <FaLongArrowAltLeft />
                                            <p>Back to Home</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <form onSubmit={handleRegister} className="card-body space-y-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input type="email" placeholder="Enter your email" name="email" className="input input-bordered text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" placeholder="Password" name="password" className="input input-bordered text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Photo URL</span>
                                        </label>
                                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Select The Role</span>
                                        </label>
                                        <select name="role" className="select select-bordered w-full rounded-md p-2 border text-black">
                                            <option value="Worker">Worker</option>
                                            <option value="TaskCreator">TaskCreator</option>
                                        </select>
                                    </div>
                                    <SocialLogIn></SocialLogIn>
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