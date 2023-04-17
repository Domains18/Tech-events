import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import UserLayout from "./Layouts/UserLayout";
import UpcomingEvents from './Events/UpcomingEvents/UpcomingEvents';
const router = createBrowserRouter([
    {
        path: "/", element: <DefaultLayout />,
        Children: [
            {path: "/upcoming", element: <UpcomingEvents/>},
        ]
    }
]);


export default router;
