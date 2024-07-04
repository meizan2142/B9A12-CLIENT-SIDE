import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
const ManageTask = () => {

    return (
        <div className="lg:mr-20">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Title</th>
                            <th>TaskCreator Name</th>
                            <th>Task Count</th>
                            <th>Coin Needed</th>
                            <th>Availability</th>
                            <th>View Task</th>
                            <th>Delete Task</th>
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
                            <td><GrView className="w-5 h-5"/></td>
                            <td><MdDelete className="w-5 h-5"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTask;