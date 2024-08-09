import { MdDelete } from "react-icons/md";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa";

const ManageRow = ({ worker }) => {
    const { displayURL, name, email, role, coins } = worker;
    const [tasks, setTasks] = useState([]);
    const handleDelete = () => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${email}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Deleted Task Successfully.")
                const remainingTask = tasks.filter(task => task.email !== email)
                setTasks(remainingTask)
            })
    }
    return (
        <tr>
            <td></td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={displayURL}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <Toaster />
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>{role}</td>
            <td>{coins}</td>
            <th>
                <td><NavLink to={`/dashboard/updaterole/${email}`}><FaPen /></NavLink></td>
            </th>
            <td><button onClick={() => { handleDelete(tasks._id) }}><MdDelete className="w-5 h-5" /></button></td>
        </tr>
    );
};

export default ManageRow;