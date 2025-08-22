import AllUsers from "@/pages/admin/AllUsers";
import Analytics from "@/pages/admin/Analytics";
import { SquareTerminal } from "lucide-react";

export const agentSidebarRoutes = [
    {
        title: "Agent Dashboard",
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
            }
        ],
    },
]