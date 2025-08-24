import AllUsers from "@/pages/admin/AllUsers";
import Analytics from "@/pages/admin/Analytics";
import AgentAnalytics from "@/pages/agent/AgentAnalytics";
import AddMoney from "@/pages/transaction/AddMoney";
import CashIn from "@/pages/transaction/CashIn";
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
            }
        ],
    },
    {
        title: "Transactions",
        icon: SquareTerminal,
        isActive: true,
        items: [
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