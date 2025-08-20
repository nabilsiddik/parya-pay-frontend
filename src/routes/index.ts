import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout, 
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/signup',
        Component: SignUp
    }
])


export default router