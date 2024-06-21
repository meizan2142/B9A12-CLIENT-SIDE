import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import UseAxiosPublic from "../UseAxios/UseAxiosPublic";

const SocialLogIn = () => {

    const { googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = UseAxiosPublic()
    // Google
    const handleGoogleLogin = () => {
        googleLogIn()
            .then(res => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axiosPublic.post('/newuser', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(location?.state ? location?.state : '/')
                    })
            })
    }
    return (
        <div className="form-control">
            <button className="btn  mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold border-none bg-transparent">Sign Up</button>
            <button onClick={handleGoogleLogin} className="btn  mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold border-none bg-transparent">Sign Up With<FaGoogle /> </button>
        </div>
    );
};

export default SocialLogIn;