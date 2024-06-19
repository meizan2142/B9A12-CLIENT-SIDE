import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import DashBoard from "../DashBoard/DashPages/DashBoard";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/topearners')
            },
            {
                path: '/signin',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            },
        ]
    },
]);

export default router;