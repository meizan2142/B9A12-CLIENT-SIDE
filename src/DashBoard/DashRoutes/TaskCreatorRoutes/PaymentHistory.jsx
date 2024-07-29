import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const PaymentHistory = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Task Title</th>
                        <th>Task Count</th>
                        <th>Payable Amount</th>
                        <th>Update Task</th>
                        <th>Delete Task</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th></th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td><FaPen /></td>
                        <td><MdDelete /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;