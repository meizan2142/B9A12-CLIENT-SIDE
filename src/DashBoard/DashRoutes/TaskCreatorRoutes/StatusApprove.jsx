import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const StatusApprove = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const submissionReject = useLoaderData([])
    const handleApprove = (e) => {
        e.preventDefault()
        const form = e.target;
        const status = form.status.value;
        const changedStatus = { status }
        fetch(`${import.meta.env.VITE_API_URL}/submissions/${submissionReject._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(changedStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Status Updated Succesfully')
                    navigate(location?.state ? location?.state : '/dashboard/taskcreatorhome')
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleApprove} className="container flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-4 gap-6 p-6">
                    <Toaster />
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Submission Status(Approved)</label>
                            <input type="text" placeholder="Write Approved" name="status" className="w-full rounded-md p-2 border" />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button className="btn btn-block text-white font-bold transition ease-in delay-150 bg-[#26AE61] hover:-translate-y-1 hover:scale-100 shadow-md hover:text-black">Approved</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default StatusApprove;