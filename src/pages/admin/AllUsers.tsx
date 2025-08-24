import DashboardLoader from "@/components/DashboardLoader"
import UserDataTable from "@/components/data-tables/UserDataTable"
import UserFilter from "@/components/UserFilter"
import { useGetAllUsersQuery } from "@/redux/features/user/user.api"
import { useSearchParams } from "react-router-dom"

const AllUsers = () => {
  const [searchParams] = useSearchParams()
  const selectedRole = searchParams.get('role') || undefined
  const selectedLimit = searchParams.get('limit') || undefined
  const selectedStatus = searchParams.get('status') || undefined
  const searchTerm = searchParams.get('searchTerm') || undefined

  const { data: users, isLoading } = useGetAllUsersQuery({ role: selectedRole, limit: selectedLimit, status: selectedStatus, searchTerm})

  if (isLoading) {
    return <DashboardLoader />
  }

  return (
    <div>
      <div className="mb-5">
        <UserFilter />
      </div>
      <UserDataTable users={users.data} />
    </div>
  )
}

export default AllUsers
