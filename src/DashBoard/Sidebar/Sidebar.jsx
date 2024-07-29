import { useContext, useEffect, useState } from "react";
import {  Outlet } from "react-router-dom";
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
    }, [])
    return (
        <div className="lg:flex lg:w-[1400px] lg:mx-auto lg:justify-between lg:min-h-screen">
            {/* Sidebar */}
            <div className="border p-5 rounded-lg bg-[#171825] md:hidden hidden lg:inline-block space-y-20">
                {newUser.role === 'Worker' && <WorkerMenu />}
                {newUser.role === 'TaskCreator' && <TaskCreatorMenu />}
                {newUser.role === 'Admin' && <AdminMenu/>}
            </div>
            {/* Outlet */}
            <div className="lg:mr-32">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Sidebar;