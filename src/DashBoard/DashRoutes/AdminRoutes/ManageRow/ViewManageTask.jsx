import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";

const ViewManageTask = () => {
    const manageTask = useLoaderData([]);
    const [manage, setManage] = useState(manageTask);
    const {title, detail, userEmail, currentTime} = manage;
    return (
        <div className="card bg-[#2B3440] text-primary-content w-96">
            <div className="card-body">
                <div className="flex items-center justify-between">
                <h2 className="card-title">{title}</h2>
                <NavLink to='/dashboard/managetask'>
                    <div className="text-xs text-info flex justify-end items-center gap-1 mr-10">
                        <FaLongArrowAltLeft />
                        <p>Back</p>
                    </div>
                </NavLink>
                </div>
                <p>{detail}</p>
                <div className="space-y-3">
                    <p className="font-bold">Email: {userEmail}</p>
                    <p className="font-bold">Current Time: {currentTime}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewManageTask;