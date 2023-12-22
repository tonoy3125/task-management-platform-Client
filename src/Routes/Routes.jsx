import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from './../Pages/Login/Login';
import Register from './../Pages/Register/Register';
import DrawerLayout from "../Layout/DashBoard/DrawerLayout";
import NewTask from "../Pages/DashBoard Page/NewTask/NewTask";
import EditTask from "../Pages/DashBoard Page/NewTask/EditTask";
import PrivateRoute from "./PrivateRoute";
import Contact from './../Pages/Contact/Contact';
import ErrorElement from "../Layout/ErrorElement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DrawerLayout></DrawerLayout></PrivateRoute>,
        children: [
            {
                path: "newtask",
                element: <NewTask></NewTask>
            },
            {
                path: "edittask",
                element: <EditTask></EditTask>
            },
        ]
    }
]);

export default router