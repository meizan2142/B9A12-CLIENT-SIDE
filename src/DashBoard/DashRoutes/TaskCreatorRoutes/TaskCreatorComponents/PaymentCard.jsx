import { FaCommentDollar } from "react-icons/fa";
import { RiCoinsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const PaymentCard = ({ i }) => {
    return (
            <NavLink to={`/dashboard/paymentform/${i._id}`} className="card bg-neutral text-neutral-content lg:w-96 hover:shadow-2xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title flex items-center">Purchase {i.coins} coins <RiCoinsFill /></h2>
                    <p className="w-full flex items-center text-center ml-24 lg:ml-48 gap-2 font-bold">By<span>{i.dollars}</span> Dollars<FaCommentDollar /></p>
                </div>
            </NavLink>
    );
};
export default PaymentCard;

//  