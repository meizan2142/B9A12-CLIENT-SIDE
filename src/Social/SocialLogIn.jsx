import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialLogIn = () => {

    const { googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    // Google
    const handleGoogleLogin = () => {
        googleLogIn()
            .then(res => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                fetch(`${import.meta.env.VITE_API_URL}/newuser`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success',
                                text: 'Registered and stored user on MongoDB Successfully',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
                console.log(userInfo)
            })
    }
    return (
        <div className="form-control">

            <button onClick={handleGoogleLogin} className="btn  mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold border-none bg-transparent">Sign Up With<FaGoogle /> </button>
        </div>
    );
};

export default SocialLogIn;