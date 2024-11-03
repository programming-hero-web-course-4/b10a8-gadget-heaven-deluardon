import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Dashboard from "../Page/Dashboard";
import Statistics from "../Page/Statistics";

const routes=createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path: "*",
                element: <h1>Not Found</h1>
            }
        ]
    }
])
export default routes;