import { useEffect, useState } from "react";
import { CiCoins1, CiUser } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";

const AdminHome = () => {
    const [newUser, setNewUser] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser`)
            .then(res => res.json())
            .then(data => setNewUser(data))
    }, [])
    console.log(newUser);
    return (
        <div className="lg:p-0 p-7">
            {/* Stats */}
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
                            <p>Total Coins: {newUser.coins}</p>
                        </h1>
                    </div>
                </div>
                <div className="card bg-neutral text-neutral-content lg:w-68 lg:mr-10">
                    <div className="card-body items-center text-center">
                        <h1 className="font-bold flex items-center gap-1">
                            <MdOutlinePayment />
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
                            <th>Withdraw Coin</th>
                            <th>Withdraw Amount</th>
                            <th>Payment Number</th>
                            <th>Payment System</th>
                            <th>Withdraw Time</th>
                            <th>Payment Success</th>
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
                            <td>Blue</td>
                            <td>Blue</td>
                            <td><button className="btn btn-success">Success</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AdminHome;