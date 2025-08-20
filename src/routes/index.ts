import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout
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