import Profile from "@/pages/Profile";
import AddMoney from "@/pages/transaction/AddMoney";
import CashOut from "@/pages/transaction/CashOut";
import SendMoney from "@/pages/transaction/SendMoney";
import WithdrawMoney from "@/pages/transaction/WithdrawMoney";
import BecomeAgent from "@/pages/user/BecomeAgent";
import MyTransactions from "@/pages/user/MyTransactions";
import UserAnalytics from "@/pages/user/UserAnalytics";
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
                component: UserAnalytics
            },
            {
                title: "Profile",
                url: "/user/profile",
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
                title: "My Transactions",
                url: "/user/my-transactions",
                component: MyTransactions
            },
            {
                title: "Add Money",
                url: "/user/add-money",
                component: AddMoney
            },
            {
                title: "Withdraw Money",
                url: "/user/withdraw-money",
                component: WithdrawMoney
            },
            {
                title: "Send Money",
                url: "/user/send-money",
                component: SendMoney
            },
            {
                title: "Cash Out",
                url: "/user/cash-out",
                component: CashOut
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