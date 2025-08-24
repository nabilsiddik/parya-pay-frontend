import { AppSidebar } from "@/components/app-sidebar"
import DashboardLoader from "@/components/DashboardLoader"
import { ModeToggle } from "@/components/ModeToggle"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Role } from "@/constants/role"
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api"
import { useGetSingleWalletQuery } from "@/redux/features/wallet/wallet.api"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {

  const {data: user} = useGetCurrentUserQuery(undefined)
  const {data: wallet} = useGetSingleWalletQuery(undefined)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 pr-5">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="font-bold text-2xl">Dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            {user?.data?.role === Role.AGENT || user?.data?.role === Role.USER && <div className="font-medium">{`Balance ${wallet?.data?.balance} Taka`}</div>}
            <ModeToggle/>
          </div>
        </header>
        <div className="p-5">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
