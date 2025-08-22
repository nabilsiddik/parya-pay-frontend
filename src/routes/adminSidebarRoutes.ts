import AllAgents from "@/pages/admin/AllAgents";
import AllTransactions from "@/pages/admin/AllTransactions";
import AllUsers from "@/pages/admin/AllUsers";
import Analytics from "@/pages/admin/Analytics";
import { SquareTerminal } from "lucide-react";

export const adminSidebarRoutes = [
    {
        title: "Admin Dashboard",
        icon: SquareTerminal,
        isActive: true,
        items: [
            {
                title: "Analytics",
                url: "/admin/analytics",
                component: Analytics
            }
        ],
    },
    {
        title: "Users",
        icon: SquareTerminal,
        isActive: true,
        items: [
            {
                title: "All Users",
                url: "/admin/all-users",
                component: AllUsers
            },
            {
                title: "All Agents",
                url: "/admin/all-agents",
                component: AllAgents
            }
        ],
    },
    {
        title: "Transaction",
        icon: SquareTerminal,
        isActive: true,
        items: [
            {
                title: "All Transactions",
                url: "/admin/all-transactions",
                component: AllTransactions
            }
        ],
    },
]