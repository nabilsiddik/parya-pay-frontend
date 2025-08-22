import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/ModeToggle"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
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
            <h1 className="font-bold text-2xl">Admin Dashboard</h1>
          </div>

          <div>
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
