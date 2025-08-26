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
import logo from '../assets/images/logo/logo.png'
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
        <Link className="group-data-[collapsible=icon]:hidden " to='/'>
          <div className='flex items-center gap-1'>
            <img src={logo} className='w-[40px] md:w-[60px]' alt="payra pay logo" />
            <h2 className='font-bold text-xl md:text-2xl mb-3 '>Payra Pay</h2>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={AdminSidebarMenu.navMain || []} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
