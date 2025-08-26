import { Role } from "@/constants/role";
import DashboardLayout from "@/layouts/DashboardLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Home from "@/pages/Home";
import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import withAuth from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { adminSidebarRoutes } from "./adminSidebarRoutes";
import { agentSidebarRoutes } from "./agentSidebarRoutes";
import { userSidebarRoutes } from "./userSidebarRoutes";
import About from "@/pages/About";
import Transactions from "@/pages/Transactions";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Features from "@/pages/Features";
import FAQ from "@/pages/FAQ";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/transactions',
                Component: Transactions
            },
            {
                path: '/pricing',
                Component: Pricing
            },
            {
                path: '/features',
                Component: Features
            },
            {
                path: '/faq',
                Component: FAQ
            },
            {
                path: '/contact',
                Component: Contact
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
    },
    {
        path: '/admin',
        Component: withAuth(DashboardLayout, Role.ADMIN as TRole),
        children: [
            {
                index: true,
                element: <Navigate to={'/admin/analytics'} />
            },
            ...generateRoutes(adminSidebarRoutes)
        ]
    },
    {
        path: '/agent',
        Component: withAuth(DashboardLayout, Role.AGENT as TRole),
        children: [
            {
                index: true,
                element: <Navigate to={'/agent/analytics'} />
            },
            ...generateRoutes(agentSidebarRoutes)
        ]
    },
    {
        path: '/user',
        Component: withAuth(DashboardLayout, Role.USER as TRole),
        children: [
            {
                index: true,
                element: <Navigate to={'/user/analytics'} />
            },
            ...generateRoutes(userSidebarRoutes)
        ]
    }
])


export default router