import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiCoins1, CiUser } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState([])
    const [newUser, setNewUser] = useState([])
    const [withdraws, setWithDraws] = useState([])
    const [coinSum, setCoinSum] = useState(0);
    console.log(currentUser);
    const calculateSum = () => {
        return withdraws.reduce((total, item) => total + parseInt(item.amount, 10), 0);
    };
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    }, [])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/withdraws`)
            .then(res => res.json())
            .then(data => setWithDraws(data))
    }, [])
    // Calculate sum of withdraws coin value
    useEffect(() => {
        const sumOfCoins = withdraws.reduce((addCoin, value) => addCoin + parseInt(value.coin), 0);
        setCoinSum(sumOfCoins);
    }, [withdraws]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user.email}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [])
    let currentUserCoin = 0;
    console.log(currentUserCoin);
    
    // To Delete

    const handleDeleteTask = (_id) => {
        fetch(`${import.meta.env.VITE_API_URL}/withdraws/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Deleted Witdraw Successfully.")
                const remainingWithdraw = withdraws.filter(withdraw => withdraw._id !== _id)
                setWithDraws(remainingWithdraw)
            })
    }
    return (
        <div className="lg:p-0 p-7">
            <Toaster />
            <div className="lg:flex grid lg:space-y-0 space-y-5 ">
                <div className="card bg-neutral text-neutral-content lg:w-64 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <CiUser />
                            <p>Total Users: {newUser.length}</p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-64 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <CiCoins1 />
                            <p>Total Coins: {coinSum}</p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-68 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <MdOutlinePayment />
                            <p>Total Payments: {calculateSum()}</p>
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
                            <th>Withdraw Coin</th>
                            <th>Withdraw Amount</th>
                            <th>Payment Number</th>
                            <th>Payment System</th>
                            <th>Withdraw Time</th>
                            <th>Payment Success</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            withdraws.map(withdraw => <tr key={withdraw._id}>
                                <th></th>
                                <td>{withdraw.workerName}</td>
                                <td>{withdraw.coin}</td>
                                <td>{withdraw.amount}</td>
                                <td>{withdraw.number}</td>
                                <td>{withdraw.payment}</td>
                                <td>{withdraw.currentTime}</td>
                                <td><button onClick={() => handleDeleteTask(withdraw._id)} className="btn btn-success font-bold text-white">Success</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AdminHome;