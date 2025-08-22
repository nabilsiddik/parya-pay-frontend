import DashboardLoader from "@/components/DashboardLoader"
import UserDataTable from "@/components/data-tables/UserDataTable"
import { useGetAllUsersQuery } from "@/redux/features/user/user.api"

const AllUsers = () => {

    const {data: users, isLoading} = useGetAllUsersQuery(undefined)

    if(isLoading){
        return <DashboardLoader/>
    }

  return (
    <div>
        <UserDataTable users = {users.data}/>
    </div>
  )
}

export default AllUsers
