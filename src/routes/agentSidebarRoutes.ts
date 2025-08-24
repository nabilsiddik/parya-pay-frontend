import AgentAnalytics from "@/pages/agent/AgentAnalytics";
import Profile from "@/pages/Profile";
import AddMoney from "@/pages/transaction/AddMoney";
import CashIn from "@/pages/transaction/CashIn";
import MyTransactions from "@/pages/user/MyTransactions";
import { SquareTerminal } from "lucide-react";

export const agentSidebarRoutes = [
    {
        title: "Agent Dashboard",
        icon: SquareTerminal,
        isActive: true,
        items: [
            {
                title: "Analytics",
                url: "/agent/analytics",
                component: AgentAnalytics
            },
            {
                title: "Profile",
                url: "/agent/profile",
                component: Profile
            }
        ],
    },
    {
        title: "Transactions",
        icon: SquareTerminal,
        isActive: true,
        items: [
            {
                title: "All Transactions",
                url: "/agent/all-transactions",
                component: MyTransactions
            },
            {
                title: "Add Money",
                url: "/agent/add-money",
                component: AddMoney
            },
            {
                title: "Cash In",
                url: "/agent/cash-in",
                component: CashIn
            },
        ],
    },
]