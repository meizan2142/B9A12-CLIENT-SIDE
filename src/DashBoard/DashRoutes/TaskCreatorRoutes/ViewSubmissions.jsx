import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";

const ViewSubmissions = () => {
    const allSubmissions = useLoaderData([])
    const { status, title2, name, currentDate } = allSubmissions;
    return (
        <div className="card bg-[#2B3440] text-primary-content lg:w-96">
            <div className="card-body">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="card-title">{title2}</h2>
                    <NavLink to='/dashboard/taskcreatorhome'>
                        <div className="text-base text-info flex justify-end items-center gap-1 mr-10">
                            <FaLongArrowAltLeft />
                            <p>Back</p>
                        </div>
                    </NavLink>
                </div>
                <div className="flex items-center">
                    <p className="font-bold">{name}</p>
                    <p>Status: <span className="font-bold">{status}</span></p>
                </div>
                <p>Submission Time: <span className="font-bold">{currentDate}</span></p>
            </div>
        </div>
    );
};

export default ViewSubmissions;