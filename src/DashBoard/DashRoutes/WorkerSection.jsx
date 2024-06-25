import { NavLink, Outlet } from "react-router-dom";
import WorkerHome from "./WorkerRoutes/WorkerHome";
import WorkerTaskList from "./WorkerRoutes/WorkerTaskList";
import MySubmissions from "./WorkerRoutes/MySubmissions";
const WorkerSection = () => {
    const isAdmin = true;
    const isWorker = true;
    return (
        <div>
            <div className="flex justify-between min-h-screen mx-10">
                <div className="border p-5 rounded-lg bg-[#171825]">
                    {
                        isAdmin ?
                            <div className="grid space-y-6">
                                <NavLink to='workerhome' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Admin Home</NavLink>
                                <NavLink to='workertasklist' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Manage Users</NavLink>
                                <NavLink to='mysubmissions' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Manage Task</NavLink>
                            </div>
                            :
                            <>
                                {
                                    isWorker ?
                                        <>
                                            <NavLink to='workerhome' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}><WorkerHome></WorkerHome></NavLink>
                                            <NavLink to='workertasklist' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}><WorkerTaskList></WorkerTaskList></NavLink>
                                            <NavLink to='mysubmissions' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}><MySubmissions></MySubmissions></NavLink>
                                        </>
                                        :
                                        <>
                                            <NavLink to='workerhome' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>TaskCreator Home</NavLink>
                                            <NavLink to='workertasklist' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Add New Tasks</NavLink>
                                            <NavLink to='mysubmissions' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>My Task</NavLink>
                                            <NavLink to='mysubmissions' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Purchase Coin</NavLink>
                                            <NavLink to='mysubmissions' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Payment History</NavLink>
                                        </>
                                }
                            </>
                    }
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default WorkerSection;