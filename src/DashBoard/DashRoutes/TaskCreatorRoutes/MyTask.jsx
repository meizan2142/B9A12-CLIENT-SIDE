import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const MyTask = () => {
    const addedTasks = useLoaderData()
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
                    {
                        addedTasks.map(addedTask => <tr key={addedTask._id}>
                            <td></td>
                            <th>{addedTask.title}</th>
                            <td>{addedTask.quantity}</td>
                            <td>{addedTask.amount}</td>
                            <td><FaPen /></td>
                            <td><MdDelete /></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyTask;