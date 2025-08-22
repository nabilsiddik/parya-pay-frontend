import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Logo from "./Logo"
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api"
import { Link } from "react-router-dom"
import { getSidebarItem } from "@/utils/getSidebarItems"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { data } = useGetCurrentUserQuery(undefined)

  // This is sample data.
  const AdminSidebarMenu = {
    navMain: getSidebarItem(data?.data?.role)
  }


  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="p-5">
        <Link to='/'>
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={AdminSidebarMenu.navMain || []} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
