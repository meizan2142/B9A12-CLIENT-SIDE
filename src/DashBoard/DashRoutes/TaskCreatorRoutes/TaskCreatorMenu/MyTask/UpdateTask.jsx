import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
const UpdateTask = () => {
    const [newUser, setNewUser] = useState([])
    const tasks = useLoaderData()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    }, [])
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const detail = form.detail.value;
        const amount = form.amount.value;
        const info = form.info.value;
        const quantity = form.quantity.value;
        const date = form.date.value;
        const update = { title, detail, amount, info, quantity, date }
        if (quantity * amount > newUser.length) {
            toast.error("Not available Coin. Purchase Coin")
        }
        else {
            fetch(`${import.meta.env.VITE_API_URL}/addedtasks/${tasks._id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(update)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Task Updated Succesfully')
                        navigate(location?.state ? location?.state : '/dashboard/mytask')
                    }
                })
        }
    }
    return (
        <div>
            <form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-4 gap-6 p-6">
                    <Toaster />
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Task Title</label>
                            <input type="text" placeholder="Task Title" name="title" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Task Detail</label>
                            <input type="text" placeholder="Task Detail" name="detail" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Payable Amount</label>
                            <input type="number" placeholder="Payable Amount" name="amount" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Submission Info</label>
                            <input type="text" placeholder="Submission Info" name="info" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Task Quantity</label>
                            <input type="number" name="quantity" placeholder="Task Quantity" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Completion Date</label>
                            <input type="date" name="date" className="w-full rounded-md p-2 border" />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button className="btn btn-block text-white font-bold transition ease-in delay-150 bg-[#26AE61] hover:-translate-y-1 hover:scale-100 shadow-md hover:text-black">Update Task</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;