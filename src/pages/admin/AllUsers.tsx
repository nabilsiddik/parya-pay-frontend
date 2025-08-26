import DashboardLoader from "@/components/DashboardLoader"
import UserDataTable from "@/components/data-tables/UserDataTable"
import Paginate from "@/components/Paginate"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import UserFilter from "@/components/UserFilter"
import { useGetAllUsersQuery } from "@/redux/features/user/user.api"
import { Filter } from "lucide-react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const AllUsers = () => {
  const [page, setPage] = useState<number>(1)
  const [limit] = useState<number>(10)

  const [searchParams] = useSearchParams()
  const selectedRole = searchParams.get('role') || undefined
  const selectedLimit = searchParams.get('limit') || undefined
  const selectedStatus = searchParams.get('status') || undefined
  const searchTerm = searchParams.get('searchTerm') || undefined

  const { data: users, isLoading } = useGetAllUsersQuery({ role: selectedRole, limit: selectedLimit || limit, status: selectedStatus, searchTerm, page })

  const totalPage = users?.meta?.totalPage

  if (isLoading) {
    return <DashboardLoader />
  }

  return (
    <div>
      <div className="mb-5">

        <div className="hidden md:block mb-5">
          <UserFilter />
        </div>
        <div className="mb-5 flex justify-between items-center md:hidden">
          <h3 className="font-medium">Filter</h3>
          <DropdownMenu>
            <DropdownMenuTrigger><Filter /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <UserFilter />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <UserDataTable users={users.data} />
      <div className="mt-3 flex justify-end">
        <Paginate page={page} setPage={setPage} totalPage={totalPage} />
      </div>
    </div>
  )
}

export default AllUsers
