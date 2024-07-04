import MenuItems from "../../../Sidebar/Menu/MenuItems";

const AdminMenu = () => {
    return (
        <div className="grid space-y-6">
            <MenuItems label='Admin Home' address='adminhome'></MenuItems>
            <MenuItems label='Manage Users' address='manageusers'></MenuItems>
            <MenuItems label='Manage Tasks' address='managetask'></MenuItems>
        </div>
    );
};

export default AdminMenu;