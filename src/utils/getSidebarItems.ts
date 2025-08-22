import { Role } from "@/constants/role";
import { adminSidebarRoutes } from "@/routes/adminSidebarRoutes";
import { agentSidebarRoutes } from "@/routes/agentSidebarRoutes";
import { userSidebarRoutes } from "@/routes/userSidebarRoutes";
import type { TRole } from "@/types";

export const getSidebarItem = (userRole: TRole) => {
    switch(userRole){
        case Role.ADMIN:
            return [...adminSidebarRoutes]
        case Role.USER:
            return [...userSidebarRoutes]
        case Role.AGENT:
            return [...agentSidebarRoutes]
        default:
            []
    }
}