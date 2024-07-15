import { NavLink } from "react-router-dom";

const TaskListCard = ({ taskInfo }) => {
    const { title, userName, date, quantity, amount, _id } = taskInfo;
    return (
        <div className="card bg-base-100 lg:w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold">{userName}</p>
                <p className="font-bold mt-2">Completion-Date: {date}</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="font-bold">Task Quantity: {quantity}</p>
                    <p className="font-bold">Payable Amount: {amount}</p>
                </div>
                <div className="card-actions justify-end">
                    <NavLink to={`/dashboard/taskdetails/${_id}`} className="btn bg-[#26AE61] text-white font-bold">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default TaskListCard;