import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const WorkerHome = () => {
    const { user } = useContext(AuthContext);
    const [newUser, setNewUser] = useState([])
    const [amounts, setAmounts] = useState([])
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
    const calculateTotalAmount = () => {
        return amounts.reduce((sum, value) => sum + parseFloat(value.payableAmount), 0);
    };
    return (
        <div>
            {/* Stats */}
            <div className="lg:flex grid lg:space-y-0 space-y-5">
                <div className="card bg-neutral text-neutral-content lg:w-72 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Total Submission: {amounts.length}</p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-72 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Available Coins: {newUser.coins}</p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-72 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <p>Total Earning: {calculateTotalAmount()}</p>
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
                            amounts.map(amount => <tr key={amount._id}>
                                <th></th>
                                <td>{amount.title2}</td>
                                <td>{amount.payableAmount}</td>
                                <td>{amount.name}</td>
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