import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import ViewSubmissionModal from "./TaskCreatorComponents/ViewSubmissionModal";
const TaskCreatorHome = () => {
    const { user } = useContext(AuthContext);
    const [newUser, setNewUser] = useState([])
    const { coins } = newUser;
    const [amounts, setAmounts] = useState([])
    const tasks = useLoaderData([])
    const [dataState, setDataState] = useState(tasks);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user.email}`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    }, [])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/submissions`)
            .then(res => res.json())
            .then(data => setAmounts(data))
    }, [])
    const totalQuantity = useMemo(() => {
        return dataState.reduce((accu, item) => accu + parseInt(item.quantity, 10), 0);
    }, [dataState]);
    return (
        <div>
            {/* Stats */}
            <div className="lg:flex grid lg:space-y-0 space-y-5 p-5 lg:p-0">
                <div className="card bg-neutral text-neutral-content lg:w-64 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Pending Task: {totalQuantity}</p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-68 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Available Coins: {coins}</p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-68 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Total Payments: </p>
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
                        {
                            amounts.map(am => <tr key={am._id}>
                                <th></th>
                                <td>{am.name}</td>
                                <td>{am.email}</td>
                                <td>{am.title2}</td>
                                <td>{am.payableAmount}</td>
                                <td>
                                    <ViewSubmissionModal />
                                </td>
                                <td><button className="btn btn-success text-white font-bold">Approve</button></td>
                                <td><button className="btn btn-success text-white font-bold">Reject</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskCreatorHome;