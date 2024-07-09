import MenuItems from "../../../Sidebar/Menu/MenuItems";

const TaskCreatorMenu = () => {
    return (
        <div className="grid space-y-6">
            <MenuItems label='TaskCreator Home' address='taskcreatorhome'></MenuItems>
            <MenuItems label='Add New Task' address='addnewtasks'></MenuItems>
            <MenuItems label='My Task' address='mytask'></MenuItems>
            <MenuItems label='Purchase Coin' address='purchasecoin'></MenuItems>
            <MenuItems label='Payment History' address='paymenthistory'></MenuItems>
        </div>
    );
};

export default TaskCreatorMenu;