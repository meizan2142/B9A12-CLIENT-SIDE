import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import DashBoard from "../DashBoard/DashPages/DashBoard";
import PrivateRoute from "./PrivateRoute";
import WorkerHome from "../DashBoard/DashRoutes/WorkerRoutes/WorkerHome";
import WorkerTaskList from "../DashBoard/DashRoutes/WorkerRoutes/WorkerTaskList";
import MySubmissions from "../DashBoard/DashRoutes/WorkerRoutes/MySubmissions";
import AdminHome from "../DashBoard/DashRoutes/AdminRoutes/AdminHome";
import ManageTask from "../DashBoard/DashRoutes/AdminRoutes/ManageTask";
import ManageUsers from "../DashBoard/DashRoutes/AdminRoutes/ManageUsers";
import TaskCreatorHome from "../DashBoard/DashRoutes/TaskCreatorRoutes/TaskCreatorHome";
import AddNewTask from "../DashBoard/DashRoutes/TaskCreatorRoutes/AddNewTask";
import MyTask from "../DashBoard/DashRoutes/TaskCreatorRoutes/MyTask";
import PurchaseCoin from "../DashBoard/DashRoutes/TaskCreatorRoutes/PurchaseCoin";
import PaymentHistory from "../DashBoard/DashRoutes/TaskCreatorRoutes/PaymentHistory";


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
            // Worker's Routers
            {
                path: 'workerhome',
                element: <WorkerHome></WorkerHome>
            },
            {
                path: 'workertasklist',
                element: <WorkerTaskList></WorkerTaskList>
            },
            {
                path: 'mysubmissions',
                element: <MySubmissions></MySubmissions>
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
                element: <ManageUsers></ManageUsers>
            },
            // TaskCreator Routes
            {
                path: 'taskcreatorhome',
                element: <TaskCreatorHome></TaskCreatorHome>
            },
            {
                path: 'addnewtasks',
                element: <AddNewTask/>
            },
            {
                path: 'mynewtask',
                element: <MyTask/>
            },
            {
                path: 'purchasecoin',
                element: <PurchaseCoin/>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory/>
            },
        ]
    },
]);

export default router;