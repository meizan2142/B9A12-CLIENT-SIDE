import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import DashBoard from "../DashBoard/DashPages/DashBoard";
import PrivateRoute from "./PrivateRoute";
import WorkerHome from "../DashBoard/DashRoutes/WorkerRoutes/WorkerHome";
import AdminHome from "../DashBoard/DashRoutes/AdminRoutes/AdminHome";
import ManageTask from "../DashBoard/DashRoutes/AdminRoutes/ManageTask";
import TaskCreatorHome from "../DashBoard/DashRoutes/TaskCreatorRoutes/TaskCreatorHome";
import MyTask from "../DashBoard/DashRoutes/TaskCreatorRoutes/MyTask";
import PurchaseCoin from "../DashBoard/DashRoutes/TaskCreatorRoutes/PurchaseCoin";
import PaymentHistory from "../DashBoard/DashRoutes/TaskCreatorRoutes/PaymentHistory";
import ManageUsers from "../DashBoard/DashRoutes/AdminRoutes/ManageRow/ManageUsers";
import AddNewTask from "../DashBoard/DashRoutes/TaskCreatorRoutes/AddNewTask";
import WorkerTaskList from "../DashBoard/DashRoutes/WorkerRoutes/TaskList/WorkerTaskList";
import TaskListDetails from "../DashBoard/DashRoutes/WorkerRoutes/TaskList/TaskListDetails";
import MySubmissions from "../DashBoard/DashRoutes/WorkerRoutes/MySubmissions";
import WithDrawals from "../DashBoard/DashRoutes/WorkerRoutes/WithDrawals/WithDrawals";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/topearners`)
            },
            {
                path: '/signin',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            // Worker's Routes
            {
                path: 'workerhome',
                element: <PrivateRoute><WorkerHome></WorkerHome></PrivateRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/addedtasks`)
            },
            {
                path: 'workertasklist',
                element: <WorkerTaskList></WorkerTaskList>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/addedtasks`)
            },
            {
                path: 'mysubmissions',
                element: <MySubmissions></MySubmissions>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/submissions`)
            },
            {
                path: 'withdrawals',
                element: <WithDrawals></WithDrawals>
            },
            {
                path: 'taskdetails/:id',
                element: <TaskListDetails></TaskListDetails>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/addedtasks/${params.id}`)
            },
            // Admin Routes
            {
                path: 'adminhome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'managetask',
                element: <ManageTask></ManageTask>
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/newuser`)
            },
            // TaskCreator Routes
            {
                path: 'taskcreatorhome',
                element: <TaskCreatorHome></TaskCreatorHome>
            },
            {
                path: 'addnewtasks',
                element: <AddNewTask />
            },
            {
                path: 'mytask',
                element: <MyTask />,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/addedtasks`)
            },
            {
                path: 'purchasecoin',
                element: <PurchaseCoin />,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/paymentinfo`)
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory />
            },
        ]
    },
]);

export default router;