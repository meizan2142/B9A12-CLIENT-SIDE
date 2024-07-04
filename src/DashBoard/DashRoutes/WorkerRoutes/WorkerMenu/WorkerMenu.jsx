import MenuItems from "../../../Sidebar/Menu/MenuItems";

const WorkerMenu = () => {
    return (
        <div className="grid space-y-6">
            <MenuItems label='Worker Home' address='workerhome'></MenuItems>
            <MenuItems label='Task List' address='workertasklist'></MenuItems>
            <MenuItems label='My Submissions' address='mysubmissions'></MenuItems>
        </div>
    );
};

export default WorkerMenu;