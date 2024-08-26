import { NavLink } from "react-router-dom";
import { RiCoinsFill } from "react-icons/ri";
import { FaCommentDollar } from "react-icons/fa";
import { useEffect, useState } from "react";

const PaymentCard = () => {
    const [paymentInfo, setPaymentInfo] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/paymentinfo`)
            .then(res => res.json())
            .then(data => setPaymentInfo(data))
    }, [])   
    return (
        <div  className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:p-0 p-5">
            {
                paymentInfo.map(i => <NavLink key={i._id}  className="card bg-neutral text-neutral-content lg:w-96">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title flex items-center">Purchase {i.coins} coins <RiCoinsFill /></h2>
                        <p className="w-full flex items-center text-center ml-24 lg:ml-48 gap-2 font-bold">By<span>{i.dollars}</span> Dollars<FaCommentDollar /></p>
                    </div>
                </NavLink>)
            }
        </div>
    );
};

export default PaymentCard;