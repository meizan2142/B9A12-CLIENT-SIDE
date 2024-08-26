import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
const WithDrawalForm = () => {
    const { user } = useContext(AuthContext);
    const [newUser, setNewUser] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user?.email}`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    }, [user?.email])
    const handleWitdraw = e => {
        e.preventDefault()
        const form = e.target;
        const coin = form.coin.value;
        const amount = form.amount.value;
        const number = form.number.value;
        const payment = form.payment.value;
        const workerEmail = newUser.email;
        const workerName = newUser.name;
        const currentTime = moment().format('LLL');
        const withdrawInfo = { coin, amount, number, payment, currentTime, workerEmail, workerName }
        if (amount > 15) {
            toast.error('You can withdraw maximum 15 Dollars')
        }
        else {
            fetch(`${import.meta.env.VITE_API_URL}/withdraws`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(withdrawInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Inserted On Withdraw Collection!')
                        navigate(location?.state ? location?.state : '/dashboard/workerhome')
                    }
                })
        }
    }
    return (
        <div>
            <form onSubmit={handleWitdraw} className="container flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-4 gap-6 p-6">
                    <Toaster />
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Coin to Withdraw</label>
                            <input type="number" placeholder="Coins" name="coin" required className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Withdraw Amount(Dollar)</label>
                            <input type="number" placeholder="Withdraw Amount" required name="amount" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3 grid">
                            <label htmlFor="firstname" className="text-sm font-bold">Select Payment</label>
                            <select name="payment" className="border p-2 rounded-md">
                                <option value="Bkash">Bkash</option>
                                <option value="Rocket">Rocket</option>
                                <option value="Nagad">Nagad</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Account Number</label>
                            <input type="number" placeholder="Account Number" required name="number" className="w-full rounded-md p-2 border" />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button className="btn btn-block text-white font-bold transition ease-in delay-150 bg-[#26AE61] hover:-translate-y-1 hover:scale-100 shadow-md hover:text-black">WithDraw</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WithDrawalForm;
