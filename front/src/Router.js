import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import App from "./App";
import DefaultLayout from "./Layouts/DefaultLayout";
import UserLayout from "./Layouts/UserLayout";
import UpcomingEvents from './Events/UpcomingEvents/UpcomingEvents';
import About from './Components/About/AboutUs';
import Contact from './Components/Contact/Contact';
import Search from './Views/Search/Search';

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/upcoming", element: <UpcomingEvents /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/search", element: <Search /> },
]);


export default router;
