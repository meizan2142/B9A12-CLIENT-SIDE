import { Helmet } from "react-helmet";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../Social/SocialLogIn";
import { useContext } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Register = () => {
    const { createUser, updateUserProfile, setLoading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleRegister = async e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        let coins = 0;
        const photo = form.photo.files[0];
        const formData = new FormData()
        formData.append('image', photo)
        // Coins functionality for different users
        if (role === 'Worker') {
            coins += 10;
        }
        else if (role === "TaskCreator") {
            coins += 50;
        }
        try {
            // get image url = 1
            setLoading(true)
            const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                formData
            )
            // console.log(data.data.display_url);
            const displayURL = data.data.display_url;

            // user registration = 2
            let userData = { email, password, role, displayURL, name, coins }   
            const result = await createUser(email, password)
            console.log(result);
            // console.log(userData.role);
            // Save username and photourl = 3
            await updateUserProfile(name, displayURL)
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
                        toast.success('Registered and Stored!')
                        navigate(location?.state ? location?.state : '/')
                    }
                })
            console.log(userData)
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <Helmet>
                <title>Sign Up -- TaskMaster</title>
            </Helmet>
            <div className="hero lg:min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div>
                    <Toaster />
                </div>
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
                                        <input type="file" name="photo" className="file-input file-input-bordered  text-black" />
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
                                    <button
                                        className="btn  mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold border-none bg-transparent"
                                    // disabled={loading}
                                    >Sign Up</button>
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