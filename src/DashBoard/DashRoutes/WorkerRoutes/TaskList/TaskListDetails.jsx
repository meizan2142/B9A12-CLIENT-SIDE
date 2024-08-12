import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const TaskListDetails = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const singleTaskDetails = useLoaderData()
    const { title, detail, amount, currentTime } = singleTaskDetails;
    const { user } = useContext(AuthContext);
    const [newUser, setNewUser] = useState([])
    const {email, name} = newUser;
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user?.email}`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    }, [user?.email])
    const hanldeSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const details = detail;
        const image = form.image.files[0];
        const formData = new FormData()
        formData.append('image', image)
        const payableAmount = amount
        const status = "Pending";
        const title2 = title;
        const currentDate = currentTime;
        const workerEmail = email;
        const workerName = name;
        const creatorName = name;
        const creatorEmail = email;
        const submissions = { details, image, payableAmount, currentDate, title2, status, workerEmail, workerName, creatorEmail, creatorName }
        fetch(`${import.meta.env.VITE_API_URL}/submissions`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(submissions)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Inserted On Submission Collection!')
                    navigate(location?.state ? location?.state : '/dashboard/mysubmissions')
                }
            })
    }
    return (
        <div>
            <section
                className="p-6 shadow-lg rounded-lg lg:mt-10 mt-5 lg:mr-24 ">
                <form onSubmit={hanldeSubmit} className="container flex flex-col mx-auto space-y-12">
                    <div className="grid grid-cols-4 gap-6 p-6">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm font-bold">Submission Details</label>
                                <textarea className="textarea textarea-bordered w-full rounded-md p-2  border mt-2" name="details" placeholder="Submission Details"></textarea>
                            </div>
                            <div className="col-span-full sm:col-span-3 grid space-y-1">
                                <label htmlFor="lastname" className="text-sm font-bold">Task Image URL</label>
                                <input type="file" name="image" className="file-input file-input-bordered  text-black" />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <button className="btn btn-block text-white font-bold transition ease-in delay-150 bg-[#26AE61] hover:-translate-y-1 hover:scale-100 shadow-md hover:text-black">Submit</button>
                        </div>
                    </div>
                </form>
                <div>
                    <Toaster />
                </div>
            </section>
        </div>
    );
};

export default TaskListDetails;