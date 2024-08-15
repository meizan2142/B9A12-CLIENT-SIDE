import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";

const MyTask = () => {
    const { user } = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState([])
    const addedTasks = useLoaderData()
    const [tasks, setTasks] = useState(addedTasks);
    console.log(currentUser);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user.email}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [])
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
        <div className="overflow-x-auto">
            <Toaster />
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
                        addedTasks.map((addedTask, index) => <tr key={addedTask._id}>
                            <td>{index + 1}</td>
                            <th>{addedTask.title}</th>
                            <td>{addedTask.quantity}</td>
                            <td>{addedTask.amount}</td>
                            <td><NavLink to={`/dashboard/updatetask/${addedTask._id}`}><FaPen /></NavLink></td>
                            <td><button onClick={() => handleDeleteTask(addedTask._id)}><MdDelete /></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyTask;