import { useLoaderData } from "react-router-dom";

const WorkerHome = () => {
    const taskInfo = useLoaderData()
    // const { title, userName, amount } = taskInfo;
    return (
        <div>
            {/* Stats */}
            <div className="lg:flex grid lg:space-y-0 space-y-5">
                <div className="card bg-neutral text-neutral-content lg:w-72 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Total Submission: 1000000</p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-72 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Available Coins: 1000000</p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-72 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Total Earning: 1000000</p>
                        </h1>
                    </div>
                </div>
            </div>
            {/* WithDraw Request */}
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Title</th>
                            <th>Payable Amount</th>
                            <th>Creator Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            taskInfo.map(task => <tr key={task._id}>
                                <th></th>
                                <td>{task.title}</td>
                                <td>{task.amount}</td>
                                <td>{task.userName}</td>
                                <td><p className="bg-[#26AE61] text-center rounded-lg text-white font-bold p-1">Approved</p></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WorkerHome;