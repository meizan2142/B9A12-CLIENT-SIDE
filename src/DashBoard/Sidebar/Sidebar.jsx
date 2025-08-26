import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import WorkerMenu from "../DashRoutes/WorkerRoutes/WorkerMenu/WorkerMenu";
import TaskCreatorMenu from "../DashRoutes/TaskCreatorRoutes/TaskCreatorMenu/TaskCreatorMenu";
import AdminMenu from "../DashRoutes/AdminRoutes/AdminMenu/AdminMenu";
const Sidebar = () => {
    const { user } = useContext(AuthContext)
    const [newUser, setNewUser] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/newuser/${user.email}`)
            .then(res => res.json())
            .then(data => setNewUser(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Sidebar - Hidden on mobile, shown from lg breakpoint */}
            <div className="hidden lg:block lg:w-64 xl:w-72 2xl:w-80 bg-[#171825] p-5 fixed h-full">
                {newUser.role === 'Worker' && <WorkerMenu />}
                {newUser.role === 'TaskCreator' && <TaskCreatorMenu />}
                {newUser.role === 'Admin' && <AdminMenu />}
            </div>

            {/* Mobile menu toggle button - shown only on mobile */}
            <button className="lg:hidden p-4 bg-[#171825] text-white">
                {/* Hamburger icon or "Menu" text */}
                Menu
            </button>

            {/* Content area with responsive padding */}
            <div className="flex-1 lg:ml-64 xl:ml-72 2xl:ml-80 p-4 md:p-6 lg:p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Sidebar;