import { useLoaderData } from "react-router-dom";

const PaymentForm = () => {
    const pay = useLoaderData([])
    console.log(pay);
    return (
        <div>
            <form className="container flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-4 gap-6 p-6">
                    {/* <Toaster /> */}
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Task Title</label>
                            <input type="text" placeholder="Task Title" name="title" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Task Title</label>
                            <input type="text" placeholder="Task Title" name="title" className="w-full rounded-md p-2 border" />
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