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
import PurchaseCoin from "../DashBoard/DashRoutes/TaskCreatorRoutes/PurchaseCoin";
import PaymentHistory from "../DashBoard/DashRoutes/TaskCreatorRoutes/PaymentHistory";
import ManageUsers from "../DashBoard/DashRoutes/AdminRoutes/ManageRow/ManageUsers";
import AddNewTask from "../DashBoard/DashRoutes/TaskCreatorRoutes/AddNewTask";
import WorkerTaskList from "../DashBoard/DashRoutes/WorkerRoutes/TaskList/WorkerTaskList";
import TaskListDetails from "../DashBoard/DashRoutes/WorkerRoutes/TaskList/TaskListDetails";
import MySubmissions from "../DashBoard/DashRoutes/WorkerRoutes/MySubmissions";
import WithDrawals from "../DashBoard/DashRoutes/WorkerRoutes/WithDrawals/WithDrawals";
import MyTask from "../DashBoard/DashRoutes/TaskCreatorRoutes/TaskCreatorMenu/MyTask/MyTask";
import UpdateTask from "../DashBoard/DashRoutes/TaskCreatorRoutes/TaskCreatorMenu/MyTask/UpdateTask";
import PaymentForm from "../DashBoard/DashRoutes/TaskCreatorRoutes/TaskCreatorComponents/PaymentForm";
import ViewManageTask from "../DashBoard/DashRoutes/AdminRoutes/ManageRow/ViewManageTask";
import UpdateRole from "../DashBoard/DashRoutes/AdminRoutes/UpdateRole";
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
                element: <PrivateRoute><WorkerHome></WorkerHome></PrivateRoute>
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
                element: <ManageTask></ManageTask>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/addedtasks`)
            },
            {
                path: 'viewmanagetaskdetail/:id',
                element: <ViewManageTask/>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/addedtasks/${params.id}`)
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/newuser`)
            },
            {
                path: 'updaterole/:email',
                element: <UpdateRole/>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/newuser/${params.email}`)
            },
            // TaskCreator Routes
            {
                path: 'taskcreatorhome',
                element: <TaskCreatorHome></TaskCreatorHome>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/addedtasks`)
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
                path: 'updatetask/:id',
                element: <UpdateTask/>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/addedtasks/${params.id}`)
            },
            {
                path: 'purchasecoin',
                element: <PurchaseCoin />,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/paymentinfo`)
            },
            {
                path: 'paymentform/:id',
                element: <PaymentForm/>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/paymentinfo/${params.id}`)
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory />
            },
        ]
    },
]);

export default router;