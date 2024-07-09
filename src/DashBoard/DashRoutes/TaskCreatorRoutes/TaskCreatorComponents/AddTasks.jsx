import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const AddTasks = () => {
    const { user } = useContext(AuthContext)
    const [newUser, setNewUser] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    }, [])
    const handleAddTask = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const detail = form.detail.value;
        const amount = form.amount.value;
        const info = form.info.value;
        const quantity = form.quantity.value;
        const date = form.date.value;
        const userEmail = user.email;
        const userName = user.displayName;
        const currentTime = new Date().toLocaleDateString();
        const image = form.image.files[0];
        const formData = new FormData()
        formData.append('image', image)
        const newTask = { title, detail, amount, info, quantity, date, image, userEmail, userName, currentTime }
        if (quantity * amount > newUser.length) {
            toast.error("Not available Coin. Purchase Coin")
        }
        else {
            fetch(`${import.meta.env.VITE_API_URL}/addedtasks`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newTask)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('Task Added Successfully!')
                        navigate(location?.state ? location?.state : '/dashboard/mytask')
                    }
                })
        }
    }
    return (
        <section
            className="p-6 shadow-lg rounded-lg lg:mt-10 mt-5 lg:mr-24 ">
            <form onSubmit={handleAddTask} className="container flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-4 gap-6 p-6">
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
                            <input type="text" placeholder="Job Title" name="info" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Task Quantity</label>
                            <input type="number" name="quantity" placeholder="Task Quantity" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Completion Date</label>
                            <input type="date" name="date" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3 grid space-y-1">
                            <label htmlFor="lastname" className="text-sm font-bold">Task Image</label>
                            <input type="file" name="image" className="file-input file-input-bordered  text-black" />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button className="btn btn-block text-white font-bold transition ease-in delay-150 bg-[#26AE61] hover:-translate-y-1 hover:scale-100 shadow-md hover:text-black">Add Task</button>
                    </div>
                </div>
            </form>
            <div>
                <Toaster />
            </div>
        </section>
    );
};

export default AddTasks;