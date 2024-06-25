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
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/newuser`),
        children: [
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
        ]
    },
]);

export default router;