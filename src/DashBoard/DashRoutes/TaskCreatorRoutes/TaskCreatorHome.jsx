const TaskCreatorHome = () => {
    return (
        <div>
            {/* Stats */}
            <div className="lg:flex grid lg:space-y-0 space-y-5">
                <div className="card bg-neutral text-neutral-content lg:w-64 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Pending Task: </p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-68 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Available Coins: 1000000</p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-68 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Total Payments: 1000000</p>
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
                            <th>Worker Name</th>
                            <th>Worker Email</th>
                            <th>Task Title</th>
                            <th>Payable Amount</th>
                            <th>View Submission</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>
                                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>View Submission</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                    </div>
                                </dialog>
                            </td>
                            <td><button className="btn btn-success">Approve</button></td>
                            <td><button className="btn btn-success">Reject</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskCreatorHome;