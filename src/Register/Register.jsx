import { Helmet } from "react-helmet";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../Social/SocialLogIn";
import { useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        let coins = 0;
        const photo = form.photo.files[0];
        const formData = new FormData();
        formData.append('image', photo);

        // Coins functionality for different users
        if (role === 'Worker') {
            coins += 10;
        }
        else if (role === "TaskCreator") {
            coins += 50;
        }

        try {``
            setLoading(true);
            // get image url
            const { data } = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                formData
            );
            const displayURL = data.data.display_url;

            // user registration
            let userData = { email, password, role, displayURL, name, coins };
            const result = await createUser(email, password);
            console.log(result);
            

            // Save username and photourl
            await updateUserProfile(name, displayURL);

            fetch(`${import.meta.env.VITE_API_URL}/newuser`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Registered and Stored!');
                        navigate(location?.state ? location?.state : '/');
                    }
                });
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Sign Up -- TaskMaster</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div>
                    <Toaster />
                </div>
                <div className="hero-content text-neutral-content w-full">
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center">
                            <div className="card shrink-0 shadow-2xl bg-base-100 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto sm:h-[700px] md:h-[750px] lg:h-[810px] p-4 sm:p-6 md:p-8 lg:p-10">
                                <div className="text-black text-xl sm:text-2xl mt-2 sm:mt-4 font-bold grid grid-cols-2 items-center">
                                    <p className="mr-4 sm:mr-8 md:mr-12 lg:mr-16">SIGN UP</p>
                                    <NavLink to='/' className="flex justify-end">
                                        <div className="text-xs text-info flex items-center gap-1">
                                            <FaLongArrowAltLeft />
                                            <p>Back to Home</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <form onSubmit={handleRegister} className="card-body space-y-1 sm:space-y-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            name="name"
                                            className="input input-bordered text-black w-full"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            name="email"
                                            className="input input-bordered text-black w-full"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            className="input input-bordered text-black w-full"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Photo URL</span>
                                        </label>
                                        <input
                                            type="file"
                                            name="photo"
                                            className="file-input file-input-bordered text-black w-full"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Select The Role</span>
                                        </label>
                                        <select
                                            name="role"
                                            className="select select-bordered w-full rounded-md p-2 border text-black"
                                        >
                                            <option value="Worker">Worker</option>
                                            <option value="TaskCreator">TaskCreator</option>
                                        </select>
                                    </div>
                                    <button
                                        className="btn mt-3 sm:mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold border-none w-full"
                                    >
                                        Sign Up
                                    </button>
                                    <SocialLogIn />
                                    <p className="font-bold text-black text-xs sm:text-sm text-center">
                                        Have already an account?{' '}
                                        <Link to='/signin' className="text-info">SignIn here</Link>
                                    </p>
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