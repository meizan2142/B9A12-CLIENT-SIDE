import { useLoaderData } from "react-router-dom";

const PaymentForm = () => {
    const pay = useLoaderData([])
    const {dollars, coins} = pay;
    const handlePurchase = e => {
        e.preventDefault()
        const form = e.target;
        const amount = form.amount.value;
        const number = form.number.value;
        const coin = form.coin.value;
        const values = {amount, number, coin};
        console.log(values);
    }
    return (
        <div>
            <form onSubmit={handlePurchase} className="container flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-4 gap-6 p-6">
                    {/* <Toaster /> */}
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm font-bold">Amount(Dollar)</label>
                            <input type="number" value={dollars} readOnly name="amount" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm font-bold">Coin</label>
                            <input type="number" value={coins} readOnly name="coin" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm font-bold">Account No.</label>
                            <input type="number" placeholder="Account No." name="number" required className="w-full rounded-md p-2 border" />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button className="btn btn-block text-white font-bold transition ease-in delay-150 bg-[#26AE61] hover:-translate-y-1 hover:scale-100 shadow-md hover:text-black">Purchase</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;