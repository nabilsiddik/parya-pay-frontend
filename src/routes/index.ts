import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Home from "@/pages/Home";
import AddMoney from "@/pages/transaction/AddMoney";
import CashIn from "@/pages/transaction/CashIn";
import CashOut from "@/pages/transaction/CashOut";
import SendMoney from "@/pages/transaction/SendMoney";
import WithdrawMoney from "@/pages/transaction/WithdrawMoney";
import { createBrowserRouter } from "react-router-dom";

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
                path: 'add-money',
                Component: AddMoney
            },
            {
                path: 'withdraw-money',
                Component: WithdrawMoney
            },
            {
                path: 'send-money',
                Component: SendMoney
            },
            {
                path: 'cash-in',
                Component: CashIn
            },
            {
                path: 'cash-out',
                Component: CashOut
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