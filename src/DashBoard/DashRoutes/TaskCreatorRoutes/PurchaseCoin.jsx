import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./TaskCreatorComponents/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";

const PurchaseCoin = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    );
};

export default PurchaseCoin;