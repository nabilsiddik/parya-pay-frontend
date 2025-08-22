import AllUsers from "@/pages/admin/AllUsers";
import Analytics from "@/pages/admin/Analytics";
import BecomeAgent from "@/pages/user/BecomeAgent";
import { SquareTerminal } from "lucide-react";

export const userSidebarRoutes = [
    {
        title: "User Dashboard",
        icon: SquareTerminal,
        isActive: true,
        items: [
            {
                title: "Analytics",
                url: "/user/analytics",
                component: Analytics
            }
        ],
    },
    {
        title: "Transactions",
        icon: SquareTerminal,
        isActive: true,
        items: [
            {
                title: "My Transactions",
                url: "/user/all-users",
                component: AllUsers
            }
        ],
    },
    {
        title: "Applications",
        icon: SquareTerminal,
        isActive: true,
        items: [
            {
                title: "Become Agent",
                url: "/user/become-agent",
                component: BecomeAgent
            }
        ],
    },
]