import { useLoaderData } from "react-router-dom";
import ManageRow from "./ManageRow";

const ManageUsers = () => {
    const workerDetails = useLoaderData()
    return (
        // Only show worker details
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Coin</th>
                            <th>Update Role</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            workerDetails.filter(w => w.role === 'Worker').map(worker => <ManageRow key={worker._id} worker={worker}></ManageRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;