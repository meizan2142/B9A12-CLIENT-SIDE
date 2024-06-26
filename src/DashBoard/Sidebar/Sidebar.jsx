import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex justify-between items-center">
            {/* Sidebar */}
            <div className="border p-5 rounded-lg bg-[#171825] md:hidden hidden lg:inline-block space-y-20">
                <div className="grid space-y-6">
                    <NavLink to='adminhome' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Admin Home</NavLink>
                    <NavLink to='manageusers' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Manage Users</NavLink>
                    <NavLink to='managetask' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Manage Task</NavLink>
                </div>
                <div className="grid space-y-6">
                    <NavLink to='workerhome' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Worker Home</NavLink>
                    <NavLink to='workertasklist' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Task List</NavLink>
                    <NavLink to='mysubmissions' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>My Submissions</NavLink>
                </div>
                <div className="grid space-y-6">
                    <NavLink to='taskcreatorhome' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>TaskCreator Home</NavLink>
                    <NavLink to='addnewtasks' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Add New Task</NavLink>
                    <NavLink to='mynewtask' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>My New Task</NavLink>
                    <NavLink to='purchasecoin' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Purchase Coin</NavLink>
                    <NavLink to='paymenthistory' className={({ isActive }) => isActive ? 'font-bold text-[#3456F2]' : 'text-[#3456F2]'}>Payment History</NavLink>
                </div>
            </div>
            {/* Outlet */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Sidebar;