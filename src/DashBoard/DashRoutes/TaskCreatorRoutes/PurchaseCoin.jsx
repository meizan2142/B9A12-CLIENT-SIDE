import { useLoaderData } from "react-router-dom";
import PaymentCard from "./TaskCreatorComponents/PaymentCard";

const PurchaseCoin = () => {
    const paymentInfo = useLoaderData()
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:p-0 p-5">
            {
                paymentInfo.map(i => <PaymentCard key={i._id} i={i}></PaymentCard>)
            }
        </div>
    );
};

export default PurchaseCoin;