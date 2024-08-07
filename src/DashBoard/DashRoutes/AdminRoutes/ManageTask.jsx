import {  useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { NavLink, useLoaderData } from "react-router-dom";
const ManageTask = () => {
    const manageTask = useLoaderData([])
    const [tasks, setTasks] = useState(manageTask);
    
    // Delete a single Task
    const handleDeleteTask = (_id) => {
        fetch(`${import.meta.env.VITE_API_URL}/addedtasks/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Deleted Task Successfully.")
                const remainingTask = tasks.filter(task => task._id !== _id)
                setTasks(remainingTask)
            })
    }
    return (
        <div className="lg:mr-20">
            <Toaster />
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
                        {
                            manageTask.map((task, index) => <tr key={task._id}>
                                <th>{index + 1}</th>
                                <td>{task.title}</td>
                                <td>{task.userName}</td>
                                <td>{task.quantity}</td>
                                <td>10</td>
                                <td>{task.date}</td>
                                <td>
                                    <div>
                                        <NavLink  to={`/dashboard/viewmanagetaskdetail/${task._id}`}>
                                            <button>Open Modal</button>
                                        </NavLink>
                                    </div>
                                </td>
                                <td><button onClick={() => handleDeleteTask(task._id)}><MdDelete className="w-5 h-5" /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTask;